---
sidebar_position: 1
---

# 基本的なテーブル

最もシンプルなテーブルの作成例です。

## 基本例

```typescript
import { xlkit } from "xlkit";

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

## プリセットを使用

`preset`を指定すると、スタイルが自動的に適用されます。

```typescript
const output = await xlkit()
  .sheet("データ")
  .table({
    preset: "basic",  // 青ヘッダー + 全罫線
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
  })
  .getNode();

await output.saveToFile("basic-preset.xlsx");
```

## カラム別スタイル

特定の列にスタイルを適用できます。

```typescript
const output = await xlkit()
  .sheet("データ")
  .table({
    columns: [
      { key: "name", label: "名前" },
      { key: "important", label: "重要", style: { bold: true } },
      { key: "warning", label: "警告", style: { color: "#FF0000" } },
      { key: "highlight", label: "ハイライト", style: { fill: "#FFFF00" } },
    ],
    data: [
      { name: "項目1", important: "Yes", warning: "注意", highlight: "★" },
      { name: "項目2", important: "No", warning: "-", highlight: "-" },
    ],
  })
  .getNode();
```

## 関連

- [プリセット使用](./presets.md) - プリセットの詳細な使い方
- [.table() API](../api-reference/table.md) - テーブルAPIの詳細
