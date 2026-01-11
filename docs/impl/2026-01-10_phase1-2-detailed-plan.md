# Phase 1-2 詳細実装計画

## 概要

xlkit API実装のPhase 1（依存関係追加 + 型定義）とPhase 2（Zodスキーマ）の詳細実装計画。

## 参照ドキュメント

- [API実装計画](./2026-01-11_xlkit-api-implementation-plan.md)
- [API設計書](../spec/2026-01-11_xlkit-api-design.md)
- [機能仕様書](../spec/2026-01-11_xlkit-feature-spec.md)

## 現状分析

### 既存のコードベース

```
src/
├── index.ts         # 簡単なスタブ実装（xlkit() のみ）
└── index.test.ts    # 基本的なテスト2ファイルのみ
```

### 依存関係

- **dependencies**: `exceljs` のみ
- **devDependencies**: TypeScript, Vitest, Biome等
- **未追加**: `zod`（Phase 1で追加予定）

---

## Phase 1: 依存関係追加 + 型定義

### 目的

API全体の型安全性を担保する基盤を構築する。

### 1.1 依存関係の追加

**タスク**: `zod` を dependencies に追加

```bash
pnpm add zod
```

**理由**:
- ランタイムバリデーションに使用
- TypeScriptの型定義と相互運用可能
- スキーマから型を自動生成できる（`z.infer<typeof schema>`）

**検証**:
```bash
pnpm type-check  # zodの型が正しく解決されることを確認
```

---

### 1.2 型定義ファイルの作成

**ディレクトリ構成**:
```
src/types/
├── style.ts      # スタイル関連の型
├── column.ts     # カラム定義（再帰型）
├── table.ts      # テーブルオプション
├── text.ts       # テキスト入力
├── image.ts      # 画像オプション
└── workbook.ts   # ワークブック全体の状態
```

**実装順序**: `style.ts` → `column.ts` → `table.ts` → `text.ts` → `image.ts` → `workbook.ts`

理由: 依存関係の順序（基礎的な型から複合的な型へ）

---

#### 1.2.1 `src/types/style.ts`

**目的**: セル、罫線、テーブル全体のスタイルを定義

**実装内容**:

```typescript
// 基本的な型エイリアス
export type AlignType = "left" | "center" | "right";
export type FormatType = "string" | "number" | "date";

// セルのスタイル
export type CellStyle = {
  // フォント関連
  fontFamily?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;

  // 色
  color?: string;         // テキスト色 "#RRGGBB"
  fill?: string;          // 背景色 "#RRGGBB"

  // 配置
  align?: AlignType;

  // フォーマット
  format?: FormatType;
  decimalPlaces?: number;
  thousandsSeparator?: boolean;
};

// 罫線スタイル
export type BorderStyle = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  horizontal?: boolean;   // 内部の水平線
  vertical?: boolean;     // 内部の垂直線
  color?: string;         // 罫線色 "#RRGGBB"
  style?: "thin" | "medium" | "thick" | "dotted" | "dashed";
};

// テーブル全体のスタイル
export type TableStyle = {
  header?: CellStyle;
  body?: CellStyle;
};
```

**実装上の注意**:
- 色は `#RRGGBB` 形式のみサポート（6桁の16進数）
- すべてのプロパティはオプショナル（デフォルト値はExcelJSに任せる）
- `format` と `decimalPlaces`/`thousandsSeparator` の組み合わせに注意
  - `format: "number"` の場合のみ `decimalPlaces` と `thousandsSeparator` が有効

**テスト方針**:
- 型定義のみなので、コンパイルが通ることを確認
- Zodスキーマでバリデーションテストを実施（Phase 2）

---

#### 1.2.2 `src/types/column.ts`

**目的**: カラム定義（シングル/マルチヘッダー対応）

**実装内容**:

```typescript
import type { CellStyle } from "./style";

// リーフカラム（末端のカラム、実際のデータを持つ）
export type LeafColumn<T> = {
  key: keyof T & string;
  label: string;
  style?: CellStyle;
  mergeSameValues?: boolean;  // 同じ値を縦マージするか
};

// 親カラム（子カラムを持つ、マルチヘッダー用）
export type ParentColumn<T> = {
  label: string;
  children: Column<T>[];  // 再帰的な定義
};

// カラム型（Union型）
export type Column<T> = LeafColumn<T> | ParentColumn<T>;

// 型ガード関数
export function isLeafColumn<T>(column: Column<T>): column is LeafColumn<T> {
  return "key" in column;
}

export function isParentColumn<T>(column: Column<T>): column is ParentColumn<T> {
  return "children" in column;
}
```

**実装上の注意**:
- `Column<T>` は再帰的な型定義（ParentColumn が Column を含む）
- `key` は `keyof T & string` で型安全に
- 型ガード関数を提供して、使用側で型を絞り込めるようにする

**ヘッダーのツリー構造**:

```typescript
// 例: 2階層のヘッダー
const columns = [
  {
    label: "基本情報",
    children: [
      { key: "name", label: "名前" },
      { key: "age", label: "年齢" },
    ],
  },
  { key: "score", label: "スコア" },
];

// 最終的なExcel出力:
// | 基本情報      | スコア |
// | 名前 | 年齢  | (垂直マージ) |
// | データ... |
```

**テスト方針**:
- 型ガード関数のユニットテスト
- 再帰的な構造が正しく型推論されることを確認

---

#### 1.2.3 `src/types/table.ts`

**目的**: テーブルオプションの型定義

**実装内容**:

```typescript
import type { BorderStyle, CellStyle, TableStyle } from "./style";
import type { Column } from "./column";

// テーブルプリセット
export type TablePreset = "basic" | "minimal" | "striped";

// 列幅自動調整オプション
export type AutoWidthOption = "all" | "body" | false;

// テーブルオプション
export type TableOptions<T> = {
  // プリセット
  preset?: TablePreset;

  // カラム定義
  columns: Column<T>[];

  // データ
  data: (T & { _style?: Partial<Record<keyof T, CellStyle>> })[];

  // 列幅
  autoWidth?: AutoWidthOption;

  // 全体のマージ設定
  mergeSameValues?: boolean;

  // スタイル
  style?: TableStyle;
  border?: BorderStyle;

  // 条件付きスタイル
  conditionalStyle?: (row: T, col: keyof T) => CellStyle | {};
};
```

**実装上の注意**:
- `data` の型: `T & { _style?: ... }`
  - 各行にセル単位のスタイルを指定可能（`_style` プロパティ）
  - 例: `{ name: "太郎", age: 30, _style: { age: { bold: true } } }`
- `conditionalStyle` は関数型
  - 行とカラムを受け取り、スタイルを返す
  - 空オブジェクト `{}` を返すとスタイル適用なし

**スタイルのカスケーディング優先度**（低 → 高）:
1. `preset` - ベース
2. `columns[].style` - 列単位
3. `style.header` / `style.body` - 行種類
4. `conditionalStyle()` - 条件付き
5. `data[]._style` - セル単位（最優先）

**テスト方針**:
- 型定義のみなので、コンパイルが通ることを確認
- `conditionalStyle` の型が正しく推論されることを確認

---

#### 1.2.4 `src/types/text.ts`

**目的**: テキスト入力の型定義

**実装内容**:

```typescript
import type { CellStyle } from "./style";

// テキスト入力（文字列 or スタイル付きセル）
export type TextInput = string | StyledCell;

// スタイル付きセル
export type StyledCell = {
  value: string | number | boolean;
  style?: CellStyle;
};

// 型ガード関数
export function isStyledCell(input: TextInput): input is StyledCell {
  return typeof input === "object" && "value" in input;
}
```

**実装上の注意**:
- `TextInput` は Union型（`string` または `StyledCell`）
- シンプルなケース: `text("タイトル")`
- スタイル付きケース: `text({ value: "タイトル", style: { bold: true } })`
- 型ガード関数を提供

**使用例**:

```typescript
// シンプル
sheet.text("月次レポート");

// スタイル付き
sheet.text({
  value: "月次レポート",
  style: { bold: true, fontSize: 14, color: "#FF0000" },
});
```

**テスト方針**:
- 型ガード関数のユニットテスト
- Union型が正しく推論されることを確認

---

#### 1.2.5 `src/types/image.ts`

**目的**: 画像挿入の型定義

**実装内容**:

```typescript
// 画像ソース（Buffer, URL, ファイルパス）
export type ImageSource = Buffer | string;

// 画像オプション
export type ImageOptions = {
  source: ImageSource;
  width?: number;   // ピクセル単位
  height?: number;  // ピクセル単位
  row?: number;     // 配置する行（0-indexed）
  col?: number;     // 配置する列（0-indexed）
};

// 型ガード関数
export function isBuffer(source: ImageSource): source is Buffer {
  return Buffer.isBuffer(source);
}
```

**実装上の注意**:
- `source`: Buffer または文字列（URL/パス）
- `width` / `height`: 省略時は元画像のサイズ
- `row` / `col`: 省略時は次の行に配置（テキストや表の下）
- Node.js環境とブラウザ環境で `Buffer` の扱いが異なる点に注意

**使用例**:

```typescript
// URLから
sheet.image({
  source: "https://example.com/logo.png",
  width: 200,
  height: 100,
});

// Bufferから
const buffer = await fs.readFile("logo.png");
sheet.image({
  source: buffer,
  width: 200,
});
```

**テスト方針**:
- 型ガード関数のユニットテスト
- BufferとURLの両方で型が正しく推論されることを確認

---

#### 1.2.6 `src/types/workbook.ts`

**目的**: ワークブック全体の状態を管理する型定義

**実装内容**:

```typescript
import type { TableOptions } from "./table";
import type { TextInput } from "./text";
import type { ImageOptions } from "./image";

// ブロックの種類
export type BlockType = "table" | "text" | "image" | "space";

// ブロック（Union型）
export type Block =
  | { type: "table"; options: TableOptions<Record<string, unknown>> }
  | { type: "text"; input: TextInput }
  | { type: "image"; options: ImageOptions }
  | { type: "space"; lines: number };

// シートの状態
export type SheetState = {
  name: string;
  blocks: Block[];
};

// ワークブック全体の状態
export type WorkbookState = {
  sheets: SheetState[];
};

// 型ガード関数
export function isTableBlock(block: Block): block is { type: "table"; options: TableOptions<Record<string, unknown>> } {
  return block.type === "table";
}

export function isTextBlock(block: Block): block is { type: "text"; input: TextInput } {
  return block.type === "text";
}

export function isImageBlock(block: Block): block is { type: "image"; options: ImageOptions } {
  return block.type === "image";
}

export function isSpaceBlock(block: Block): block is { type: "space"; lines: number } {
  return block.type === "space";
}
```

**実装上の注意**:
- `Block` は Tagged Union型（`type` フィールドで判別）
- ビルダーパターンで `.table()`, `.text()` 等を呼ぶたびに `blocks` に追加
- 出力時に `blocks` を順次処理してExcelに書き込む
- 型ガード関数を提供して、使用側で型を絞り込めるようにする

**状態遷移**:

```typescript
// 初期状態
{ sheets: [] }

// .sheet("売上") を呼ぶ
{ sheets: [{ name: "売上", blocks: [] }] }

// .text("タイトル") を呼ぶ
{ sheets: [{ name: "売上", blocks: [{ type: "text", input: "タイトル" }] }] }

// .table({ ... }) を呼ぶ
{ sheets: [{ name: "売上", blocks: [
  { type: "text", input: "タイトル" },
  { type: "table", options: { ... } }
] }] }
```

**テスト方針**:
- 型ガード関数のユニットテスト
- Tagged Union型が正しく判別されることを確認

---

### 1.3 Phase 1 完了条件

- [ ] `zod` が dependencies に追加されている
- [ ] `src/types/` 配下に6つのファイルが作成されている
- [ ] すべてのファイルで型エラーがない（`pnpm type-check` が通る）
- [ ] 型ガード関数のユニットテストが実装されている（`column.ts`, `text.ts`, `image.ts`, `workbook.ts`）

**検証コマンド**:
```bash
pnpm type-check  # 型エラーがないことを確認
pnpm test        # ユニットテストが通ることを確認
```

---

## Phase 2: Zodスキーマ

### 目的

ランタイムバリデーションを実装し、ユーザー入力の安全性を担保する。

### 2.1 スキーマファイルの作成

**ディレクトリ構成**:
```
src/schemas/
├── style.ts      # スタイル関連のスキーマ
├── column.ts     # カラム定義のスキーマ（再帰）
├── table.ts      # テーブルオプションのスキーマ
├── text.ts       # テキスト入力のスキーマ
└── image.ts      # 画像オプションのスキーマ
```

**実装順序**: `style.ts` → `column.ts` → `table.ts` → `text.ts` → `image.ts`

理由: 依存関係の順序（基礎的なスキーマから複合的なスキーマへ）

---

#### 2.1.1 `src/schemas/style.ts`

**目的**: スタイル関連のランタイムバリデーション

**実装内容**:

```typescript
import { z } from "zod";

// 色の16進数形式を検証
const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;

const hexColorSchema = z
  .string()
  .regex(hexColorRegex, "色は #RRGGBB 形式で指定してください");

// AlignType
const alignTypeSchema = z.enum(["left", "center", "right"]);

// FormatType
const formatTypeSchema = z.enum(["string", "number", "date"]);

// CellStyle
export const cellStyleSchema = z.object({
  fontFamily: z.string().optional(),
  fontSize: z.number().positive().optional(),
  bold: z.boolean().optional(),
  italic: z.boolean().optional(),
  underline: z.boolean().optional(),
  strike: z.boolean().optional(),
  color: hexColorSchema.optional(),
  fill: hexColorSchema.optional(),
  align: alignTypeSchema.optional(),
  format: formatTypeSchema.optional(),
  decimalPlaces: z.number().int().min(0).optional(),
  thousandsSeparator: z.boolean().optional(),
}).strict();

// BorderStyle
export const borderStyleSchema = z.object({
  top: z.boolean().optional(),
  bottom: z.boolean().optional(),
  left: z.boolean().optional(),
  right: z.boolean().optional(),
  horizontal: z.boolean().optional(),
  vertical: z.boolean().optional(),
  color: hexColorSchema.optional(),
  style: z.enum(["thin", "medium", "thick", "dotted", "dashed"]).optional(),
}).strict();

// TableStyle
export const tableStyleSchema = z.object({
  header: cellStyleSchema.optional(),
  body: cellStyleSchema.optional(),
}).strict();
```

**実装上の注意**:
- `.strict()` を使用して未知のプロパティを拒否
- 色は正規表現で `#RRGGBB` 形式を検証
- `fontSize` は正の数のみ（`.positive()`）
- `decimalPlaces` は0以上の整数（`.int().min(0)`）

**エラーメッセージの例**:
```typescript
// NG: 色形式が不正
{ color: "red" }  // → "色は #RRGGBB 形式で指定してください"

// NG: fontSizeが負
{ fontSize: -10 }  // → "Number must be greater than 0"

// NG: 未知のプロパティ
{ unknownProp: true }  // → "Unrecognized key(s) in object: 'unknownProp'"
```

**テスト方針**:
- 正常系: 各プロパティが正しくバリデーションされることを確認
- 異常系: 不正な値でエラーが返されることを確認
  - 色形式の不正（`"red"`, `"#FFF"`, `"#GGGGGG"`）
  - 負のfontSize
  - 未知のプロパティ

---

#### 2.1.2 `src/schemas/column.ts`

**目的**: カラム定義のランタイムバリデーション（再帰構造）

**実装内容**:

```typescript
import { z } from "zod";
import { cellStyleSchema } from "./style";

// LeafColumn（ジェネリック型パラメータを外す）
const leafColumnSchema = z.object({
  key: z.string(),
  label: z.string(),
  style: cellStyleSchema.optional(),
  mergeSameValues: z.boolean().optional(),
}).strict();

// 再帰型の定義
type ColumnShape = {
  key?: string;
  label: string;
  children?: ColumnShape[];
};

// ParentColumn（再帰的な定義）
const parentColumnSchema: z.ZodType<{
  label: string;
  children: ColumnShape[];
}> = z.lazy(() =>
  z.object({
    label: z.string(),
    children: z.array(columnSchema).nonempty(),
  }).strict()
);

// Column（Union型）
export const columnSchema = z.union([leafColumnSchema, parentColumnSchema]);

// 配列のバリデーション
export const columnsSchema = z.array(columnSchema).nonempty();
```

**実装上の注意**:
- `z.lazy()` を使って再帰的なスキーマを定義
- `children` は空配列を許可しない（`.nonempty()`）
- `key` はLeafColumnのみに存在（Union型で自動判別）
- ジェネリック型 `<T>` はZodスキーマでは扱えないため、ランタイムでは `string` として扱う

**再帰構造の例**:

```typescript
// 正常: 2階層のヘッダー
[
  {
    label: "基本情報",
    children: [
      { key: "name", label: "名前" },
      { key: "age", label: "年齢" },
    ],
  },
  { key: "score", label: "スコア" },
]

// NG: childrenが空
{
  label: "基本情報",
  children: [],  // → "Array must contain at least 1 element(s)"
}
```

**テスト方針**:
- 正常系: シングル/マルチヘッダーが正しくバリデーションされる
- 異常系:
  - `children` が空配列
  - `key` が欠けている（LeafColumnの場合）
  - `label` が欠けている

---

#### 2.1.3 `src/schemas/table.ts`

**目的**: テーブルオプションのランタイムバリデーション

**実装内容**:

```typescript
import { z } from "zod";
import { borderStyleSchema, cellStyleSchema, tableStyleSchema } from "./style";
import { columnsSchema } from "./column";

// TablePreset
const tablePresetSchema = z.enum(["basic", "minimal", "striped"]);

// AutoWidthOption
const autoWidthOptionSchema = z.union([
  z.enum(["all", "body"]),
  z.literal(false),
]);

// TableOptions（ジェネリック型を外す）
export const tableOptionsSchema = z.object({
  preset: tablePresetSchema.optional(),
  columns: columnsSchema,
  data: z.array(z.record(z.unknown())),  // unknown[] の配列
  autoWidth: autoWidthOptionSchema.optional(),
  mergeSameValues: z.boolean().optional(),
  style: tableStyleSchema.optional(),
  border: borderStyleSchema.optional(),
  conditionalStyle: z.function().optional(),
}).strict();
```

**実装上の注意**:
- `data` は `z.record(z.unknown())` で任意のオブジェクト配列として扱う
  - ジェネリック型 `<T>` はランタイムでは扱えないため
- `conditionalStyle` は `z.function()` でバリデーション
  - 関数の引数や戻り値の型検証はZodでは困難（TypeScriptの型に任せる）
- `autoWidth` は `"all" | "body" | false` のUnion型

**テスト方針**:
- 正常系: 各オプションが正しくバリデーションされる
- 異常系:
  - `columns` が空配列
  - `data` が配列以外
  - `preset` が不正な値（`"unknown"`）
  - `autoWidth` が不正な値（`true`, `"header"`）

---

#### 2.1.4 `src/schemas/text.ts`

**目的**: テキスト入力のランタイムバリデーション

**実装内容**:

```typescript
import { z } from "zod";
import { cellStyleSchema } from "./style";

// StyledCell
const styledCellSchema = z.object({
  value: z.union([z.string(), z.number(), z.boolean()]),
  style: cellStyleSchema.optional(),
}).strict();

// TextInput（Union型）
export const textInputSchema = z.union([z.string(), styledCellSchema]);
```

**実装上の注意**:
- `TextInput` は `string | StyledCell` のUnion型
- `value` は `string | number | boolean` を許可
- シンプルなケースが多いため、スキーマも単純

**テスト方針**:
- 正常系: 文字列とStyledCellの両方がバリデーションされる
- 異常系:
  - `value` が不正な型（`null`, `undefined`, `[]`）
  - 未知のプロパティ

---

#### 2.1.5 `src/schemas/image.ts`

**目的**: 画像オプションのランタイムバリデーション

**実装内容**:

```typescript
import { z } from "zod";

// ImageSource（Buffer or string）
const imageSourceSchema = z.union([
  z.instanceof(Buffer),
  z.string().url(),       // URL形式
  z.string().min(1),      // ファイルパス
]);

// ImageOptions
export const imageOptionsSchema = z.object({
  source: imageSourceSchema,
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  row: z.number().int().min(0).optional(),
  col: z.number().int().min(0).optional(),
}).strict();
```

**実装上の注意**:
- `source` は `Buffer | URL | ファイルパス` を許可
  - `.url()` でURL形式を検証
  - `.min(1)` で空文字列を拒否
- `width` / `height` は正の数のみ
- `row` / `col` は0以上の整数

**テスト方針**:
- 正常系: Buffer, URL, ファイルパスの各形式がバリデーションされる
- 異常系:
  - `source` が空文字列
  - `width` / `height` が負または0
  - `row` / `col` が負

---

### 2.2 スキーマの使用方法

**ビルダー内でバリデーション**:

```typescript
// src/core/sheet-builder.ts（例）
import { tableOptionsSchema } from "../schemas/table";

class SheetBuilder {
  table<T>(options: TableOptions<T>): this {
    // ランタイムバリデーション
    const result = tableOptionsSchema.safeParse(options);
    if (!result.success) {
      throw new Error(`Invalid table options: ${result.error.message}`);
    }

    // バリデーション成功後、ブロックを追加
    this.blocks.push({ type: "table", options });
    return this;
  }
}
```

**エラーハンドリング**:
- `.safeParse()` を使用して、エラー時に例外を投げずに結果を返す
- エラーメッセージをユーザーに分かりやすく伝える

---

### 2.3 Phase 2 完了条件

- [ ] `src/schemas/` 配下に5つのファイルが作成されている
- [ ] すべてのスキーマが正常系/異常系のテストでカバーされている
- [ ] `pnpm type-check` が通る
- [ ] `pnpm test` が通る

**検証コマンド**:
```bash
pnpm type-check  # 型エラーがないことを確認
pnpm test        # すべてのテストが通ることを確認
```

---

## テスト戦略

### ユニットテスト（コロケーション）

**配置**: 各ファイルと同じディレクトリに `.test.ts` ファイルを配置

```
src/types/
├── style.ts
├── style.test.ts    # 型ガード関数等のテスト
├── column.ts
├── column.test.ts   # 型ガード関数のテスト
...

src/schemas/
├── style.ts
├── style.test.ts    # スキーマのバリデーションテスト
├── column.ts
├── column.test.ts   # スキーマのバリデーションテスト
...
```

### Phase 1 のテスト

**対象**: 型ガード関数

```typescript
// src/types/column.test.ts
import { describe, expect, it } from "vitest";
import { isLeafColumn, isParentColumn } from "./column";

describe("isLeafColumn", () => {
  it("should return true for leaf column", () => {
    const column = { key: "name", label: "名前" };
    expect(isLeafColumn(column)).toBe(true);
  });

  it("should return false for parent column", () => {
    const column = { label: "基本情報", children: [] };
    expect(isLeafColumn(column)).toBe(false);
  });
});
```

### Phase 2 のテスト

**対象**: Zodスキーマのバリデーション

```typescript
// src/schemas/style.test.ts
import { describe, expect, it } from "vitest";
import { cellStyleSchema } from "./style";

describe("cellStyleSchema", () => {
  it("should validate valid cell style", () => {
    const style = { bold: true, fontSize: 12, color: "#FF0000" };
    const result = cellStyleSchema.safeParse(style);
    expect(result.success).toBe(true);
  });

  it("should reject invalid color format", () => {
    const style = { color: "red" };
    const result = cellStyleSchema.safeParse(style);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.message).toContain("#RRGGBB");
    }
  });

  it("should reject negative fontSize", () => {
    const style = { fontSize: -10 };
    const result = cellStyleSchema.safeParse(style);
    expect(result.success).toBe(false);
  });

  it("should reject unknown properties", () => {
    const style = { unknownProp: true };
    const result = cellStyleSchema.safeParse(style);
    expect(result.success).toBe(false);
  });
});
```

### テストのカバレッジ目標

- **Phase 1**: 型ガード関数のカバレッジ 100%
- **Phase 2**: スキーマのバリデーション（正常系 + 異常系）カバレッジ 90%以上

---

## 実装のチェックリスト

### Phase 1

- [ ] `pnpm add zod` を実行
- [ ] `src/types/style.ts` を実装
- [ ] `src/types/column.ts` を実装（型ガード含む）
- [ ] `src/types/table.ts` を実装
- [ ] `src/types/text.ts` を実装（型ガード含む）
- [ ] `src/types/image.ts` を実装（型ガード含む）
- [ ] `src/types/workbook.ts` を実装（型ガード含む）
- [ ] 型ガード関数のユニットテストを実装
- [ ] `pnpm type-check` が通ることを確認
- [ ] `pnpm test` が通ることを確認

### Phase 2

- [ ] `src/schemas/style.ts` を実装
- [ ] `src/schemas/style.test.ts` を実装（正常系 + 異常系）
- [ ] `src/schemas/column.ts` を実装（再帰スキーマ）
- [ ] `src/schemas/column.test.ts` を実装（正常系 + 異常系）
- [ ] `src/schemas/table.ts` を実装
- [ ] `src/schemas/table.test.ts` を実装（正常系 + 異常系）
- [ ] `src/schemas/text.ts` を実装
- [ ] `src/schemas/text.test.ts` を実装（正常系 + 異常系）
- [ ] `src/schemas/image.ts` を実装
- [ ] `src/schemas/image.test.ts` を実装（正常系 + 異常系）
- [ ] `pnpm type-check` が通ることを確認
- [ ] `pnpm test` が通ることを確認

---

## 完了後の状態

### ディレクトリ構成

```
src/
├── index.ts
├── index.test.ts
├── types/
│   ├── style.ts
│   ├── style.test.ts
│   ├── column.ts
│   ├── column.test.ts
│   ├── table.ts
│   ├── text.ts
│   ├── text.test.ts
│   ├── image.ts
│   ├── image.test.ts
│   ├── workbook.ts
│   └── workbook.test.ts
└── schemas/
    ├── style.ts
    ├── style.test.ts
    ├── column.ts
    ├── column.test.ts
    ├── table.ts
    ├── table.test.ts
    ├── text.ts
    ├── text.test.ts
    ├── image.ts
    └── image.test.ts
```

### 依存関係

```json
{
  "dependencies": {
    "exceljs": "^4.4.0",
    "zod": "^3.x.x"
  }
}
```

---

## 次のステップ

Phase 1-2 完了後、Phase 3（コアビルダー）に進む:

- `src/core/workbook-builder.ts` - `xlkit()` ファクトリ関数
- `src/core/sheet-builder.ts` - `.sheet()`, `.table()`, `.text()` 等のメソッド

Phase 3では、ここで定義した型とスキーマを使用して、メソッドチェーンAPIを実装する。
