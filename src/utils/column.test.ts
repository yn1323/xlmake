import { describe, expect, it } from "vitest";
import type { Column } from "../types/column";
import { buildHeaderRows, flattenColumns, getColumnSpan, getHeaderDepth } from "./column";

type TestData = {
  category: string;
  name: string;
  price: number;
};

describe("column utilities", () => {
  describe("flattenColumns", () => {
    it("should flatten leaf columns", () => {
      const columns: Column<TestData>[] = [
        { key: "category", label: "カテゴリ" },
        { key: "name", label: "商品名" },
      ];

      const result = flattenColumns(columns);
      expect(result).toHaveLength(2);
      expect(result[0].key).toBe("category");
      expect(result[1].key).toBe("name");
    });

    it("should flatten nested columns", () => {
      const columns: Column<TestData>[] = [
        {
          label: "商品情報",
          children: [
            { key: "category", label: "カテゴリ" },
            { key: "name", label: "商品名" },
          ],
        },
        { key: "price", label: "価格" },
      ];

      const result = flattenColumns(columns);
      expect(result).toHaveLength(3);
      expect(result[0].key).toBe("category");
      expect(result[1].key).toBe("name");
      expect(result[2].key).toBe("price");
    });
  });

  describe("getColumnSpan", () => {
    it("should return 1 for leaf column", () => {
      const column: Column<TestData> = { key: "category", label: "カテゴリ" };
      expect(getColumnSpan(column)).toBe(1);
    });

    it("should return child count for parent column", () => {
      const column: Column<TestData> = {
        label: "商品情報",
        children: [
          { key: "category", label: "カテゴリ" },
          { key: "name", label: "商品名" },
        ],
      };
      expect(getColumnSpan(column)).toBe(2);
    });

    it("should count nested children recursively", () => {
      const column: Column<TestData> = {
        label: "詳細",
        children: [
          {
            label: "商品情報",
            children: [
              { key: "category", label: "カテゴリ" },
              { key: "name", label: "商品名" },
            ],
          },
          { key: "price", label: "価格" },
        ],
      };
      expect(getColumnSpan(column)).toBe(3);
    });
  });

  describe("getHeaderDepth", () => {
    it("should return 1 for flat columns", () => {
      const columns: Column<TestData>[] = [
        { key: "category", label: "カテゴリ" },
        { key: "name", label: "商品名" },
      ];
      expect(getHeaderDepth(columns)).toBe(1);
    });

    it("should return 2 for one level of nesting", () => {
      const columns: Column<TestData>[] = [
        {
          label: "商品情報",
          children: [
            { key: "category", label: "カテゴリ" },
            { key: "name", label: "商品名" },
          ],
        },
        { key: "price", label: "価格" },
      ];
      expect(getHeaderDepth(columns)).toBe(2);
    });

    it("should return 3 for two levels of nesting", () => {
      const columns: Column<TestData>[] = [
        {
          label: "商品",
          children: [
            {
              label: "詳細",
              children: [
                { key: "category", label: "カテゴリ" },
                { key: "name", label: "商品名" },
              ],
            },
          ],
        },
        { key: "price", label: "価格" },
      ];
      expect(getHeaderDepth(columns)).toBe(3);
    });
  });

  describe("buildHeaderRows", () => {
    it("should build single row for flat columns", () => {
      const columns: Column<TestData>[] = [
        { key: "category", label: "カテゴリ" },
        { key: "name", label: "商品名" },
      ];

      const rows = buildHeaderRows(columns, 1);
      expect(rows).toHaveLength(1);
      expect(rows[0]).toHaveLength(2);
      expect(rows[0][0]).toEqual({ label: "カテゴリ", colSpan: 1, rowSpan: 1, style: undefined });
      expect(rows[0][1]).toEqual({ label: "商品名", colSpan: 1, rowSpan: 1, style: undefined });
    });

    it("should build two rows for nested columns", () => {
      const columns: Column<TestData>[] = [
        {
          label: "商品情報",
          children: [
            { key: "category", label: "カテゴリ" },
            { key: "name", label: "商品名" },
          ],
        },
        { key: "price", label: "価格" },
      ];

      const rows = buildHeaderRows(columns, 2);

      // 1行目: 商品情報(colSpan=2), 価格(rowSpan=2)
      expect(rows[0]).toHaveLength(2);
      expect(rows[0][0]).toEqual({ label: "商品情報", colSpan: 2, rowSpan: 1, style: undefined });
      expect(rows[0][1]).toEqual({ label: "価格", colSpan: 1, rowSpan: 2, style: undefined });

      // 2行目: カテゴリ, 商品名
      expect(rows[1]).toHaveLength(2);
      expect(rows[1][0]).toEqual({ label: "カテゴリ", colSpan: 1, rowSpan: 1, style: undefined });
      expect(rows[1][1]).toEqual({ label: "商品名", colSpan: 1, rowSpan: 1, style: undefined });
    });

    it("should build three rows for deeply nested columns", () => {
      const columns: Column<TestData>[] = [
        {
          label: "商品",
          children: [
            {
              label: "詳細",
              children: [
                { key: "category", label: "カテゴリ" },
                { key: "name", label: "商品名" },
              ],
            },
          ],
        },
        { key: "price", label: "価格" },
      ];

      const rows = buildHeaderRows(columns, 3);

      // 1行目: 商品(colSpan=2), 価格(rowSpan=3)
      expect(rows[0]).toHaveLength(2);
      expect(rows[0][0]).toEqual({ label: "商品", colSpan: 2, rowSpan: 1, style: undefined });
      expect(rows[0][1]).toEqual({ label: "価格", colSpan: 1, rowSpan: 3, style: undefined });

      // 2行目: 詳細(colSpan=2)
      expect(rows[1]).toHaveLength(1);
      expect(rows[1][0]).toEqual({ label: "詳細", colSpan: 2, rowSpan: 1, style: undefined });

      // 3行目: カテゴリ, 商品名
      expect(rows[2]).toHaveLength(2);
      expect(rows[2][0]).toEqual({ label: "カテゴリ", colSpan: 1, rowSpan: 1, style: undefined });
      expect(rows[2][1]).toEqual({ label: "商品名", colSpan: 1, rowSpan: 1, style: undefined });
    });

    it("should preserve column style", () => {
      const columns: Column<TestData>[] = [
        { key: "category", label: "カテゴリ", style: { bold: true, fill: "#FF0000" } },
      ];

      const rows = buildHeaderRows(columns, 1);
      expect(rows[0][0].style).toEqual({ bold: true, fill: "#FF0000" });
    });
  });
});
