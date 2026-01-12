---
sidebar_position: 5
---

# 読み取りAPI

xlkitでは既存のExcelファイルを読み込んで、セルの値やスタイルを取得できます。

## 基本的な使い方

```typescript
import { read } from "xlkit";

const workbook = await read("report.xlsx");
```

## read()

ファイルパスまたはBufferからExcelファイルを読み込みます。

```typescript
// ファイルパスから
const workbook = await read("./report.xlsx");

// Bufferから
const buffer = fs.readFileSync("./report.xlsx");
const workbook = await read(buffer);
```

## WorkbookReader

ワークブック全体を操作するためのオブジェクトです。

### シート一覧の取得

```typescript
const workbook = await read("report.xlsx");

console.log(workbook.sheetNames);  // ["売上", "在庫"]
console.log(workbook.sheetCount);  // 2
```

### シートの取得

```typescript
// 名前で取得
const sheet = workbook.sheet("売上");

// インデックスで取得（0から開始）
const firstSheet = workbook.sheetAt(0);
```

## SheetReader

シートを操作するためのオブジェクトです。

### シートの情報

```typescript
const sheet = workbook.sheet("売上");

console.log(sheet.name);        // "売上"
console.log(sheet.rowCount);    // 100
console.log(sheet.columnCount); // 5
```

### マージ情報の取得

```typescript
console.log(sheet.mergedCells);  // ["A1:B1", "C1:C2"]
```

### セルへのアクセス

```typescript
// A1形式
const cell1 = sheet.cell("A1");
const cell2 = sheet.cell("B2");

// 行・列番号（0から開始）
const cell3 = sheet.cellAt(0, 0);  // A1と同じ
const cell4 = sheet.cellAt(1, 1);  // B2と同じ
```

## CellReader

セルの値やスタイルを取得するためのオブジェクトです。

### 値の取得

```typescript
const cell = sheet.cell("A1");

console.log(cell.value);  // "商品名" or 100 or true or null
```

### スタイルの取得

```typescript
const style = sheet.cell("A1").style;

console.log(style?.bold);      // true
console.log(style?.fill);      // "#4472C4"
console.log(style?.color);     // "#FFFFFF"
console.log(style?.fontSize);  // 11
```

### 罫線の取得

```typescript
const border = sheet.cell("A1").border;

console.log(border?.top);     // { style: "thin", color: "#000000" }
console.log(border?.bottom);  // { style: "thin", color: "#000000" }
console.log(border?.left);    // { style: "thin", color: "#000000" }
console.log(border?.right);   // { style: "thin", color: "#000000" }
```

## 完全な例

```typescript
import { read } from "xlkit";

async function analyzeExcel() {
  const workbook = await read("./report.xlsx");

  // シート一覧を表示
  console.log("シート一覧:", workbook.sheetNames);

  // 最初のシートを取得
  const sheet = workbook.sheetAt(0);
  console.log(`シート名: ${sheet.name}`);
  console.log(`行数: ${sheet.rowCount}`);
  console.log(`列数: ${sheet.columnCount}`);

  // ヘッダー行を読み取り
  console.log("\nヘッダー:");
  for (let col = 0; col < sheet.columnCount; col++) {
    const cell = sheet.cellAt(0, col);
    console.log(`  ${String.fromCharCode(65 + col)}1: ${cell.value}`);
  }

  // データ行を読み取り
  console.log("\nデータ:");
  for (let row = 1; row < Math.min(sheet.rowCount, 5); row++) {
    const rowData = [];
    for (let col = 0; col < sheet.columnCount; col++) {
      rowData.push(sheet.cellAt(row, col).value);
    }
    console.log(`  行${row + 1}: ${rowData.join(", ")}`);
  }

  // マージ情報を表示
  if (sheet.mergedCells.length > 0) {
    console.log("\nマージされたセル:", sheet.mergedCells);
  }

  // 特定のセルのスタイルを確認
  const headerStyle = sheet.cell("A1").style;
  if (headerStyle) {
    console.log("\nA1のスタイル:");
    console.log("  太字:", headerStyle.bold);
    console.log("  背景色:", headerStyle.fill);
    console.log("  文字色:", headerStyle.color);
  }
}

analyzeExcel();
```

## 読み取り対象

| 対象 | サポート |
|------|---------|
| セルの値 | ✅ |
| セルのスタイル | ✅ |
| マージ情報 | ✅ |
| シート名 | ✅ |
| 列幅・行高 | ❌ |

## 関連

- [読み取りAPI](../api-reference/reading.md) - APIの詳細
- [サポートしていない機能](../reference/limitations.md) - 読み取りの制限事項
