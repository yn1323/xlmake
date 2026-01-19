# xlmake API設計書

## 概要

本ドキュメントは、xlmakeのAPI設計について決定した事項をまとめたもの。

---

## 1. エントリーポイント

### 書き込みAPI

```typescript
xlmake()
  .sheet("シート名")
  .table({...})
  .browser.download("report.xlsx")
```

| 項目 | 決定 |
|------|------|
| 形式 | 関数呼び出し型（`xlmake()`） |
| バリデーション | Zodを使用 |
| ビルダーパターン | ミュータブル（同じオブジェクトを変更） |

### 読み取りAPI

```typescript
const workbook = await xlmake.read("report.xlsx")
```

---

## 2. シートの扱い

| 項目 | 決定 |
|------|------|
| `.sheet()` | **必須**（省略不可） |
| 引数なし | デフォルト名（"Sheet1", "Sheet2", ...） |

```typescript
// シート名指定
xlmake()
  .sheet("売上データ")
  .table({...})

// デフォルト名
xlmake()
  .sheet()              // → "Sheet1"
  .table({...})

// 複数シート
xlmake()
  .sheet("売上")
  .table({...})
  .sheet()              // → "Sheet2"
  .table({...})
```

---

## 3. ブロックの種類

xlmakeは「ブロックを上から積み上げる」方式。

### 3.1 テーブルブロック（`.table()`）

```typescript
.table({
  preset?: "basic" | "minimal" | "striped",
  columns: [
    { key: "name", label: "商品名" },
    { key: "price", label: "価格", style?: { align: "right" } },
  ],
  data: [...],
  autoWidth?: "all" | "body" | false,  // デフォルト: "all"
  mergeSameValues?: boolean,            // 全体設定
  style?: {
    header?: {...},
    body?: {...},
  },
  border?: {...},
})
```

#### columnsの定義

- **keyで指定**（accessor関数は不要）
- ネストしたデータはxlmakeに渡す前に解消する前提

```typescript
columns: [
  { key: "name", label: "商品名" },
  { key: "price", label: "価格" },
]
```

#### ヘッダーのツリー構造（マージ）

```typescript
columns: [
  {
    label: "商品情報",       // 親ヘッダー（水平マージ）
    children: [
      { key: "name", label: "商品名" },
      { key: "category", label: "カテゴリ" },
    ]
  },
  { key: "price", label: "価格" },  // 親なし（垂直マージ）
]
```

**Excel出力イメージ:**
```
┌─────────────────┬───────┐
│    商品情報      │ 価格  │
├────────┬────────┤       │
│ 商品名 │カテゴリ│       │
├────────┼────────┼───────┤
│  PC    │ 電子機器│ 100  │
└────────┴────────┴───────┘
```

#### ボディの自動マージ（`mergeSameValues`）

同じ値が続いたら垂直方向にマージする。

```typescript
.table({
  mergeSameValues: true,  // 全体設定
  columns: [
    { key: "category", label: "カテゴリ", mergeSameValues: true },  // 列単位設定
    { key: "name", label: "商品名" },
  ],
})
```

**優先度:**
| 全体設定 | 列設定 | 結果 |
|----------|--------|------|
| あり | あり | すべての列でマージ |
| あり | なし | すべての列でマージ |
| なし | あり | 指定の列のみマージ |
| なし | なし | マージしない |

#### 列幅の自動調整（`autoWidth`）

| 値 | 説明 |
|----|------|
| `"all"` | ヘッダー含めて自動調整（**デフォルト**） |
| `"body"` | ボディのみで自動調整 |
| `false` | 自動調整なし（Excelのデフォルト幅） |

**複数テーブルの場合:** シート内の全テーブルで一番長いセルに合わせる

---

### 3.2 テキストブロック（`.text()`）

```typescript
// 1行1セル（シンプル）
.text("タイトル")

// 複数行・複数セル（二次元配列）
.text([
  ["A1の値", "B1の値", "C1の値"],
  ["A2の値", "B2の値", "C2の値"],
])

// 全体スタイル
.text([
  ["タイトル"],
  ["サブタイトル"],
], { bold: true, fontSize: 14 })

// セルごとスタイル
.text([
  [{ value: "タイトル", style: { bold: true, fontSize: 18 } }],
  [{ value: "サブタイトル", style: { fontSize: 12 } }],
])
```

**制約:** 文字列と `{ value, style }` オブジェクトの**混在はNG**

```typescript
// NG: 混在
.text([
  ["普通のテキスト", { value: "太字", style: { bold: true } }],
])
```

---

### 3.3 画像ブロック（`.image()`）

```typescript
.image({
  cell: "A1",           // セル位置（必須）
  src: "logo.png",      // 画像ソース（必須）
  width?: 100,          // 幅（オプション）
  height?: 50,          // 高さ（オプション）
})
```

**srcに渡せる形式:**
| 形式 | 例 | 環境 |
|------|-----|------|
| ファイルパス | `"./images/logo.png"` | Node.js |
| URL | `"https://example.com/logo.png"` | 両方 |
| Buffer | `Buffer.from(...)` | Node.js |
| Blob | `new Blob(...)` | ブラウザ |

---

### 3.4 スペース（`.space()`）

```typescript
.space(2)  // 2行空ける
```

---

## 4. 出力方法

**名前空間で環境を明確化:**

| メソッド | 環境 | 動作 |
|----------|------|------|
| `.browser.download("report.xlsx")` | ブラウザ | Blob作成 → ダウンロード処理まで自動 |
| `.node.saveToFile("./report.xlsx")` | Node.js | ファイルに保存 |
| `.node.toBuffer()` | Node.js | Bufferを返す（APIレスポンス用） |

```typescript
// ブラウザ
const handleClick = async () => {
  await xlmake()
    .sheet("売上")
    .table({...})
    .browser.download("report.xlsx")
}

// Node.js: ファイル保存
await xlmake()
  .sheet("売上")
  .table({...})
  .node.saveToFile("./output/report.xlsx")

// Node.js: APIレスポンス
app.get("/excel", async (req, res) => {
  const buffer = await xlmake()
    .sheet("売上")
    .table({...})
    .node.toBuffer()

  res.send(buffer)
})
```

---

## 5. 読み取りAPI

### エントリーポイント

```typescript
const workbook = await xlmake.read(source)
```

**sourceに渡せる形式:**
| 形式 | 環境 |
|------|------|
| ファイルパス | Node.js |
| Buffer | Node.js |
| Blob | ブラウザ |

※ URLは不要

### 使用例

```typescript
const workbook = await xlmake.read("report.xlsx")

// シート取得
const sheet = workbook.sheet("売上")  // or workbook.sheets[0]

// セルの値
sheet.cell("A1").value  // → "タイトル"

// セルのスタイル
sheet.cell("A1").style  // → { bold: true, fill: "#4472C4", ... }

// マージ情報
sheet.merges  // → [{ start: "A1", end: "C1" }, ...]

// シート名一覧
workbook.sheetNames  // → ["売上", "在庫"]
```

---

## 6. スタイル

### 6.1 プリセット

| プリセット | 説明 |
|------------|------|
| なし（デフォルト） | 罫線なし、装飾なし |
| `"basic"` | 罫線あり + ヘッダー背景色 |
| `"minimal"` | 外枠のみ、シンプル |
| `"striped"` | 縞模様（1行おき背景色） |

```typescript
.table({
  preset: "basic",
  ...
})
```

### 6.2 カスケーディング（優先度）

後から指定したものが優先される（CSSと同じ考え方）

```
1. プリセット           ← ベース
   ↓ 上書き
2. 列単位スタイル
   ↓ 上書き
3. 行の種類（header / body）
   ↓ 上書き
4. セル単位スタイル（_style）  ← 最優先
```

### 6.3 スタイル指定方法

#### 1. プリセット

```typescript
.table({
  preset: "basic",
  ...
})
```

#### 2. 列単位スタイル

```typescript
columns: [
  { key: "name", label: "商品名" },
  { key: "price", label: "価格", style: { align: "right" } },
]
```

#### 3. 行の種類でスタイル指定

```typescript
style: {
  header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },
  body: { border: "thin" },
}
```

#### 4. セル単位スタイル（`_style`）

```typescript
data: [
  { name: "PC", price: 100, _style: { price: { bold: true } } },
  { name: "モニタ", price: 50 },
]
```

---

## 7. グループヘッダー

**不要。** 同じようなことをしたい場合は `.table().table()` で対応。

```typescript
xlmake()
  .sheet("売上")
  .text("2024年1月")
  .table({ columns: [...], data: januaryData })
  .space(1)
  .text("2024年2月")
  .table({ columns: [...], data: februaryData })
  .node.saveToFile("report.xlsx")
```

---

## 8. 完全なAPIサンプル

```typescript
import { xlmake } from "xlmake"

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
      { key: "quantity", label: "数量", style: { align: "right" } },
    ],
    data: salesData,
    autoWidth: "all",
    style: {
      header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },
    },
  })
  .node.saveToFile("report.xlsx")

// 複雑なヘッダー（マージあり）
await xlmake()
  .sheet("詳細レポート")
  .table({
    preset: "basic",
    columns: [
      {
        label: "商品情報",
        children: [
          { key: "category", label: "カテゴリ", mergeSameValues: true },
          { key: "name", label: "商品名" },
        ],
      },
      { key: "price", label: "価格" },
    ],
    data: detailData,
  })
  .node.saveToFile("detail.xlsx")

// ブラウザでダウンロード
const handleDownload = async () => {
  await xlmake()
    .sheet("売上")
    .table({
      columns: [...],
      data: salesData,
    })
    .browser.download("report.xlsx")
}

// 読み取り
const workbook = await xlmake.read("report.xlsx")
const sheet = workbook.sheet("売上データ")
console.log(sheet.cell("A1").value)
console.log(sheet.cell("A1").style)
```

---

## 決定の経緯

### エントリーポイント
- 関数呼び出し型（`xlmake()`）を採用。Zodなど最近のライブラリでよく見るパターン。

### Zodの採用
- ランタイムでのバリデーションが必要。JSユーザーもいる可能性があるため。

### シートの扱い
- `.sheet()` は必須。暗黙的なデフォルトシートは「宣言的API」の思想に反する。
- 引数なしでデフォルト名（"Sheet1"等）を採用し、シンプルなケースでも書きやすく。

### ビルダーパターン
- ミュータブルを採用。シンプルで実装も容易。

### columnsの定義
- keyで指定（accessor関数は不要）。ネストしたデータはxlmakeに渡す前に解消する前提。

### 出力方法
- 名前空間（`browser.*` / `node.*`）で環境を明確化。DXを重視。

### 自動マージ
- `mergeSameValues` という名前を採用。意味が明確。

### プリセット
- `basic`, `minimal`, `striped` の3種類。指定なしは罫線なし。

### スタイルカスケーディング
- セル単位（`_style`）が最優先。条件付きより上。

### グループヘッダー
- 不要。`.table().table()` で対応可能。シンプルさを優先。

### 読み取りAPI
- `xlmake.read()` でエントリーポイント。URLは不要（ファイルパス / Buffer / Blob のみ）。
