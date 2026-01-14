import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

// テスト用のサンプルデータ
const sampleData = [
  { name: "PC", price: 100000 },
  { name: "モニタ", price: 30000 },
  { name: "キーボード", price: 5000 },
];

describe("01-presets.xlsx", () => {
  const outputPath = join(outputDir, "01-presets.xlsx");

  it("should generate and verify presets", async () => {
    // 生成
    const node = await xlmake()
      // Basic プリセット
      .sheet("Basic")
      .table({
        preset: "basic",
        columns: [
          { key: "name", label: "商品名" },
          { key: "price", label: "価格" },
        ],
        data: sampleData,
      })
      // Minimal プリセット
      .sheet("Minimal")
      .table({
        preset: "minimal",
        columns: [
          { key: "name", label: "商品名" },
          { key: "price", label: "価格" },
        ],
        data: sampleData,
      })
      // Striped プリセット
      .sheet("Striped")
      .table({
        preset: "striped",
        columns: [
          { key: "name", label: "商品名" },
          { key: "price", label: "価格" },
        ],
        data: sampleData,
      })
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // Buffer経由で読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // Basic プリセット検証
    const basicSheet = workbook.sheet("Basic");
    expect(basicSheet.cell("A1").value).toBe("商品名");
    expect(basicSheet.cell("A1").style?.bold).toBe(true);
    expect(basicSheet.cell("A1").style?.fill).toBe("#4472C4");
    expect(basicSheet.cell("A1").style?.color).toBe("#FFFFFF");
    expect(basicSheet.cell("A1").style?.align).toBe("center");

    // Minimal プリセット検証
    const minimalSheet = workbook.sheet("Minimal");
    expect(minimalSheet.cell("A1").value).toBe("商品名");
    expect(minimalSheet.cell("A1").style?.bold).toBe(true);
    expect(minimalSheet.cell("A1").style?.align).toBe("left");
    // fill/color は未設定のはず
    expect(minimalSheet.cell("A1").style?.fill).toBeUndefined();

    // Striped プリセット検証
    const stripedSheet = workbook.sheet("Striped");
    expect(stripedSheet.cell("A1").value).toBe("商品名");
    expect(stripedSheet.cell("A1").style?.bold).toBe(true);
    expect(stripedSheet.cell("A1").style?.fill).toBe("#4472C4");
    // 奇数行（2行目）の背景色
    expect(stripedSheet.cell("A2").style?.fill).toBe("#F2F2F2");
    // 偶数行（3行目）は背景色なし
    expect(stripedSheet.cell("A3").style?.fill).toBeUndefined();
  });
});
