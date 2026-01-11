import { describe, expect, it } from "vitest";
import { calculateCellWidth, calculateColumnWidths, calculateTextWidth } from "./width-calculator";

describe("calculateTextWidth", () => {
  it("should calculate width for ASCII characters", () => {
    expect(calculateTextWidth("hello")).toBe(5); // 半角5文字
  });

  it("should calculate width for full-width characters", () => {
    expect(calculateTextWidth("こんにちは")).toBe(10); // 全角5文字 = 10幅
  });

  it("should calculate width for mixed characters", () => {
    expect(calculateTextWidth("Hello世界")).toBe(9); // 半角5 + 全角4 = 9
  });

  it("should return 0 for empty string", () => {
    expect(calculateTextWidth("")).toBe(0);
  });
});

describe("calculateCellWidth", () => {
  it("should calculate width for string", () => {
    const width = calculateCellWidth("hello");
    expect(width).toBeCloseTo(8, 1); // 5 * 1.2 + 2 = 8
  });

  it("should calculate width for number", () => {
    const width = calculateCellWidth(12345);
    expect(width).toBeCloseTo(8, 1); // 5 * 1.2 + 2 = 8
  });

  it("should calculate width for boolean", () => {
    expect(calculateCellWidth(true)).toBe(6);
    expect(calculateCellWidth(false)).toBe(6);
  });

  it("should return 0 for null/undefined", () => {
    expect(calculateCellWidth(null)).toBe(0);
    expect(calculateCellWidth(undefined)).toBe(0);
  });
});

describe("calculateColumnWidths", () => {
  it("should calculate max width for each column", () => {
    const rows = [
      ["名前", "年齢", "住所"],
      ["太郎", 30, "東京都"],
      ["花子", 25, "大阪府"],
    ];

    const widths = calculateColumnWidths(3, rows);
    expect(widths.length).toBe(3);
    expect(widths[0]).toBeGreaterThan(0);
    expect(widths[1]).toBeGreaterThan(0);
    expect(widths[2]).toBeGreaterThan(0);
  });

  it("should apply min/max constraints", () => {
    const rows = [
      ["A", "B".repeat(100)], // 1文字 vs 100文字
    ];

    const widths = calculateColumnWidths(2, rows);
    expect(widths[0]).toBe(8); // 最小幅
    expect(widths[1]).toBe(60); // 最大幅
  });

  it("should handle empty rows", () => {
    const widths = calculateColumnWidths(3, []);
    expect(widths).toEqual([8, 8, 8]); // すべて最小幅
  });
});
