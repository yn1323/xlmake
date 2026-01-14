---
sidebar_position: 2
---

# Unsupported Features

xlmake is primarily designed for "data export" and does not support the following features.

## Unsupported Features List

| Feature | Reason |
|---------|--------|
| Charts | Out of scope |
| Formulas | Calculations should be done in code |
| Appending to existing Excel | New file creation only |
| Column width/row height reading | Not in reading API scope |
| Pivot Tables | Out of scope |
| Macros | Out of scope |

## Details

### Charts

xlmake is designed for data export, so chart functionality is not supported. If you need charts, consider generating them as images and inserting with `.image()`.

### Formulas

xlmake does not support formulas. Perform calculations in JavaScript/TypeScript and pass the results as data.

```typescript
// NG: Formulas don't work
// { total: "=A1+B1" }

// OK: Pass calculated results
{ total: price + quantity }
```

### Appending to Existing Excel

xlmake always generates new Excel files. Appending to existing files is not supported.

### Column Width/Row Height Reading

When reading existing Excel files with `read()`, column width and row height information cannot be retrieved.

### Pivot Tables / Macros

xlmake is designed for simple data export, so pivot tables and macros are not supported.

## Alternatives

For more advanced Excel operations, consider using [ExcelJS](https://github.com/exceljs/exceljs) directly. xlmake is built on ExcelJS but focuses on providing a more declarative and user-friendly API.

## Related

- [Excel Constraints](./excel-constraints.md) - Excel specification constraints
