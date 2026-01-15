import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

describe("02-styles.xlsx", () => {
  const outputPath = join(outputDir, "02-styles.xlsx");

  it("should generate and verify styles", async () => {
    // 生成
    const node = await xlmake()
      // FontStyles シート
      .sheet("FontStyles")
      .table({
        columns: [
          { key: "normal", label: "通常" },
          { key: "bold", label: "太字", style: { bold: true } },
          { key: "italic", label: "斜体", style: { italic: true } },
          { key: "underline", label: "下線", style: { underline: true } },
          { key: "strike", label: "打消", style: { strike: true } },
          { key: "fontFamily", label: "Arial", style: { fontFamily: "Arial" } },
          { key: "fontSize", label: "フォントサイズ", style: { fontSize: 16 } },
        ],
        data: [
          {
            normal: "テスト",
            bold: "テスト",
            italic: "テスト",
            underline: "テスト",
            strike: "テスト",
            fontFamily: "テスト",
            fontSize: "テスト",
          },
        ],
      })
      // Colors シート
      .sheet("Colors")
      .table({
        columns: [
          { key: "normal", label: "通常" },
          { key: "redText", label: "赤文字", style: { color: "#FF0000" } },
          { key: "yellowBg", label: "黄背景", style: { fill: "#FFFF00" } },
          { key: "both", label: "青文字緑背景", style: { color: "#0000FF", fill: "#00FF00" } },
        ],
        data: [{ normal: "テスト", redText: "テスト", yellowBg: "テスト", both: "テスト" }],
      })
      // Alignment シート（水平方向のみ）
      .sheet("Alignment")
      .table({
        columns: [
          { key: "left", label: "左寄せ", style: { align: "left" } },
          { key: "center", label: "中央", style: { align: "center" } },
          { key: "right", label: "右寄せ", style: { align: "right" } },
        ],
        data: [{ left: "テスト", center: "テスト", right: "テスト" }],
      })
      // VerticalAlignment シート（垂直・水平複合）
      .sheet("VerticalAlignment")
      .table({
        columns: [
          { key: "topLeft", label: "上左", style: { align: "top-left" } },
          { key: "topCenter", label: "上中央", style: { align: "top-center" } },
          { key: "topRight", label: "上右", style: { align: "top-right" } },
          { key: "middleLeft", label: "中央左", style: { align: "middle-left" } },
          { key: "middleCenter", label: "中央", style: { align: "middle-center" } },
          { key: "middleRight", label: "中央右", style: { align: "middle-right" } },
          { key: "bottomLeft", label: "下左", style: { align: "bottom-left" } },
          { key: "bottomCenter", label: "下中央", style: { align: "bottom-center" } },
          { key: "bottomRight", label: "下右", style: { align: "bottom-right" } },
        ],
        data: [
          {
            topLeft: "テスト\n複数行",
            topCenter: "テスト\n複数行",
            topRight: "テスト\n複数行",
            middleLeft: "テスト\n複数行",
            middleCenter: "テスト\n複数行",
            middleRight: "テスト\n複数行",
            bottomLeft: "テスト\n複数行",
            bottomCenter: "テスト\n複数行",
            bottomRight: "テスト\n複数行",
          },
        ],
      })
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // Buffer経由で読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // FontStyles シート検証
    const fontSheet = workbook.sheet("FontStyles");
    expect(fontSheet.cell("B2").style?.bold).toBe(true);
    expect(fontSheet.cell("C2").style?.italic).toBe(true);
    expect(fontSheet.cell("D2").style?.underline).toBe(true);
    expect(fontSheet.cell("E2").style?.strike).toBe(true);
    expect(fontSheet.cell("F2").style?.fontFamily).toBe("Arial");
    expect(fontSheet.cell("G2").style?.fontSize).toBe(16);

    // Colors シート検証
    const colorSheet = workbook.sheet("Colors");
    expect(colorSheet.cell("B2").style?.color).toBe("#FF0000");
    expect(colorSheet.cell("C2").style?.fill).toBe("#FFFF00");
    expect(colorSheet.cell("D2").style?.color).toBe("#0000FF");
    expect(colorSheet.cell("D2").style?.fill).toBe("#00FF00");

    // Alignment シート検証（水平方向のみ）
    const alignSheet = workbook.sheet("Alignment");
    expect(alignSheet.cell("A2").style?.align).toBe("left");
    expect(alignSheet.cell("B2").style?.align).toBe("center");
    expect(alignSheet.cell("C2").style?.align).toBe("right");

    // VerticalAlignment シート検証（垂直・水平複合）
    const vertAlignSheet = workbook.sheet("VerticalAlignment");
    expect(vertAlignSheet.cell("A2").style?.align).toBe("top-left");
    expect(vertAlignSheet.cell("B2").style?.align).toBe("top-center");
    expect(vertAlignSheet.cell("C2").style?.align).toBe("top-right");
    expect(vertAlignSheet.cell("D2").style?.align).toBe("left"); // middle-left → left（middleは省略）
    expect(vertAlignSheet.cell("E2").style?.align).toBe("center"); // middle-center → center
    expect(vertAlignSheet.cell("F2").style?.align).toBe("right"); // middle-right → right
    expect(vertAlignSheet.cell("G2").style?.align).toBe("bottom-left");
    expect(vertAlignSheet.cell("H2").style?.align).toBe("bottom-center");
    expect(vertAlignSheet.cell("I2").style?.align).toBe("bottom-right");
  });
});
