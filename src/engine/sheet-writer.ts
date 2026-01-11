import { readFileSync } from "node:fs";
import type { Workbook, Worksheet } from "exceljs";
import { createBodyCellBorder, createHeaderCellBorder } from "../styles/converter";
import { mergeStyles } from "../styles/merger";
import type { TablePresetConfig } from "../styles/presets";
import { getPreset } from "../styles/presets";
import type { Column, LeafColumn } from "../types/column";
import { isLeafColumn } from "../types/column";
import type { ImageOptions } from "../types/image";
import type { BorderStyle, CellStyle, TableStyle } from "../types/style";
import type { TableOptions } from "../types/table";
import type { TextInput } from "../types/text";
import { isStyledCell } from "../types/text";
import type { Block, SheetState } from "../types/workbook";
import { isImageBlock, isSpaceBlock, isTableBlock, isTextBlock } from "../types/workbook";
import { flattenColumns } from "../utils/column";
import { getOrCreateRow, writeCell } from "./cell-writer";
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
  writeSheet(sheetState: SheetState): void {
    for (const block of sheetState.blocks) {
      this.writeBlock(block);
    }
  }

  /**
   * ブロックを書き込む
   */
  private writeBlock(block: Block): void {
    if (isTableBlock(block)) {
      this.writeTable(block.options);
    } else if (isTextBlock(block)) {
      this.writeText(block.input);
    } else if (isImageBlock(block)) {
      this.writeImage(block.options);
    } else if (isSpaceBlock(block)) {
      this.writeSpace(block.lines);
    }
  }

  /**
   * テーブルを書き込む
   */
  private writeTable<T>(options: TableOptions<T>): void {
    const { preset, columns, data, autoWidth, style, border } = options;

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
    const headerDepth = calculateHeaderDepth(columns);
    this.writeHeaders(columns, leafColumns, headerDepth, presetConfig, style, effectiveBorder);

    // データ行書き込み
    this.writeDataRows(leafColumns, data, presetConfig, style, effectiveBorder);
  }

  /**
   * ヘッダーを書き込む（マルチヘッダー対応）
   */
  private writeHeaders<T>(
    _columns: Column<T>[],
    leafColumns: LeafColumn<T>[],
    depth: number,
    presetConfig: TablePresetConfig | undefined,
    tableStyle: TableStyle | undefined,
    borderStyle: BorderStyle | undefined,
  ): void {
    // シンプルなケース（1階層）のみ実装
    if (depth === 1) {
      const row = getOrCreateRow(this.worksheet, this.currentRow);
      const colCount = leafColumns.length;

      for (let i = 0; i < colCount; i++) {
        const col = leafColumns[i];
        const cell = row.getCell(i + 1);

        // スタイルのカスケーディング
        const finalStyle = mergeStyles(presetConfig?.style?.header, col.style, tableStyle?.header);

        writeCell(cell, col.label, finalStyle);

        // 罫線を適用
        const border = createHeaderCellBorder(
          borderStyle,
          { isFirstCol: i === 0, isLastCol: i === colCount - 1 },
          true, // 1階層なので常に最後のヘッダー行
        );
        if (border) {
          cell.border = border;
        }
      }

      this.currentRow++;
    } else {
      // マルチヘッダーは後で実装
      throw new Error("マルチヘッダーは未実装です");
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
  ): void {
    const dataLength = data.length;
    const colCount = leafColumns.length;

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
      }

      this.currentRow++;
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
  private writeImage(options: ImageOptions): void {
    const { source, width = 100, height = 100, row, col = 0 } = options;

    // 画像ソースの処理
    let imageBuffer: Buffer;
    if (Buffer.isBuffer(source)) {
      imageBuffer = source;
    } else {
      // ファイルパスとして読み込み
      imageBuffer = readFileSync(source);
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

/**
 * カラムツリーの深さを計算
 */
function calculateHeaderDepth<T>(columns: Column<T>[]): number {
  let maxDepth = 1;

  for (const col of columns) {
    if (!isLeafColumn(col)) {
      const childDepth = calculateHeaderDepth(col.children);
      maxDepth = Math.max(maxDepth, childDepth + 1);
    }
  }

  return maxDepth;
}
