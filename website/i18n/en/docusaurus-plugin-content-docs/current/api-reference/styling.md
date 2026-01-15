---
sidebar_position: 4
---

# Style API

Types for defining cell and table styles.

## CellStyle

Defines cell-level styles.

```typescript
{
  // Font
  fontFamily?: string,
  fontSize?: number,
  bold?: boolean,
  italic?: boolean,
  underline?: boolean,
  strike?: boolean,

  // Colors
  color?: string,    // Text color "#RRGGBB"
  fill?: string,     // Background color "#RRGGBB"

  // Alignment
  align?: "left" | "center" | "right"
        | "top-left" | "top-center" | "top-right"
        | "middle-left" | "middle-center" | "middle-right"
        | "bottom-left" | "bottom-center" | "bottom-right",

  // Format
  format?: "string" | "number" | "date",
  decimalPlaces?: number,
  thousandsSeparator?: boolean,
}
```

| Property | Type | Description |
|----------|------|-------------|
| `fontFamily` | `string` | Font name |
| `fontSize` | `number` | Font size |
| `bold` | `boolean` | Bold |
| `italic` | `boolean` | Italic |
| `underline` | `boolean` | Underline |
| `strike` | `boolean` | Strikethrough |
| `color` | `string` | Text color (#RRGGBB format) |
| `fill` | `string` | Background color (#RRGGBB format) |
| `align` | `AlignType` | Alignment (see below) |
| `format` | `"string"` \| `"number"` \| `"date"` | Cell format |
| `decimalPlaces` | `number` | Decimal places |
| `thousandsSeparator` | `boolean` | Use thousands separator |

### AlignType

Can be specified as horizontal only, or as a vertical-horizontal compound format.

| Value | Description |
|-------|-------------|
| `"left"` / `"center"` / `"right"` | Horizontal only (vertical defaults to middle) |
| `"top-left"` / `"top-center"` / `"top-right"` | Top + horizontal |
| `"middle-left"` / `"middle-center"` / `"middle-right"` | Middle + horizontal |
| `"bottom-left"` / `"bottom-center"` / `"bottom-right"` | Bottom + horizontal |

:::info Auto Top Alignment for Merged Cells
Cells merged with `mergeSameValues` are automatically top-aligned (`top`).
:::

## TableStyle

Defines table-wide styles.

```typescript
{
  header?: CellStyle,  // Header row style
  body?: CellStyle,    // Body row style
}
```

**Example:**

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

## BorderStyle

Defines borders.

```typescript
{
  outline?: LineStyle,      // Outer border (entire table)
  headerBody?: LineStyle,   // Header-body boundary
  headerInner?: LineStyle,  // Header internal
  bodyInner?: LineStyle,    // Body internal
  borderColor?: string,     // Border color "#RRGGBB"
}
```

| Property | Type | Description |
|----------|------|-------------|
| `outline` | `LineStyle` | Table outer border |
| `headerBody` | `LineStyle` | Header-body boundary line |
| `headerInner` | `LineStyle` | Header internal borders |
| `bodyInner` | `LineStyle` | Body internal borders |
| `borderColor` | `string` | Border color (#RRGGBB format) |

## LineStyle

Specifies border style.

| Value | Description |
|-------|-------------|
| `"thin"` | Thin line |
| `"medium"` | Medium line |
| `"thick"` | Thick line |
| `"dotted"` | Dotted line |
| `"dashed"` | Dashed line |
| `"double"` | Double line |

**Example:**

```typescript
.table({
  columns: [...],
  data: [...],
  border: {
    outline: "medium",
    headerBody: "medium",
    headerInner: "thin",
    bodyInner: "thin",
    borderColor: "#000080",
  },
})
```

## Style Priority

Styles are applied in this order (later ones take precedence):

1. **Preset** - `preset: "basic"` etc.
2. **Table Style** - `style.header` / `style.body`
3. **Column Style** - `columns[].style`
4. **Conditional Style** - `conditionalStyle`
5. **Cell-Level Style** - `data[]._style`

```typescript
// Priority example
.table({
  preset: "basic",              // 1. Base style
  style: {
    header: { fontSize: 14 },   // 2. Override header font size
  },
  columns: [
    { key: "price", label: "Price", style: { bold: true } },  // 3. Bold this column
  ],
  conditionalStyle: (row, col) => {  // 4. Apply style by condition
    if (col === "price" && row.price < 0) {
      return { color: "#FF0000" };
    }
    return {};
  },
  data: [
    {
      name: "Sale",
      price: 100,
      _style: { price: { fill: "#FFFF00" } },  // 5. Background for this cell only
    },
  ],
})
```

## Related

- [.table()](./table.md) - Table API details
- [Border Examples](../examples/borders.md) - Border usage examples
- [Conditional Styling Examples](../examples/conditional-styling.md) - Conditional style examples
