---
sidebar_position: 5
---

# .text()

Adds text.

## Input Formats

### Simple Text

```typescript
.text("Title")
```

### Styled Text

```typescript
.text({
  value: "Important text",
  style: { bold: true, fontSize: 14, color: "#FF0000" }
})
```

## TextInput

| Format | Description |
|--------|-------------|
| `string` | Plain text |
| `{ value, style? }` | Styled text |

## Example

```typescript
const output = await xlmake()
  .sheet("Report")
  .text({ value: "Sales Report", style: { bold: true, fontSize: 16 } })
  .text("January 2024")
  .space(2)
  .table({
    preset: "basic",
    columns: [...],
    data: [...],
  })
  .space(1)
  .text("* Prices exclude tax")
  .getNode();
```

## Style Options

`style` accepts [CellStyle](./styling.md#cellstyle) properties.

```typescript
.text({
  value: "Warning message",
  style: {
    bold: true,
    color: "#FF0000",
    fontSize: 12,
  }
})
```

## Related

- [Style API](./styling.md) - CellStyle details
