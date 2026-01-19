# xlmake 機能仕様書

## 概要

本ドキュメントは、xlmake の機能仕様を定義する。
ユーザーとの会話を通じて洗い出した要件をまとめたもの。

---

## 1. コンセプト

### 基本思想
- **ブロック単位で上から積み上げる**
- 宣言的API（コードを見れば最終的なExcelの構造がわかる）
- メソッドチェーン型

### イメージ
```
┌─────────────────────────┐
│ 画像ブロック（セル位置指定）│
├─────────────────────────┤
│ テキストブロック          │
├─────────────────────────┤
│ 余白（○行）              │
├─────────────────────────┤
│ テーブルブロック          │
│  グループヘッダー         │
│  ヘッダー行              │
│  ボディ行                │
└─────────────────────────┘
```

---

## 2. 基本構造

| 項目 | 仕様 |
|------|------|
| 複数シート | 対応 |
| ブック名 | ファイル名として指定 |
| シート名 | `.sheet("シート名")` で指定 |
| パフォーマンス | **ストリーミングのみ**（ExcelJSのWorkbookWriter使用） |

---

## 3. ブロックの種類

### 3.1 テーブルブロック

表データを出力するブロック。

#### ヘッダー
- **ツリー構造**で定義（水平・垂直マージ対応）
- 親ヘッダーを指定すると自動でマージ

```typescript
columns: [
  {
    label: "商品情報",  // 親ヘッダー（水平マージ）
    children: [
      { key: "name", label: "商品名" },
      { key: "category", label: "カテゴリ" },
    ]
  },
  { key: "price", label: "価格" },  // 親がない場合は垂直マージ（複数行ヘッダー時）
]
```

#### ボディ
- データ配列を渡す
- **垂直方向の自動マージ**オプション（同じ値が続いたらマージ）

```typescript
columns: [
  { key: "category", label: "カテゴリ", autoMerge: true },  // 同値で垂直マージ
  { key: "name", label: "商品名" },
]
```

#### グループヘッダー
- データをグループ分けしたときの見出し行
- 行の種類として `header` / `body` / `groupHeader` がある

#### 列幅
- **デフォルト**: Excelのデフォルト幅
- **手動指定**: 特定列の幅を指定可能
- **自動調整オプション**:
  - `"all"`: ヘッダー含めて自動調整
  - `"body"`: ボディのみで自動調整
  - `false`: 自動調整なし
- **計算方法**: 半角・全角で固定px値を持ち、文字数ベースで計算

```typescript
.table({
  columns: [...],
  data: [...],
  autoWidth: "body" | "all" | false,
})
```

---

### 3.2 テキストブロック

テキストを出力するブロック。

- **内部実装**: 罫線なしのテーブルとして扱う
- **改行**: 改行すると次の行（セル）に配置
- **余白**: 「余白○行」オプションで間隔を調整

---

### 3.3 画像ブロック

画像を配置するブロック。

| 項目 | 仕様 |
|------|------|
| 位置指定 | **セル絶対位置**（例: "A1"） |
| サイズ | デフォルトは元サイズ、オプションで幅・高さ指定可能 |
| 用途例 | マル秘マーク、会社ロゴなど |

```typescript
.image({
  cell: "A1",
  src: "logo.png",
  width: 100,   // オプション
  height: 50,   // オプション
})
```

**注意**: ストリーミングの制約により、画像は書く順番に注意（上から順に宣言すればOK）

---

## 4. スタイル

### 4.1 スタイルの優先度（カスケーディング）

後から指定したものが優先される（CSSと同じ考え方）

```
1. プリセット（テーマ） ← ベース
   ↓ 上書き
2. 列単位スタイル
   ↓ 上書き
3. 行の種類（ヘッダー / ボディ / グループヘッダー）
   ↓ 上書き
4. セル単位スタイル（_style プロパティ）
   ↓ 上書き
5. 条件付きスタイル
```

### 4.2 スタイル指定方法

#### 1. プリセット（テーマ）
```typescript
.table({
  preset: "basic",  // 罫線+ヘッダー色がセットになってる
  ...
})
```

#### 2. 列単位スタイル
```typescript
columns: [
  { key: "name", label: "商品名" },
  { key: "price", label: "価格", style: { align: "right", format: "number" } },
]
```

#### 3. 行の種類でスタイル指定
```typescript
style: {
  header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },
  body: { border: "thin" },
  groupHeader: { bold: true, fill: "#E0E0E0" },
}
```

#### 4. セル単位スタイル
```typescript
data: [
  { name: "PC", price: 100, _style: { price: { bold: true } } },
  { name: "モニタ", price: 50 },
]
```

### 4.3 スタイル項目一覧

#### フォント
| 項目 | 説明 |
|------|------|
| fontFamily | フォント名 |
| fontSize | フォントサイズ |
| bold | 太字 |
| italic | 斜体（イタリック） |
| underline | 下線 |
| strike | 打消し線 |
| color | 文字色 |

#### 背景
| 項目 | 説明 |
|------|------|
| fill | 背景色 |

#### 配置
| 項目 | 説明 |
|------|------|
| align | 水平配置（left / center / right） |

#### 数値書式
| 項目 | 説明 |
|------|------|
| format | 書式（string / number / date など） |
| decimalPlaces | 小数点以下桁数 |
| thousandsSeparator | 桁区切り（カンマ） |

### 4.4 罫線

テーブル単位で指定する。

| 項目 | 説明 |
|------|------|
| outline | 外枠の罫線種類 |
| headerBody | ヘッダーとボディの境目の罫線種類 |
| headerInner | ヘッダー内部の罫線種類 |
| bodyInner | ボディ内部の罫線種類 |
| borderColor | 罫線の色 |

```typescript
.table({
  border: {
    outline: "medium",
    headerBody: "double",
    headerInner: "thin",
    bodyInner: "thin",
    borderColor: "#000000",
  }
})
```

**罫線種類**: thin, medium, thick, double, dotted, dashed など（ExcelJSに準拠）

---

## 5. パフォーマンス

### ストリーミングモード

- **ExcelJSの`stream.xlsx.WorkbookWriter`を使用**
- メモリ効率が良く、10万行以上のデータにも対応
- 小規模データでもストリーミングを使用（オーバーヘッドは軽微）

### ストリーミングの制約
- 上から順番に書く必要がある（後から戻って修正できない）
- xlmakeの「ブロック積み上げ方式」との相性は良い

### 列幅の自動調整
- データを先にスキャンして幅を計算
- 列幅を設定してからデータを書き込む

---

## 6. APIイメージ

```typescript
import { xlmake } from "xlmake";

// 基本的な使い方
xlmake()
  .sheet("売上データ")
    .text("月次売上レポート")
    .space(1)  // 1行空ける
    .table({
      preset: "basic",
      columns: [
        { key: "name", label: "商品名" },
        { key: "price", label: "価格", style: { align: "right" } },
        { key: "quantity", label: "数量", style: { align: "right" } },
      ],
      data: salesData,
      autoWidth: "body",
      style: {
        header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },
      },
      border: {
        outline: "medium",
        headerBody: "double",
        headerInner: "thin",
        bodyInner: "thin",
      },
    })
  .sheet("在庫データ")
    .image({ cell: "A1", src: "confidential.png" })
    .text("在庫一覧")
    .table({
      columns: [...],
      data: stockData,
    })
  .save("report.xlsx");

// 複雑なヘッダー（マージあり）
xlmake()
  .sheet("詳細レポート")
    .table({
      columns: [
        {
          label: "商品情報",
          children: [
            { key: "category", label: "カテゴリ", autoMerge: true },
            { key: "name", label: "商品名" },
          ],
        },
        { key: "price", label: "価格" },
      ],
      data: detailData,
    })
  .save("detail.xlsx");

// セル単位スタイル
const dataWithStyle = [
  { name: "PC", price: 100, _style: { price: { bold: true, fill: "#FFFF00" } } },
  { name: "モニタ", price: -50, _style: { price: { color: "#FF0000" } } },
];
```

---

## 7. 対象外（v1.0スコープ外）

| 機能 | 理由 |
|------|------|
| チャート | 複雑、需要限定的 |
| 数式 | 計算はプログラム側で行う |
| 既存Excelへの追記 | 複雑、需要限定的 |
| 垂直配置（上/中央/下） | 不要 |
| テキスト折り返し | 不要 |
| テキスト回転 | 不要 |
| インデント | 不要 |
| セル個別の罫線指定 | テーブル単位で十分 |
| 通常モード（非ストリーミング） | ストリーミングのみで対応 |

---

## 8. 決定の経緯

### ブロック単位の積み上げ方式
- セル位置指定は辛いので、「余白○行」みたいなオプションで対応
- テキストも罫線なしの表として扱うと統一的で使いやすい

### ストリーミングのみ
- 10万行×30列のデータを扱う必要がある
- 通常モードだとメモリ不足でクラッシュする
- ストリーミングのオーバーヘッドは小さいので、小規模でも問題なし
- 両方対応すると実装コストが高い

### 画像の配置方法
- ブロックとして積まず、セル絶対位置指定
- 用途はマル秘マークやロゴなど、固定位置に置くもの

### スタイルのカスケーディング
- 1セルずつ指定は面倒
- プリセット → 列 → 行種類 → セル → 条件付き の順で上書き
- CSSと同じ考え方で直感的

### 罫線の指定方法
- セル個別指定は不要
- テーブル単位で外枠/ヘッダーボディ境目/ヘッダー内部/ボディ内部を指定

### ヘッダーのマージ
- ツリー構造で定義すると直感的
- 親ヘッダーを持つ列は自動で水平マージ

### ボディのマージ
- 垂直方向のみ対応
- 列単位で `autoMerge: true` オプション
- 同じ値が続いたら自動でマージ
