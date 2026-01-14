---
sidebar_position: 5
---

# Borders

Examples of adding borders to tables.

## Outline Only

```typescript
const output = await xlmake()
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
    border: { outline: "medium" },
  })
  .getNode();
```

## Header Underline Only

```typescript
const output = await xlmake()
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
    border: { headerBody: "thin" },
  })
  .getNode();
```

## All Borders

```typescript
const output = await xlmake()
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
    border: {
      outline: "thin",
      headerBody: "thin",
      headerInner: "thin",
      bodyInner: "thin",
    },
  })
  .getNode();
```

## Full Customization

You can configure border styles and colors in detail.

```typescript
const output = await xlmake()
  .sheet("Report")
  .table({
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
    border: {
      outline: "medium",      // Medium outline
      headerBody: "medium",   // Medium header-body boundary
      headerInner: "thin",    // Thin header internal
      bodyInner: "thin",      // Thin body internal
      borderColor: "#000080", // Navy blue
    },
  })
  .getNode();
```

## LineStyle Types

| Value | Description |
|-------|-------------|
| `"thin"` | Thin line |
| `"medium"` | Medium line |
| `"thick"` | Thick line |
| `"dotted"` | Dotted line |
| `"dashed"` | Dashed line |
| `"double"` | Double line |

## Related

- [Style API](../api-reference/styling.md) - BorderStyle details
