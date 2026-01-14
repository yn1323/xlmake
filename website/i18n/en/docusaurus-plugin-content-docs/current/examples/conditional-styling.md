---
sidebar_position: 6
---

# Conditional Styling

Examples of applying styles to cells based on conditions.

## conditionalStyle

`conditionalStyle` is called for each cell and returns styles based on conditions.

```typescript
const output = await xlmake()
  .sheet("Sales")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "price", label: "Price" },
      { key: "profit", label: "Profit" },
    ],
    data: [
      { name: "Apple", price: 100, profit: 20 },
      { name: "Orange", price: 80, profit: -5 },
      { name: "Banana", price: 120, profit: 15 },
    ],
    conditionalStyle: (row, col) => {
      // Red text for negative profit
      if (col === "profit" && row.profit < 0) {
        return { color: "#FF0000" };
      }
      // Bold for price >= 100
      if (col === "price" && row.price >= 100) {
        return { bold: true };
      }
      return {};
    },
  })
  .getNode();
```

## Cell-Level Style (_style)

Add `_style` property to data to apply styles to specific cells only.

```typescript
const output = await xlmake()
  .sheet("Products")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Name" },
      { key: "price", label: "Price" },
      { key: "status", label: "Status" },
    ],
    data: [
      { name: "Regular Item", price: 100, status: "In Stock" },
      {
        name: "Sale Item",
        price: 50,
        status: "On Sale",
        _style: {
          price: { bold: true, fill: "#FFFF00" },  // Highlight price
          status: { color: "#FF0000" },            // Red status
        },
      },
      {
        name: "Out of Stock",
        price: 200,
        status: "Unavailable",
        _style: {
          status: { color: "#999999", italic: true },
        },
      },
    ],
  })
  .getNode();
```

## Combined Example

You can combine `conditionalStyle` and `_style`.

```typescript
const output = await xlmake()
  .sheet("Inventory")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "stock", label: "Stock" },
      { key: "status", label: "Status" },
    ],
    data: [
      { name: "Apple", stock: 100, status: "Sufficient" },
      { name: "Orange", stock: 5, status: "Low" },
      {
        name: "Banana",
        stock: 0,
        status: "Out of Stock",
        _style: {
          status: { bold: true },  // Bold this cell only
        },
      },
    ],
    conditionalStyle: (row, col) => {
      // Yellow background for stock < 10
      if (col === "stock" && row.stock < 10) {
        return { fill: "#FFFF00" };
      }
      // Red background for stock = 0
      if (col === "stock" && row.stock === 0) {
        return { fill: "#FF0000", color: "#FFFFFF" };
      }
      return {};
    },
  })
  .getNode();
```

## Style Priority

Styles are applied in this order (later ones take precedence):

1. Preset
2. Table Style (`style.header` / `style.body`)
3. Column Style (`columns[].style`)
4. Conditional Style (`conditionalStyle`)
5. Cell-Level Style (`data[]._style`)

## Related

- [Style API](../api-reference/styling.md) - Style details
- [.table() API](../api-reference/table.md) - conditionalStyle details
