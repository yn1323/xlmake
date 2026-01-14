import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

// テスト用のサンプルデータ
const sampleData = [
  { name: "項目A", value: 100 },
  { name: "項目B", value: 200 },
  { name: "項目C", value: 300 },
];

const columns = [
  { key: "name" as const, label: "名前" },
  { key: "value" as const, label: "値" },
];

describe("08-borders.xlsx", () => {
  const outputPath = join(outputDir, "08-borders.xlsx");

  it("should generate and verify border patterns", async () => {
    // 生成
    const node = await xlmake()
      // OutlineOnly: 外枠のみ
      .sheet("OutlineOnly")
      .table({
        columns,
        data: sampleData,
        border: {
          outline: "medium",
        },
      })
      // HeaderBodyOnly: ヘッダー下線のみ
      .sheet("HeaderBodyOnly")
      .table({
        columns,
        data: sampleData,
        border: {
          headerBody: "thin",
        },
      })
      // FullBorder: 全ての罫線
      .sheet("FullBorder")
      .table({
        columns,
        data: sampleData,
        border: {
          outline: "medium",
          headerBody: "medium",
          headerInner: "thin",
          bodyInner: "thin",
        },
      })
      // LineStyles: 罫線スタイルのバリエーション
      .sheet("LineStyles")
      .text("thin")
      .table({
        columns,
        data: sampleData,
        border: { outline: "thin", headerBody: "thin", bodyInner: "thin" },
      })
      .space(1)
      .text("medium")
      .table({
        columns,
        data: sampleData,
        border: { outline: "medium", headerBody: "medium", bodyInner: "medium" },
      })
      .space(1)
      .text("thick")
      .table({
        columns,
        data: sampleData,
        border: { outline: "thick", headerBody: "thick", bodyInner: "thick" },
      })
      .space(1)
      .text("dotted")
      .table({
        columns,
        data: sampleData,
        border: { outline: "dotted", headerBody: "dotted", bodyInner: "dotted" },
      })
      .space(1)
      .text("dashed")
      .table({
        columns,
        data: sampleData,
        border: { outline: "dashed", headerBody: "dashed", bodyInner: "dashed" },
      })
      .space(1)
      .text("double")
      .table({
        columns,
        data: sampleData,
        border: { outline: "double", headerBody: "double", bodyInner: "double" },
      })
      // ColoredBorder: 色付き罫線
      .sheet("ColoredBorder")
      .table({
        columns,
        data: sampleData,
        border: {
          outline: "medium",
          headerBody: "medium",
          headerInner: "thin",
          bodyInner: "thin",
          borderColor: "#FF0000",
        },
      })
      // NoBorder: 罫線なし（minimal プリセット）
      .sheet("NoBorder")
      .table({
        preset: "minimal",
        columns,
        data: sampleData,
      })
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // Buffer経由で読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // OutlineOnly シート検証
    const outlineSheet = workbook.sheet("OutlineOnly");
    expect(outlineSheet.cell("A1").value).toBe("名前");
    // 左上角: 上・左に罫線あり
    expect(outlineSheet.cell("A1").border?.top?.style).toBe("medium");
    expect(outlineSheet.cell("A1").border?.left?.style).toBe("medium");
    // 右下角: 下・右に罫線あり
    expect(outlineSheet.cell("B4").border?.bottom?.style).toBe("medium");
    expect(outlineSheet.cell("B4").border?.right?.style).toBe("medium");

    // HeaderBodyOnly シート検証
    const headerBodySheet = workbook.sheet("HeaderBodyOnly");
    expect(headerBodySheet.cell("A1").value).toBe("名前");
    // ヘッダー行の下に罫線あり
    expect(headerBodySheet.cell("A1").border?.bottom?.style).toBe("thin");

    // FullBorder シート検証
    const fullBorderSheet = workbook.sheet("FullBorder");
    expect(fullBorderSheet.cell("A1").value).toBe("名前");
    expect(fullBorderSheet.cell("A1").border?.top?.style).toBe("medium");
    expect(fullBorderSheet.cell("A1").border?.left?.style).toBe("medium");
    expect(fullBorderSheet.cell("A1").border?.bottom?.style).toBe("medium");
    // 内部セルの罫線
    expect(fullBorderSheet.cell("A3").border?.top?.style).toBe("thin");

    // ColoredBorder シート検証
    const coloredSheet = workbook.sheet("ColoredBorder");
    expect(coloredSheet.cell("A1").value).toBe("名前");
    expect(coloredSheet.cell("A1").border?.top?.color).toBe("#FF0000");

    // NoBorder シート検証（minimal プリセット）
    const noBorderSheet = workbook.sheet("NoBorder");
    expect(noBorderSheet.cell("A1").value).toBe("名前");
    expect(noBorderSheet.cell("A1").style?.bold).toBe(true);
    // 罫線なし
    expect(noBorderSheet.cell("A1").border).toBeUndefined();
  });
});
