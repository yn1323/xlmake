---
sidebar_position: 4
---

# 画像挿入

xlkitでExcelに画像を挿入する方法を説明します。

## 基本的な使い方

```typescript
import { xlkit } from "xlkit";
import { readFileSync } from "fs";

const logoBuffer = readFileSync("./logo.png");

const output = await xlkit()
  .sheet("レポート")
  .image({
    source: logoBuffer,
    width: 150,
    height: 75,
  })
  .getNode();
```

## ImageOptions

```typescript
.image({
  source: Buffer | string,  // 画像データまたはファイルパス
  width?: number,           // 幅（ピクセル）
  height?: number,          // 高さ（ピクセル）
  row?: number,             // 行位置（0-indexed）
  col?: number,             // 列位置（0-indexed）
})
```

## source の指定方法

### Bufferを使用（推奨）

```typescript
import { readFileSync } from "fs";

const imageBuffer = readFileSync("./image.png");

.image({
  source: imageBuffer,
  width: 200,
  height: 100,
})
```

### ファイルパスを使用（Node.jsのみ）

```typescript
.image({
  source: "./image.png",
  width: 200,
  height: 100,
})
```

### URLを使用（ブラウザ・Node.js両対応）

```typescript
.image({
  source: "https://example.com/image.png",
  width: 200,
  height: 100,
})
```

## ブラウザでの使用

ブラウザ環境では、URL指定で画像を挿入できます。

```typescript
import { xlkit } from "xlkit";

const output = await xlkit()
  .sheet("レポート")
  .image({
    source: "https://example.com/logo.png",
    width: 150,
    height: 75,
  })
  .getBrowser();

await output.download("report.xlsx");
```

:::note
ファイルパス指定はNode.js環境でのみ使用できます。ブラウザ環境ではURLまたはBufferを使用してください。
:::

## サイズの指定

画像のサイズはピクセル単位で指定します。

```typescript
.image({
  source: imageBuffer,
  width: 300,   // 幅300ピクセル
  height: 150,  // 高さ150ピクセル
})
```

## 位置の指定

`row`と`col`で画像の配置位置を指定できます（0から開始）。

```typescript
.image({
  source: imageBuffer,
  width: 200,
  height: 100,
  row: 5,   // 6行目
  col: 2,   // C列
})
```

## テキストやテーブルと組み合わせる

```typescript
const output = await xlkit()
  .sheet("レポート")
  .text({ value: "月次レポート", style: { bold: true, fontSize: 16 } })
  .space(1)
  .image({
    source: logoBuffer,
    width: 150,
    height: 75,
  })
  .space(2)
  .table({
    preset: "basic",
    columns: [...],
    data: [...],
  })
  .getNode();
```

## 完全な例

```typescript
import { xlkit } from "xlkit";
import { readFileSync } from "fs";

const logoBuffer = readFileSync("./company-logo.png");
const chartBuffer = readFileSync("./sales-chart.png");

const output = await xlkit()
  .sheet("レポート")
  // ヘッダー部分
  .text({ value: "株式会社サンプル", style: { bold: true, fontSize: 18 } })
  .space(1)
  .image({
    source: logoBuffer,
    width: 120,
    height: 60,
  })
  .space(2)
  // データテーブル
  .text({ value: "売上データ", style: { bold: true, fontSize: 14 } })
  .space(1)
  .table({
    preset: "basic",
    columns: [
      { key: "month", label: "月" },
      { key: "sales", label: "売上" },
    ],
    data: [
      { month: "1月", sales: 1000000 },
      { month: "2月", sales: 1200000 },
      { month: "3月", sales: 1100000 },
    ],
  })
  .space(2)
  // グラフ画像
  .text({ value: "売上推移グラフ", style: { bold: true, fontSize: 14 } })
  .space(1)
  .image({
    source: chartBuffer,
    width: 400,
    height: 250,
  })
  .getNode();

await output.saveToFile("report-with-images.xlsx");
```

## 関連

- [.image() API](../api-reference/image.md) - 画像APIの詳細
- [基本的な使い方](./basic-usage.md) - xlkitの基本
