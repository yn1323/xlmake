---
sidebar_position: 2
---

# xlkit()

WorkbookBuilderを返すファクトリ関数です。

## インポート

```typescript
import { xlkit } from "xlkit";
```

## 使用例

```typescript
const builder = xlkit();
```

## WorkbookBuilder メソッド

| メソッド | 戻り値 | 説明 |
|---------|--------|------|
| `sheet(name?)` | `SheetBuilder` | シートを追加 |
| `getNode()` | `Promise<NodeOutput>` | Node.js用出力を取得 |
| `getBrowser()` | `Promise<BrowserOutput>` | ブラウザ用出力を取得 |

## SheetBuilder メソッド

| メソッド | 戻り値 | 説明 |
|---------|--------|------|
| `table(options)` | `this` | テーブルを追加 |
| `text(input)` | `this` | テキストを追加 |
| `image(options)` | `this` | 画像を追加 |
| `space(lines?)` | `this` | 空行を追加（デフォルト: 1行） |
| `sheet(name?)` | `SheetBuilder` | 別のシートに切り替え |
| `getNode()` | `Promise<NodeOutput>` | Node.js用出力を取得 |
| `getBrowser()` | `Promise<BrowserOutput>` | ブラウザ用出力を取得 |

## sheet()

シートを追加します。名前を省略すると自動生成されます。

```typescript
// 名前を指定
xlkit().sheet("売上データ")

// 名前を省略（Sheet1, Sheet2... と自動生成）
xlkit().sheet()
```

## getNode()

Node.js環境用の出力オブジェクトを取得します。

```typescript
const output = await xlkit()
  .sheet("データ")
  .table({ columns: [...], data: [...] })
  .getNode();

// ファイルに保存
await output.saveToFile("report.xlsx");

// Bufferとして取得（API応答などに利用）
const buffer = await output.toBuffer();
```

## getBrowser()

ブラウザ環境用の出力オブジェクトを取得します。

```typescript
const output = await xlkit()
  .sheet("データ")
  .table({ columns: [...], data: [...] })
  .getBrowser();

// ダウンロード
await output.download("report.xlsx");
```
