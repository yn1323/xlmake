import ExcelJS from "exceljs";
import { describe, expect, it } from "vitest";
import { read, WorkbookReader } from "./workbook-reader";

describe("WorkbookReader", () => {
  it("should read sheet names", () => {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("Sheet1");
    workbook.addWorksheet("Sheet2");

    const reader = new WorkbookReader(workbook);
    expect(reader.sheetNames).toEqual(["Sheet1", "Sheet2"]);
  });

  it("should get sheet by name", () => {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("売上");

    const reader = new WorkbookReader(workbook);
    const sheet = reader.sheet("売上");
    expect(sheet.name).toBe("売上");
  });

  it("should get sheet by index", () => {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("Sheet1");
    workbook.addWorksheet("Sheet2");

    const reader = new WorkbookReader(workbook);
    const sheet = reader.sheetAt(1);
    expect(sheet.name).toBe("Sheet2");
  });

  it("should throw error for non-existent sheet", () => {
    const workbook = new ExcelJS.Workbook();
    const reader = new WorkbookReader(workbook);

    expect(() => reader.sheet("NotFound")).toThrow('シート "NotFound" が見つかりません');
  });

  it("should get sheet count", () => {
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("Sheet1");
    workbook.addWorksheet("Sheet2");

    const reader = new WorkbookReader(workbook);
    expect(reader.sheetCount).toBe(2);
  });
});

describe("read", () => {
  it("should read from buffer", async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Test");
    worksheet.getCell("A1").value = "Hello";

    const buffer = await workbook.xlsx.writeBuffer();
    const reader = await read(Buffer.from(buffer));

    expect(reader.sheet("Test").cell("A1").value).toBe("Hello");
  });
});
