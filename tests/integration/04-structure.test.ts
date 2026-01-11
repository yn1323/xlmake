import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlkit } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

describe("04-structure.xlsx", () => {
  const outputPath = join(outputDir, "04-structure.xlsx");

  it("should generate and verify structure", async () => {
    // 生成
    const node = await xlkit()
      // TextSpaceTable: text → space(1) → table
      .sheet("TextSpaceTable")
      .text({ value: "タイトル", style: { bold: true, fontSize: 14 } })
      .space(1)
      .table({
        columns: [
          { key: "name", label: "名前" },
          { key: "value", label: "値" },
        ],
        data: [{ name: "項目A", value: 100 }],
      })
      // TableSpaceTextTable: table → space(2) → text → table
      .sheet("TableSpaceTextTable")
      .table({
        columns: [{ key: "id", label: "ID" }],
        data: [{ id: 1 }, { id: 2 }],
      })
      .space(2)
      .text("中間テキスト")
      .table({
        columns: [{ key: "name", label: "名前" }],
        data: [{ name: "太郎" }],
      })
      // TextOnly: textのみ
      .sheet("TextOnly")
      .text("シンプルなテキスト")
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // Buffer経由で読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // TextSpaceTable シート検証
    const textSpaceTable = workbook.sheet("TextSpaceTable");
    expect(textSpaceTable.cell("A1").value).toBe("タイトル");
    expect(textSpaceTable.cell("A1").style?.bold).toBe(true);
    expect(textSpaceTable.cell("A1").style?.fontSize).toBe(14);
    // A2: 空行（space(1)）
    expect(textSpaceTable.cell("A2").value).toBeNull();
    // A3: テーブルヘッダー開始
    expect(textSpaceTable.cell("A3").value).toBe("名前");
    expect(textSpaceTable.cell("A4").value).toBe("項目A");

    // TableSpaceTextTable シート検証
    const tableSpaceTextTable = workbook.sheet("TableSpaceTextTable");
    expect(tableSpaceTextTable.cell("A1").value).toBe("ID");
    expect(tableSpaceTextTable.cell("A2").value).toBe(1);
    expect(tableSpaceTextTable.cell("A3").value).toBe(2);
    // A4, A5: 空行（space(2)）
    expect(tableSpaceTextTable.cell("A4").value).toBeNull();
    expect(tableSpaceTextTable.cell("A5").value).toBeNull();
    // A6: テキスト
    expect(tableSpaceTextTable.cell("A6").value).toBe("中間テキスト");
    // A7: 2つ目のテーブルヘッダー
    expect(tableSpaceTextTable.cell("A7").value).toBe("名前");
    expect(tableSpaceTextTable.cell("A8").value).toBe("太郎");

    // TextOnly シート検証
    const textOnly = workbook.sheet("TextOnly");
    expect(textOnly.cell("A1").value).toBe("シンプルなテキスト");
  });
});
