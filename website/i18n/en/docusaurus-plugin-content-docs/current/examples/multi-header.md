---
sidebar_position: 3
---

# Multi-Header

Examples of creating hierarchical headers (multi-headers).

## 2-Level Header

```typescript
const output = await xlkit()
  .sheet("Sales")
  .table({
    preset: "basic",
    columns: [
      {
        label: "Product Info",
        children: [
          { key: "category", label: "Category" },
          { key: "name", label: "Name" },
        ],
      },
      { key: "price", label: "Price" },
      { key: "quantity", label: "Quantity" },
    ],
    data: [
      { category: "Food", name: "Apple", price: 100, quantity: 50 },
      { category: "Food", name: "Orange", price: 80, quantity: 100 },
    ],
  })
  .getNode();
```

Result:
```
| Product Info       | Price | Quantity |
| Category | Name    |       |          |
| Food     | Apple   | 100   | 50       |
| Food     | Orange  | 80    | 100      |
```

## 3-Level Header

You can create even deeper hierarchies.

```typescript
const output = await xlkit()
  .sheet("Details")
  .table({
    preset: "basic",
    columns: [
      {
        label: "Product",
        children: [
          {
            label: "Details",
            children: [
              { key: "category", label: "Category" },
              { key: "name", label: "Name" },
            ],
          },
        ],
      },
      {
        label: "Numbers",
        children: [
          { key: "price", label: "Price" },
          { key: "quantity", label: "Quantity" },
        ],
      },
    ],
    data: [
      { category: "Food", name: "Apple", price: 100, quantity: 50 },
      { category: "Food", name: "Orange", price: 80, quantity: 100 },
    ],
  })
  .getNode();
```

Result:
```
| Product            | Numbers      |
| Details            | Price | Qty  |
| Category | Name    |       |      |
| Food     | Apple   | 100   | 50   |
```

## Mixed Headers

You can make only some columns multi-header.

```typescript
const output = await xlkit()
  .sheet("Report")
  .table({
    preset: "basic",
    columns: [
      { key: "id", label: "ID" },  // Regular header
      {
        label: "Product Info",  // Multi-header
        children: [
          { key: "category", label: "Category" },
          { key: "name", label: "Name" },
        ],
      },
      { key: "price", label: "Price" },  // Regular header
    ],
    data: [
      { id: 1, category: "Food", name: "Apple", price: 100 },
      { id: 2, category: "Food", name: "Orange", price: 80 },
    ],
  })
  .getNode();
```

## Related

- [.table() API](../api-reference/table.md) - Column definition details
