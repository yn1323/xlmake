---
sidebar_position: 3
---

# 複数シート

xlkitでは複数のシートを持つExcelファイルを簡単に作成できます。

## 基本的な使い方

`sheet()`を連続して呼び出すことで、複数のシートを作成できます。

```typescript
import { xlkit } from "xlkit";

const output = await xlkit()
  .sheet("売上")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "sales", label: "売上" },
    ],
    data: salesData,
  })
  .sheet("在庫")  // 2つ目のシート
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "stock", label: "在庫数" },
    ],
    data: stockData,
  })
  .getNode();

await output.saveToFile("report.xlsx");
```

## シート名

### 明示的に指定

```typescript
xlkit()
  .sheet("売上データ")
  .sheet("在庫データ")
  .sheet("顧客マスタ")
```

### 自動生成

シート名を省略すると、Sheet1, Sheet2... と自動生成されます。

```typescript
xlkit()
  .sheet()  // Sheet1
  .sheet()  // Sheet2
  .sheet()  // Sheet3
```

## 各シートに異なるコンテンツ

各シートには独立したテーブル、テキスト、画像を追加できます。

```typescript
const output = await xlkit()
  .sheet("サマリー")
  .text({ value: "月次レポート", style: { bold: true, fontSize: 16 } })
  .space(2)
  .table({
    preset: "basic",
    columns: summaryColumns,
    data: summaryData,
  })
  .sheet("詳細データ")
  .table({
    preset: "striped",
    columns: detailColumns,
    data: detailData,
  })
  .sheet("グラフデータ")
  .table({
    preset: "minimal",
    columns: chartColumns,
    data: chartData,
  })
  .getNode();
```

## シート名の制約

Excelの仕様により、シート名には以下の制約があります:

- 最大31文字
- 使用できない文字: `: \ / ? * [ ]`

これらの制約に違反した場合、xlkitはエラーをスローします。

## 完全な例

```typescript
import { xlkit } from "xlkit";

const salesData = [
  { name: "りんご", sales: 50000 },
  { name: "みかん", sales: 40000 },
];

const stockData = [
  { name: "りんご", stock: 100 },
  { name: "みかん", stock: 200 },
];

const output = await xlkit()
  .sheet("売上")
  .text({ value: "売上データ", style: { bold: true, fontSize: 14 } })
  .space(1)
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "sales", label: "売上" },
    ],
    data: salesData,
  })
  .sheet("在庫")
  .text({ value: "在庫データ", style: { bold: true, fontSize: 14 } })
  .space(1)
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "stock", label: "在庫数" },
    ],
    data: stockData,
  })
  .getNode();

await output.saveToFile("multi-sheet.xlsx");
```

## 関連

- [基本的な使い方](./basic-usage.md) - xlkitの基本
- [Excel制約](../reference/excel-constraints.md) - Excelの制約事項
