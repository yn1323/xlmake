import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";
import { CellReader } from "./cell-reader";

describe("CellReader", () => {
  it("should read cell value", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    const cell = worksheet.getCell("A1");
    cell.value = "Hello";

    const reader = new CellReader(cell);
    expect(reader.value).toBe("Hello");
  });

  it("should read cell style", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    const cell = worksheet.getCell("A1");
    cell.value = "Bold";
    cell.font = { bold: true, color: { argb: "FFFF0000" } };

    const reader = new CellReader(cell);
    expect(reader.style?.bold).toBe(true);
    expect(reader.style?.color).toBe("#FF0000");
  });

  it("should return null for empty cell", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    const cell = worksheet.getCell("A1");

    const reader = new CellReader(cell);
    expect(reader.value).toBeNull();
  });

  it("should read number value", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    const cell = worksheet.getCell("A1");
    cell.value = 12345;

    const reader = new CellReader(cell);
    expect(reader.value).toBe(12345);
  });

  it("should read boolean value", () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    const cell = worksheet.getCell("A1");
    cell.value = true;

    const reader = new CellReader(cell);
    expect(reader.value).toBe(true);
  });
});
