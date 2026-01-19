import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

describe("09-row-styles.xlsx", () => {
  const outputPath = join(outputDir, "09-row-styles.xlsx");

  it("should generate and verify row styles and header styles", async () => {
    // 生成
    const node = await xlmake()
      // RowStyleBasic: _rowStyle の基本動作
      .sheet("RowStyleBasic")
      .table({
        columns: [
          { key: "name", label: "名前" },
          { key: "price", label: "価格" },
        ],
        data: [
          { name: "通常", price: 100 },
          { name: "強調", price: 200, _rowStyle: { fill: "#FFFF00" } },
          { name: "警告", price: -50, _rowStyle: { fill: "#FF0000", color: "#FFFFFF" } },
        ],
      })
      // RowStylePriority: _rowStyle と _style の優先順位
      .sheet("RowStylePriority")
      .table({
        columns: [
          { key: "name", label: "名前" },
          { key: "price", label: "価格" },
        ],
        data: [
          { name: "通常", price: 100 },
          {
            name: "行+セル",
            price: 200,
            _rowStyle: { fill: "#FFFF00" },
            _style: { price: { fill: "#0000FF" } }, // _style が優先
          },
        ],
      })
      // RowStyleWithColumn: _rowStyle と列スタイルの優先順位
      .sheet("RowStyleWithColumn")
      .table({
        columns: [
          { key: "name", label: "名前" },
          { key: "price", label: "価格", style: { bold: true } },
        ],
        data: [
          { name: "通常", price: 100 },
          { name: "行スタイル", price: 200, _rowStyle: { fill: "#FFFF00" } }, // _rowStyle が優先（fillのみ）、boldは列スタイルから継承
        ],
      })
      // RowStyleWithStripe: _rowStyle とストライプの優先順位
      .sheet("RowStyleWithStripe")
      .table({
        preset: "striped",
        columns: [
          { key: "name", label: "名前" },
          { key: "price", label: "価格" },
        ],
        data: [
          { name: "ストライプ1", price: 100 }, // ストライプ（グレー背景）
          { name: "ストライプ2", price: 200 }, // 白背景
          { name: "行スタイル", price: 300, _rowStyle: { fill: "#FFFF00" } }, // _rowStyle が優先
        ],
      })
      // HeaderStyle: style.header の動作確認
      .sheet("HeaderStyle")
      .table({
        columns: [
          { key: "name", label: "名前" },
          { key: "price", label: "価格" },
        ],
        data: [
          { name: "通常", price: 100 },
          { name: "データ", price: 200 },
        ],
        style: {
          header: { fill: "#4472C4", color: "#FFFFFF", bold: true },
        },
      })
      // HeaderStyleWithColumn: style.header と列スタイルの優先順位
      .sheet("HeaderStyleWithColumn")
      .table({
        columns: [
          { key: "name", label: "名前" },
          { key: "price", label: "価格", style: { italic: true } },
        ],
        data: [{ name: "通常", price: 100 }],
        style: {
          header: { fill: "#4472C4", color: "#FFFFFF" },
        },
      })
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // Buffer経由で読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // RowStyleBasic シート検証
    const rowStyleBasicSheet = workbook.sheet("RowStyleBasic");
    // 通常行
    expect(rowStyleBasicSheet.cell("A2").value).toBe("通常");
    expect(rowStyleBasicSheet.cell("A2").style?.fill).toBeUndefined();
    // 強調行（_rowStyle適用）
    expect(rowStyleBasicSheet.cell("A3").value).toBe("強調");
    expect(rowStyleBasicSheet.cell("A3").style?.fill).toBe("#FFFF00");
    expect(rowStyleBasicSheet.cell("B3").style?.fill).toBe("#FFFF00");
    // 警告行（_rowStyle適用）
    expect(rowStyleBasicSheet.cell("A4").value).toBe("警告");
    expect(rowStyleBasicSheet.cell("A4").style?.fill).toBe("#FF0000");
    expect(rowStyleBasicSheet.cell("A4").style?.color).toBe("#FFFFFF");

    // RowStylePriority シート検証（_style > _rowStyle）
    const rowStylePrioritySheet = workbook.sheet("RowStylePriority");
    // 行+セル行
    expect(rowStylePrioritySheet.cell("A3").style?.fill).toBe("#FFFF00"); // _rowStyle
    expect(rowStylePrioritySheet.cell("B3").style?.fill).toBe("#0000FF"); // _style が優先

    // RowStyleWithColumn シート検証（_rowStyle > 列スタイル）
    const rowStyleWithColumnSheet = workbook.sheet("RowStyleWithColumn");
    // 行スタイル行
    expect(rowStyleWithColumnSheet.cell("B3").style?.fill).toBe("#FFFF00"); // _rowStyle
    expect(rowStyleWithColumnSheet.cell("B3").style?.bold).toBe(true); // 列スタイルから継承

    // RowStyleWithStripe シート検証（_rowStyle > ストライプ）
    const rowStyleWithStripeSheet = workbook.sheet("RowStyleWithStripe");
    // 行スタイル行（3行目はストライプの奇数行だが、_rowStyleが優先）
    expect(rowStyleWithStripeSheet.cell("A4").style?.fill).toBe("#FFFF00"); // _rowStyle が優先

    // HeaderStyle シート検証
    const headerStyleSheet = workbook.sheet("HeaderStyle");
    // ヘッダー行
    expect(headerStyleSheet.cell("A1").value).toBe("名前");
    expect(headerStyleSheet.cell("A1").style?.fill).toBe("#4472C4");
    expect(headerStyleSheet.cell("A1").style?.color).toBe("#FFFFFF");
    expect(headerStyleSheet.cell("A1").style?.bold).toBe(true);
    expect(headerStyleSheet.cell("B1").style?.fill).toBe("#4472C4");

    // HeaderStyleWithColumn シート検証
    const headerStyleWithColumnSheet = workbook.sheet("HeaderStyleWithColumn");
    // ヘッダー行（style.header が適用）
    expect(headerStyleWithColumnSheet.cell("A1").style?.fill).toBe("#4472C4");
    expect(headerStyleWithColumnSheet.cell("B1").style?.fill).toBe("#4472C4");
    // ボディ行（列スタイルの italic が適用）
    expect(headerStyleWithColumnSheet.cell("B2").style?.italic).toBe(true);
  });
});
