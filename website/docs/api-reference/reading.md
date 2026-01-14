---
sidebar_position: 7
---

# 読み取りAPI

既存のExcelファイルを読み込むためのAPIです。

## read()

```typescript
import { read } from "xlmake";

// ファイルパスから読み込み
const workbook = await read("report.xlsx");

// Bufferから読み込み
const workbook = await read(buffer);
```

## WorkbookReader

ワークブック全体を表します。

| プロパティ/メソッド | 戻り値 | 説明 |
|-------------------|--------|------|
| `sheetNames` | `string[]` | シート名の一覧 |
| `sheetCount` | `number` | シート数 |
| `sheet(name)` | `SheetReader` | 名前でシートを取得 |
| `sheetAt(index)` | `SheetReader` | インデックスでシートを取得 |

```typescript
const workbook = await read("report.xlsx");

console.log(workbook.sheetNames);  // ["売上", "在庫"]
console.log(workbook.sheetCount);  // 2

const sheet = workbook.sheet("売上");
const firstSheet = workbook.sheetAt(0);
```

## SheetReader

シートを表します。

| プロパティ/メソッド | 戻り値 | 説明 |
|-------------------|--------|------|
| `name` | `string` | シート名 |
| `rowCount` | `number` | 行数 |
| `columnCount` | `number` | 列数 |
| `mergedCells` | `string[]` | マージ情報（"A1:B2"形式） |
| `cell(address)` | `CellReader` | A1形式でセルを取得 |
| `cellAt(row, col)` | `CellReader` | 行・列番号でセルを取得 |

```typescript
const sheet = workbook.sheet("売上");

console.log(sheet.name);        // "売上"
console.log(sheet.rowCount);    // 100
console.log(sheet.columnCount); // 5
console.log(sheet.mergedCells); // ["A1:B1", "C1:C2"]

// A1形式でアクセス
const cell1 = sheet.cell("A1");

// 行・列番号でアクセス（0-indexed）
const cell2 = sheet.cellAt(0, 0);  // A1と同じ
```

## CellReader

セルを表します。

| プロパティ | 戻り値 | 説明 |
|-----------|--------|------|
| `value` | `string \| number \| boolean \| null` | セルの値 |
| `style` | `CellStyle \| undefined` | セルのスタイル |
| `border` | `CellBorder \| undefined` | セルの罫線情報 |

```typescript
const cell = sheet.cell("A1");

console.log(cell.value);  // "商品名"

const style = cell.style;
console.log(style?.bold);  // true
console.log(style?.fill);  // "#4472C4"

const border = cell.border;
console.log(border?.top);    // { style: "thin", color: "#000000" }
console.log(border?.bottom); // { style: "thin", color: "#000000" }
```

## 使用例

```typescript
import { read } from "xlmake";

// Excelファイルを読み込み
const workbook = await read("./report.xlsx");

// シート一覧を取得
console.log(workbook.sheetNames);  // ["売上", "在庫"]

// シートを取得
const sheet = workbook.sheet("売上");

// セルの値を取得
console.log(sheet.cell("A1").value);  // "商品名"
console.log(sheet.cell("B2").value);  // 100

// セルのスタイルを取得
const style = sheet.cell("A1").style;
console.log(style?.bold);  // true
console.log(style?.fill);  // "#4472C4"

// マージ情報を取得
console.log(sheet.mergedCells);  // ["A1:B1", "C1:C2"]

// 行・列番号でアクセス（0-indexed）
console.log(sheet.cellAt(0, 0).value);  // A1の値
console.log(sheet.cellAt(1, 1).value);  // B2の値
```

## 関連

- [読み取りガイド](../guides/reading.md) - 読み取りAPIの詳しい使い方
