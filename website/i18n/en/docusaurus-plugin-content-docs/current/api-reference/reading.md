---
sidebar_position: 7
---

# Reading API

API for reading existing Excel files.

## read()

```typescript
import { read } from "xlmake";

// From file path
const workbook = await read("report.xlsx");

// From Buffer
const workbook = await read(buffer);
```

## WorkbookReader

Represents the entire workbook.

| Property/Method | Returns | Description |
|-----------------|---------|-------------|
| `sheetNames` | `string[]` | List of sheet names |
| `sheetCount` | `number` | Number of sheets |
| `sheet(name)` | `SheetReader` | Get sheet by name |
| `sheetAt(index)` | `SheetReader` | Get sheet by index |

```typescript
const workbook = await read("report.xlsx");

console.log(workbook.sheetNames);  // ["Sales", "Stock"]
console.log(workbook.sheetCount);  // 2

const sheet = workbook.sheet("Sales");
const firstSheet = workbook.sheetAt(0);
```

## SheetReader

Represents a sheet.

| Property/Method | Returns | Description |
|-----------------|---------|-------------|
| `name` | `string` | Sheet name |
| `rowCount` | `number` | Row count |
| `columnCount` | `number` | Column count |
| `mergedCells` | `string[]` | Merge info ("A1:B2" format) |
| `cell(address)` | `CellReader` | Get cell by A1 notation |
| `cellAt(row, col)` | `CellReader` | Get cell by row/column number |

```typescript
const sheet = workbook.sheet("Sales");

console.log(sheet.name);        // "Sales"
console.log(sheet.rowCount);    // 100
console.log(sheet.columnCount); // 5
console.log(sheet.mergedCells); // ["A1:B1", "C1:C2"]

// A1 notation
const cell1 = sheet.cell("A1");

// Row/column numbers (0-indexed)
const cell2 = sheet.cellAt(0, 0);  // Same as A1
```

## CellReader

Represents a cell.

| Property | Returns | Description |
|----------|---------|-------------|
| `value` | `string \| number \| boolean \| null` | Cell value |
| `style` | `CellStyle \| undefined` | Cell style |
| `border` | `CellBorder \| undefined` | Cell border info |

```typescript
const cell = sheet.cell("A1");

console.log(cell.value);  // "Product"

const style = cell.style;
console.log(style?.bold);  // true
console.log(style?.fill);  // "#4472C4"

const border = cell.border;
console.log(border?.top);    // { style: "thin", color: "#000000" }
console.log(border?.bottom); // { style: "thin", color: "#000000" }
```

## Complete Example

```typescript
import { read } from "xlmake";

// Read Excel file
const workbook = await read("./report.xlsx");

// Get sheet list
console.log(workbook.sheetNames);  // ["Sales", "Stock"]

// Get sheet
const sheet = workbook.sheet("Sales");

// Get cell values
console.log(sheet.cell("A1").value);  // "Product"
console.log(sheet.cell("B2").value);  // 100

// Get cell styles
const style = sheet.cell("A1").style;
console.log(style?.bold);  // true
console.log(style?.fill);  // "#4472C4"

// Get merge info
console.log(sheet.mergedCells);  // ["A1:B1", "C1:C2"]

// Access by row/column numbers (0-indexed)
console.log(sheet.cellAt(0, 0).value);  // A1 value
console.log(sheet.cellAt(1, 1).value);  // B2 value
```

## Related

- [Reading Guide](../guides/reading.md) - Detailed reading usage
