---
sidebar_position: 3
---

# .table()

Adds a table.

## TableOptions

```typescript
.table({
  preset?: "basic" | "minimal" | "striped",
  columns: Column<T>[],
  data: T[],
  autoWidth?: "all" | "body" | false,
  mergeSameValues?: boolean,
  style?: TableStyle,
  border?: BorderStyle,
})
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `preset` | `"basic"` \| `"minimal"` \| `"striped"` | - | Preset style |
| `columns` | `Column<T>[]` | **Required** | Column definitions |
| `data` | `T[]` | **Required** | Data array (supports `_style`, `_rowStyle` for row/cell styling) |
| `autoWidth` | `"all"` \| `"body"` \| `false` | `false` | Auto column width |
| `mergeSameValues` | `boolean` | `false` | Merge cells with same values vertically |
| `style` | `TableStyle` | - | Table-wide style |
| `border` | `BorderStyle` | - | Border settings |

### Special Properties for data

Each element in the data array can have these special properties:

| Property | Type | Description |
|----------|------|-------------|
| `_rowStyle` | `CellStyle` | Style applied to the entire row |
| `_style` | `Partial<Record<keyof T, CellStyle>>` | Style applied to specific cells |

```typescript
data: [
  { name: "Normal", price: 100 },
  { name: "Highlighted", price: 200, _rowStyle: { fill: "#FFFF00" } },
  { name: "Mixed", price: 300, _rowStyle: { bold: true }, _style: { price: { fill: "#FF0000" } } },
]
```

## Column Definition (Column)

### LeafColumn (Regular Column)

```typescript
{
  key: keyof T & string,     // Data key
  label: string,             // Header text
  style?: CellStyle,         // Default style for this column
  mergeSameValues?: boolean, // Merge same values in this column
}
```

### ParentColumn (Multi-Header)

```typescript
{
  label: string,             // Parent header text
  children: Column<T>[],     // Child columns (recursive)
}
```

**Multi-header example:**

```typescript
columns: [
  {
    label: "Product Info",
    children: [
      { key: "category", label: "Category" },
      { key: "name", label: "Name" },
    ],
  },
  { key: "price", label: "Price" },
]
```

Result:
```
| Product Info       | Price |
| Category | Name    |       |
```

## autoWidth

Auto-adjusts column width.

| Value | Description |
|-------|-------------|
| `"all"` | Adjust by max width of header and body |
| `"body"` | Adjust by body only (ignore header) |
| `false` | No auto-adjustment (default) |

```typescript
.table({
  autoWidth: "all",
  columns: [...],
  data: [...],
})
```

## mergeSameValues

Merges cells with same values vertically.

```typescript
// Merge entire table
.table({
  mergeSameValues: true,
  columns: [...],
  data: [...],
})

// Merge by column
.table({
  columns: [
    { key: "category", label: "Category", mergeSameValues: true },
    { key: "name", label: "Name" },
  ],
  data: [...],
})
```

## Related

- [Style API](./styling.md) - CellStyle, TableStyle, BorderStyle details
- [Presets](../reference/presets.md) - Preset details
