---
sidebar_position: 3
---

# クイックスタート

xlmakeを使って、シンプルなExcelファイルを生成してみましょう。

## Node.js環境での使用

```typescript
import { xlmake } from "xlmake";

const salesData = [
  { name: "りんご", price: 100, quantity: 50 },
  { name: "みかん", price: 80, quantity: 100 },
  { name: "バナナ", price: 120, quantity: 30 },
];

const output = await xlmake()
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

## ブラウザ環境での使用

```typescript
import { xlmake } from "xlmake";

const output = await xlmake()
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

## 基本的な使い方

### 1. xlmake()でビルダーを作成

```typescript
const builder = xlmake();
```

### 2. sheet()でシートを追加

```typescript
builder.sheet("シート名");
```

### 3. table()でテーブルを追加

```typescript
builder.table({
  preset: "basic",
  columns: [...],
  data: [...],
});
```

### 4. getNode() / getBrowser()で出力

```typescript
// Node.js
const output = await builder.getNode();
await output.saveToFile("report.xlsx");

// ブラウザ
const output = await builder.getBrowser();
await output.download("report.xlsx");
```

## 次のステップ

- [基本的な使い方](./guides/basic-usage.md)で詳しい使い方を学ぶ
- [APIリファレンス](./api-reference/overview.md)で利用可能な機能を確認する
- [Examples](./examples/basic-table.md)でサンプルコードを見る
