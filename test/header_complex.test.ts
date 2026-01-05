import * as fs from "fs";
import * as path from "path";
import { describe, expect, it } from "vitest";
import { createWorkbook } from "../src";
import { readExcel } from "./utils";

const OUTPUT_DIR = path.join(__dirname, "output");
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

describe("Complex Header", () => {
  it("should render multi-row headers with colSpan (same-value auto-merge)", async () => {
    const filePath = path.join(OUTPUT_DIR, "header_colspan.xlsx");

    await createWorkbook()
      .addSheet({
        name: "ColSpanTest",
        headers: [
          { key: "col1", label: ["Group A", "Sub 1"] },
          { key: "col2", label: ["Group A", "Sub 2"] }, // Same 'Group A' → colSpan
          { key: "col3", label: ["Group B", "Sub 3"] },
        ],
        rows: [
          { col1: "A1", col2: "B1", col3: "C1" },
          { col1: "A2", col2: "B2", col3: "C2" },
        ],
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet("ColSpanTest");

    expect(sheet).toBeDefined();
    if (sheet) {
      // Check Group A merge (colSpan: 2) - same value auto-merge
      const groupA = sheet.getCell(1, 1);
      expect(groupA.value).toBe("Group A");

      // Check that cell (1,2) is merged to (1,1)
      const cell12 = sheet.getCell(1, 2);
      expect(cell12.master).toBe(groupA);

      // Check Group B
      const groupB = sheet.getCell(1, 3);
      expect(groupB.value).toBe("Group B");

      // Check Sub headers (row 2)
      expect(sheet.getCell(2, 1).value).toBe("Sub 1");
      expect(sheet.getCell(2, 2).value).toBe("Sub 2");
      expect(sheet.getCell(2, 3).value).toBe("Sub 3");

      // Check data starts at row 3
      expect(sheet.getCell(3, 1).value).toBe("A1");
      expect(sheet.getCell(3, 2).value).toBe("B1");
      expect(sheet.getCell(3, 3).value).toBe("C1");

      // Check second data row
      expect(sheet.getCell(4, 1).value).toBe("A2");
    }
  });

  it("should render 3-row headers with complex merges", async () => {
    const filePath = path.join(OUTPUT_DIR, "header_complex_3rows.xlsx");

    await createWorkbook()
      .addSheet({
        name: "ThreeRowHeader",
        headers: [
          { key: "a", label: ["Main Group", "Left", "A"] },
          { key: "b", label: ["Main Group", "Left", "B"] },
          { key: "c", label: ["Main Group", "Right", "C"] },
          { key: "d", label: ["Main Group", "Right", "D"] },
        ],
        rows: [{ a: 1, b: 2, c: 3, d: 4 }],
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet("ThreeRowHeader");

    expect(sheet).toBeDefined();
    if (sheet) {
      // Check Main Group spans all 4 columns (row 1)
      const mainGroup = sheet.getCell(1, 1);
      expect(mainGroup.value).toBe("Main Group");

      // Check Left spans columns 1-2 (row 2)
      const left = sheet.getCell(2, 1);
      expect(left.value).toBe("Left");

      // Check Right spans columns 3-4 (row 2)
      const right = sheet.getCell(2, 3);
      expect(right.value).toBe("Right");

      // Check individual headers in row 3
      expect(sheet.getCell(3, 1).value).toBe("A");
      expect(sheet.getCell(3, 2).value).toBe("B");
      expect(sheet.getCell(3, 3).value).toBe("C");
      expect(sheet.getCell(3, 4).value).toBe("D");

      // Check data starts at row 4
      expect(sheet.getCell(4, 1).value).toBe(1);
      expect(sheet.getCell(4, 2).value).toBe(2);
    }
  });

  it("should apply styles to multi-row header cells", async () => {
    const filePath = path.join(OUTPUT_DIR, "header_styled.xlsx");

    await createWorkbook()
      .addSheet({
        name: "StyledHeader",
        headers: [
          {
            key: "col1",
            label: [
              {
                value: "Styled Group",
                style: {
                  font: { bold: true },
                  fill: { color: "#4472C4" },
                  alignment: { horizontal: "center" },
                },
              },
              "Header 1",
            ],
          },
          {
            key: "col2",
            label: [
              {
                value: "Styled Group", // Same value → colSpan
                style: {
                  font: { bold: true },
                  fill: { color: "#4472C4" },
                  alignment: { horizontal: "center" },
                },
              },
              "Header 2",
            ],
          },
        ],
        rows: [{ col1: "Data 1", col2: "Data 2" }],
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet("StyledHeader");

    expect(sheet).toBeDefined();
    if (sheet) {
      const styledCell = sheet.getCell(1, 1);
      expect(styledCell.value).toBe("Styled Group");
      expect(styledCell.font?.bold).toBe(true);
      expect(styledCell.alignment?.horizontal).toBe("center");
    }
  });

  it("should work with title rows and multi-row headers", async () => {
    const filePath = path.join(OUTPUT_DIR, "header_with_title.xlsx");

    await createWorkbook()
      .addSheet({
        name: "WithTitle",
        headers: [
          { key: "col1", label: ["Group", "A"] },
          { key: "col2", label: ["Group", "B"] }, // Same 'Group' → colSpan
        ],
        title: {
          label: "Report Title",
        },
        rows: [{ col1: "X", col2: "Y" }],
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet("WithTitle");

    expect(sheet).toBeDefined();
    if (sheet) {
      // Title should be at row 1
      expect(sheet.getCell(1, 1).value).toBe("Report Title");

      // Multi-row headers should start at row 2
      expect(sheet.getCell(2, 1).value).toBe("Group");
      expect(sheet.getCell(3, 1).value).toBe("A");
      expect(sheet.getCell(3, 2).value).toBe("B");

      // Data should start at row 4
      expect(sheet.getCell(4, 1).value).toBe("X");
      expect(sheet.getCell(4, 2).value).toBe("Y");
    }
  });

  it("should apply header-body border after multi-row headers", async () => {
    const filePath = path.join(OUTPUT_DIR, "header_border.xlsx");

    await createWorkbook()
      .addSheet({
        name: "BorderTest",
        headers: [
          { key: "col1", label: ["Group", "A"] },
          { key: "col2", label: ["Group", "B"] },
        ],
        rows: [{ col1: "X", col2: "Y" }],
        borders: "header-body",
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet("BorderTest");

    expect(sheet).toBeDefined();
    if (sheet) {
      // The border should be on the last header row (row 2)
      const lastHeaderCell = sheet.getCell(2, 1);
      expect(lastHeaderCell.border?.bottom?.style).toBe("medium");
    }
  });

  it("should work with single row when label is not an array", async () => {
    const filePath = path.join(OUTPUT_DIR, "header_single_row.xlsx");

    await createWorkbook()
      .addSheet({
        name: "SingleRow",
        headers: [
          { key: "name", label: "Name" },
          { key: "age", label: "Age" },
        ],
        rows: [{ name: "Alice", age: 30 }],
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet("SingleRow");

    expect(sheet).toBeDefined();
    if (sheet) {
      // Header should be at row 1
      expect(sheet.getCell(1, 1).value).toBe("Name");
      expect(sheet.getCell(1, 2).value).toBe("Age");

      // Data should be at row 2
      expect(sheet.getCell(2, 1).value).toBe("Alice");
      expect(sheet.getCell(2, 2).value).toBe(30);
    }
  });

  it("should throw error for vertical duplicate header values", () => {
    expect(() => {
      createWorkbook().addSheet({
        name: "VerticalDup",
        headers: [
          { key: "col1", label: ["Same", "Same"] }, // Vertical duplicate → Error
          { key: "col2", label: ["A", "B"] },
        ],
        rows: [{ col1: "X", col2: "Y" }],
      });
    }).toThrow(/Vertical duplicate header values are not allowed/);
  });

  it("should support mixed single and multi-row headers", async () => {
    const filePath = path.join(OUTPUT_DIR, "header_mixed.xlsx");

    await createWorkbook()
      .addSheet({
        name: "MixedHeader",
        headers: [
          { key: "id", label: "ID" }, // Single row
          { key: "name", label: ["Person", "Name"] }, // Multi-row
          { key: "age", label: ["Person", "Age"] }, // Multi-row, same 'Person' → colSpan
        ],
        rows: [{ id: 1, name: "Alice", age: 30 }],
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet("MixedHeader");

    expect(sheet).toBeDefined();
    if (sheet) {
      // Row 1: ID (repeated), Person (spans col 2-3)
      expect(sheet.getCell(1, 1).value).toBe("ID");
      expect(sheet.getCell(1, 2).value).toBe("Person");

      // Row 2: ID (repeated), Name, Age
      expect(sheet.getCell(2, 1).value).toBe("ID");
      expect(sheet.getCell(2, 2).value).toBe("Name");
      expect(sheet.getCell(2, 3).value).toBe("Age");

      // Data starts at row 3
      expect(sheet.getCell(3, 1).value).toBe(1);
      expect(sheet.getCell(3, 2).value).toBe("Alice");
      expect(sheet.getCell(3, 3).value).toBe(30);
    }
  });

  it("should handle label with style object (non-array)", async () => {
    const filePath = path.join(OUTPUT_DIR, "header_label_style.xlsx");

    await createWorkbook()
      .addSheet({
        name: "LabelStyle",
        headers: [
          {
            key: "col1",
            label: {
              value: "Styled Label",
              style: { font: { bold: true, color: "#FF0000" } },
            },
          },
          { key: "col2", label: "Normal Label" },
        ],
        rows: [{ col1: "A", col2: "B" }],
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet("LabelStyle");

    expect(sheet).toBeDefined();
    if (sheet) {
      const styledCell = sheet.getCell(1, 1);
      expect(styledCell.value).toBe("Styled Label");
      expect(styledCell.font?.bold).toBe(true);
    }
  });
});
