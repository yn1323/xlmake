import * as fs from "fs";
import * as path from "path";
import { describe, expect, it } from "vitest";
import { createWorkbook } from "../src";
import { readExcel } from "./utils";

const OUTPUT_DIR = path.join(__dirname, "output");
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

describe("Advanced Features", () => {
  it("should generate advanced examples in a single workbook", async () => {
    const filePath = path.join(OUTPUT_DIR, "advanced.xlsx");
    const workbook = createWorkbook();

    // --- Sheet 1: Multiple Sheets Demo (Users) ---
    workbook.addSheet({
      name: "Users",
      headers: [
        { key: "id", label: "ID", width: 8 },
        { key: "name", label: "Name", width: 20 },
        { key: "email", label: "Email", width: 30 },
      ],
      rows: [
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
      ],
      borders: "all",
    });

    // --- Sheet 2: Multiple Sheets Demo (Products) ---
    workbook.addSheet({
      name: "Products",
      headers: [
        { key: "code", label: "Code", width: 10 },
        { key: "title", label: "Title", width: 25 },
        { key: "price", label: "Price", width: 12, format: "$#,##0" },
      ],
      rows: [
        { code: "P001", title: "Laptop", price: 1200 },
        { code: "P002", title: "Monitor", price: 350 },
        { code: "P003", title: "Keyboard", price: 80 },
      ],
      borders: "all",
    });

    // --- Sheet 3: Visual Gallery - Fonts ---
    workbook.addSheet({
      name: "Fonts",
      headers: [
        { key: "label", label: "Style", width: 15 },
        {
          key: "text",
          label: "Preview",
          width: 30,
          style: (val, row) => {
            const s: any = { font: {} };
            if (row.label === "Bold") s.font.bold = true;
            if (row.label === "Italic") s.font.italic = true;
            if (row.label === "Underline") s.font.underline = true;
            if (row.label === "Strike") s.font.strike = true;
            if (row.label === "Size 14") s.font.size = 14;
            if (row.label === "Size 18") s.font.size = 18;
            if (row.label === "Color Red") s.font.color = "#FF0000";
            if (row.label === "Color Blue") s.font.color = "#0000FF";
            return s;
          },
        },
      ],
      rows: [
        { label: "Normal", text: "The quick brown fox" },
        { label: "Bold", text: "The quick brown fox" },
        { label: "Italic", text: "The quick brown fox" },
        { label: "Underline", text: "The quick brown fox" },
        { label: "Strike", text: "The quick brown fox" },
        { label: "Size 14", text: "The quick brown fox" },
        { label: "Size 18", text: "The quick brown fox" },
        { label: "Color Red", text: "The quick brown fox" },
        { label: "Color Blue", text: "The quick brown fox" },
      ],
    });

    // --- Sheet 4: Visual Gallery - Fills ---
    workbook.addSheet({
      name: "Fills",
      headers: [
        { key: "color", label: "Color Name", width: 15 },
        { key: "hex", label: "Hex Code", width: 15 },
        {
          key: "preview",
          label: "Preview",
          width: 15,
          style: (val, row) => ({ fill: { color: row.hex } }),
        },
      ],
      rows: [
        { color: "Red", hex: "#FF0000", preview: "" },
        { color: "Green", hex: "#00FF00", preview: "" },
        { color: "Blue", hex: "#0000FF", preview: "" },
        { color: "Yellow", hex: "#FFFF00", preview: "" },
        { color: "Gray", hex: "#CCCCCC", preview: "" },
        { color: "Orange", hex: "#FF8000", preview: "" },
        { color: "Purple", hex: "#8000FF", preview: "" },
      ],
    });

    // --- Sheet 5: Visual Gallery - Alignment ---
    workbook.addSheet({
      name: "Alignment",
      headers: [
        { key: "h", label: "Horizontal", width: 15 },
        { key: "v", label: "Vertical", width: 15 },
        {
          key: "preview",
          label: "Preview",
          width: 20,
          style: (val, row) => ({
            alignment: {
              horizontal: row.h as any,
              vertical: row.v as any,
            },
          }),
        },
      ],
      rows: [
        { h: "left", v: "top", preview: "Text" },
        { h: "center", v: "top", preview: "Text" },
        { h: "right", v: "top", preview: "Text" },
        { h: "left", v: "middle", preview: "Text" },
        { h: "center", v: "middle", preview: "Text" },
        { h: "right", v: "middle", preview: "Text" },
        { h: "left", v: "bottom", preview: "Text" },
        { h: "center", v: "bottom", preview: "Text" },
        { h: "right", v: "bottom", preview: "Text" },
      ],
    });

    // --- Sheet 6: Comprehensive 10x10 ---
    const gridData: any[] = [];
    const categories = ["Electronics", "Furniture", "Office", "Kitchen"];
    const statuses = ["In Stock", "Low Stock", "Out of Stock"];

    for (let i = 1; i <= 10; i++) {
      const price = i * 100 + 50;
      const qty = i * 2 + 1;
      gridData.push({
        id: i,
        category: categories[i % categories.length],
        product: `Product ${i}`,
        date: new Date(2025, 0, i),
        price: price,
        quantity: qty,
        total: price * qty,
        rate: i / 100,
        status: statuses[i % statuses.length],
        code: `00${i}`.slice(-3),
      });
    }

    workbook.addSheet({
      name: "Comprehensive",
      title: {
        label: "Sales Report - January 2025",
        style: {
          fill: { color: "#4472C4" },
          font: { color: "#FFFFFF", bold: true, size: 14 },
          alignment: { horizontal: "center" },
        },
      },
      headers: [
        { key: "id", label: "ID", width: 8 },
        {
          key: "category",
          label: "Category",
          width: 15,
          merge: "vertical",
          style: { alignment: { vertical: "middle" } },
        },
        { key: "product", label: "Product Name", width: 20 },
        { key: "date", label: "Date", width: 12, format: "yyyy-mm-dd" },
        { key: "price", label: "Price", width: 12, format: "$#,##0.00" },
        { key: "quantity", label: "Qty", width: 8, style: { alignment: { horizontal: "center" } } },
        { key: "total", label: "Total", width: 15, format: "$#,##0.00", style: { font: { bold: true } } },
        { key: "rate", label: "Rate", width: 10, format: "0.0%" },
        {
          key: "status",
          label: "Status",
          width: 12,
          style: (val) => {
            if (val === "In Stock") return { font: { color: "#008800" } };
            if (val === "Low Stock") return { font: { color: "#FFA500" } };
            return { font: { color: "#FF0000" } };
          },
        },
        { key: "code", label: "Code", width: 10, style: { alignment: { horizontal: "center" } } },
      ],
      rows: gridData,
      styles: {
        row: (_, i) => (i % 2 === 1 ? { fill: { color: "#F2F2F2" } } : {}),
      },
      borders: "all",
    });

    await workbook.save(filePath);

    // --- Assertions ---
    const wb = await readExcel(filePath);

    // Multiple sheets assertions
    const usersSheet = wb.getWorksheet("Users");
    const productsSheet = wb.getWorksheet("Products");
    expect(usersSheet).toBeDefined();
    expect(productsSheet).toBeDefined();
    if (usersSheet && productsSheet) {
      expect(usersSheet.getCell(2, 2).value).toBe("Alice");
      expect(productsSheet.getCell(2, 2).value).toBe("Laptop");
    }

    // Visual gallery assertions
    const fontsSheet = wb.getWorksheet("Fonts");
    expect(fontsSheet).toBeDefined();

    const fillsSheet = wb.getWorksheet("Fills");
    expect(fillsSheet).toBeDefined();

    // Comprehensive assertions
    const compSheet = wb.getWorksheet("Comprehensive");
    expect(compSheet).toBeDefined();
    if (compSheet) {
      expect(compSheet.getCell(1, 1).value).toBe("Sales Report - January 2025");
      expect(compSheet.getCell(3, 3).value).toBe("Product 1");
    }
  });

  // Timeout tests (no file output needed)
  describe("Timeout Functionality", () => {
    it("should timeout if operation takes too long", async () => {
      const filePath = path.join(OUTPUT_DIR, "timeout_test.xlsx");
      const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}` }));

      const sf = createWorkbook().addSheet({
        name: "Timeout",
        headers: [
          { key: "id", label: "ID" },
          { key: "name", label: "Name" },
        ],
        rows: data,
      });

      await expect(sf.save(filePath, { timeout: 1 })).rejects.toThrow(/Operation timed out/);
    });

    it("should respect custom timeout", async () => {
      const filePath = path.join(OUTPUT_DIR, "timeout_success.xlsx");

      await expect(
        createWorkbook()
          .addSheet({
            name: "Timeout",
            headers: [
              { key: "id", label: "ID" },
              { key: "name", label: "Name" },
            ],
            rows: [{ id: 1, name: "Test" }],
          })
          .save(filePath, { timeout: 5000 }),
      ).resolves.not.toThrow();
    });
  });
});
