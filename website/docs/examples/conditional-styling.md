---
sidebar_position: 6
---

# 条件付きスタイル

条件に基づいてセルにスタイルを適用する例です。

## conditionalStyle

`conditionalStyle`は各セルに対して呼び出され、条件に応じたスタイルを返します。

```typescript
const output = await xlmake()
  .sheet("売上")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
      { key: "profit", label: "利益率" },
    ],
    data: [
      { name: "りんご", price: 100, profit: 20 },
      { name: "みかん", price: 80, profit: -5 },
      { name: "バナナ", price: 120, profit: 15 },
    ],
    conditionalStyle: (row, col) => {
      // 利益率が負の場合は赤文字
      if (col === "profit" && row.profit < 0) {
        return { color: "#FF0000" };
      }
      // 価格が100以上の場合は太字
      if (col === "price" && row.price >= 100) {
        return { bold: true };
      }
      return {};
    },
  })
  .getNode();
```

## セル単位スタイル（_style）

データに`_style`プロパティを追加すると、特定のセルだけスタイルを適用できます。

```typescript
const output = await xlmake()
  .sheet("商品")
  .table({
    preset: "basic",
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
  .getNode();
```

## 複合例

`conditionalStyle`と`_style`を組み合わせることもできます。

```typescript
const output = await xlmake()
  .sheet("在庫")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "stock", label: "在庫数" },
      { key: "status", label: "状態" },
    ],
    data: [
      { name: "りんご", stock: 100, status: "充足" },
      { name: "みかん", stock: 5, status: "少量" },
      {
        name: "バナナ",
        stock: 0,
        status: "欠品",
        _style: {
          status: { bold: true },  // このセルだけ太字
        },
      },
    ],
    conditionalStyle: (row, col) => {
      // 在庫が10未満は黄色背景
      if (col === "stock" && row.stock < 10) {
        return { fill: "#FFFF00" };
      }
      // 在庫が0は赤背景
      if (col === "stock" && row.stock === 0) {
        return { fill: "#FF0000", color: "#FFFFFF" };
      }
      return {};
    },
  })
  .getNode();
```

## スタイルの優先度

スタイルは以下の順で適用されます（後のものが優先）:

1. プリセット
2. テーブルスタイル（`style.header` / `style.body`）
3. 列スタイル（`columns[].style`）
4. 条件付きスタイル（`conditionalStyle`）
5. セル単位スタイル（`data[]._style`）

## 関連

- [スタイルAPI](../api-reference/styling.md) - スタイルの詳細
- [.table() API](../api-reference/table.md) - conditionalStyleの詳細
