import { describe, expect, it } from "vitest";
import { cloneStyle, isEmptyStyle, mergeStyles } from "./merger";

describe("mergeStyles", () => {
  it("should merge multiple styles", () => {
    const style1 = { bold: true, fontSize: 12 };
    const style2 = { fontSize: 14, color: "#FF0000" };
    const result = mergeStyles(style1, style2);

    expect(result).toEqual({
      bold: true,
      fontSize: 14, // style2が優先
      color: "#FF0000",
    });
  });

  it("should ignore undefined styles", () => {
    const style1 = { bold: true };
    const result = mergeStyles(undefined, style1, undefined);

    expect(result).toEqual({ bold: true });
  });

  it("should return empty object for all undefined", () => {
    const result = mergeStyles(undefined, undefined);
    expect(result).toEqual({});
  });

  it("should handle empty objects", () => {
    const style1 = { bold: true };
    const style2 = {};
    const result = mergeStyles(style1, style2);

    expect(result).toEqual({ bold: true });
  });

  it("should prioritize later styles", () => {
    const style1 = { bold: true, color: "#000000" };
    const style2 = { color: "#FF0000" };
    const style3 = { bold: false };
    const result = mergeStyles(style1, style2, style3);

    expect(result).toEqual({
      bold: false, // style3が最優先
      color: "#FF0000", // style2が優先
    });
  });
});

describe("cloneStyle", () => {
  it("should clone style object", () => {
    const original = { bold: true, fontSize: 12 };
    const cloned = cloneStyle(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original); // 参照が異なる
  });

  it("should return undefined for undefined input", () => {
    expect(cloneStyle(undefined)).toBeUndefined();
  });

  it("should not affect original when cloned is modified", () => {
    const original = { bold: true };
    const cloned = cloneStyle(original);

    if (cloned) {
      cloned.fontSize = 14;
    }

    expect(original).toEqual({ bold: true });
    expect(cloned).toEqual({ bold: true, fontSize: 14 });
  });
});

describe("isEmptyStyle", () => {
  it("should return true for undefined", () => {
    expect(isEmptyStyle(undefined)).toBe(true);
  });

  it("should return true for empty object", () => {
    expect(isEmptyStyle({})).toBe(true);
  });

  it("should return false for non-empty object", () => {
    expect(isEmptyStyle({ bold: true })).toBe(false);
  });
});
