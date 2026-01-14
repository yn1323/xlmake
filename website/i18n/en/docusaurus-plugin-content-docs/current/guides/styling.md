---
sidebar_position: 2
---

# Styling

xlmake offers various ways to apply styles.

## Presets

The easiest way is to use presets.

```typescript
.table({
  preset: "basic",  // Blue header + all borders
  columns: [...],
  data: [...],
})
```

Available presets:
- `basic` - Blue header, white text, all borders
- `minimal` - Bold header only, no borders
- `striped` - Blue header, alternating gray background, all borders

## CellStyle

You can specify detailed cell styles.

```typescript
{
  // Font
  fontFamily: "Arial",
  fontSize: 11,
  bold: true,
  italic: true,
  underline: true,
  strike: true,

  // Colors
  color: "#FF0000",    // Text color
  fill: "#FFFF00",     // Background color

  // Alignment
  align: "center",     // "left" | "center" | "right"

  // Number format
  format: "number",
  decimalPlaces: 2,
  thousandsSeparator: true,
}
```

## Table Style

Apply styles to the entire table header and body.

```typescript
.table({
  columns: [...],
  data: [...],
  style: {
    header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },
    body: { fontSize: 11 },
  },
})
```

## Column Style

Apply styles to specific columns.

```typescript
.table({
  columns: [
    { key: "name", label: "Name" },
    { key: "price", label: "Price", style: { bold: true } },
    { key: "warning", label: "Warning", style: { color: "#FF0000" } },
  ],
  data: [...],
})
```

## Conditional Style

Apply styles based on data values.

```typescript
.table({
  columns: [...],
  data: [...],
  conditionalStyle: (row, col) => {
    if (col === "profit" && row.profit < 0) {
      return { color: "#FF0000" };  // Red text
    }
    if (col === "price" && row.price >= 10000) {
      return { bold: true };  // Bold
    }
    return {};
  },
})
```

## Cell-Level Style (_style)

Apply styles to specific cells only.

```typescript
.table({
  columns: [...],
  data: [
    { name: "Normal", price: 100 },
    {
      name: "Sale",
      price: 50,
      _style: {
        price: { bold: true, fill: "#FFFF00" },
      },
    },
  ],
})
```

## Style Priority

Styles are applied in this order (later ones take precedence):

1. **Preset** - `preset: "basic"` etc.
2. **Table Style** - `style.header` / `style.body`
3. **Column Style** - `columns[].style`
4. **Conditional Style** - `conditionalStyle`
5. **Cell-Level Style** - `data[]._style`

## Number Format

```typescript
.table({
  columns: [
    {
      key: "price",
      label: "Price",
      style: {
        format: "number",
        thousandsSeparator: true,  // 1,234,567
      },
    },
    {
      key: "rate",
      label: "Rate",
      style: {
        format: "number",
        decimalPlaces: 2,  // 12.34
      },
    },
  ],
  data: [...],
})
```

## Borders

```typescript
.table({
  columns: [...],
  data: [...],
  border: {
    outline: "medium",      // Outer border
    headerBody: "medium",   // Header-body boundary
    headerInner: "thin",    // Header internal
    bodyInner: "thin",      // Body internal
    borderColor: "#000080", // Border color
  },
})
```

## Related

- [Style API](../api-reference/styling.md) - All style properties
- [Borders Examples](../examples/borders.md) - Border usage examples
- [Conditional Styling Examples](../examples/conditional-styling.md) - Conditional style examples
