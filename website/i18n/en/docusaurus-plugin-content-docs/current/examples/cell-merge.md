---
sidebar_position: 4
---

# Cell Merge

Examples of merging cells with same values vertically.

## Merge Entire Table

Specify `mergeSameValues: true` to merge cells with same values in all columns.

```typescript
const output = await xlmake()
  .sheet("Sales")
  .table({
    preset: "basic",
    mergeSameValues: true,
    columns: [
      { key: "category", label: "Category" },
      { key: "name", label: "Name" },
      { key: "price", label: "Price" },
    ],
    data: [
      { category: "Food", name: "Apple", price: 100 },
      { category: "Food", name: "Orange", price: 80 },
      { category: "Electronics", name: "TV", price: 50000 },
      { category: "Electronics", name: "Fridge", price: 80000 },
    ],
  })
  .getNode();
```

Result:
```
| Category    | Name   | Price |
| Food        | Apple  | 100   |
|   ↑        | Orange | 80    |  ← "Food" merged
| Electronics | TV     | 50000 |
|   ↑        | Fridge | 80000 |  ← "Electronics" merged
```

## Merge by Column

To merge only specific columns, specify `mergeSameValues` in the column definition.

```typescript
const output = await xlmake()
  .sheet("Sales")
  .table({
    preset: "basic",
    columns: [
      { key: "category", label: "Category", mergeSameValues: true },  // Merge this column only
      { key: "name", label: "Name" },  // No merge
      { key: "price", label: "Price" },   // No merge
    ],
    data: [
      { category: "Food", name: "Apple", price: 100 },
      { category: "Food", name: "Orange", price: 80 },
      { category: "Electronics", name: "TV", price: 50000 },
      { category: "Electronics", name: "Fridge", price: 80000 },
    ],
  })
  .getNode();
```

## Merge Multiple Columns

You can merge multiple columns independently.

```typescript
const output = await xlmake()
  .sheet("Sales")
  .table({
    preset: "basic",
    columns: [
      { key: "region", label: "Region", mergeSameValues: true },
      { key: "category", label: "Category", mergeSameValues: true },
      { key: "name", label: "Name" },
      { key: "price", label: "Price" },
    ],
    data: [
      { region: "Tokyo", category: "Food", name: "Apple", price: 100 },
      { region: "Tokyo", category: "Food", name: "Orange", price: 80 },
      { region: "Tokyo", category: "Electronics", name: "TV", price: 50000 },
      { region: "Osaka", category: "Food", name: "Banana", price: 120 },
      { region: "Osaka", category: "Food", name: "Grape", price: 300 },
    ],
  })
  .getNode();
```

## Merged Cell Alignment

Cells merged with `mergeSameValues` are automatically **top-aligned**.
This places text at the top of the merged range for better readability.

```typescript
// Merged cells are automatically top-aligned (vertical: "top")
.table({
  mergeSameValues: true,
  columns: [
    { key: "category", label: "Category" },  // Auto top-aligned when merged
    { key: "name", label: "Name" },
  ],
  data: [...],
})
```

## Related

- [.table() API](../api-reference/table.md) - mergeSameValues details
- [Style API](../api-reference/styling.md) - align details
