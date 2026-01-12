---
sidebar_position: 3
---

# マルチヘッダー

階層的なヘッダー（マルチヘッダー）を作成する例です。

## 2階層ヘッダー

```typescript
const output = await xlkit()
  .sheet("売上")
  .table({
    preset: "basic",
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
  .getNode();
```

結果:
```
| 商品情報           | 価格 | 数量 |
| カテゴリ | 商品名 |      |      |
| 食品     | りんご | 100  | 50   |
| 食品     | みかん | 80   | 100  |
```

## 3階層ヘッダー

さらに深い階層も作成できます。

```typescript
const output = await xlkit()
  .sheet("詳細")
  .table({
    preset: "basic",
    columns: [
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
      },
      {
        label: "数値",
        children: [
          { key: "price", label: "価格" },
          { key: "quantity", label: "数量" },
        ],
      },
    ],
    data: [
      { category: "食品", name: "りんご", price: 100, quantity: 50 },
      { category: "食品", name: "みかん", price: 80, quantity: 100 },
    ],
  })
  .getNode();
```

結果:
```
| 商品               | 数値        |
| 詳細               | 価格 | 数量 |
| カテゴリ | 商品名 |      |      |
| 食品     | りんご | 100  | 50   |
```

## 複合的なヘッダー

一部だけマルチヘッダーにすることもできます。

```typescript
const output = await xlkit()
  .sheet("レポート")
  .table({
    preset: "basic",
    columns: [
      { key: "id", label: "ID" },  // 通常のヘッダー
      {
        label: "商品情報",  // マルチヘッダー
        children: [
          { key: "category", label: "カテゴリ" },
          { key: "name", label: "商品名" },
        ],
      },
      { key: "price", label: "価格" },  // 通常のヘッダー
    ],
    data: [
      { id: 1, category: "食品", name: "りんご", price: 100 },
      { id: 2, category: "食品", name: "みかん", price: 80 },
    ],
  })
  .getNode();
```

## 関連

- [.table() API](../api-reference/table.md) - カラム定義の詳細
