import { describe, expect, it } from "vitest";
import type { Column } from "./column";
import { isLeafColumn, isParentColumn } from "./column";

type TestData = {
  name: string;
  age: number;
};

describe("isLeafColumn", () => {
  it("should return true for leaf column", () => {
    const column: Column<TestData> = { key: "name", label: "名前" };
    expect(isLeafColumn(column)).toBe(true);
  });

  it("should return false for parent column", () => {
    const column: Column<TestData> = {
      label: "基本情報",
      children: [{ key: "name", label: "名前" }],
    };
    expect(isLeafColumn(column)).toBe(false);
  });
});

describe("isParentColumn", () => {
  it("should return true for parent column", () => {
    const column: Column<TestData> = {
      label: "基本情報",
      children: [{ key: "name", label: "名前" }],
    };
    expect(isParentColumn(column)).toBe(true);
  });

  it("should return false for leaf column", () => {
    const column: Column<TestData> = { key: "name", label: "名前" };
    expect(isParentColumn(column)).toBe(false);
  });
});
