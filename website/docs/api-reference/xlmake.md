---
sidebar_position: 2
---

# xlmake()

WorkbookBuilderを返すファクトリ関数です。

## インポート

```typescript
import { xlmake } from "xlmake";
```

## 使用例

```typescript
const builder = xlmake();
```

## WorkbookBuilder メソッド

| メソッド | 戻り値 | 説明 |
|---------|--------|------|
| `sheet(name?)` | `SheetBuilder` | シートを追加 |
| `merge(workbooks)` | `this` | 複数のワークブックをマージ |
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
| `merge(workbooks)` | `WorkbookBuilder` | 複数のワークブックをマージ |
| `getNode()` | `Promise<NodeOutput>` | Node.js用出力を取得 |
| `getBrowser()` | `Promise<BrowserOutput>` | ブラウザ用出力を取得 |

## sheet()

シートを追加します。名前を省略すると自動生成されます。

```typescript
// 名前を指定
xlmake().sheet("売上データ")

// 名前を省略（Sheet1, Sheet2... と自動生成）
xlmake().sheet()
```

## merge()

複数のワークブックを1つにマージします。

**パラメータ:**
- `workbooks: (WorkbookBuilder | SheetBuilder)[]` - マージするワークブックの配列

**戻り値:**
- `WorkbookBuilder` または `this`（メソッドチェーン用）

**エラー:**
- シート名が重複する場合は `Error` をスロー
- 空のワークブック（シートが0個）は無視される

**使用例:**

```typescript
// 基本的な使い方
const bookA = xlmake().sheet("A").table({ columns: [...], data: [...] });
const bookB = xlmake().sheet("B").table({ columns: [...], data: [...] });
const merged = xlmake().merge([bookA, bookB]);
```

```typescript
// モジュール化されたシート作成
function createSalesSheet() {
  return xlmake().sheet("売上").table({ ... });
}

function createStockSheet() {
  return xlmake().sheet("在庫").table({ ... });
}

// マージして1つのファイルに
const merged = xlmake().merge([
  createSalesSheet(),
  createStockSheet(),
]);

await merged.getNode().saveToFile("report.xlsx");
```

```typescript
// メソッドチェーンで使用
const merged = xlmake()
  .sheet("Start")
  .text("Start")
  .merge([bookA, bookB])
  .sheet("End")
  .text("End");
```

## getNode()

Node.js環境用の出力オブジェクトを取得します。

```typescript
const output = await xlmake()
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
const output = await xlmake()
  .sheet("データ")
  .table({ columns: [...], data: [...] })
  .getBrowser();

// ダウンロード
await output.download("report.xlsx");
```
