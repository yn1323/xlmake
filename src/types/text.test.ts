import { describe, expect, it } from "vitest";
import type { TextInput } from "./text";
import { isStyledCell } from "./text";

describe("isStyledCell", () => {
  it("should return true for styled cell", () => {
    const input: TextInput = { value: "タイトル", style: { bold: true } };
    expect(isStyledCell(input)).toBe(true);
  });

  it("should return false for string", () => {
    const input: TextInput = "タイトル";
    expect(isStyledCell(input)).toBe(false);
  });

  it("should return true for styled cell with number value", () => {
    const input: TextInput = { value: 123 };
    expect(isStyledCell(input)).toBe(true);
  });

  it("should return true for styled cell with boolean value", () => {
    const input: TextInput = { value: true };
    expect(isStyledCell(input)).toBe(true);
  });
});
