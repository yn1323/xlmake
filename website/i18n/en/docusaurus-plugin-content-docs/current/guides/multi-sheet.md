---
sidebar_position: 3
---

# Multiple Sheets

xlkit makes it easy to create Excel files with multiple sheets.

## Basic Usage

Call `sheet()` consecutively to create multiple sheets.

```typescript
import { xlkit } from "xlkit";

const output = await xlkit()
  .sheet("Sales")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "sales", label: "Sales" },
    ],
    data: salesData,
  })
  .sheet("Stock")  // Second sheet
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "stock", label: "Stock" },
    ],
    data: stockData,
  })
  .getNode();

await output.saveToFile("report.xlsx");
```

## Sheet Names

### Explicit Names

```typescript
xlkit()
  .sheet("Sales Data")
  .sheet("Stock Data")
  .sheet("Customer Master")
```

### Auto-Generated

When omitted, names are auto-generated as Sheet1, Sheet2...

```typescript
xlkit()
  .sheet()  // Sheet1
  .sheet()  // Sheet2
  .sheet()  // Sheet3
```

## Different Content per Sheet

Each sheet can have independent tables, text, and images.

```typescript
const output = await xlkit()
  .sheet("Summary")
  .text({ value: "Monthly Report", style: { bold: true, fontSize: 16 } })
  .space(2)
  .table({
    preset: "basic",
    columns: summaryColumns,
    data: summaryData,
  })
  .sheet("Details")
  .table({
    preset: "striped",
    columns: detailColumns,
    data: detailData,
  })
  .sheet("Chart Data")
  .table({
    preset: "minimal",
    columns: chartColumns,
    data: chartData,
  })
  .getNode();
```

## Merging Workbooks

You can merge separately created workbooks later.

### Basic Usage

```typescript
const bookA = xlkit().sheet("A").table({ columns: [...], data: [...] });
const bookB = xlkit().sheet("B").table({ columns: [...], data: [...] });
const merged = xlkit().merge([bookA, bookB]);
```

### Use Cases

#### Modularization

Separate each sheet into functions to organize your code:

```typescript
// Separate each sheet into functions
function createSalesSheet() {
  return xlkit()
    .sheet("Sales")
    .table({ columns: [...], data: salesData });
}

function createStockSheet() {
  return xlkit()
    .sheet("Stock")
    .table({ columns: [...], data: stockData });
}

// Merge and output
const report = xlkit().merge([
  createSalesSheet(),
  createStockSheet(),
]);

await report.getNode().saveToFile("report.xlsx");
```

#### Conditional Sheet Addition

Dynamically add sheets based on conditions:

```typescript
const baseBook = xlkit().sheet("Base Data").table({ ... });
const sheets = [baseBook];

if (includeDetails) {
  sheets.push(xlkit().sheet("Details").table({ ... }));
}

if (includeSummary) {
  sheets.push(xlkit().sheet("Summary").table({ ... }));
}

const report = xlkit().merge(sheets);
```

### Notes

- **Duplicate sheet names**: An error is thrown if the same sheet name exists
- **Empty workbooks**: Workbooks with no sheets are ignored

## Sheet Name Constraints

Due to Excel specifications, sheet names have these constraints:

- Maximum 31 characters
- Cannot contain: `: \ / ? * [ ]`

xlkit throws an error when these constraints are violated.

## Complete Example

```typescript
import { xlkit } from "xlkit";

const salesData = [
  { name: "Apple", sales: 50000 },
  { name: "Orange", sales: 40000 },
];

const stockData = [
  { name: "Apple", stock: 100 },
  { name: "Orange", stock: 200 },
];

const output = await xlkit()
  .sheet("Sales")
  .text({ value: "Sales Data", style: { bold: true, fontSize: 14 } })
  .space(1)
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "sales", label: "Sales" },
    ],
    data: salesData,
  })
  .sheet("Stock")
  .text({ value: "Stock Data", style: { bold: true, fontSize: 14 } })
  .space(1)
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "stock", label: "Stock" },
    ],
    data: stockData,
  })
  .getNode();

await output.saveToFile("multi-sheet.xlsx");
```

## Related

- [Basic Usage](./basic-usage.md) - xlkit basics
- [Excel Constraints](../reference/excel-constraints.md) - Excel constraints
