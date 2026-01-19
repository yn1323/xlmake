import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

describe("05-table-features.xlsx", () => {
  const outputPath = join(outputDir, "05-table-features.xlsx");

  it("should generate and verify table features", async () => {
    // 生成
    const node = await xlmake()
      // AutoWidthAll
      .sheet("AutoWidthAll")
      .table({
        autoWidth: "all",
        columns: [
          { key: "short", label: "短" },
          { key: "long", label: "これは長いテキストです" },
        ],
        data: [{ short: "A", long: "とても長いテキストがここに入ります" }],
      })
      // AutoWidthBody
      .sheet("AutoWidthBody")
      .table({
        autoWidth: "body",
        columns: [
          { key: "short", label: "短いヘッダー" },
          { key: "long", label: "長" },
        ],
        data: [{ short: "A", long: "ボディのテキストが長い場合" }],
      })
      // AutoWidthFalse
      .sheet("AutoWidthFalse")
      .table({
        autoWidth: false,
        columns: [
          { key: "short", label: "短" },
          { key: "long", label: "長いヘッダーテキスト" },
        ],
        data: [{ short: "A", long: "データ" }],
      })
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // Buffer経由で読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // AutoWidthAll シート検証（値の確認）
    const autoWidthAll = workbook.sheet("AutoWidthAll");
    expect(autoWidthAll.cell("A1").value).toBe("短");
    expect(autoWidthAll.cell("B1").value).toBe("これは長いテキストです");

    // AutoWidthBody シート検証（値の確認）
    const autoWidthBody = workbook.sheet("AutoWidthBody");
    expect(autoWidthBody.cell("A1").value).toBe("短いヘッダー");
    expect(autoWidthBody.cell("B2").value).toBe("ボディのテキストが長い場合");

    // AutoWidthFalse シート検証（値の確認）
    const autoWidthFalse = workbook.sheet("AutoWidthFalse");
    expect(autoWidthFalse.cell("A1").value).toBe("短");
    expect(autoWidthFalse.cell("B1").value).toBe("長いヘッダーテキスト");
    expect(autoWidthFalse.cell("A2").value).toBe("A");
    expect(autoWidthFalse.cell("B2").value).toBe("データ");
  });
});
