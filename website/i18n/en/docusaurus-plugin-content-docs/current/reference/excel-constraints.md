---
sidebar_position: 3
---

# Excel Constraints

xlkit automatically checks Excel specification constraints and throws errors when violated.

## Constraints List

| Item | Constraint |
|------|------------|
| Sheet name | Max 31 characters |
| Sheet name forbidden characters | `: \ / ? * [ ]` |
| Max rows | 1,048,576 rows |
| Max columns | 16,384 columns (XFD) |

## Sheet Name Constraints

### Character Limit

Sheet names can have a maximum of 31 characters.

```typescript
// OK
xlkit().sheet("Sales Data 2024")  // 15 characters

// NG: Error thrown
xlkit().sheet("This is a very long sheet name that exceeds 31 characters")
```

### Forbidden Characters

These characters cannot be used in sheet names:

- `:` (colon)
- `\` (backslash)
- `/` (slash)
- `?` (question mark)
- `*` (asterisk)
- `[` (left bracket)
- `]` (right bracket)

```typescript
// NG: Error thrown
xlkit().sheet("Sales/Stock")    // Contains slash
xlkit().sheet("Data[2024]")     // Contains brackets
```

## Row/Column Constraints

Excel's maximum row count is 1,048,576 and maximum column count is 16,384 (XFD column).

xlkit automatically checks these constraints and throws errors when exceeded.

## Error Handling

Constraint violations throw errors, so you can handle them with try-catch.

```typescript
try {
  const output = await xlkit()
    .sheet("This is a very long sheet name that exceeds 31 characters")
    .table({ ... })
    .getNode();
} catch (error) {
  console.error("Excel constraint violation:", error.message);
}
```

## Related

- [Multiple Sheets](../guides/multi-sheet.md) - Creating multiple sheets
- [Unsupported Features](./limitations.md) - xlkit limitations
