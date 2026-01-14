---
sidebar_position: 2
---

# プリセット使用

プリセットを使うと、よく使うスタイルを簡単に適用できます。

## 利用可能なプリセット

| プリセット | ヘッダー | ボディ | 罫線 |
|-----------|---------|--------|------|
| `basic` | 青背景（#4472C4）・白文字・太字 | - | 全罫線（thin） |
| `minimal` | 太字のみ | - | なし |
| `striped` | 青背景（#4472C4）・白文字・太字 | 奇数行グレー背景（#F2F2F2） | 全罫線（thin） |

## basic

標準的なビジネス向けスタイルです。

```typescript
const output = await xlmake()
  .sheet("売上")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
      { key: "quantity", label: "数量" },
    ],
    data: [
      { name: "りんご", price: 100, quantity: 50 },
      { name: "みかん", price: 80, quantity: 100 },
    ],
  })
  .getNode();
```

## minimal

シンプルなスタイルです。罫線がなく、ヘッダーが太字のみ。

```typescript
const output = await xlmake()
  .sheet("データ")
  .table({
    preset: "minimal",
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
```

## striped

行ごとに背景色が交互に変わり、見やすいスタイルです。

```typescript
const output = await xlmake()
  .sheet("一覧")
  .table({
    preset: "striped",
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
      { key: "quantity", label: "数量" },
    ],
    data: [
      { name: "りんご", price: 100, quantity: 50 },
      { name: "みかん", price: 80, quantity: 100 },
      { name: "バナナ", price: 120, quantity: 30 },
      { name: "ぶどう", price: 300, quantity: 20 },
    ],
  })
  .getNode();
```

## プリセットのカスタマイズ

プリセットをベースに、追加のスタイルを適用できます。

```typescript
const output = await xlmake()
  .sheet("カスタム")
  .table({
    preset: "basic",
    style: {
      header: { fontSize: 14 },  // ヘッダーのフォントサイズを変更
    },
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格", style: { bold: true } },  // この列を太字
    ],
    data: [...],
  })
  .getNode();
```

## 関連

- [プリセット一覧](../reference/presets.md) - プリセットの詳細仕様
- [スタイルAPI](../api-reference/styling.md) - スタイルの優先度
