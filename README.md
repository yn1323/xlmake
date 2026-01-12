# xlkit

<p align="center">
  <img src="logo.png" alt="xlkit logo" width="200">
</p>

**Declarative Excel generation library** - See the final Excel structure from your code

[Documentation](https://yn1323.github.io/xlkit/)

Built on top of ExcelJS, providing a more intuitive and declarative API.

## Comparison with ExcelJS

| Aspect | ExcelJS (Imperative) | xlkit (Declarative) |
|--------|---------------------|---------------------|
| Style | Operate cells one by one | Declare the final structure |
| Clarity | Hard to see the result from code | Easy to see the result from code |
| Analogy | jQuery | React |

## Installation

```bash
npm install xlkit
# or
pnpm add xlkit
# or
yarn add xlkit
```

## Quick Start

```typescript
import { xlkit } from "xlkit";

const output = await xlkit()
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
