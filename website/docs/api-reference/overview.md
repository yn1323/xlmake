---
sidebar_position: 1
---

# API概要

xlmakeのAPIは大きく2つに分かれます。

## エントリーポイント

### xlmake()

Excelファイルを生成するためのビルダーを作成します。

```typescript
import { xlmake } from "xlmake";

const builder = xlmake();
```

### read()

既存のExcelファイルを読み込みます。

```typescript
import { read } from "xlmake";

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
xlmake() → sheet() → table() / text() / image() → getNode() / getBrowser()
```

```typescript
const output = await xlmake()
  .sheet("シート名")
  .table({ columns: [...], data: [...] })
  .getNode();

await output.saveToFile("output.xlsx");
```

## 次のステップ

- [xlmake()](./xlmake.md) - ファクトリ関数の詳細
- [.table()](./table.md) - テーブルAPIの詳細
- [スタイルAPI](./styling.md) - スタイリングの詳細
