---
sidebar_position: 5
---

# 罫線

テーブルに罫線を追加する例です。

## 外枠のみ

```typescript
const output = await xlmake()
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
    border: { outline: "medium" },
  })
  .getNode();
```

## ヘッダー下線のみ

```typescript
const output = await xlmake()
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
    border: { headerBody: "thin" },
  })
  .getNode();
```

## 全罫線

```typescript
const output = await xlmake()
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
    border: {
      outline: "thin",
      headerBody: "thin",
      headerInner: "thin",
      bodyInner: "thin",
    },
  })
  .getNode();
```

## フルカスタマイズ

罫線の種類と色を詳細に設定できます。

```typescript
const output = await xlmake()
  .sheet("レポート")
  .table({
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
      { key: "quantity", label: "数量" },
    ],
    data: [
      { name: "りんご", price: 100, quantity: 50 },
      { name: "みかん", price: 80, quantity: 100 },
      { name: "バナナ", price: 120, quantity: 30 },
    ],
    border: {
      outline: "medium",      // 外枠は中線
      headerBody: "medium",   // ヘッダーとボディの境界は中線
      headerInner: "thin",    // ヘッダー内部は細線
      bodyInner: "thin",      // ボディ内部は細線
      borderColor: "#000080", // 紺色
    },
  })
  .getNode();
```

## LineStyleの種類

| 値 | 説明 |
|----|------|
| `"thin"` | 細線 |
| `"medium"` | 中線 |
| `"thick"` | 太線 |
| `"dotted"` | 点線 |
| `"dashed"` | 破線 |
| `"double"` | 二重線 |

## 関連

- [スタイルAPI](../api-reference/styling.md) - BorderStyleの詳細
