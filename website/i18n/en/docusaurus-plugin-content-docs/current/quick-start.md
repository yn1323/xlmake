---
sidebar_position: 3
---

# Quick Start

Let's create a simple Excel file with xlmake.

## Node.js Usage

```typescript
import { xlmake } from "xlmake";

const salesData = [
  { name: "Apple", price: 100, quantity: 50 },
  { name: "Orange", price: 80, quantity: 100 },
  { name: "Banana", price: 120, quantity: 30 },
];

const output = await xlmake()
  .sheet("Sales")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "price", label: "Price" },
      { key: "quantity", label: "Quantity" },
    ],
    data: salesData,
  })
  .getNode();

await output.saveToFile("report.xlsx");
```

## Browser Usage

```typescript
import { xlmake } from "xlmake";

const output = await xlmake()
  .sheet("Data")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Name" },
      { key: "value", label: "Value" },
    ],
    data: [
      { name: "Item A", value: 100 },
      { name: "Item B", value: 200 },
    ],
  })
  .getBrowser();

await output.download("data.xlsx");
```

## Basic Usage

### 1. Create builder with xlmake()

```typescript
const builder = xlmake();
```

### 2. Add sheet with sheet()

```typescript
builder.sheet("Sheet Name");
```

### 3. Add table with table()

```typescript
builder.table({
  preset: "basic",
  columns: [...],
  data: [...],
});
```

### 4. Output with getNode() / getBrowser()

```typescript
// Node.js
const output = await builder.getNode();
await output.saveToFile("report.xlsx");

// Browser
const output = await builder.getBrowser();
await output.download("report.xlsx");
```

## Next Steps

- [Basic Usage](./guides/basic-usage.md) for detailed guide
- [API Reference](./api-reference/overview.md) for available features
- [Examples](./examples/basic-table.md) for sample code
