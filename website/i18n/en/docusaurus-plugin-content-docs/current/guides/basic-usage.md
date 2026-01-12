---
sidebar_position: 1
---

# Basic Usage

Learn the basics of xlkit.

## Builder Pattern

xlkit uses a method chaining builder pattern.

```typescript
import { xlkit } from "xlkit";

const output = await xlkit()     // 1. Create builder
  .sheet("Sheet Name")           // 2. Add sheet
  .table({ ... })                // 3. Add table
  .getNode();                    // 4. Get output object

await output.saveToFile("output.xlsx");  // 5. Save to file
```

## Sheet Operations

### Adding Sheets

```typescript
xlkit().sheet("Sales Data")  // With name
xlkit().sheet()              // Auto-generated (Sheet1, Sheet2...)
```

### Creating Multiple Sheets

```typescript
const output = await xlkit()
  .sheet("Sales")
  .table({ ... })
  .sheet("Stock")      // Second sheet
  .table({ ... })
  .sheet("Customers")  // Third sheet
  .table({ ... })
  .getNode();
```

## Adding Tables

### Basic Table

```typescript
.table({
  columns: [
    { key: "name", label: "Product" },
    { key: "price", label: "Price" },
  ],
  data: [
    { name: "Apple", price: 100 },
    { name: "Orange", price: 80 },
  ],
})
```

### Using Presets

```typescript
.table({
  preset: "basic",  // Blue header + all borders
  columns: [...],
  data: [...],
})
```

## Adding Text

```typescript
.text("Simple text")

.text({
  value: "Styled text",
  style: { bold: true, fontSize: 14 }
})
```

## Adding Empty Rows

```typescript
.space()     // 1 empty row
.space(3)    // 3 empty rows
```

## Output

### Node.js

```typescript
const output = await xlkit()
  .sheet("Data")
  .table({ ... })
  .getNode();

// Save to file
await output.saveToFile("report.xlsx");

// Get as Buffer (for API responses)
const buffer = await output.toBuffer();
```

### Browser

```typescript
const output = await xlkit()
  .sheet("Data")
  .table({ ... })
  .getBrowser();

// Download
await output.download("report.xlsx");
```

## Complete Example

```typescript
import { xlkit } from "xlkit";

const salesData = [
  { name: "Apple", price: 100, quantity: 50 },
  { name: "Orange", price: 80, quantity: 100 },
  { name: "Banana", price: 120, quantity: 30 },
];

const output = await xlkit()
  .sheet("Sales Report")
  .text({ value: "Monthly Sales Report", style: { bold: true, fontSize: 16 } })
  .text("January 2024")
  .space(2)
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "price", label: "Price" },
      { key: "quantity", label: "Quantity" },
    ],
    data: salesData,
  })
  .space(1)
  .text("* Prices exclude tax")
  .getNode();

await output.saveToFile("sales-report.xlsx");
```

## Next Steps

- [Styling](./styling.md) - Customize styles
- [Multiple Sheets](./multi-sheet.md) - Detailed multi-sheet usage
- [API Overview](../api-reference/overview.md) - Available APIs
