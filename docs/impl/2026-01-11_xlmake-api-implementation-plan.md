# xlmake API 実装計画

## 概要

設計ドキュメント（API設計書・機能仕様書）に基づき、宣言的なExcel生成APIを実装する。

## 決定事項

| 項目 | 決定内容 |
|------|----------|
| 配置場所 | ルート直下（src/）|
| 実装範囲 | Phase 1〜6（読み取りAPI含む）|
| バリデーション | Zod使用 |
| Excel出力 | ExcelJS WorkbookWriter（ストリーミングのみ）|

## 参照ドキュメント

- [設計骨子](../spec/2026-01-06_xlmake-design.md)
- [API設計書](../spec/2026-01-11_xlmake-api-design.md)
- [機能仕様書](../spec/2026-01-11_xlmake-feature-spec.md)
- [実装計画書](../impl/2026-01-11_xlmake-implementation-plan.md)

---

## 実装フェーズ

### Phase 1: 依存関係追加 + 型定義

**目的**: API全体の型安全性を担保する基盤

**タスク**:
1. `zod` を dependencies に追加
2. 型定義ファイルを作成

**作成ファイル**:
```
src/types/
├── style.ts      # CellStyle, BorderStyle, TableStyle
├── column.ts     # Column<T>, LeafColumn, ParentColumn
├── table.ts      # TableOptions, TablePreset, AutoWidthOption
├── text.ts       # TextInput, StyledCell
├── image.ts      # ImageOptions, ImageSource
└── workbook.ts   # Block, SheetState, WorkbookState
```

---

### Phase 2: Zodスキーマ

**目的**: ランタイムバリデーション

**作成ファイル**:
```
src/schemas/
├── style.ts      # cellStyleSchema, borderStyleSchema
├── column.ts     # columnSchema（再帰型）
├── table.ts      # tableOptionsSchema
├── text.ts       # textInputSchema
└── image.ts      # imageOptionsSchema
```

---

### Phase 3: コアビルダー

**目的**: メソッドチェーンの骨格

**作成ファイル**:
```
src/core/
├── workbook-builder.ts   # xlmake() ファクトリ関数
└── sheet-builder.ts      # .sheet(), .table(), .text(), .image(), .space()

src/index.ts              # エントリーポイント更新
```

**実装内容**:
- `xlmake()` → WorkbookBuilder を返す
- `.sheet(name?)` → SheetBuilder を返す
- `.table()`, `.text()`, `.image()`, `.space()` → ブロック登録して SheetBuilder を返す
- `.browser`, `.node` → 出力オブジェクトを返す

---

### Phase 4: スタイル処理

**目的**: プリセットとカスケーディング

**作成ファイル**:
```
src/styles/
├── presets.ts    # basic, minimal, striped
├── merger.ts     # スタイルマージ（優先度順）
└── converter.ts  # xlmake → ExcelJS スタイル変換
```

**カスケーディング優先度**（低 → 高）:
1. プリセット ← ベース
2. 列単位スタイル
3. 行種類（header / body）
4. 条件付きスタイル
5. セル単位（_style） ← 最優先

---

### Phase 5: Excel出力エンジン

**目的**: ExcelJS ストリーミング出力

**作成ファイル**:
```
src/engine/
├── writer.ts           # WorkbookWriter ラッパー
├── sheet-writer.ts     # シート書き込み
├── cell-writer.ts      # セル・マージ処理
└── width-calculator.ts # 列幅自動計算

src/output/
├── browser.ts          # .browser.download()
└── node.ts             # .node.saveToFile(), .node.toBuffer()
```

---

### Phase 6: 読み取りAPI

**目的**: xlmake.read() の実装

**作成ファイル**:
```
src/reader/
├── workbook-reader.ts  # xlmake.read()
├── sheet-reader.ts     # シート読み取り
└── cell-reader.ts      # セル値・スタイル読み取り
```

---

## 主要な型定義

### CellStyle

```typescript
type CellStyle = {
  fontFamily?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  color?: string;         // "#RRGGBB"
  fill?: string;          // "#RRGGBB"
  align?: "left" | "center" | "right";
  format?: "string" | "number" | "date";
  decimalPlaces?: number;
  thousandsSeparator?: boolean;
};
```

### Column<T>

```typescript
type LeafColumn<T> = {
  key: keyof T & string;
  label: string;
  style?: CellStyle;
  mergeSameValues?: boolean;
};

type ParentColumn<T> = {
  label: string;
  children: Column<T>[];
};

type Column<T> = LeafColumn<T> | ParentColumn<T>;
```

### TableOptions<T>

```typescript
type TableOptions<T> = {
  preset?: "basic" | "minimal" | "striped";
  columns: Column<T>[];
  data: (T & { _style?: Partial<Record<keyof T, CellStyle>> })[];
  autoWidth?: "all" | "body" | false;
  mergeSameValues?: boolean;
  style?: { header?: CellStyle; body?: CellStyle };
  border?: BorderStyle;
  conditionalStyle?: (row: T, col: keyof T) => CellStyle | {};
};
```

---

## ディレクトリ構成（最終形）

```
src/
├── index.ts
├── types/
│   ├── style.ts
│   ├── column.ts
│   ├── table.ts
│   ├── text.ts
│   ├── image.ts
│   └── workbook.ts
├── schemas/
│   ├── style.ts
│   ├── column.ts
│   ├── table.ts
│   ├── text.ts
│   └── image.ts
├── core/
│   ├── workbook-builder.ts
│   └── sheet-builder.ts
├── styles/
│   ├── presets.ts
│   ├── merger.ts
│   └── converter.ts
├── engine/
│   ├── writer.ts
│   ├── sheet-writer.ts
│   ├── cell-writer.ts
│   └── width-calculator.ts
├── output/
│   ├── browser.ts
│   └── node.ts
└── reader/
    ├── workbook-reader.ts
    ├── sheet-reader.ts
    └── cell-reader.ts
```

---

## 実装上の注意点

### ストリーミングの制約

ExcelJSの`WorkbookWriter`には以下の制約がある：

- 上から順に書き込む（後戻り不可）
- シート追加後は前のシートに戻れない
- 列幅は行を書く前に設定する必要がある

**対策**:
1. ブロック登録時はメタデータのみ保持
2. 出力時に全ブロックを走査して列幅を先に計算
3. 列幅設定後にデータを順次書き込む

### ヘッダーのツリー構造とマージ

- `children` を持つカラム → 水平マージ
- 階層が異なる場合 → 垂直マージ

```typescript
function calculateHeaderDepth<T>(columns: Column<T>[]): number {
  // 再帰的に最大深さを計算
}

function flattenColumns<T>(columns: Column<T>[]): LeafColumn<T>[] {
  // リーフカラムのみをフラット化
}
```

### 列幅の自動計算

- 半角文字: 約1文字幅
- 全角文字: 約2文字幅
- ExcelJSの列幅単位に変換

```typescript
function calculateTextWidth(text: string): number {
  return [...text].reduce((width, char) => {
    const code = char.charCodeAt(0);
    const isFullWidth = (code >= 0x3000 && code <= 0x9fff) ||
                        (code >= 0xff00 && code <= 0xffef);
    return width + (isFullWidth ? 2 : 1);
  }, 0);
}
```

---

## テスト方針

### ユニットテスト（コロケーション）

- `src/**/*.test.ts` に配置
- スキーマバリデーション、スタイルマージ、列幅計算

### 結合テスト

- `tests/*.test.ts` に配置
- 生成 → 読み取り → 検証 のサイクル
- 出力ファイルは `tests/output/` に保存

```typescript
// 生成したExcelを読み取って検証
it("should generate table with correct structure", async () => {
  const buffer = await xlmake()
    .sheet("テスト")
    .table({
      columns: [{ key: "name", label: "名前" }],
      data: [{ name: "太郎" }],
    })
    .node.toBuffer();

  const workbook = await xlmake.read(buffer);
  const sheet = workbook.sheet("テスト");

  expect(sheet.cell("A1").value).toBe("名前");
  expect(sheet.cell("A2").value).toBe("太郎");
});
```

---

## 検証コマンド

```bash
# 型チェック
pnpm type-check

# リント
pnpm lint

# フォーマット
pnpm format

# テスト
pnpm test

# ビルド
pnpm build
```

---

## 依存関係追加

```bash
pnpm add zod
```

---

## APIサンプル（最終形）

### 書き込み

```typescript
import { xlmake } from "xlmake";

// 基本的な使い方
await xlmake()
  .sheet("売上データ")
  .text("月次売上レポート", { bold: true, fontSize: 14 })
  .space(1)
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格", style: { align: "right" } },
    ],
    data: [
      { name: "PC", price: 100000 },
      { name: "モニタ", price: 30000 },
    ],
  })
  .node.saveToFile("report.xlsx");
```

### 読み取り

```typescript
const workbook = await xlmake.read("report.xlsx");
const sheet = workbook.sheet("売上データ");
console.log(sheet.cell("A1").value); // "月次売上レポート"
```

---

## 次のステップ

1. `pnpm add zod` で依存関係追加
2. Phase 1（型定義）から順次実装開始
