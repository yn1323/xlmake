---
sidebar_position: 1
---

# Presets Reference

Table style presets provided by xlkit.

## Preset Comparison

| Preset | Header | Body | Borders |
|--------|--------|------|---------|
| `basic` | Blue (#4472C4), white text, bold | - | All borders (thin) |
| `minimal` | Bold only | - | None |
| `striped` | Blue (#4472C4), white text, bold | Alternating gray (#F2F2F2) | All borders (thin) |

## basic

Standard business-style preset.

### Features
- Header: Blue background (#4472C4), white text, bold
- Body: Default
- Borders: All borders (thin)

### Usage

```typescript
.table({
  preset: "basic",
  columns: [...],
  data: [...],
})
```

## minimal

Simple, lightweight style.

### Features
- Header: Bold only
- Body: Default
- Borders: None

### Usage

```typescript
.table({
  preset: "minimal",
  columns: [...],
  data: [...],
})
```

## striped

Easy-to-read style with alternating row colors.

### Features
- Header: Blue background (#4472C4), white text, bold
- Body: Alternating gray background (#F2F2F2)
- Borders: All borders (thin)

### Usage

```typescript
.table({
  preset: "striped",
  columns: [...],
  data: [...],
})
```

## Customization

You can apply additional styles on top of presets. Later styles take precedence.

```typescript
.table({
  preset: "basic",
  style: {
    header: { fontSize: 14 },  // Change header font size
  },
  columns: [
    { key: "price", label: "Price", style: { bold: true } },  // Bold this column
  ],
  data: [...],
})
```

## Related

- [Preset Examples](../examples/presets.md) - Preset usage examples
- [Style API](../api-reference/styling.md) - Style priority
