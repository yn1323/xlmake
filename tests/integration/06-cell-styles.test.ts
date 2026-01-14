import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

describe("06-cell-styles.xlsx", () => {
  const outputPath = join(outputDir, "06-cell-styles.xlsx");

  it("should generate and verify cell styles", async () => {
    // 生成
    const node = await xlmake()
      // CellStyle シート
      .sheet("CellStyle")
      .table({
        columns: [
          { key: "name", label: "名前" },
          { key: "price", label: "価格" },
        ],
        data: [
          { name: "通常", price: 100 },
          { name: "強調", price: 200, _style: { price: { bold: true, fill: "#FFFF00" } } },
          { name: "警告", price: -50, _style: { price: { color: "#FF0000" } } },
        ],
      })
      // Note: conditionalStyle は未実装のため、テストから除外
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // Buffer経由で読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // CellStyle シート検証
    const cellStyleSheet = workbook.sheet("CellStyle");
    // 通常行
    expect(cellStyleSheet.cell("A2").value).toBe("通常");
    expect(cellStyleSheet.cell("B2").value).toBe(100);
    // 強調行（_style適用）
    expect(cellStyleSheet.cell("B3").value).toBe(200);
    expect(cellStyleSheet.cell("B3").style?.bold).toBe(true);
    expect(cellStyleSheet.cell("B3").style?.fill).toBe("#FFFF00");
    // 警告行（_style適用）
    expect(cellStyleSheet.cell("B4").value).toBe(-50);
    expect(cellStyleSheet.cell("B4").style?.color).toBe("#FF0000");

    // Note: conditionalStyle は未実装のため、テストから除外
  });
});
