# Phase 6 詳細実装計画: 読み取りAPI

## 概要

xlkit.read() APIを実装する。主な用途は結合テストでの検証（生成したExcelファイルが意図どおりか確認）。セルの値、スタイル、マージ情報、シート名を読み取る機能を提供する。

## 参照ドキュメント

- [API実装計画](./2026-01-11_xlkit-api-implementation-plan.md)
- [設計骨子](../spec/2026-01-06_xlkit-design.md)
- [API設計書](../spec/2026-01-11_xlkit-api-design.md)

## 前提条件

Phase 1-5が完了していること:
- 型定義、スキーマ、コアビルダー、スタイル処理、Excel出力が実装済み

---

## Phase 6: 読み取りAPI

### 目的

- 生成したExcelファイルを読み取る
- テストでの検証に使用
- シンプルで直感的なAPI

### 主な用途

**結合テストでの検証例**:
```typescript
// Excelを生成
const buffer = await xlkit()
  .sheet("売上")
  .table({
    columns: [{ key: "name", label: "名前" }],
    data: [{ name: "太郎" }],
  })
  .getNode()
  .toBuffer();

// 読み取って検証
const workbook = await xlkit.read(buffer);
const sheet = workbook.sheet("売上");

expect(sheet.cell("A1").value).toBe("名前");
expect(sheet.cell("A2").value).toBe("太郎");
expect(sheet.cell("A1").style?.bold).toBe(true);
```

### 実装ファイル

```
src/reader/
├── workbook-reader.ts  # xlkit.read() + WorkbookReader
├── sheet-reader.ts     # SheetReader
└── cell-reader.ts      # CellReader
```

---

## 6.1 `src/reader/cell-reader.ts`

### 目的

セルの値とスタイルを読み取る。

### 実装内容

```typescript
import type { Cell } from "exceljs";
import type { CellStyle } from "../types/style";
import { argbToHex } from "../styles/converter";

/**
 * セルの値とスタイルを保持
 */
export class CellReader {
  constructor(private cell: Cell) {}

  /**
   * セルの値を取得
   */
  get value(): string | number | boolean | null {
    const val = this.cell.value;

    // リッチテキストの場合
    if (val && typeof val === "object" && "richText" in val) {
      return val.richText.map((rt: any) => rt.text).join("");
    }

    // 数式の場合（結果を返す）
    if (val && typeof val === "object" && "result" in val) {
      return val.result as any;
    }

    // プリミティブ値
    if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
      return val;
    }

    return null;
  }

  /**
   * セルのスタイルを取得
   */
  get style(): CellStyle | undefined {
    const cellStyle = this.cell.style;
    if (!cellStyle) return undefined;

    const xlkitStyle: CellStyle = {};

    // フォント
    if (cellStyle.font) {
      if (cellStyle.font.name) xlkitStyle.fontFamily = cellStyle.font.name;
      if (cellStyle.font.size) xlkitStyle.fontSize = cellStyle.font.size;
      if (cellStyle.font.bold) xlkitStyle.bold = true;
      if (cellStyle.font.italic) xlkitStyle.italic = true;
      if (cellStyle.font.underline) xlkitStyle.underline = true;
      if (cellStyle.font.strike) xlkitStyle.strike = true;

      // 色
      if (cellStyle.font.color?.argb) {
        xlkitStyle.color = argbToHex(cellStyle.font.color.argb);
      }
    }

    // 塗りつぶし
    if (cellStyle.fill?.type === "pattern" && cellStyle.fill.fgColor?.argb) {
      xlkitStyle.fill = argbToHex(cellStyle.fill.fgColor.argb);
    }

    // 配置
    if (cellStyle.alignment?.horizontal) {
      const align = cellStyle.alignment.horizontal;
      if (align === "left" || align === "center" || align === "right") {
        xlkitStyle.align = align;
      }
    }

    // 数値フォーマット
    if (cellStyle.numFmt) {
      xlkitStyle.format = this.detectFormat(cellStyle.numFmt);

      // 小数点以下の桁数を検出
      if (xlkitStyle.format === "number") {
        const match = cellStyle.numFmt.match(/\.(\d+)/);
        if (match) {
          xlkitStyle.decimalPlaces = match[1].length;
        }

        // 桁区切りカンマ
        if (cellStyle.numFmt.includes(",")) {
          xlkitStyle.thousandsSeparator = true;
        }
      }
    }

    return Object.keys(xlkitStyle).length > 0 ? xlkitStyle : undefined;
  }

  /**
   * 数値フォーマットから format を検出
   */
  private detectFormat(numFmt: string): "string" | "number" | "date" | undefined {
    if (numFmt === "@") return "string";
    if (numFmt.includes("yyyy") || numFmt.includes("mm") || numFmt.includes("dd")) {
      return "date";
    }
    if (numFmt.includes("#") || numFmt.includes("0")) {
      return "number";
    }
    return undefined;
  }
}
```

### 実装上の注意

**セルの値の型**:
- ExcelJSは複数の型を返す可能性がある
  - リッチテキスト: `{ richText: [...] }`
  - 数式: `{ formula: "...", result: ... }`
  - プリミティブ: `string | number | boolean`
- リッチテキストは連結して文字列として返す

**スタイルの変換**:
- ExcelJSのスタイルをxlkitの `CellStyle` に変換
- Phase 4で実装した `argbToHex()` を使用

**数値フォーマットの検出**:
- `@` → `"string"`
- `yyyy-mm-dd` → `"date"`
- `#,##0.00` → `"number"` + `decimalPlaces: 2` + `thousandsSeparator: true`

### テスト方針

```typescript
// src/reader/cell-reader.test.ts
import { describe, expect, it } from "vitest";
import ExcelJS from "exceljs";
import { CellReader } from "./cell-reader";

describe("CellReader", () => {
  it("should read cell value", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    const cell = worksheet.getCell("A1");
    cell.value = "Hello";

    const reader = new CellReader(cell);
    expect(reader.value).toBe("Hello");
  });

  it("should read cell style", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    const cell = worksheet.getCell("A1");
    cell.value = "Bold";
    cell.font = { bold: true, color: { argb: "FFFF0000" } };

    const reader = new CellReader(cell);
    expect(reader.style?.bold).toBe(true);
    expect(reader.style?.color).toBe("#FF0000");
  });

  it("should return null for empty cell", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    const cell = worksheet.getCell("A1");

    const reader = new CellReader(cell);
    expect(reader.value).toBeNull();
  });
});
```

---

## 6.2 `src/reader/sheet-reader.ts`

### 目的

シート単位でセルやマージ情報を読み取る。

### 実装内容

```typescript
import type { Worksheet } from "exceljs";
import { CellReader } from "./cell-reader";

/**
 * シートの読み取り
 */
export class SheetReader {
  constructor(private worksheet: Worksheet) {}

  /**
   * シート名を取得
   */
  get name(): string {
    return this.worksheet.name;
  }

  /**
   * セルを取得（A1形式）
   */
  cell(address: string): CellReader {
    const cell = this.worksheet.getCell(address);
    return new CellReader(cell);
  }

  /**
   * セルを取得（行・列番号）
   */
  cellAt(row: number, col: number): CellReader {
    const cell = this.worksheet.getCell(row, col);
    return new CellReader(cell);
  }

  /**
   * マージされたセル範囲を取得
   */
  get mergedCells(): string[] {
    // ExcelJSは "A1:B2" 形式の配列を返す
    return (this.worksheet as any)._merges?.map((m: any) => m) || [];
  }

  /**
   * 行数を取得
   */
  get rowCount(): number {
    return this.worksheet.rowCount;
  }

  /**
   * 列数を取得
   */
  get columnCount(): number {
    return this.worksheet.columnCount;
  }
}
```

### 実装上の注意

**セルのアクセス方法**:
- `.cell("A1")` - A1形式でアクセス
- `.cellAt(1, 1)` - 行・列番号でアクセス（1-indexed）

**マージ情報**:
- ExcelJSは内部的に `_merges` プロパティを持つ
- `"A1:B2"` のような文字列の配列

**行数・列数**:
- `worksheet.rowCount` / `worksheet.columnCount`
- 空のシートは `0`

### テスト方針

```typescript
// src/reader/sheet-reader.test.ts
import { describe, expect, it } from "vitest";
import ExcelJS from "exceljs";
import { SheetReader } from "./sheet-reader";

describe("SheetReader", () => {
  it("should read sheet name", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("売上");

    const reader = new SheetReader(worksheet);
    expect(reader.name).toBe("売上");
  });

  it("should read cell by A1 notation", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    worksheet.getCell("A1").value = "Hello";

    const reader = new SheetReader(worksheet);
    expect(reader.cell("A1").value).toBe("Hello");
  });

  it("should read cell by row/col", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    worksheet.getCell(1, 1).value = "World";

    const reader = new SheetReader(worksheet);
    expect(reader.cellAt(1, 1).value).toBe("World");
  });

  it("should read merged cells", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    worksheet.mergeCells("A1:B2");

    const reader = new SheetReader(worksheet);
    expect(reader.mergedCells).toContain("A1:B2");
  });
});
```

---

## 6.3 `src/reader/workbook-reader.ts`

### 目的

ワークブック全体を読み取る。`xlkit.read()` のエントリーポイント。

### 実装内容

```typescript
import ExcelJS from "exceljs";
import { SheetReader } from "./sheet-reader";

/**
 * ワークブックの読み取り
 */
export class WorkbookReader {
  constructor(private workbook: ExcelJS.Workbook) {}

  /**
   * シート名の配列を取得
   */
  get sheetNames(): string[] {
    return this.workbook.worksheets.map((ws) => ws.name);
  }

  /**
   * シートを取得（名前指定）
   */
  sheet(name: string): SheetReader {
    const worksheet = this.workbook.getWorksheet(name);
    if (!worksheet) {
      throw new Error(`シート "${name}" が見つかりません`);
    }
    return new SheetReader(worksheet);
  }

  /**
   * シートを取得（インデックス指定、0-indexed）
   */
  sheetAt(index: number): SheetReader {
    const worksheet = this.workbook.worksheets[index];
    if (!worksheet) {
      throw new Error(`インデックス ${index} のシートが見つかりません`);
    }
    return new SheetReader(worksheet);
  }

  /**
   * シート数を取得
   */
  get sheetCount(): number {
    return this.workbook.worksheets.length;
  }
}

/**
 * Excelファイルを読み取る
 */
export async function read(
  source: Buffer | string
): Promise<WorkbookReader> {
  const workbook = new ExcelJS.Workbook();

  if (Buffer.isBuffer(source)) {
    // Bufferから読み取り
    await workbook.xlsx.load(source);
  } else {
    // ファイルパスから読み取り
    await workbook.xlsx.readFile(source);
  }

  return new WorkbookReader(workbook);
}
```

### 実装上の注意

**ソースの種類**:
- `Buffer` - メモリ上のExcelデータ
- `string` - ファイルパス

**シートのアクセス**:
- `.sheet(name)` - シート名で取得
- `.sheetAt(index)` - インデックスで取得（0-indexed）

**エラーハンドリング**:
- シートが見つからない場合は `throw new Error()`

### テスト方針

```typescript
// src/reader/workbook-reader.test.ts
import { describe, expect, it } from "vitest";
import ExcelJS from "exceljs";
import { read, WorkbookReader } from "./workbook-reader";

describe("WorkbookReader", () => {
  it("should read sheet names", async () => {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("Sheet1");
    workbook.addWorksheet("Sheet2");

    const reader = new WorkbookReader(workbook);
    expect(reader.sheetNames).toEqual(["Sheet1", "Sheet2"]);
  });

  it("should get sheet by name", async () => {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("売上");

    const reader = new WorkbookReader(workbook);
    const sheet = reader.sheet("売上");
    expect(sheet.name).toBe("売上");
  });

  it("should get sheet by index", async () => {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("Sheet1");
    workbook.addWorksheet("Sheet2");

    const reader = new WorkbookReader(workbook);
    const sheet = reader.sheetAt(1);
    expect(sheet.name).toBe("Sheet2");
  });

  it("should throw error for non-existent sheet", async () => {
    const workbook = new ExcelJS.Workbook();
    const reader = new WorkbookReader(workbook);

    expect(() => reader.sheet("NotFound")).toThrow('シート "NotFound" が見つかりません');
  });

  it("should get sheet count", async () => {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("Sheet1");
    workbook.addWorksheet("Sheet2");

    const reader = new WorkbookReader(workbook);
    expect(reader.sheetCount).toBe(2);
  });
});

describe("read", () => {
  it("should read from buffer", async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    worksheet.getCell("A1").value = "Hello";

    const buffer = await workbook.xlsx.writeBuffer();
    const reader = await read(Buffer.from(buffer));

    expect(reader.sheet("Test").cell("A1").value).toBe("Hello");
  });

  // ファイルパスからの読み取りテストは、実際のファイル作成が必要
});
```

---

## 6.4 `src/index.ts` の更新

### 目的

`xlkit.read()` をエクスポートする。

### 実装内容

```typescript
// xlkit - Declarative Excel generation library

export { xlkit } from "./core/workbook-builder";
export { read } from "./reader/workbook-reader";

// 型定義のエクスポート
export type { CellStyle, BorderStyle, TableStyle, AlignType, FormatType } from "./types/style";
export type { Column, LeafColumn, ParentColumn } from "./types/column";
export type { TableOptions, TablePreset, AutoWidthOption } from "./types/table";
export type { TextInput, StyledCell } from "./types/text";
export type { ImageOptions, ImageSource } from "./types/image";
export type { Block, BlockType, SheetState, WorkbookState } from "./types/workbook";

// 読み取りAPI用の型（必要に応じて）
export type { WorkbookReader } from "./reader/workbook-reader";
export type { SheetReader } from "./reader/sheet-reader";
export type { CellReader } from "./reader/cell-reader";
```

### 使用例

```typescript
import { xlkit, read } from "xlkit";

// 生成
await xlkit()
  .sheet("Test")
  .text("Hello")
  .getNode()
  .saveToFile("test.xlsx");

// 読み取り
const workbook = await read("test.xlsx");
const sheet = workbook.sheet("Test");
console.log(sheet.cell("A1").value);  // "Hello"
```

---

## 6.5 結合テストの実装

### 目的

生成 → 読み取り → 検証のサイクルをテストする。

### 実装内容

```typescript
// tests/integration.test.ts
import { describe, expect, it } from "vitest";
import { xlkit, read } from "../src/index";

describe("Integration: Write and Read", () => {
  it("should write and read simple table", async () => {
    // 生成
    const buffer = await xlkit()
      .sheet("売上")
      .table({
        columns: [
          { key: "name", label: "名前" },
          { key: "price", label: "価格" },
        ],
        data: [
          { name: "PC", price: 100000 },
          { name: "モニタ", price: 30000 },
        ],
      })
      .getNode()
      .toBuffer();

    // 読み取り
    const workbook = await read(buffer);
    const sheet = workbook.sheet("売上");

    // 検証
    expect(sheet.cell("A1").value).toBe("名前");
    expect(sheet.cell("B1").value).toBe("価格");
    expect(sheet.cell("A2").value).toBe("PC");
    expect(sheet.cell("B2").value).toBe(100000);
    expect(sheet.cell("A3").value).toBe("モニタ");
    expect(sheet.cell("B3").value).toBe(30000);
  });

  it("should write and read text with style", async () => {
    const buffer = await xlkit()
      .sheet("Test")
      .text({
        value: "タイトル",
        style: { bold: true, fontSize: 14, color: "#FF0000" },
      })
      .getNode()
      .toBuffer();

    const workbook = await read(buffer);
    const sheet = workbook.sheet("Test");
    const cell = sheet.cell("A1");

    expect(cell.value).toBe("タイトル");
    expect(cell.style?.bold).toBe(true);
    expect(cell.style?.fontSize).toBe(14);
    expect(cell.style?.color).toBe("#FF0000");
  });

  it("should write and read with preset", async () => {
    const buffer = await xlkit()
      .sheet("売上")
      .table({
        preset: "basic",
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
      })
      .getNode()
      .toBuffer();

    const workbook = await read(buffer);
    const sheet = workbook.sheet("売上");

    // ヘッダースタイル確認
    const header = sheet.cell("A1");
    expect(header.style?.bold).toBe(true);
    expect(header.style?.fill).toBe("#4472C4");
    expect(header.style?.color).toBe("#FFFFFF");
  });
});
```

---

## Phase 6 完了条件

### 実装チェックリスト

- [ ] `src/reader/cell-reader.ts` を実装
- [ ] `src/reader/cell-reader.test.ts` を実装
- [ ] `src/reader/sheet-reader.ts` を実装
- [ ] `src/reader/sheet-reader.test.ts` を実装
- [ ] `src/reader/workbook-reader.ts` を実装
- [ ] `src/reader/workbook-reader.test.ts` を実装
- [ ] `src/index.ts` を更新（`read` のエクスポート）
- [ ] 結合テスト実装（`tests/integration.test.ts`）

### 検証コマンド

```bash
pnpm type-check  # 型エラーがないことを確認
pnpm lint        # リントエラーがないことを確認
pnpm test        # すべてのテストが通ることを確認
```

### 完了後の状態

```
src/
├── index.ts
├── core/
├── types/
├── schemas/
├── styles/
├── engine/
├── output/
└── reader/
    ├── workbook-reader.ts
    ├── workbook-reader.test.ts
    ├── sheet-reader.ts
    ├── sheet-reader.test.ts
    ├── cell-reader.ts
    └── cell-reader.test.ts

tests/
└── integration.test.ts
```

---

## 全Phase完了後

### 最終検証

```bash
# すべてのテストが通ることを確認
pnpm test

# 型チェック
pnpm type-check

# リント
pnpm lint

# フォーマット
pnpm format

# ビルド
pnpm build
```

### README更新

Phase 1-6 完了後、READMEに使用例を追加する。

### 次のステップ

- デモサイトの実装
- npm公開準備
- ドキュメント整備
