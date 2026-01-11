# xlkit

**宣言的なExcel生成ライブラリ** - コードを見れば最終的なExcelの構造がわかる

ExcelJSをベースに、より直感的で宣言的なAPIを提供します。

## ExcelJSとの比較

| 観点 | ExcelJS（命令的） | xlkit（宣言的） |
|------|------------------|----------------|
| 書き方 | セルを1つずつ操作 | 最終形を宣言 |
| 見通し | コードから結果が見えづらい | コードから結果が見える |
| 例え | jQuery | React |

## インストール

```bash
npm install xlkit
# または
pnpm add xlkit
# または
yarn add xlkit
```

## クイックスタート

### Node.js

```typescript
import { xlkit } from "xlkit";

const salesData = [
  { name: "りんご", price: 100, quantity: 50 },
  { name: "みかん", price: 80, quantity: 100 },
  { name: "バナナ", price: 120, quantity: 30 },
];

const output = await xlkit()
  .sheet("売上")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
      { key: "quantity", label: "数量" },
    ],
    data: salesData,
  })
  .getNode();

await output.saveToFile("report.xlsx");
```

### ブラウザ

```typescript
import { xlkit } from "xlkit";

const output = await xlkit()
  .sheet("データ")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "名前" },
      { key: "value", label: "値" },
    ],
    data: [
      { name: "項目A", value: 100 },
      { name: "項目B", value: 200 },
    ],
  })
  .getBrowser();

await output.download("data.xlsx");
```

---

## API リファレンス

<details>
<summary><strong>エントリーポイント・メソッド一覧</strong></summary>

### xlkit()

WorkbookBuilderを返すファクトリ関数。

```typescript
import { xlkit } from "xlkit";

const builder = xlkit();
```

### WorkbookBuilder / SheetBuilder メソッド

| メソッド | 戻り値 | 説明 |
|---------|--------|------|
| `sheet(name?)` | `SheetBuilder` | シートを追加（名前省略時は自動生成） |
| `table(options)` | `this` | テーブルを追加 |
| `text(input)` | `this` | テキストを追加 |
| `image(options)` | `this` | 画像を追加 |
| `space(lines?)` | `this` | 空行を追加（デフォルト: 1行） |
| `getNode()` | `Promise<NodeOutput>` | Node.js用出力オブジェクトを取得 |
| `getBrowser()` | `Promise<BrowserOutput>` | ブラウザ用出力オブジェクトを取得 |

</details>

<details>
<summary><strong>テーブルオプション（TableOptions）</strong></summary>

```typescript
.table({
  preset?: "basic" | "minimal" | "striped",
  columns: Column<T>[],
  data: T[],
  autoWidth?: "all" | "body" | false,
  mergeSameValues?: boolean,
  style?: TableStyle,
  border?: BorderStyle,
  conditionalStyle?: (row: T, col: keyof T) => CellStyle | {},
})
```

| オプション | 型 | デフォルト | 説明 |
|-----------|-----|-----------|------|
| `preset` | `"basic"` \| `"minimal"` \| `"striped"` | - | プリセットスタイル |
| `columns` | `Column<T>[]` | **必須** | カラム定義 |
| `data` | `T[]` | **必須** | データ配列 |
| `autoWidth` | `"all"` \| `"body"` \| `false` | `false` | 列幅自動調整 |
| `mergeSameValues` | `boolean` | `false` | 同じ値のセルを縦方向にマージ |
| `style` | `TableStyle` | - | テーブル全体のスタイル |
| `border` | `BorderStyle` | - | 罫線設定 |
| `conditionalStyle` | `function` | - | 条件付きスタイル |

</details>

<details>
<summary><strong>カラム定義（Column）</strong></summary>

### LeafColumn（通常のカラム）

```typescript
{
  key: keyof T & string,     // データのキー
  label: string,             // ヘッダーテキスト
  style?: CellStyle,         // この列のデフォルトスタイル
  mergeSameValues?: boolean, // この列で同値マージするか
}
```

### ParentColumn（マルチヘッダー用）

```typescript
{
  label: string,             // 親ヘッダーテキスト
  children: Column<T>[],     // 子カラム（再帰的に定義可能）
}
```

**マルチヘッダーの例:**

```typescript
columns: [
  {
    label: "商品情報",
    children: [
      { key: "category", label: "カテゴリ" },
      { key: "name", label: "商品名" },
    ],
  },
  { key: "price", label: "価格" },
]
```

結果:
```
| 商品情報           | 価格 |
| カテゴリ | 商品名 |      |
```

</details>

<details>
<summary><strong>スタイル（CellStyle）</strong></summary>

```typescript
{
  // フォント
  fontFamily?: string,
  fontSize?: number,
  bold?: boolean,
  italic?: boolean,
  underline?: boolean,
  strike?: boolean,

  // 色
  color?: string,    // 文字色 "#RRGGBB"
  fill?: string,     // 背景色 "#RRGGBB"

  // 配置
  align?: "left" | "center" | "right",

  // 書式
  format?: "string" | "number" | "date",
  decimalPlaces?: number,
  thousandsSeparator?: boolean,
}
```

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `fontFamily` | `string` | フォント名 |
| `fontSize` | `number` | フォントサイズ |
| `bold` | `boolean` | 太字 |
| `italic` | `boolean` | 斜体 |
| `underline` | `boolean` | 下線 |
| `strike` | `boolean` | 取り消し線 |
| `color` | `string` | 文字色（#RRGGBB形式） |
| `fill` | `string` | 背景色（#RRGGBB形式） |
| `align` | `"left"` \| `"center"` \| `"right"` | 水平配置 |
| `format` | `"string"` \| `"number"` \| `"date"` | セル書式 |
| `decimalPlaces` | `number` | 小数点以下の桁数 |
| `thousandsSeparator` | `boolean` | 3桁区切りを使用 |

### テーブルスタイル（TableStyle）

```typescript
{
  header?: CellStyle,  // ヘッダー行のスタイル
  body?: CellStyle,    // ボディ行のスタイル
}
```

### スタイルの優先度（低 → 高）

1. プリセット
2. テーブルスタイル（`style.header` / `style.body`）
3. 列スタイル（`columns[].style`）
4. 条件付きスタイル（`conditionalStyle`）
5. セル単位スタイル（`data[]._style`）

</details>

<details>
<summary><strong>罫線（BorderStyle）</strong></summary>

```typescript
{
  outline?: LineStyle,      // 外枠（テーブル全体）
  headerBody?: LineStyle,   // ヘッダーとボディの境界
  headerInner?: LineStyle,  // ヘッダー内部
  bodyInner?: LineStyle,    // ボディ内部
  borderColor?: string,     // 罫線色 "#RRGGBB"
}
```

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `outline` | `LineStyle` | テーブル外枠の罫線 |
| `headerBody` | `LineStyle` | ヘッダーとボディの境界線 |
| `headerInner` | `LineStyle` | ヘッダー内部の罫線 |
| `bodyInner` | `LineStyle` | ボディ内部の罫線 |
| `borderColor` | `string` | 罫線の色（#RRGGBB形式） |

### LineStyle

`"thin"` | `"medium"` | `"thick"` | `"dotted"` | `"dashed"` | `"double"`

| LineStyle | 説明 |
|-----------|------|
| `thin` | 細線 |
| `medium` | 中線 |
| `thick` | 太線 |
| `dotted` | 点線 |
| `dashed` | 破線 |
| `double` | 二重線 |

</details>

<details>
<summary><strong>画像オプション（ImageOptions）</strong></summary>

```typescript
.image({
  source: Buffer | string,  // Bufferまたはファイルパス
  width?: number,           // 幅（ピクセル）
  height?: number,          // 高さ（ピクセル）
  row?: number,             // 行位置（0-indexed）
  col?: number,             // 列位置（0-indexed）
})
```

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `source` | `Buffer` \| `string` | 画像データまたはファイルパス |
| `width` | `number` | 画像の幅（ピクセル） |
| `height` | `number` | 画像の高さ（ピクセル） |
| `row` | `number` | 配置する行（0から開始） |
| `col` | `number` | 配置する列（0から開始） |

</details>

<details>
<summary><strong>テキストオプション（TextInput）</strong></summary>

```typescript
// シンプルなテキスト
.text("タイトル")

// スタイル付きテキスト
.text({
  value: "重要なテキスト",
  style: { bold: true, fontSize: 14, color: "#FF0000" }
})
```

| 形式 | 説明 |
|------|------|
| `string` | プレーンテキスト |
| `{ value, style? }` | スタイル付きテキスト |

</details>

<details>
<summary><strong>出力（NodeOutput / BrowserOutput）</strong></summary>

### Node.js出力

```typescript
const output = await xlkit().sheet().table({...}).getNode();

// ファイルに保存
await output.saveToFile("./report.xlsx");

// Bufferとして取得（API応答などに利用）
const buffer = await output.toBuffer();
```

### ブラウザ出力

```typescript
const output = await xlkit().sheet().table({...}).getBrowser();

// ダウンロード
await output.download("report.xlsx");
```

</details>

<details>
<summary><strong>読み取りAPI</strong></summary>

```typescript
import { read } from "xlkit";

// ファイルパスまたはBufferから読み込み
const workbook = await read("report.xlsx");
// または
const workbook = await read(buffer);
```

### WorkbookReader

| プロパティ/メソッド | 戻り値 | 説明 |
|-------------------|--------|------|
| `sheetNames` | `string[]` | シート名の一覧 |
| `sheetCount` | `number` | シート数 |
| `sheet(name)` | `SheetReader` | 名前でシートを取得 |
| `sheetAt(index)` | `SheetReader` | インデックスでシートを取得 |

### SheetReader

| プロパティ/メソッド | 戻り値 | 説明 |
|-------------------|--------|------|
| `name` | `string` | シート名 |
| `rowCount` | `number` | 行数 |
| `columnCount` | `number` | 列数 |
| `mergedCells` | `string[]` | マージ情報（"A1:B2"形式） |
| `cell(address)` | `CellReader` | A1形式でセルを取得 |
| `cellAt(row, col)` | `CellReader` | 行・列番号でセルを取得 |

### CellReader

| プロパティ | 戻り値 | 説明 |
|-----------|--------|------|
| `value` | `string \| number \| boolean \| null` | セルの値 |
| `style` | `CellStyle \| undefined` | セルのスタイル |
| `border` | `CellBorder \| undefined` | セルの罫線情報 |

</details>

---

## 使い方例

> **参考**: より多くの使用例は[結合テスト](https://github.com/yn1323/xlkit/tree/main/tests)を参照してください。

<details>
<summary><strong>基本的なテーブル</strong></summary>

```typescript
const output = await xlkit()
  .sheet("データ")
  .table({
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
    ],
    data: [
      { name: "りんご", price: 100 },
      { name: "みかん", price: 80 },
    ],
  })
  .getNode();

await output.saveToFile("basic.xlsx");
```

</details>

<details>
<summary><strong>プリセット使用</strong></summary>

```typescript
// basic: 青ヘッダー + 全罫線
.table({
  preset: "basic",
  columns: [...],
  data: [...],
})

// minimal: ヘッダー太字のみ、罫線なし
.table({
  preset: "minimal",
  columns: [...],
  data: [...],
})

// striped: 青ヘッダー + 奇数行グレー背景
.table({
  preset: "striped",
  columns: [...],
  data: [...],
})
```

</details>

<details>
<summary><strong>複数シート</strong></summary>

```typescript
const output = await xlkit()
  .sheet("売上")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "sales", label: "売上" },
    ],
    data: salesData,
  })
  .sheet("在庫")  // 2つ目のシート
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "stock", label: "在庫数" },
    ],
    data: stockData,
  })
  .getNode();
```

</details>

<details>
<summary><strong>カラム別スタイル</strong></summary>

```typescript
.table({
  columns: [
    { key: "name", label: "名前" },
    { key: "important", label: "重要", style: { bold: true } },
    { key: "warning", label: "警告", style: { color: "#FF0000" } },
    { key: "highlight", label: "ハイライト", style: { fill: "#FFFF00" } },
  ],
  data: [...],
})
```

</details>

<details>
<summary><strong>マルチヘッダー（階層ヘッダー）</strong></summary>

```typescript
.table({
  columns: [
    {
      label: "商品情報",
      children: [
        { key: "category", label: "カテゴリ" },
        { key: "name", label: "商品名" },
      ],
    },
    { key: "price", label: "価格" },
    { key: "quantity", label: "数量" },
  ],
  data: [
    { category: "食品", name: "りんご", price: 100, quantity: 50 },
    { category: "食品", name: "みかん", price: 80, quantity: 100 },
  ],
})
```

3階層も可能:

```typescript
{
  label: "商品",
  children: [
    {
      label: "詳細",
      children: [
        { key: "category", label: "カテゴリ" },
        { key: "name", label: "商品名" },
      ],
    },
  ],
}
```

</details>

<details>
<summary><strong>同値セルマージ</strong></summary>

```typescript
// テーブル全体でマージ
.table({
  mergeSameValues: true,
  columns: [
    { key: "category", label: "カテゴリ" },
    { key: "name", label: "商品名" },
    { key: "price", label: "価格" },
  ],
  data: [
    { category: "食品", name: "りんご", price: 100 },
    { category: "食品", name: "みかん", price: 80 },   // 「食品」が縦マージされる
    { category: "家電", name: "テレビ", price: 50000 },
    { category: "家電", name: "冷蔵庫", price: 80000 }, // 「家電」が縦マージされる
  ],
})

// 列単位でマージ
.table({
  columns: [
    { key: "category", label: "カテゴリ", mergeSameValues: true },  // この列のみマージ
    { key: "name", label: "商品名" },  // マージしない
    { key: "price", label: "価格" },
  ],
  data: [...],
})
```

</details>

<details>
<summary><strong>罫線</strong></summary>

```typescript
// 外枠のみ
.table({
  columns: [...],
  data: [...],
  border: { outline: "medium" },
})

// ヘッダー下線のみ
.table({
  columns: [...],
  data: [...],
  border: { headerBody: "thin" },
})

// フルカスタマイズ
.table({
  columns: [...],
  data: [...],
  border: {
    outline: "medium",
    headerBody: "medium",
    headerInner: "thin",
    bodyInner: "thin",
    borderColor: "#000080",
  },
})
```

</details>

<details>
<summary><strong>画像挿入</strong></summary>

```typescript
import { readFileSync } from "fs";

const logoBuffer = readFileSync("./logo.png");

const output = await xlkit()
  .sheet("レポート")
  .text({ value: "月次レポート", style: { bold: true, fontSize: 16 } })
  .space(1)
  .image({
    source: logoBuffer,
    width: 150,
    height: 75,
  })
  .space(2)
  .table({
    preset: "basic",
    columns: [...],
    data: [...],
  })
  .getNode();
```

</details>

<details>
<summary><strong>テキスト + テーブル組み合わせ</strong></summary>

```typescript
const output = await xlkit()
  .sheet("レポート")
  .text({ value: "売上レポート", style: { bold: true, fontSize: 16 } })
  .text("2024年1月分")
  .space(2)
  .table({
    preset: "basic",
    columns: [...],
    data: [...],
  })
  .space(1)
  .text("※ 金額は税抜きです")
  .getNode();
```

</details>

<details>
<summary><strong>セル単位スタイル（_style）</strong></summary>

```typescript
.table({
  columns: [
    { key: "name", label: "名前" },
    { key: "price", label: "価格" },
    { key: "status", label: "ステータス" },
  ],
  data: [
    { name: "通常商品", price: 100, status: "在庫あり" },
    {
      name: "特価商品",
      price: 50,
      status: "セール中",
      _style: {
        price: { bold: true, fill: "#FFFF00" },  // 価格列を強調
        status: { color: "#FF0000" },            // ステータスを赤文字
      },
    },
    {
      name: "品切れ",
      price: 200,
      status: "在庫なし",
      _style: {
        status: { color: "#999999", italic: true },
      },
    },
  ],
})
```

</details>

<details>
<summary><strong>条件付きスタイル</strong></summary>

```typescript
.table({
  columns: [
    { key: "name", label: "商品名" },
    { key: "price", label: "価格" },
    { key: "profit", label: "利益率" },
  ],
  data: [...],
  conditionalStyle: (row, col) => {
    // 利益率が負の場合は赤文字
    if (col === "profit" && row.profit < 0) {
      return { color: "#FF0000" };
    }
    // 価格が10000以上の場合は太字
    if (col === "price" && row.price >= 10000) {
      return { bold: true };
    }
    return {};
  },
})
```

</details>

<details>
<summary><strong>列幅自動調整</strong></summary>

```typescript
// ヘッダーとボディ両方の最大幅で調整
.table({
  autoWidth: "all",
  columns: [...],
  data: [...],
})

// ボディのみで調整（ヘッダーは無視）
.table({
  autoWidth: "body",
  columns: [...],
  data: [...],
})
```

</details>

<details>
<summary><strong>数値書式</strong></summary>

```typescript
.table({
  columns: [
    { key: "name", label: "商品名" },
    {
      key: "price",
      label: "価格",
      style: {
        format: "number",
        thousandsSeparator: true,  // 3桁区切り: 1,234,567
      },
    },
    {
      key: "rate",
      label: "割合",
      style: {
        format: "number",
        decimalPlaces: 2,  // 小数点2桁: 12.34
      },
    },
  ],
  data: [
    { name: "商品A", price: 1234567, rate: 12.3456 },
  ],
})
```

</details>

<details>
<summary><strong>読み取りAPI</strong></summary>

```typescript
import { read } from "xlkit";

// Excelファイルを読み込み
const workbook = await read("./report.xlsx");

// シート一覧を取得
console.log(workbook.sheetNames);  // ["売上", "在庫"]

// シートを取得
const sheet = workbook.sheet("売上");

// セルの値を取得
console.log(sheet.cell("A1").value);  // "商品名"
console.log(sheet.cell("B2").value);  // 100

// セルのスタイルを取得
const style = sheet.cell("A1").style;
console.log(style?.bold);  // true
console.log(style?.fill);  // "#4472C4"

// マージ情報を取得
console.log(sheet.mergedCells);  // ["A1:B1", "C1:C2"]

// 行・列番号でアクセス（0-indexed）
console.log(sheet.cellAt(0, 0).value);  // A1の値
console.log(sheet.cellAt(1, 1).value);  // B2の値
```

</details>

---

## プリセット一覧

| プリセット | ヘッダー | ボディ | 罫線 |
|-----------|---------|--------|------|
| `basic` | 青背景（#4472C4）・白文字・太字 | - | 全罫線（thin） |
| `minimal` | 太字のみ | - | なし |
| `striped` | 青背景（#4472C4）・白文字・太字 | 奇数行グレー背景（#F2F2F2） | 全罫線（thin） |

---

## サポートしていない機能

| 機能 | 理由 |
|------|------|
| チャート | スコープ外 |
| 数式 | 計算はプログラム側で行う想定 |
| 既存Excelへの追記 | 常に新規作成のみ |
| 列幅・行高の読み取り | 読み取りAPIの対象外 |
| ピボットテーブル | スコープ外 |
| マクロ | スコープ外 |

---

## Excel制約

xlkitはExcelの制約を自動でチェックし、違反時はエラーをスローします。

| 項目 | 制約 |
|------|------|
| シート名 | 最大31文字 |
| シート名禁止文字 | `: \ / ? * [ ]` |
| 最大行数 | 1,048,576行 |
| 最大列数 | 16,384列 |

---

## ライセンス

MIT
