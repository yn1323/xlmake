---
sidebar_position: 4
---

# セルマージ

同じ値のセルを縦方向にマージする例です。

## テーブル全体でマージ

`mergeSameValues: true`を指定すると、全ての列で同じ値のセルがマージされます。

```typescript
const output = await xlmake()
  .sheet("売上")
  .table({
    preset: "basic",
    mergeSameValues: true,
    columns: [
      { key: "category", label: "カテゴリ" },
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
    ],
    data: [
      { category: "食品", name: "りんご", price: 100 },
      { category: "食品", name: "みかん", price: 80 },
      { category: "家電", name: "テレビ", price: 50000 },
      { category: "家電", name: "冷蔵庫", price: 80000 },
    ],
  })
  .getNode();
```

結果:
```
| カテゴリ | 商品名 | 価格  |
| 食品     | りんご | 100   |
|   ↑     | みかん | 80    |  ← 「食品」がマージ
| 家電     | テレビ | 50000 |
|   ↑     | 冷蔵庫 | 80000 |  ← 「家電」がマージ
```

## 列単位でマージ

特定の列だけマージしたい場合は、カラム定義で`mergeSameValues`を指定します。

```typescript
const output = await xlmake()
  .sheet("売上")
  .table({
    preset: "basic",
    columns: [
      { key: "category", label: "カテゴリ", mergeSameValues: true },  // この列のみマージ
      { key: "name", label: "商品名" },  // マージしない
      { key: "price", label: "価格" },   // マージしない
    ],
    data: [
      { category: "食品", name: "りんご", price: 100 },
      { category: "食品", name: "みかん", price: 80 },
      { category: "家電", name: "テレビ", price: 50000 },
      { category: "家電", name: "冷蔵庫", price: 80000 },
    ],
  })
  .getNode();
```

## 複数列でマージ

複数の列でそれぞれマージすることもできます。

```typescript
const output = await xlmake()
  .sheet("売上")
  .table({
    preset: "basic",
    columns: [
      { key: "region", label: "地域", mergeSameValues: true },
      { key: "category", label: "カテゴリ", mergeSameValues: true },
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
    ],
    data: [
      { region: "東京", category: "食品", name: "りんご", price: 100 },
      { region: "東京", category: "食品", name: "みかん", price: 80 },
      { region: "東京", category: "家電", name: "テレビ", price: 50000 },
      { region: "大阪", category: "食品", name: "バナナ", price: 120 },
      { region: "大阪", category: "食品", name: "ぶどう", price: 300 },
    ],
  })
  .getNode();
```

## マージセルの配置

`mergeSameValues`でマージされたセルは、自動的に**上寄せ**になります。
これにより、マージされた範囲内でテキストが上端に配置され、見やすくなります。

```typescript
// マージされたセルは自動で上寄せ（vertical: "top"）
.table({
  mergeSameValues: true,
  columns: [
    { key: "category", label: "カテゴリ" },  // マージ時は自動で上寄せ
    { key: "name", label: "商品名" },
  ],
  data: [...],
})
```

## 関連

- [.table() API](../api-reference/table.md) - mergeSameValuesの詳細
- [スタイルAPI](../api-reference/styling.md) - alignの詳細
