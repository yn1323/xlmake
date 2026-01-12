# xlkit

**宣言的なExcel生成ライブラリ** - コードを見れば最終的なExcelの構造がわかる

ExcelJSをベースに、より直感的で宣言的なAPIを提供します。

## ExcelJSとの比較

| 観点 | ExcelJS（命令的） | xlkit（宣言的） |
|------|------------------|----------------|
| 書き方 | セルを1つずつ操作 | 最終形を宣言 |
| 見通し | コードから結果が見えづらい | コードから結果が見える |
| 例え | jQuery | React |

## インストール

```bash
npm install xlkit
# または
pnpm add xlkit
# または
yarn add xlkit
```

## クイックスタート

```typescript
import { xlkit } from "xlkit";

const output = await xlkit()
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

await output.saveToFile("report.xlsx");
```

## ドキュメント

詳細なAPIリファレンス、使用例、ガイドは[公式ドキュメント](https://yn1323.github.io/xlkit/)をご覧ください。

## ライセンス

MIT
