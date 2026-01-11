# Phase 5 詳細実装計画: Excel出力エンジン

## 概要

ExcelJSのストリーミングAPIを使用して、実際にExcelファイルを生成する。ブロック構造からExcelへの変換、スタイル適用、列幅計算、マージ処理を実装する。

## 参照ドキュメント

- [API実装計画](./2026-01-11_xlkit-api-implementation-plan.md)
- [Phase 3 詳細計画](./2026-01-10_phase3-detailed-plan.md)
- [Phase 4 詳細計画](./2026-01-10_phase4-detailed-plan.md)
- [API設計書](../spec/2026-01-11_xlkit-api-design.md)

## 前提条件

Phase 1-4が完了していること:
- 型定義、スキーマ、コアビルダー、スタイル処理が実装済み

---

## Phase 5: Excel出力エンジン

### 目的

- ExcelJSのストリーミングAPIでExcelファイル生成
- ブロック（table, text, image, space）をExcelに書き込み
- スタイルのカスケーディング適用
- 列幅の自動計算
- ブラウザ/Node.js両対応の出力

### 実装ファイル

```
src/engine/
├── writer.ts           # WorkbookWriter ラッパー
├── sheet-writer.ts     # シート書き込み（ブロック処理）
├── cell-writer.ts      # セル書き込み・マージ処理
└── width-calculator.ts # 列幅自動計算

src/output/
├── browser.ts          # ブラウザ向け出力
└── node.ts             # Node.js向け出力
```

---

## 5.1 `src/engine/width-calculator.ts`

### 目的

セルの内容から列幅を自動計算する。全角/半角を考慮した幅計算を行う。

### 実装内容

```typescript
/**
 * テキストの幅を計算（文字数ベース）
 * 全角文字: 2幅、半角文字: 1幅
 */
export function calculateTextWidth(text: string): number {
  let width = 0;

  for (const char of text) {
    const code = char.charCodeAt(0);

    // 全角文字の判定
    const isFullWidth =
      (code >= 0x3000 && code <= 0x9fff) || // CJK統合漢字、ひらがな、カタカナ
      (code >= 0xff00 && code <= 0xffef);   // 全角英数字

    width += isFullWidth ? 2 : 1;
  }

  return width;
}

/**
 * 値から表示幅を計算（ExcelJS単位）
 */
export function calculateCellWidth(value: unknown): number {
  // null, undefined
  if (value == null) return 0;

  // 文字列
  if (typeof value === "string") {
    const textWidth = calculateTextWidth(value);
    // ExcelJSの列幅単位に変換（1文字 ≒ 1.2単位 + パディング）
    return textWidth * 1.2 + 2;
  }

  // 数値
  if (typeof value === "number") {
    const str = value.toString();
    return calculateTextWidth(str) * 1.2 + 2;
  }

  // 真偽値
  if (typeof value === "boolean") {
    return 6;  // "TRUE" or "FALSE"
  }

  // その他
  return 10;  // デフォルト幅
}

/**
 * 列ごとの最大幅を計算
 * @param columnCount 列数
 * @param rows 行データ配列
 */
export function calculateColumnWidths(
  columnCount: number,
  rows: unknown[][]
): number[] {
  const widths = new Array(columnCount).fill(0);

  for (const row of rows) {
    for (let col = 0; col < columnCount; col++) {
      const cellValue = row[col];
      const width = calculateCellWidth(cellValue);

      // 最大幅を保持
      if (width > widths[col]) {
        widths[col] = width;
      }
    }
  }

  // 最小幅と最大幅を設定
  return widths.map((w) => Math.max(8, Math.min(w, 60)));
}
```

### 実装上の注意

**全角/半角の判定**:
- Unicode範囲で判定
- `0x3000-0x9fff`: CJK統合漢字、ひらがな、カタカナ
- `0xff00-0xffef`: 全角英数字

**ExcelJS単位への変換**:
- 1文字 ≒ 1.2 ExcelJS単位
- パディング +2 を追加

**幅の制限**:
- 最小幅: 8（狭すぎる列を防ぐ）
- 最大幅: 60（広すぎる列を防ぐ）

**autoWidth オプションとの連携**:
- `autoWidth: "all"` → ヘッダー + データ行の両方を考慮
- `autoWidth: "body"` → データ行のみを考慮
- `autoWidth: false` → 幅計算しない（ExcelJSのデフォルト）

### テスト方針

```typescript
// src/engine/width-calculator.test.ts
import { describe, expect, it } from "vitest";
import { calculateTextWidth, calculateCellWidth, calculateColumnWidths } from "./width-calculator";

describe("calculateTextWidth", () => {
  it("should calculate width for ASCII characters", () => {
    expect(calculateTextWidth("hello")).toBe(5);  // 半角5文字
  });

  it("should calculate width for full-width characters", () => {
    expect(calculateTextWidth("こんにちは")).toBe(10);  // 全角5文字 = 10幅
  });

  it("should calculate width for mixed characters", () => {
    expect(calculateTextWidth("Hello世界")).toBe(9);  // 半角5 + 全角4 = 9
  });

  it("should return 0 for empty string", () => {
    expect(calculateTextWidth("")).toBe(0);
  });
});

describe("calculateCellWidth", () => {
  it("should calculate width for string", () => {
    const width = calculateCellWidth("hello");
    expect(width).toBeCloseTo(8, 1);  // 5 * 1.2 + 2 = 8
  });

  it("should calculate width for number", () => {
    const width = calculateCellWidth(12345);
    expect(width).toBeCloseTo(8, 1);  // 5 * 1.2 + 2 = 8
  });

  it("should calculate width for boolean", () => {
    expect(calculateCellWidth(true)).toBe(6);
    expect(calculateCellWidth(false)).toBe(6);
  });

  it("should return 0 for null/undefined", () => {
    expect(calculateCellWidth(null)).toBe(0);
    expect(calculateCellWidth(undefined)).toBe(0);
  });
});

describe("calculateColumnWidths", () => {
  it("should calculate max width for each column", () => {
    const rows = [
      ["名前", "年齢", "住所"],
      ["太郎", 30, "東京都"],
      ["花子", 25, "大阪府"],
    ];

    const widths = calculateColumnWidths(3, rows);
    expect(widths.length).toBe(3);
    expect(widths[0]).toBeGreaterThan(0);
    expect(widths[1]).toBeGreaterThan(0);
    expect(widths[2]).toBeGreaterThan(0);
  });

  it("should apply min/max constraints", () => {
    const rows = [
      ["A", "B".repeat(100)],  // 1文字 vs 100文字
    ];

    const widths = calculateColumnWidths(2, rows);
    expect(widths[0]).toBe(8);   // 最小幅
    expect(widths[1]).toBe(60);  // 最大幅
  });

  it("should handle empty rows", () => {
    const widths = calculateColumnWidths(3, []);
    expect(widths).toEqual([8, 8, 8]);  // すべて最小幅
  });
});
```

---

## 5.2 `src/engine/cell-writer.ts`

### 目的

セルへの書き込みとマージ処理を行う。

### 実装内容

```typescript
import type { Worksheet, Row, Cell } from "exceljs";
import type { CellStyle } from "../types/style";
import { convertToExcelJSStyle } from "../styles/converter";

/**
 * セルに値とスタイルを設定
 */
export function writeCell(
  cell: Cell,
  value: unknown,
  style?: CellStyle
): void {
  // 値を設定
  cell.value = value as CellValue;

  // スタイルを適用
  if (style) {
    const excelStyle = convertToExcelJSStyle(style);
    cell.style = excelStyle;
  }
}

/**
 * セル範囲をマージ
 * @param worksheet ワークシート
 * @param startRow 開始行（1-indexed）
 * @param startCol 開始列（1-indexed）
 * @param endRow 終了行（1-indexed）
 * @param endCol 終了列（1-indexed）
 */
export function mergeCells(
  worksheet: Worksheet,
  startRow: number,
  startCol: number,
  endRow: number,
  endCol: number
): void {
  worksheet.mergeCells(startRow, startCol, endRow, endCol);
}

/**
 * 行を作成して返す（存在する場合は既存の行を返す）
 */
export function getOrCreateRow(worksheet: Worksheet, rowNumber: number): Row {
  let row = worksheet.getRow(rowNumber);
  if (!row) {
    row = worksheet.addRow([]);
  }
  return row;
}

/**
 * セル参照（A1形式）を取得
 */
export function getCellAddress(row: number, col: number): string {
  const colLetter = numberToColumnLetter(col);
  return `${colLetter}${row}`;
}

/**
 * 列番号をA1形式の列名に変換（1 → A, 2 → B, ...）
 */
function numberToColumnLetter(num: number): string {
  let letter = "";
  let n = num;

  while (n > 0) {
    const remainder = (n - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    n = Math.floor((n - 1) / 26);
  }

  return letter;
}
```

### 実装上の注意

**セルの値の型**:
- ExcelJSは `string | number | boolean | Date | null` を受け付ける
- `as CellValue` でキャスト（ExcelJSのCellValue型を使用）

**マージの座標系**:
- ExcelJSは1-indexed（1行目、1列目から始まる）
- `worksheet.mergeCells(startRow, startCol, endRow, endCol)` で範囲指定

**列番号の変換**:
- `1 → A`, `2 → B`, ..., `26 → Z`, `27 → AA`
- 26進数の変換アルゴリズム

### テスト方針

```typescript
// src/engine/cell-writer.test.ts
import { describe, expect, it } from "vitest";
import { getCellAddress } from "./cell-writer";

describe("getCellAddress", () => {
  it("should convert row/col to A1 notation", () => {
    expect(getCellAddress(1, 1)).toBe("A1");
    expect(getCellAddress(1, 2)).toBe("B1");
    expect(getCellAddress(2, 1)).toBe("A2");
    expect(getCellAddress(10, 5)).toBe("E10");
  });

  it("should handle columns beyond Z", () => {
    expect(getCellAddress(1, 27)).toBe("AA1");
    expect(getCellAddress(1, 28)).toBe("AB1");
    expect(getCellAddress(1, 52)).toBe("AZ1");
    expect(getCellAddress(1, 53)).toBe("BA1");
  });
});

// writeCell, mergeCells等はExcelJSのモックが必要なため、結合テストで検証
```

---

## 5.3 `src/engine/sheet-writer.ts`

### 目的

シート単位でブロック（table, text, image, space）を処理して書き込む。

### 実装内容

```typescript
import type { Worksheet } from "exceljs";
import type { SheetState, Block } from "../types/workbook";
import type { TableOptions } from "../types/table";
import type { TextInput } from "../types/text";
import type { ImageOptions } from "../types/image";
import type { Column, LeafColumn } from "../types/column";
import { isTableBlock, isTextBlock, isImageBlock, isSpaceBlock } from "../types/workbook";
import { isLeafColumn } from "../types/column";
import { isStyledCell } from "../types/text";
import { getPreset } from "../styles/presets";
import { mergeStyles } from "../styles/merger";
import { writeCell, mergeCells, getOrCreateRow } from "./cell-writer";
import { calculateColumnWidths } from "./width-calculator";

/**
 * シートにブロックを書き込む
 */
export class SheetWriter {
  private worksheet: Worksheet;
  private currentRow: number;

  constructor(worksheet: Worksheet) {
    this.worksheet = worksheet;
    this.currentRow = 1;  // 1行目から開始（1-indexed）
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
    const { preset, columns, data, autoWidth, style, border, conditionalStyle } = options;

    // プリセット取得
    const presetConfig = preset ? getPreset(preset) : undefined;

    // リーフカラムをフラット化
    const leafColumns = flattenColumns(columns);
    const columnCount = leafColumns.length;

    // 列幅計算
    if (autoWidth && autoWidth !== false) {
      this.setColumnWidths(leafColumns, data, autoWidth);
    }

    // ヘッダー書き込み（マルチヘッダー対応）
    const headerDepth = calculateHeaderDepth(columns);
    this.writeHeaders(columns, leafColumns, headerDepth, presetConfig, style);

    // データ行書き込み
    this.writeDataRows(leafColumns, data, presetConfig, style, conditionalStyle);

    // 罫線を適用
    if (border || presetConfig?.border) {
      const finalBorder = border || presetConfig!.border;
      this.applyBorders(this.currentRow - data.length - headerDepth, this.currentRow - 1, columnCount, finalBorder);
    }
  }

  /**
   * ヘッダーを書き込む（マルチヘッダー対応）
   */
  private writeHeaders<T>(
    _columns: Column<T>[],
    leafColumns: LeafColumn<T>[],
    depth: number,
    presetConfig: TablePresetConfig | undefined,
    tableStyle: TableStyle | undefined
  ): void {
    // TODO: マルチヘッダーの詳細実装（再帰的な処理）
    // シンプルなケース（1階層）のみ実装
    if (depth === 1) {
      const row = getOrCreateRow(this.worksheet, this.currentRow);

      for (let i = 0; i < leafColumns.length; i++) {
        const col = leafColumns[i];
        const cell = row.getCell(i + 1);

        // スタイルのカスケーディング
        const finalStyle = mergeStyles(
          presetConfig?.style?.header,
          col.style,
          tableStyle?.header
        );

        writeCell(cell, col.label, finalStyle);
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
    tableStyle: TableStyle | undefined
  ): void {
    for (const [rowIndex, rowData] of data.entries()) {
      const row = getOrCreateRow(this.worksheet, this.currentRow);

      for (let colIndex = 0; colIndex < leafColumns.length; colIndex++) {
        const col = leafColumns[colIndex];
        const cell = row.getCell(colIndex + 1);
        const value = rowData[col.key];

        // スタイルのカスケーディング
        const baseStyle = presetConfig?.style?.body;
        const columnStyle = col.style;
        const rowStyle = tableStyle?.body;
        const condStyle = conditionalStyle?.(rowData, col.key) || {};
        const cellStyle = rowData._style?.[col.key];

        // ストライプ
        const isOddRow = rowIndex % 2 === 0;
        const stripeStyle = isOddRow && presetConfig?.stripedRowColor
          ? { fill: presetConfig.stripedRowColor }
          : undefined;

        const finalStyle = mergeStyles(
          baseStyle,
          stripeStyle,
          columnStyle,
          rowStyle,
          condStyle,
          cellStyle
        );

        writeCell(cell, value, finalStyle);
      }

      this.currentRow++;
    }
  }

  /**
   * 列幅を設定
   */
  private setColumnWidths<T>(
    leafColumns: LeafColumn<T>[],
    data: T[],
    autoWidth: "all" | "body"
  ): void {
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
   * 罫線を適用
   */
  private applyBorders(
    startRow: number,
    endRow: number,
    columnCount: number,
    border: BorderStyle | undefined
  ): void {
    // TODO: 罫線の詳細実装
    // ExcelJSの罫線APIを使用して、指定範囲に罫線を適用
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
    // TODO: 画像の実装
    // ExcelJSの addImage() を使用
    this.currentRow++;  // 仮実装
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

/**
 * カラムツリーをフラット化（リーフカラムのみ抽出）
 */
function flattenColumns<T>(columns: Column<T>[]): LeafColumn<T>[] {
  const result: LeafColumn<T>[] = [];

  for (const col of columns) {
    if (isLeafColumn(col)) {
      result.push(col);
    } else {
      result.push(...flattenColumns(col.children));
    }
  }

  return result;
}
```

### 実装上の注意

**ストリーミングの制約**:
- ExcelJSのストリーミングでは、行を追加した後に前の行に戻れない
- `currentRow` で現在の書き込み位置を管理

**マルチヘッダーの実装**:
- Phase 5では1階層のみ実装
- 2階層以上は将来の拡張として `throw new Error()`

**スタイルのカスケーディング**:
- Phase 4で実装した `mergeStyles()` を使用
- 優先度順にマージ

**ストライプの実装**:
- `rowIndex % 2 === 0` で奇数行を判定
- `presetConfig.stripedRowColor` があればマージ

### テスト方針

- 結合テストで検証（実際にExcelを生成して読み取り）

---

## 5.4 `src/engine/writer.ts`

### 目的

ExcelJS WorkbookWriter のラッパー。ワークブック全体の書き込みを管理。

### 実装内容

```typescript
import ExcelJS from "exceljs";
import type { WorkbookState } from "../types/workbook";
import { SheetWriter } from "./sheet-writer";

/**
 * ワークブックを書き込む
 * @param state ワークブック状態
 * @returns ExcelJSのWorkbookオブジェクト
 */
export async function writeWorkbook(state: WorkbookState): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();

  for (const sheetState of state.sheets) {
    const worksheet = workbook.addWorksheet(sheetState.name);
    const writer = new SheetWriter(worksheet);
    writer.writeSheet(sheetState);
  }

  return workbook;
}
```

### 実装上の注意

**ストリーミング vs 非ストリーミング**:
- Phase 5では非ストリーミング（`ExcelJS.Workbook`）を使用
- ストリーミング（`WorkbookWriter`）は大規模データ対応時に実装

**シートの追加順序**:
- `state.sheets` の順序でシートを追加
- ExcelJSは追加順にシートを配置

---

## 5.5 `src/output/node.ts`

### 目的

Node.js環境での出力（ファイル保存、Buffer取得）。

### 実装内容

```typescript
import type ExcelJS from "exceljs";
import * as fs from "node:fs/promises";

export class NodeOutput {
  constructor(private workbook: ExcelJS.Workbook) {}

  /**
   * ファイルに保存
   */
  async saveToFile(filePath: string): Promise<void> {
    await this.workbook.xlsx.writeFile(filePath);
  }

  /**
   * Bufferとして取得
   */
  async toBuffer(): Promise<Buffer> {
    const buffer = await this.workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
  }
}
```

---

## 5.6 `src/output/browser.ts`

### 目的

ブラウザ環境での出力（ダウンロード）。

### 実装内容

```typescript
import type ExcelJS from "exceljs";

export class BrowserOutput {
  constructor(private workbook: ExcelJS.Workbook) {}

  /**
   * ブラウザでダウンロード
   */
  async download(fileName: string): Promise<void> {
    const buffer = await this.workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
  }
}
```

---

## 5.7 WorkbookBuilderの更新

Phase 3で仮実装した `.browser` / `.node` プロパティを実装する。

```typescript
// src/core/workbook-builder.ts
import { writeWorkbook } from "../engine/writer";
import { NodeOutput } from "../output/node";
import { BrowserOutput } from "../output/browser";

export class WorkbookBuilder {
  // ...

  get browser() {
    const workbook = await writeWorkbook(this.state);
    return new BrowserOutput(workbook);
  }

  get node() {
    const workbook = await writeWorkbook(this.state);
    return new NodeOutput(workbook);
  }
}
```

**問題**: `get` アクセサは `async` にできない

**解決策**: メソッドに変更

```typescript
async getBrowser() {
  const workbook = await writeWorkbook(this.state);
  return new BrowserOutput(workbook);
}

async getNode() {
  const workbook = await writeWorkbook(this.state);
  return new NodeOutput(workbook);
}
```

**使用例**:
```typescript
const browser = await xlkit().sheet("Test").getBrowser();
await browser.download("test.xlsx");

const node = await xlkit().sheet("Test").getNode();
await node.saveToFile("test.xlsx");
```

---

## Phase 5 完了条件

### 実装チェックリスト

- [ ] `src/engine/width-calculator.ts` を実装
- [ ] `src/engine/width-calculator.test.ts` を実装
- [ ] `src/engine/cell-writer.ts` を実装
- [ ] `src/engine/cell-writer.test.ts` を実装
- [ ] `src/engine/sheet-writer.ts` を実装（1階層ヘッダーのみ）
- [ ] `src/engine/writer.ts` を実装
- [ ] `src/output/node.ts` を実装
- [ ] `src/output/browser.ts` を実装
- [ ] `src/core/workbook-builder.ts` を更新（`.getBrowser()`, `.getNode()`）
- [ ] 結合テスト実装（生成 → 読み取り → 検証）

### 検証コマンド

```bash
pnpm type-check
pnpm lint
pnpm test
```

---

## 次のステップ

Phase 6（読み取りAPI）に進む。
