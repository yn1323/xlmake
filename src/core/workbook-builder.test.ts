import { describe, expect, it } from "vitest";
import { xlkit } from "./workbook-builder";

describe("WorkbookBuilder", () => {
  it("should create workbook instance", () => {
    const wb = xlkit();
    expect(wb).toBeDefined();
    expect(wb.getState().sheets).toEqual([]);
  });

  it("should add sheet with default name", () => {
    const wb = xlkit();
    wb.sheet();
    expect(wb.getState().sheets).toHaveLength(1);
    expect(wb.getState().sheets[0].name).toBe("Sheet1");
  });

  it("should add sheet with custom name", () => {
    const wb = xlkit();
    wb.sheet("売上データ");
    expect(wb.getState().sheets[0].name).toBe("売上データ");
  });

  it("should auto-increment sheet names", () => {
    const wb = xlkit();
    wb.sheet();
    wb.sheet();
    expect(wb.getState().sheets[0].name).toBe("Sheet1");
    expect(wb.getState().sheets[1].name).toBe("Sheet2");
  });

  it("should throw error for duplicate sheet names", () => {
    const wb = xlkit();
    wb.sheet("売上");
    expect(() => wb.sheet("売上")).toThrow('Sheet name "売上" already exists');
  });

  it("should return SheetBuilder from sheet()", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    expect(sb).toBeDefined();
    expect(sb.constructor.name).toBe("SheetBuilder");
  });
});
