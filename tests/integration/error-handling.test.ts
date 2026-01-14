import { describe, expect, it } from "vitest";
import { xlmake } from "../../src/index";

describe("エラーハンドリング", () => {
  describe("既存エラー", () => {
    it("同名シート作成でエラー", () => {
      expect(() => xlmake().sheet("A").sheet("A")).toThrow('Sheet name "A" already exists');
    });

    it("不正なプリセット名でエラー", () => {
      expect(() =>
        xlmake()
          .sheet("Test")
          // @ts-expect-error: 不正なプリセット名をテスト
          .table({ preset: "invalid", columns: [{ key: "a", label: "A" }], data: [] }),
      ).toThrow("Invalid table options");
    });

    it("space(0)でエラー", () => {
      expect(() => xlmake().sheet("Test").space(0)).toThrow("space() argument must be a positive integer");
    });

    it("space(-1)でエラー", () => {
      expect(() => xlmake().sheet("Test").space(-1)).toThrow("space() argument must be a positive integer");
    });
  });

  describe("Excel制約エラー", () => {
    it("シート名32文字でエラー", () => {
      expect(() => xlmake().sheet("a".repeat(32))).toThrow("Sheet name must be 31 characters or less");
    });

    it("シート名に : を含むとエラー", () => {
      expect(() => xlmake().sheet("Sheet:1")).toThrow("Sheet name contains invalid character");
    });

    it("シート名に / を含むとエラー", () => {
      expect(() => xlmake().sheet("Sheet/1")).toThrow("Sheet name contains invalid character");
    });

    it("シート名に \\ を含むとエラー", () => {
      expect(() => xlmake().sheet("Sheet\\1")).toThrow("Sheet name contains invalid character");
    });

    it("シート名に ? を含むとエラー", () => {
      expect(() => xlmake().sheet("Sheet?1")).toThrow("Sheet name contains invalid character");
    });

    it("シート名に * を含むとエラー", () => {
      expect(() => xlmake().sheet("Sheet*1")).toThrow("Sheet name contains invalid character");
    });

    it("シート名に [ を含むとエラー", () => {
      expect(() => xlmake().sheet("Sheet[1")).toThrow("Sheet name contains invalid character");
    });

    it("シート名に ] を含むとエラー", () => {
      expect(() => xlmake().sheet("Sheet]1")).toThrow("Sheet name contains invalid character");
    });

    it("シート名が空白のみでエラー", () => {
      expect(() => xlmake().sheet("   ")).toThrow("Sheet name cannot be only whitespace");
    });

    // 注: 行数・列数超過テストはメモリ使用量が大きいためスキップ
    // 実際の制約チェックは validators/excel-constraints.test.ts で検証済み
  });
});
