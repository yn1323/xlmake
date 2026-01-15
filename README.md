# xlmake

<p align="center">
  <img src="logo.png" alt="xlmake logo" width="200">
</p>

**Declarative Excel generation library** - See the final Excel structure from your code

[Documentation](https://yn1323.github.io/xlmake/)

Built on top of ExcelJS, providing a more intuitive and declarative API.

## Comparison with ExcelJS

| Aspect | ExcelJS (Imperative) | xlmake (Declarative) |
|--------|---------------------|---------------------|
| Style | Operate cells one by one | Declare the final structure |
| Clarity | Hard to see the result from code | Easy to see the result from code |
| Analogy | jQuery | React |

## Installation

```bash
npm install xlmake
# or
pnpm add xlmake
# or
yarn add xlmake
```

## Quick Start

```typescript
import { xlmake } from "xlmake";

const output = await xlmake()
  .sheet("Sales")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "price", label: "Price" },
      { key: "quantity", label: "Quantity" },
    ],
    data: [
      { name: "Apple", price: 100, quantity: 50 },
      { name: "Orange", price: 80, quantity: 100 },
    ],
  })
  .getNode();

await output.saveToFile("report.xlsx");
```

## License

MIT

