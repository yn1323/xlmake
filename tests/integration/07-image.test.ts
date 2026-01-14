import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

// rootのlogo.pngを使用
const logoPath = join(__dirname, "..", "..", "logo.png");
const logoBuffer = readFileSync(logoPath);

describe("07-image.xlsx", () => {
  const outputPath = join(outputDir, "07-image.xlsx");

  it("should generate image file (visual confirmation)", async () => {
    // 生成
    const node = await xlmake()
      .sheet("ImageTest")
      .text({ value: "画像テスト", style: { bold: true, fontSize: 14 } })
      .space(1)
      .image({
        source: logoBuffer,
        row: 3,
        col: 0,
        width: 150,
        height: 75,
      })
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // Buffer経由で読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // ImageTest シート検証（テキスト部分のみ）
    const imageSheet = workbook.sheet("ImageTest");
    expect(imageSheet.cell("A1").value).toBe("画像テスト");
    expect(imageSheet.cell("A1").style?.bold).toBe(true);
    // 画像はREAD APIで検証困難なため、目視確認
  });
});
