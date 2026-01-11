import { Buffer } from "buffer";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { xlkit } from "xlkit";

globalThis.Buffer = Buffer;

type SampleData = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const sampleData: SampleData[] = [
  { id: 1, name: "Apple", price: 150, quantity: 10 },
  { id: 2, name: "Banana", price: 100, quantity: 25 },
  { id: 3, name: "Orange", price: 120, quantity: 15 },
  { id: 4, name: "Grape", price: 300, quantity: 8 },
  { id: 5, name: "Melon", price: 800, quantity: 3 },
];

const columns = [
  { key: "id" as const, label: "ID" },
  { key: "name" as const, label: "Product Name" },
  { key: "price" as const, label: "Price" },
  { key: "quantity" as const, label: "Quantity" },
];

async function downloadExcel(preset: "basic" | "minimal" | "striped") {
  const output = await xlkit()
    .sheet("Products")
    .table<SampleData>({
      preset,
      columns,
      data: sampleData,
      autoWidth: "all",
    })
    .getBrowser();

  await output.download(`sample-${preset}.xlsx`);
}

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1>xlkit Demo</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>Declarative Excel generation library for TypeScript</p>

      <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Table Presets</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => downloadExcel("basic")}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#4472C4",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Basic Preset
        </button>
        <button
          type="button"
          onClick={() => downloadExcel("minimal")}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#70AD47",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Minimal Preset
        </button>
        <button
          type="button"
          onClick={() => downloadExcel("striped")}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#ED7D31",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Striped Preset
        </button>
      </div>

      <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
        <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Sample Data</h3>
        <pre style={{ fontSize: "0.85rem", overflow: "auto" }}>{JSON.stringify(sampleData, null, 2)}</pre>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
