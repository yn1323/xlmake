---
sidebar_position: 2
---

# xlkit()

Factory function that returns a WorkbookBuilder.

## Import

```typescript
import { xlkit } from "xlkit";
```

## Usage

```typescript
const builder = xlkit();
```

## WorkbookBuilder Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `sheet(name?)` | `SheetBuilder` | Add sheet |
| `merge(workbooks)` | `this` | Merge multiple workbooks |
| `getNode()` | `Promise<NodeOutput>` | Get Node.js output |
| `getBrowser()` | `Promise<BrowserOutput>` | Get browser output |

## SheetBuilder Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `table(options)` | `this` | Add table |
| `text(input)` | `this` | Add text |
| `image(options)` | `this` | Add image |
| `space(lines?)` | `this` | Add empty rows (default: 1) |
| `sheet(name?)` | `SheetBuilder` | Switch to another sheet |
| `merge(workbooks)` | `WorkbookBuilder` | Merge multiple workbooks |
| `getNode()` | `Promise<NodeOutput>` | Get Node.js output |
| `getBrowser()` | `Promise<BrowserOutput>` | Get browser output |

## sheet()

Adds a sheet. Name is auto-generated if omitted.

```typescript
// With name
xlkit().sheet("Sales Data")

// Without name (Sheet1, Sheet2... auto-generated)
xlkit().sheet()
```

## merge()

Merges multiple workbooks into one.

**Parameters:**
- `workbooks: (WorkbookBuilder | SheetBuilder)[]` - Array of workbooks to merge

**Returns:**
- `WorkbookBuilder` or `this` (for method chaining)

**Errors:**
- Throws `Error` if sheet names are duplicated
- Empty workbooks (0 sheets) are ignored

**Usage:**

```typescript
// Basic usage
const bookA = xlkit().sheet("A").table({ columns: [...], data: [...] });
const bookB = xlkit().sheet("B").table({ columns: [...], data: [...] });
const merged = xlkit().merge([bookA, bookB]);
```

```typescript
// Modularized sheet creation
function createSalesSheet() {
  return xlkit().sheet("Sales").table({ ... });
}

function createStockSheet() {
  return xlkit().sheet("Stock").table({ ... });
}

// Merge into one file
const merged = xlkit().merge([
  createSalesSheet(),
  createStockSheet(),
]);

await merged.getNode().saveToFile("report.xlsx");
```

```typescript
// Method chaining
const merged = xlkit()
  .sheet("Start")
  .text("Start")
  .merge([bookA, bookB])
  .sheet("End")
  .text("End");
```

## getNode()

Gets output object for Node.js environment.

```typescript
const output = await xlkit()
  .sheet("Data")
  .table({ columns: [...], data: [...] })
  .getNode();

// Save to file
await output.saveToFile("report.xlsx");

// Get as Buffer (for API responses)
const buffer = await output.toBuffer();
```

## getBrowser()

Gets output object for browser environment.

```typescript
const output = await xlkit()
  .sheet("Data")
  .table({ columns: [...], data: [...] })
  .getBrowser();

// Download
await output.download("report.xlsx");
```
