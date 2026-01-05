import * as fs from "fs";
import * as path from "path";
import { describe, expect, it } from "vitest";
import { createWorkbook } from "../src";
import { getCellStyle, readExcel } from "./utils";

const OUTPUT_DIR = path.join(__dirname, "output");
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

describe("Styling Features", () => {
  it("should generate styling examples in a single workbook", async () => {
    const filePath = path.join(OUTPUT_DIR, "styling.xlsx");
    const workbook = createWorkbook();

    // --- Sheet 1: Font Styling ---
    workbook.addSheet({
      name: "Font",
      headers: [
        {
          key: "name",
          label: "Name",
          style: { font: { bold: true, size: 14 } },
        },
        {
          key: "status",
          label: "Status",
          style: (val) => ({
            font: { color: val === "active" ? "#00FF00" : "#FF0000", italic: true },
          }),
        },
      ],
      rows: [
        { name: "Alice", status: "active" },
        { name: "Bob", status: "inactive" },
      ],
    });

    // --- Sheet 2: Fill Styling ---
    workbook.addSheet({
      name: "Fill",
      title: {
        label: "ID List",
        style: { fill: { color: "#CCCCCC" } },
      },
      headers: [{ key: "id", label: "ID" }],
      rows: [{ id: 1 }, { id: 2 }, { id: 3 }],
      styles: {
        row: (_, index) => (index % 2 === 1 ? { fill: { color: "#EFEFEF" } } : {}),
      },
    });

    // --- Sheet 3: Border 'all' ---
    workbook.addSheet({
      name: "Border-All",
      headers: [{ key: "val", label: "Value" }],
      rows: [{ val: "A" }, { val: "B" }],
      borders: "all",
    });

    // --- Sheet 4: Border 'outer' ---
    workbook.addSheet({
      name: "Border-Outer",
      headers: [{ key: "val", label: "Value" }],
      rows: [{ val: "A" }, { val: "B" }, { val: "C" }],
      borders: "outer",
    });

    // --- Sheet 5: Border 'header-body' ---
    workbook.addSheet({
      name: "Border-HeaderBody",
      headers: [{ key: "val", label: "Value" }],
      rows: [{ val: "A" }, { val: "B" }, { val: "C" }],
      borders: "header-body",
    });

    await workbook.save(filePath);

    // --- Assertions ---
    const wb = await readExcel(filePath);

    // Font assertions
    const fontSheet = wb.getWorksheet("Font");
    expect(fontSheet).toBeDefined();
    if (fontSheet) {
      const nameStyle = getCellStyle(fontSheet, 2, 1);
      expect(nameStyle.font).toMatchObject({ bold: true, size: 14 });

      const activeStyle = getCellStyle(fontSheet, 2, 2);
      expect(activeStyle.font?.color).toMatchObject({ argb: "FF00FF00" });
      expect(activeStyle.font?.italic).toBe(true);

      const inactiveStyle = getCellStyle(fontSheet, 3, 2);
      expect(inactiveStyle.font?.color).toMatchObject({ argb: "FFFF0000" });
    }

    // Fill assertions
    const fillSheet = wb.getWorksheet("Fill");
    expect(fillSheet).toBeDefined();
    if (fillSheet) {
      const titleStyle = getCellStyle(fillSheet, 1, 1);
      expect(titleStyle.fill).toMatchObject({
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFCCCCCC" },
      });

      const row3Style = getCellStyle(fillSheet, 3, 1);
      expect(row3Style.fill).toBeUndefined();

      const row4Style = getCellStyle(fillSheet, 4, 1);
      expect(row4Style.fill).toMatchObject({
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFEFEFEF" },
      });
    }

    // Border assertions
    const borderSheet = wb.getWorksheet("Border-All");
    expect(borderSheet).toBeDefined();
    if (borderSheet) {
      const cell = borderSheet.getCell(2, 1);
      expect(cell.border).toMatchObject({
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      });
    }
  });
});
