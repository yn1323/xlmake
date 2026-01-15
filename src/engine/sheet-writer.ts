import type { Workbook, Worksheet } from "exceljs";
import { createBodyCellBorder, createHeaderCellBorder } from "../styles/converter";
import { mergeStyles } from "../styles/merger";
import type { TablePresetConfig } from "../styles/presets";
import { getPreset } from "../styles/presets";
import type { Column, LeafColumn } from "../types/column";
import type { ImageOptions } from "../types/image";
import type { BorderStyle, CellStyle, TableStyle } from "../types/style";
import type { TableOptions } from "../types/table";
import type { TextInput } from "../types/text";
import { isStyledCell } from "../types/text";
import type { Block, SheetState } from "../types/workbook";
import { isImageBlock, isSpaceBlock, isTableBlock, isTextBlock } from "../types/workbook";
import { isBuffer, isUrl } from "../utils/buffer";
import { buildHeaderRows, flattenColumns, getHeaderDepth } from "../utils/column";
import { getOrCreateRow, mergeCells, writeCell } from "./cell-writer";
import { calculateColumnWidths } from "./width-calculator";

/**
 * シートにブロックを書き込む
 */
export class SheetWriter {
  private workbook: Workbook;
  private worksheet: Worksheet;
  private currentRow: number;

  constructor(workbook: Workbook, worksheet: Worksheet) {
    this.workbook = workbook;
    this.worksheet = worksheet;
    this.currentRow = 1; // 1行目から開始（1-indexed）
  }

  /**
   * SheetStateを書き込む
   */
  async writeSheet(sheetState: SheetState): Promise<void> {
    for (const block of sheetState.blocks) {
      await this.writeBlock(block);
    }
  }

  /**
   * ブロックを書き込む
   */
  private async writeBlock(block: Block): Promise<void> {
    if (isTableBlock(block)) {
      this.writeTable(block.options);
    } else if (isTextBlock(block)) {
      this.writeText(block.input);
    } else if (isImageBlock(block)) {
      await this.writeImage(block.options);
    } else if (isSpaceBlock(block)) {
      this.writeSpace(block.lines);
    }
  }

  /**
   * テーブルを書き込む
   */
  private writeTable<T>(options: TableOptions<T>): void {
    const { preset, columns, data, autoWidth, style, border, mergeSameValues } = options;

    // プリセット取得
    const presetConfig = preset ? getPreset(preset) : undefined;

    // 罫線の優先度: options.border > presetConfig.border
    const effectiveBorder = border ?? presetConfig?.border;

    // リーフカラムをフラット化
    const leafColumns = flattenColumns(columns);

    // 列幅計算
    if (autoWidth !== false && autoWidth !== undefined) {
      this.setColumnWidths(leafColumns, data, autoWidth);
    }

    // ヘッダー書き込み（マルチヘッダー対応）
    const headerDepth = getHeaderDepth(columns);
    this.writeHeaders(columns, leafColumns, headerDepth, presetConfig, style, effectiveBorder);

    // データ行書き込み
    this.writeDataRows(leafColumns, data, presetConfig, style, effectiveBorder, mergeSameValues);
  }

  /**
   * ヘッダーを書き込む（マルチヘッダー対応）
   */
  private writeHeaders<T>(
    columns: Column<T>[],
    leafColumns: LeafColumn<T>[],
    depth: number,
    presetConfig: TablePresetConfig | undefined,
    tableStyle: TableStyle | undefined,
    borderStyle: BorderStyle | undefined,
  ): void {
    const headerRows = buildHeaderRows(columns, depth);
    const colCount = leafColumns.length;
    const startRow = this.currentRow;

    // 各ヘッダー行を書き込む
    for (let rowIndex = 0; rowIndex < headerRows.length; rowIndex++) {
      const headerRow = headerRows[rowIndex];
      const row = getOrCreateRow(this.worksheet, this.currentRow);

      for (const headerCell of headerRow) {
        const colPosition = headerCell.startCol;
        const cell = row.getCell(colPosition);

        // スタイルのカスケーディング
        const finalStyle = mergeStyles(presetConfig?.style?.header, headerCell.style, tableStyle?.header);

        writeCell(cell, headerCell.label, finalStyle);

        // マージ処理
        if (headerCell.colSpan > 1 || headerCell.rowSpan > 1) {
          const endCol = colPosition + headerCell.colSpan - 1;
          const endRow = this.currentRow + headerCell.rowSpan - 1;
          mergeCells(this.worksheet, this.currentRow, colPosition, endRow, endCol);
        }

        // 罫線を適用（マージされたセルの左上に設定）
        const isLastHeaderRow = rowIndex === headerRows.length - 1;
        const border = createHeaderCellBorder(
          borderStyle,
          {
            isFirstCol: colPosition === 1,
            isLastCol: colPosition + headerCell.colSpan - 1 === colCount,
            isFirstRow: rowIndex === 0,
          },
          isLastHeaderRow && headerCell.rowSpan === 1,
        );
        if (border) {
          cell.border = border;
        }
      }

      this.currentRow++;
    }

    // マージされたセルの罫線を補完（rowSpan > 1 のセルの下端）
    this.applyMergedCellBorders(headerRows, startRow, colCount, borderStyle);
  }

  /**
   * マージされたセルの罫線を補完
   */
  private applyMergedCellBorders(
    headerRows: ReturnType<typeof buildHeaderRows>,
    startRow: number,
    colCount: number,
    borderStyle: BorderStyle | undefined,
  ): void {
    const totalRows = headerRows.length;

    for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
      const headerRow = headerRows[rowIndex];

      for (const headerCell of headerRow) {
        // rowSpan > 1 のセルは、マージ範囲の最後の行に罫線を適用
        if (headerCell.rowSpan > 1) {
          const colPosition = headerCell.startCol;
          const lastRowOfMerge = startRow + rowIndex + headerCell.rowSpan - 1;
          const isLastHeaderRow = lastRowOfMerge === startRow + totalRows - 1;

          // マージ範囲内の各列に罫線を設定（見える辺のみ）
          for (let col = colPosition; col < colPosition + headerCell.colSpan; col++) {
            const targetCell = this.worksheet.getCell(lastRowOfMerge, col);
            const border = createHeaderCellBorder(
              borderStyle,
              {
                isFirstCol: col === 1,
                isLastCol: col === colCount,
                isFirstRow: false, // マージ補完は常に2行目以降
              },
              isLastHeaderRow,
            );
            if (border) {
              // top は見えない辺なので削除（マージ範囲の内部）
              delete border.top;
              if (Object.keys(border).length > 0) {
                // 既存の罫線設定を保持しつつ、必要な辺のみ追加
                targetCell.border = { ...targetCell.border, ...border };
              }
            }
          }
        }
      }
    }
  }

  /**
   * データ行を書き込む
   */
  private writeDataRows<T>(
    leafColumns: LeafColumn<T>[],
    data: (T & { _style?: Partial<Record<keyof T, CellStyle>> })[],
    presetConfig: TablePresetConfig | undefined,
    tableStyle: TableStyle | undefined,
    borderStyle: BorderStyle | undefined,
    tableMergeSameValues?: boolean,
  ): void {
    const dataLength = data.length;
    const colCount = leafColumns.length;
    const startRow = this.currentRow;

    // マージ範囲を記録: 各列ごとに { startRow, endRow, value } のリスト
    const mergeRanges: { colIndex: number; startRow: number; endRow: number }[][] = leafColumns.map(() => []);

    // 各列でマージが有効かどうかを判定
    const shouldMergeColumn = leafColumns.map((col) => tableMergeSameValues === true || col.mergeSameValues === true);

    // マージ範囲をトラッキングするための変数
    const currentMergeStart: number[] = leafColumns.map(() => 0);
    const currentMergeValue: unknown[] = leafColumns.map(() => undefined);

    for (const [rowIndex, rowData] of data.entries()) {
      const row = getOrCreateRow(this.worksheet, this.currentRow);

      for (let colIndex = 0; colIndex < colCount; colIndex++) {
        const col = leafColumns[colIndex];
        const cell = row.getCell(colIndex + 1);
        const value = rowData[col.key];

        // スタイルのカスケーディング
        const baseStyle = presetConfig?.style?.body;
        const columnStyle = col.style;
        const rowStyle = tableStyle?.body;
        const cellStyle = rowData._style?.[col.key];

        // ストライプ
        const isOddRow = rowIndex % 2 === 0;
        const stripeStyle =
          isOddRow && presetConfig?.stripedRowColor ? { fill: presetConfig.stripedRowColor } : undefined;

        const finalStyle = mergeStyles(baseStyle, stripeStyle, columnStyle, rowStyle, cellStyle);

        writeCell(cell, value, finalStyle);

        // 罫線を適用
        const border = createBodyCellBorder(borderStyle, {
          isFirstCol: colIndex === 0,
          isLastCol: colIndex === colCount - 1,
          isFirstRow: rowIndex === 0,
          isLastRow: rowIndex === dataLength - 1,
        });
        if (border) {
          cell.border = border;
        }

        // マージ範囲のトラッキング
        if (shouldMergeColumn[colIndex]) {
          if (rowIndex === 0) {
            // 最初の行：開始位置を記録
            currentMergeStart[colIndex] = rowIndex;
            currentMergeValue[colIndex] = value;
          } else if (value !== currentMergeValue[colIndex]) {
            // 値が変わった：前のマージ範囲を確定
            const start = currentMergeStart[colIndex];
            if (rowIndex - 1 > start) {
              mergeRanges[colIndex].push({
                colIndex,
                startRow: startRow + start,
                endRow: startRow + rowIndex - 1,
              });
            }
            // 新しいマージ範囲を開始
            currentMergeStart[colIndex] = rowIndex;
            currentMergeValue[colIndex] = value;
          }
          // 最後の行：現在のマージ範囲を確定
          if (rowIndex === dataLength - 1) {
            const start = currentMergeStart[colIndex];
            if (rowIndex > start) {
              mergeRanges[colIndex].push({
                colIndex,
                startRow: startRow + start,
                endRow: startRow + rowIndex,
              });
            }
          }
        }
      }

      this.currentRow++;
    }

    // マージを適用
    for (let colIndex = 0; colIndex < colCount; colIndex++) {
      for (const range of mergeRanges[colIndex]) {
        mergeCells(this.worksheet, range.startRow, colIndex + 1, range.endRow, colIndex + 1);

        // マージされたセルに自動で上寄せを適用
        const topLeftCell = this.worksheet.getCell(range.startRow, colIndex + 1);
        const existingHorizontal = topLeftCell.alignment?.horizontal ?? "left";
        topLeftCell.alignment = {
          ...topLeftCell.alignment,
          horizontal: existingHorizontal,
          vertical: "top",
        };
      }
    }

    // マージセルの罫線を補完
    this.applyBodyMergedCellBorders(mergeRanges, colCount, dataLength, startRow, borderStyle);
  }

  /**
   * ボディのマージセルの罫線を補完
   * マージ範囲内の各行に「見える辺のみ」罫線を設定
   */
  private applyBodyMergedCellBorders(
    mergeRanges: { colIndex: number; startRow: number; endRow: number }[][],
    colCount: number,
    dataLength: number,
    dataStartRow: number,
    borderStyle: BorderStyle | undefined,
  ): void {
    if (!borderStyle) return;

    for (let colIndex = 0; colIndex < colCount; colIndex++) {
      for (const range of mergeRanges[colIndex]) {
        // マージ範囲の各行に罫線を設定（見える辺のみ）
        for (let row = range.startRow; row <= range.endRow; row++) {
          const cell = this.worksheet.getCell(row, colIndex + 1);
          const isLastRow = row === dataStartRow + dataLength - 1;
          const isFirstRowOfMerge = row === range.startRow;
          const isLastRowOfMerge = row === range.endRow;

          const border = createBodyCellBorder(borderStyle, {
            isFirstCol: colIndex === 0,
            isLastCol: colIndex === colCount - 1,
            isFirstRow: row === dataStartRow,
            isLastRow: isLastRow,
          });

          if (border) {
            // マージ範囲内で見えない辺を削除
            if (!isFirstRowOfMerge) {
              delete border.top; // マージ範囲の最初の行以外は top が見えない
            }
            if (!isLastRowOfMerge) {
              delete border.bottom; // マージ範囲の最後の行以外は bottom が見えない
            }

            if (Object.keys(border).length > 0) {
              // 既存の罫線設定を保持しつつ、必要な辺のみ追加
              cell.border = { ...cell.border, ...border };
            }
          }
        }
      }
    }
  }

  /**
   * 列幅を設定
   */
  private setColumnWidths<T>(leafColumns: LeafColumn<T>[], data: T[], autoWidth: "all" | "body"): void {
    const rows: unknown[][] = [];

    // ヘッダー行
    if (autoWidth === "all") {
      rows.push(leafColumns.map((col) => col.label));
    }

    // データ行
    for (const rowData of data) {
      const row = leafColumns.map((col) => rowData[col.key]);
      rows.push(row);
    }

    // 幅を計算
    const widths = calculateColumnWidths(leafColumns.length, rows);

    // 列幅を設定
    for (let i = 0; i < widths.length; i++) {
      this.worksheet.getColumn(i + 1).width = widths[i];
    }
  }

  /**
   * テキストを書き込む
   */
  private writeText(input: TextInput): void {
    const row = getOrCreateRow(this.worksheet, this.currentRow);
    const cell = row.getCell(1);

    if (isStyledCell(input)) {
      writeCell(cell, input.value, input.style);
    } else {
      writeCell(cell, input);
    }

    this.currentRow++;
  }

  /**
   * 画像を書き込む
   */
  private async writeImage(options: ImageOptions): Promise<void> {
    const { source, width = 100, height = 100, row, col = 0 } = options;

    // 画像ソースの処理
    let imageBuffer: Buffer | ArrayBuffer;

    if (isBuffer(source)) {
      // Node.js Buffer
      imageBuffer = source;
    } else if (isUrl(source)) {
      // URL - fetch APIで取得（ブラウザ・Node.js両対応）
      const response = await fetch(source);
      imageBuffer = await response.arrayBuffer();
    } else {
      // ファイルパスとして読み込み（Node.js環境のみ）
      if (typeof window !== "undefined") {
        throw new Error("File path is not supported in browser. Use URL or Buffer.");
      }
      // Node.js環境での動的require
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const fs = require("node:fs") as typeof import("node:fs");
      imageBuffer = fs.readFileSync(source);
    }

    // ExcelJSで画像追加（ExcelJSの型定義との互換性のためキャスト）
    const imageId = this.workbook.addImage({
      buffer: imageBuffer,
      extension: "png",
    } as unknown as Parameters<typeof this.workbook.addImage>[0]);

    // 配置位置（row指定がなければ現在行を使用）
    const targetRow = row ?? this.currentRow;

    this.worksheet.addImage(imageId, {
      tl: { col, row: targetRow - 1 }, // 0-indexedに変換
      ext: { width, height },
    });

    // 行位置の更新（画像の高さに応じて概算、約20pxで1行）
    const rowsToSkip = Math.ceil(height / 20);
    this.currentRow += rowsToSkip;
  }

  /**
   * 空行を追加
   */
  private writeSpace(lines: number): void {
    this.currentRow += lines;
  }
}
