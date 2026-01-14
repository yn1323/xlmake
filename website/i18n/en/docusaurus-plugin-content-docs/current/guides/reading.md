---
sidebar_position: 5
---

# Reading API

xlmake can read existing Excel files to get cell values and styles.

## Basic Usage

```typescript
import { read } from "xlmake";

const workbook = await read("report.xlsx");
```

## read()

Read Excel files from file path or Buffer.

```typescript
// From file path
const workbook = await read("./report.xlsx");

// From Buffer
const buffer = fs.readFileSync("./report.xlsx");
const workbook = await read(buffer);
```

## WorkbookReader

Object for manipulating the entire workbook.

### Getting Sheet List

```typescript
const workbook = await read("report.xlsx");

console.log(workbook.sheetNames);  // ["Sales", "Stock"]
console.log(workbook.sheetCount);  // 2
```

### Getting Sheets

```typescript
// By name
const sheet = workbook.sheet("Sales");

// By index (starting from 0)
const firstSheet = workbook.sheetAt(0);
```

## SheetReader

Object for manipulating sheets.

### Sheet Information

```typescript
const sheet = workbook.sheet("Sales");

console.log(sheet.name);        // "Sales"
console.log(sheet.rowCount);    // 100
console.log(sheet.columnCount); // 5
```

### Getting Merge Information

```typescript
console.log(sheet.mergedCells);  // ["A1:B1", "C1:C2"]
```

### Accessing Cells

```typescript
// A1 notation
const cell1 = sheet.cell("A1");
const cell2 = sheet.cell("B2");

// Row/column numbers (starting from 0)
const cell3 = sheet.cellAt(0, 0);  // Same as A1
const cell4 = sheet.cellAt(1, 1);  // Same as B2
```

## CellReader

Object for getting cell values and styles.

### Getting Values

```typescript
const cell = sheet.cell("A1");

console.log(cell.value);  // "Product" or 100 or true or null
```

### Getting Styles

```typescript
const style = sheet.cell("A1").style;

console.log(style?.bold);      // true
console.log(style?.fill);      // "#4472C4"
console.log(style?.color);     // "#FFFFFF"
console.log(style?.fontSize);  // 11
```

### Getting Borders

```typescript
const border = sheet.cell("A1").border;

console.log(border?.top);     // { style: "thin", color: "#000000" }
console.log(border?.bottom);  // { style: "thin", color: "#000000" }
console.log(border?.left);    // { style: "thin", color: "#000000" }
console.log(border?.right);   // { style: "thin", color: "#000000" }
```

## Complete Example

```typescript
import { read } from "xlmake";

async function analyzeExcel() {
  const workbook = await read("./report.xlsx");

  // Show sheet list
  console.log("Sheets:", workbook.sheetNames);

  // Get first sheet
  const sheet = workbook.sheetAt(0);
  console.log(`Sheet name: ${sheet.name}`);
  console.log(`Row count: ${sheet.rowCount}`);
  console.log(`Column count: ${sheet.columnCount}`);

  // Read header row
  console.log("\nHeaders:");
  for (let col = 0; col < sheet.columnCount; col++) {
    const cell = sheet.cellAt(0, col);
    console.log(`  ${String.fromCharCode(65 + col)}1: ${cell.value}`);
  }

  // Read data rows
  console.log("\nData:");
  for (let row = 1; row < Math.min(sheet.rowCount, 5); row++) {
    const rowData = [];
    for (let col = 0; col < sheet.columnCount; col++) {
      rowData.push(sheet.cellAt(row, col).value);
    }
    console.log(`  Row ${row + 1}: ${rowData.join(", ")}`);
  }

  // Show merge info
  if (sheet.mergedCells.length > 0) {
    console.log("\nMerged cells:", sheet.mergedCells);
  }

  // Check specific cell style
  const headerStyle = sheet.cell("A1").style;
  if (headerStyle) {
    console.log("\nA1 style:");
    console.log("  Bold:", headerStyle.bold);
    console.log("  Fill:", headerStyle.fill);
    console.log("  Color:", headerStyle.color);
  }
}

analyzeExcel();
```

## Supported Features

| Feature | Supported |
|---------|-----------|
| Cell values | ✅ |
| Cell styles | ✅ |
| Merge info | ✅ |
| Sheet names | ✅ |
| Column width/row height | ❌ |

## Related

- [Reading API](../api-reference/reading.md) - API details
- [Unsupported Features](../reference/limitations.md) - Reading limitations
