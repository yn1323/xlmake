import { existsSync, readFileSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";
import { read, xlkit } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

describe("00-output.xlsx - 出力形式テスト", () => {
  const outputPath = join(outputDir, "00-output.xlsx");

  // テスト後にファイル削除（クリーンアップ）
  afterEach(() => {
    if (existsSync(outputPath)) {
      unlinkSync(outputPath);
    }
  });

  it("toBuffer() should return valid Excel buffer", async () => {
    const node = await xlkit()
      .sheet("Test")
      .table({
        columns: [
          { key: "name", label: "商品名" },
          { key: "price", label: "価格" },
        ],
        data: [{ name: "テスト", price: 100 }],
      })
      .getNode();

    const buffer = await node.toBuffer();

    // Bufferの基本検証
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBeGreaterThan(0);

    // Excelとして読み取れることを確認
    const workbook = await read(buffer);
    expect(workbook.sheet("Test").cell("A1").value).toBe("商品名");
    expect(workbook.sheet("Test").cell("A2").value).toBe("テスト");
  });

  it("saveToFile() should create valid Excel file", async () => {
    const node = await xlkit()
      .sheet("Test")
      .table({
        columns: [
          { key: "name", label: "商品名" },
          { key: "price", label: "価格" },
        ],
        data: [{ name: "テスト", price: 100 }],
      })
      .getNode();

    await node.saveToFile(outputPath);

    // ファイルが存在することを確認
    expect(existsSync(outputPath)).toBe(true);

    // ファイルから読み取って検証
    const fileBuffer = readFileSync(outputPath);
    const workbook = await read(fileBuffer);
    expect(workbook.sheet("Test").cell("A1").value).toBe("商品名");
    expect(workbook.sheet("Test").cell("A2").value).toBe("テスト");
  });

  it("toBuffer() and saveToFile() should produce equivalent content", async () => {
    const node = await xlkit()
      .sheet("Test")
      .table({
        columns: [
          { key: "name", label: "商品名" },
          { key: "price", label: "価格" },
        ],
        data: [{ name: "テスト", price: 100 }],
      })
      .getNode();

    // 両方の出力を取得
    const buffer = await node.toBuffer();
    await node.saveToFile(outputPath);
    const fileBuffer = readFileSync(outputPath);

    // 両方から読み取って内容比較
    const workbookFromBuffer = await read(buffer);
    const workbookFromFile = await read(fileBuffer);

    // 同じ内容であることを確認
    expect(workbookFromBuffer.sheet("Test").cell("A1").value).toBe(workbookFromFile.sheet("Test").cell("A1").value);
    expect(workbookFromBuffer.sheet("Test").cell("A2").value).toBe(workbookFromFile.sheet("Test").cell("A2").value);
    expect(workbookFromBuffer.sheet("Test").cell("B2").value).toBe(workbookFromFile.sheet("Test").cell("B2").value);
  });
});
