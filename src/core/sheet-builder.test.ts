import { describe, expect, it } from "vitest";
import { xlkit } from "./workbook-builder";

describe("SheetBuilder", () => {
  it("should add text block", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    sb.text("タイトル");

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(1);
    expect(state.sheets[0].blocks[0]).toEqual({
      type: "text",
      input: "タイトル",
    });
  });

  it("should add table block", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    sb.table({
      columns: [{ key: "name", label: "名前" }],
      data: [{ name: "太郎" }],
    });

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(1);
    expect(state.sheets[0].blocks[0].type).toBe("table");
  });

  it("should add space block", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    sb.space(3);

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(1);
    expect(state.sheets[0].blocks[0]).toEqual({
      type: "space",
      lines: 3,
    });
  });

  it("should add image block", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    sb.image({
      source: "https://example.com/logo.png",
      width: 200,
    });

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(1);
    expect(state.sheets[0].blocks[0].type).toBe("image");
  });

  it("should chain methods", () => {
    const wb = xlkit();
    wb.sheet()
      .text("タイトル")
      .space(1)
      .table({
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
      });

    const state = wb.getState();
    expect(state.sheets[0].blocks).toHaveLength(3);
    expect(state.sheets[0].blocks[0].type).toBe("text");
    expect(state.sheets[0].blocks[1].type).toBe("space");
    expect(state.sheets[0].blocks[2].type).toBe("table");
  });

  it("should throw error for invalid space argument", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    expect(() => sb.space(0)).toThrow("space() argument must be a positive integer");
    expect(() => sb.space(-1)).toThrow("space() argument must be a positive integer");
  });

  it("should throw error for invalid table options", () => {
    const wb = xlkit();
    const sb = wb.sheet();
    expect(() =>
      sb.table({
        columns: [], // 空配列はNG - ランタイムでバリデーションエラー
        data: [],
      }),
    ).toThrow("Invalid table options");
  });

  it("should delegate sheet() to workbook", () => {
    const wb = xlkit();
    const sb1 = wb.sheet("Sheet1");
    sb1.sheet("Sheet2");

    const state = wb.getState();
    expect(state.sheets).toHaveLength(2);
    expect(state.sheets[0].name).toBe("Sheet1");
    expect(state.sheets[1].name).toBe("Sheet2");
  });
});
