import { describe, expect, it } from "vitest";
import { columnSchema, columnsSchema } from "./column";

describe("columnSchema", () => {
  describe("正常系", () => {
    it("should validate leaf column", () => {
      const column = { key: "name", label: "名前" };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(true);
    });

    it("should validate leaf column with style", () => {
      const column = {
        key: "name",
        label: "名前",
        style: { bold: true, color: "#FF0000" },
      };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(true);
    });

    it("should validate leaf column with mergeSameValues", () => {
      const column = { key: "name", label: "名前", mergeSameValues: true };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(true);
    });

    it("should validate parent column", () => {
      const column = {
        label: "基本情報",
        children: [
          { key: "name", label: "名前" },
          { key: "age", label: "年齢" },
        ],
      };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(true);
    });

    it("should validate nested parent columns (2 levels)", () => {
      const column = {
        label: "グループ",
        children: [
          {
            label: "基本情報",
            children: [
              { key: "name", label: "名前" },
              { key: "age", label: "年齢" },
            ],
          },
          { key: "score", label: "スコア" },
        ],
      };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(true);
    });

    it("should validate nested parent columns (3 levels)", () => {
      const column = {
        label: "レベル1",
        children: [
          {
            label: "レベル2",
            children: [
              {
                label: "レベル3",
                children: [{ key: "name", label: "名前" }],
              },
            ],
          },
        ],
      };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(true);
    });
  });

  describe("異常系", () => {
    it("should reject leaf column without key", () => {
      const column = { label: "名前" };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(false);
    });

    it("should reject leaf column without label", () => {
      const column = { key: "name" };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(false);
    });

    it("should reject parent column with empty children", () => {
      const column = { label: "基本情報", children: [] };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(false);
    });

    it("should reject parent column without children", () => {
      const column = { label: "基本情報" };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(false);
    });

    it("should reject column with invalid style", () => {
      const column = {
        key: "name",
        label: "名前",
        style: { color: "red" },
      };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(false);
    });

    it("should reject column with unknown properties", () => {
      const column = { key: "name", label: "名前", unknownProp: true };
      const result = columnSchema.safeParse(column);
      expect(result.success).toBe(false);
    });
  });
});

describe("columnsSchema", () => {
  describe("正常系", () => {
    it("should validate array of columns", () => {
      const columns = [
        { key: "name", label: "名前" },
        { key: "age", label: "年齢" },
      ];
      const result = columnsSchema.safeParse(columns);
      expect(result.success).toBe(true);
    });

    it("should validate mixed leaf and parent columns", () => {
      const columns = [
        {
          label: "基本情報",
          children: [
            { key: "name", label: "名前" },
            { key: "age", label: "年齢" },
          ],
        },
        { key: "score", label: "スコア" },
      ];
      const result = columnsSchema.safeParse(columns);
      expect(result.success).toBe(true);
    });
  });

  describe("異常系", () => {
    it("should reject empty array", () => {
      const columns: any[] = [];
      const result = columnsSchema.safeParse(columns);
      expect(result.success).toBe(false);
    });

    it("should reject array with invalid column", () => {
      const columns = [
        { key: "name", label: "名前" },
        { label: "年齢" }, // key がない
      ];
      const result = columnsSchema.safeParse(columns);
      expect(result.success).toBe(false);
    });
  });
});
