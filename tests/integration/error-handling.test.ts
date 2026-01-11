import { describe, expect, it } from "vitest";
import { xlkit } from "../../src/index";

describe("エラーハンドリング", () => {
  describe("既存エラー", () => {
    it("同名シート作成でエラー", () => {
      expect(() => xlkit().sheet("A").sheet("A")).toThrow('シート名 "A" は既に存在します');
    });

    it("不正なプリセット名でエラー", () => {
      expect(() =>
        xlkit()
          .sheet("Test")
          // @ts-expect-error: 不正なプリセット名をテスト
          .table({ preset: "invalid", columns: [{ key: "a", label: "A" }], data: [] }),
      ).toThrow("Invalid table options");
    });

    it("space(0)でエラー", () => {
      expect(() => xlkit().sheet("Test").space(0)).toThrow("space() の引数は正の整数である必要があります");
    });

    it("space(-1)でエラー", () => {
      expect(() => xlkit().sheet("Test").space(-1)).toThrow("space() の引数は正の整数である必要があります");
    });
  });

  describe("Excel制約エラー", () => {
    it("シート名32文字でエラー", () => {
      expect(() => xlkit().sheet("a".repeat(32))).toThrow("シート名は31文字以内である必要があります");
    });

    it("シート名に : を含むとエラー", () => {
      expect(() => xlkit().sheet("Sheet:1")).toThrow("シート名に使用できない文字が含まれています");
    });

    it("シート名に / を含むとエラー", () => {
      expect(() => xlkit().sheet("Sheet/1")).toThrow("シート名に使用できない文字が含まれています");
    });

    it("シート名に \\ を含むとエラー", () => {
      expect(() => xlkit().sheet("Sheet\\1")).toThrow("シート名に使用できない文字が含まれています");
    });

    it("シート名に ? を含むとエラー", () => {
      expect(() => xlkit().sheet("Sheet?1")).toThrow("シート名に使用できない文字が含まれています");
    });

    it("シート名に * を含むとエラー", () => {
      expect(() => xlkit().sheet("Sheet*1")).toThrow("シート名に使用できない文字が含まれています");
    });

    it("シート名に [ を含むとエラー", () => {
      expect(() => xlkit().sheet("Sheet[1")).toThrow("シート名に使用できない文字が含まれています");
    });

    it("シート名に ] を含むとエラー", () => {
      expect(() => xlkit().sheet("Sheet]1")).toThrow("シート名に使用できない文字が含まれています");
    });

    it("シート名が空白のみでエラー", () => {
      expect(() => xlkit().sheet("   ")).toThrow("シート名を空白のみにすることはできません");
    });

    // 注: 行数・列数超過テストはメモリ使用量が大きいためスキップ
    // 実際の制約チェックは validators/excel-constraints.test.ts で検証済み
  });
});
