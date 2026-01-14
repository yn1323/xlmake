---
sidebar_position: 2
---

# Using Presets

Presets make it easy to apply common styles.

## Available Presets

| Preset | Header | Body | Borders |
|--------|--------|------|---------|
| `basic` | Blue (#4472C4), white text, bold | - | All borders (thin) |
| `minimal` | Bold only | - | None |
| `striped` | Blue (#4472C4), white text, bold | Alternating gray (#F2F2F2) | All borders (thin) |

## basic

Standard business-style preset.

```typescript
const output = await xlmake()
  .sheet("Sales")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "price", label: "Price" },
      { key: "quantity", label: "Quantity" },
    ],
    data: [
      { name: "Apple", price: 100, quantity: 50 },
      { name: "Orange", price: 80, quantity: 100 },
    ],
  })
  .getNode();
```

## minimal

Simple, lightweight style. No borders, only bold header.

```typescript
const output = await xlmake()
  .sheet("Data")
  .table({
    preset: "minimal",
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
```

## striped

Easy-to-read style with alternating row colors.

```typescript
const output = await xlmake()
  .sheet("List")
  .table({
    preset: "striped",
    columns: [
      { key: "name", label: "Product" },
      { key: "price", label: "Price" },
      { key: "quantity", label: "Quantity" },
    ],
    data: [
      { name: "Apple", price: 100, quantity: 50 },
      { name: "Orange", price: 80, quantity: 100 },
      { name: "Banana", price: 120, quantity: 30 },
      { name: "Grape", price: 300, quantity: 20 },
    ],
  })
  .getNode();
```

## Customizing Presets

You can apply additional styles on top of presets.

```typescript
const output = await xlmake()
  .sheet("Custom")
  .table({
    preset: "basic",
    style: {
      header: { fontSize: 14 },  // Change header font size
    },
    columns: [
      { key: "name", label: "Product" },
      { key: "price", label: "Price", style: { bold: true } },  // Bold this column
    ],
    data: [...],
  })
  .getNode();
```

## Related

- [Presets Reference](../reference/presets.md) - Preset specifications
- [Style API](../api-reference/styling.md) - Style priority
