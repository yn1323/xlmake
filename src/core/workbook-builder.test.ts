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

describe("WorkbookBuilder.merge()", () => {
  it("should merge multiple workbooks", () => {
    const bookA = xlkit().sheet("A").text("A");
    const bookB = xlkit().sheet("B").text("B");
    const merged = xlkit().merge([bookA, bookB]);

    const state = merged.getState();
    expect(state.sheets).toHaveLength(2);
    expect(state.sheets[0].name).toBe("A");
    expect(state.sheets[1].name).toBe("B");
  });

  it("should throw error when sheet names are duplicated", () => {
    const bookA = xlkit().sheet("Sheet1").text("A");
    const bookB = xlkit().sheet("Sheet1").text("B");

    expect(() => {
      xlkit().merge([bookA, bookB]);
    }).toThrow('Sheet name "Sheet1" already exists');
  });

  it("should ignore empty workbooks", () => {
    const empty = xlkit();
    const bookA = xlkit().sheet("A").text("A");
    const merged = xlkit().merge([empty, bookA]);

    const state = merged.getState();
    expect(state.sheets).toHaveLength(1);
    expect(state.sheets[0].name).toBe("A");
  });

  it("should merge workbooks with multiple sheets", () => {
    const bookA = xlkit().sheet("A1").text("A1").sheet("A2").text("A2");
    const bookB = xlkit().sheet("B1").text("B1");
    const merged = xlkit().merge([bookA, bookB]);

    const state = merged.getState();
    expect(state.sheets).toHaveLength(3);
    expect(state.sheets[0].name).toBe("A1");
    expect(state.sheets[1].name).toBe("A2");
    expect(state.sheets[2].name).toBe("B1");
  });

  it("should support method chaining", () => {
    const bookA = xlkit().sheet("A").text("A");
    const bookB = xlkit().sheet("B").text("B");

    const merged = xlkit().sheet("Start").text("Start").merge([bookA, bookB]).sheet("End").text("End");

    const state = merged.getState();
    expect(state.sheets).toHaveLength(4);
    expect(state.sheets.map((s) => s.name)).toEqual(["Start", "A", "B", "End"]);
  });

  it("should work when called from SheetBuilder", () => {
    const bookA = xlkit().sheet("A").text("A");
    const bookB = xlkit().sheet("B").text("B");

    const merged = xlkit().sheet("Start").text("Start").merge([bookA, bookB]);

    const state = merged.getState();
    expect(state.sheets).toHaveLength(3);
    expect(state.sheets[0].name).toBe("Start");
    expect(state.sheets[1].name).toBe("A");
    expect(state.sheets[2].name).toBe("B");
  });

  it("should preserve blocks in merged sheets", () => {
    const bookA = xlkit().sheet("A").text("Text1").text("Text2");
    const merged = xlkit().merge([bookA]);

    const state = merged.getState();
    expect(state.sheets[0].blocks).toHaveLength(2);
    expect(state.sheets[0].blocks[0]).toEqual({ type: "text", input: "Text1" });
    expect(state.sheets[0].blocks[1]).toEqual({ type: "text", input: "Text2" });
  });
});
