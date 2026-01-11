import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";
import { SheetReader } from "./sheet-reader";

describe("SheetReader", () => {
  it("should read sheet name", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("売上");

    const reader = new SheetReader(worksheet);
    expect(reader.name).toBe("売上");
  });

  it("should read cell by A1 notation", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    worksheet.getCell("A1").value = "Hello";

    const reader = new SheetReader(worksheet);
    expect(reader.cell("A1").value).toBe("Hello");
  });

  it("should read cell by row/col", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    worksheet.getCell(1, 1).value = "World";

    const reader = new SheetReader(worksheet);
    expect(reader.cellAt(1, 1).value).toBe("World");
  });

  it("should read merged cells", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    worksheet.mergeCells("A1:B2");

    const reader = new SheetReader(worksheet);
    expect(reader.mergedCells).toContain("A1:B2");
  });
});
