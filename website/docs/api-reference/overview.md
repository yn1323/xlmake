---
sidebar_position: 1
---

# API概要

xlkitのAPIは大きく2つに分かれます。

## エントリーポイント

### xlkit()

Excelファイルを生成するためのビルダーを作成します。

```typescript
import { xlkit } from "xlkit";

const builder = xlkit();
```

### read()

既存のExcelファイルを読み込みます。

```typescript
import { read } from "xlkit";

const workbook = await read("report.xlsx");
```

## メソッド一覧

### WorkbookBuilder / SheetBuilder

| メソッド | 戻り値 | 説明 |
|---------|--------|------|
| `sheet(name?)` | `SheetBuilder` | シートを追加（名前省略時は自動生成） |
| `table(options)` | `this` | テーブルを追加 |
| `text(input)` | `this` | テキストを追加 |
| `image(options)` | `this` | 画像を追加 |
| `space(lines?)` | `this` | 空行を追加（デフォルト: 1行） |
| `getNode()` | `Promise<NodeOutput>` | Node.js用出力オブジェクトを取得 |
| `getBrowser()` | `Promise<BrowserOutput>` | ブラウザ用出力オブジェクトを取得 |

### NodeOutput

| メソッド | 戻り値 | 説明 |
|---------|--------|------|
| `saveToFile(path)` | `Promise<void>` | ファイルに保存 |
| `toBuffer()` | `Promise<Buffer>` | Bufferとして取得 |

### BrowserOutput

| メソッド | 戻り値 | 説明 |
|---------|--------|------|
| `download(filename)` | `Promise<void>` | ファイルをダウンロード |

## 基本フロー

```
xlkit() → sheet() → table() / text() / image() → getNode() / getBrowser()
```

```typescript
const output = await xlkit()
  .sheet("シート名")
  .table({ columns: [...], data: [...] })
  .getNode();

await output.saveToFile("output.xlsx");
```

## 次のステップ

- [xlkit()](./xlkit.md) - ファクトリ関数の詳細
- [.table()](./table.md) - テーブルAPIの詳細
- [スタイルAPI](./styling.md) - スタイリングの詳細
