---
sidebar_position: 1
---

# 基本的な使い方

xlmakeの基本的な使い方を説明します。

## ビルダーパターン

xlmakeはメソッドチェーンによるビルダーパターンを採用しています。

```typescript
import { xlmake } from "xlmake";

const output = await xlmake()     // 1. ビルダーを作成
  .sheet("シート名")              // 2. シートを追加
  .table({ ... })                // 3. テーブルを追加
  .getNode();                    // 4. 出力オブジェクトを取得

await output.saveToFile("output.xlsx");  // 5. ファイルに保存
```

## シートの操作

### シートを追加する

```typescript
xlmake().sheet("売上データ")  // 名前を指定
xlmake().sheet()              // 名前を省略（Sheet1, Sheet2... と自動生成）
```

### 複数シートを作成する

```typescript
const output = await xlmake()
  .sheet("売上")
  .table({ ... })
  .sheet("在庫")      // 2つ目のシート
  .table({ ... })
  .sheet("顧客")      // 3つ目のシート
  .table({ ... })
  .getNode();
```

## テーブルの追加

### 基本的なテーブル

```typescript
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
```

### プリセットを使う

```typescript
.table({
  preset: "basic",  // 青ヘッダー + 全罫線
  columns: [...],
  data: [...],
})
```

## テキストの追加

```typescript
.text("シンプルなテキスト")

.text({
  value: "スタイル付きテキスト",
  style: { bold: true, fontSize: 14 }
})
```

## 空行の追加

```typescript
.space()     // 1行の空行
.space(3)    // 3行の空行
```

## 出力

### Node.js

```typescript
const output = await xlmake()
  .sheet("データ")
  .table({ ... })
  .getNode();

// ファイルに保存
await output.saveToFile("report.xlsx");

// Bufferとして取得（API応答などに利用）
const buffer = await output.toBuffer();
```

### ブラウザ

```typescript
const output = await xlmake()
  .sheet("データ")
  .table({ ... })
  .getBrowser();

// ダウンロード
await output.download("report.xlsx");
```

## 完全な例

```typescript
import { xlmake } from "xlmake";

const salesData = [
  { name: "りんご", price: 100, quantity: 50 },
  { name: "みかん", price: 80, quantity: 100 },
  { name: "バナナ", price: 120, quantity: 30 },
];

const output = await xlmake()
  .sheet("売上レポート")
  .text({ value: "月次売上レポート", style: { bold: true, fontSize: 16 } })
  .text("2024年1月分")
  .space(2)
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
      { key: "quantity", label: "数量" },
    ],
    data: salesData,
  })
  .space(1)
  .text("※ 金額は税抜きです")
  .getNode();

await output.saveToFile("sales-report.xlsx");
```

## 次のステップ

- [スタイリング](./styling.md) - スタイルのカスタマイズ方法
- [複数シート](./multi-sheet.md) - 複数シートの詳細な使い方
- [API概要](../api-reference/overview.md) - 利用可能なAPIの一覧
