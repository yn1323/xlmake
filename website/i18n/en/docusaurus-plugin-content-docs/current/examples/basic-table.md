---
sidebar_position: 1
---

# Basic Table

The simplest table creation example.

## Basic Example

```typescript
import { xlkit } from "xlkit";

const output = await xlkit()
  .sheet("Data")
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
  .getNode();

await output.saveToFile("basic.xlsx");
```

## Using Presets

Specify `preset` to automatically apply styles.

```typescript
const output = await xlkit()
  .sheet("Data")
  .table({
    preset: "basic",  // Blue header + all borders
    columns: [
      { key: "name", label: "Product" },
      { key: "price", label: "Price" },
      { key: "quantity", label: "Quantity" },
    ],
    data: [
      { name: "Apple", price: 100, quantity: 50 },
      { name: "Orange", price: 80, quantity: 100 },
      { name: "Banana", price: 120, quantity: 30 },
    ],
  })
  .getNode();

await output.saveToFile("basic-preset.xlsx");
```

## Column Styles

Apply styles to specific columns.

```typescript
const output = await xlkit()
  .sheet("Data")
  .table({
    columns: [
      { key: "name", label: "Name" },
      { key: "important", label: "Important", style: { bold: true } },
      { key: "warning", label: "Warning", style: { color: "#FF0000" } },
      { key: "highlight", label: "Highlight", style: { fill: "#FFFF00" } },
    ],
    data: [
      { name: "Item 1", important: "Yes", warning: "Caution", highlight: "★" },
      { name: "Item 2", important: "No", warning: "-", highlight: "-" },
    ],
  })
  .getNode();
```

## Related

- [Using Presets](./presets.md) - Detailed preset usage
- [.table() API](../api-reference/table.md) - Table API details
