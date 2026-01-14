import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src";

describe("Workbook merge integration", () => {
  it("should correctly output merged workbook to Excel", async () => {
    // 別々にワークブックを作成
    const salesBook = xlmake()
      .sheet("売上")
      .table({
        preset: "basic",
        columns: [
          { key: "product", label: "商品" },
          { key: "amount", label: "売上" },
        ],
        data: [
          { product: "りんご", amount: 1000 },
          { product: "みかん", amount: 800 },
        ],
      });

    const stockBook = xlmake()
      .sheet("在庫")
      .table({
        preset: "basic",
        columns: [
          { key: "product", label: "商品" },
          { key: "stock", label: "在庫数" },
        ],
        data: [
          { product: "りんご", stock: 50 },
          { product: "みかん", stock: 100 },
        ],
      });

    // マージして出力
    const merged = xlmake().merge([salesBook, stockBook]);
    const output = await merged.getNode();
    const buffer = await output.toBuffer();

    // 読み取って検証
    const workbook = await read(buffer);

    expect(workbook.sheetNames).toHaveLength(2);
    expect(workbook.sheetNames[0]).toBe("売上");
    expect(workbook.sheetNames[1]).toBe("在庫");

    // 売上シートの検証
    const salesSheet = workbook.sheet("売上");
    expect(salesSheet.cell("A1").value).toBe("商品");
    expect(salesSheet.cell("B1").value).toBe("売上");
    expect(salesSheet.cell("A2").value).toBe("りんご");
    expect(salesSheet.cell("B2").value).toBe(1000);

    // 在庫シートの検証
    const stockSheet = workbook.sheet("在庫");
    expect(stockSheet.cell("A1").value).toBe("商品");
    expect(stockSheet.cell("B1").value).toBe("在庫数");
    expect(stockSheet.cell("A2").value).toBe("りんご");
    expect(stockSheet.cell("B2").value).toBe(50);
  });

  it("should merge with text blocks", async () => {
    const book1 = xlmake().sheet("Sheet1").text("Hello").space(1).text("World");

    const book2 = xlmake()
      .sheet("Sheet2")
      .table({
        columns: [{ key: "value", label: "Value" }],
        data: [{ value: 123 }],
      });

    const merged = xlmake().merge([book1, book2]);
    const output = await merged.getNode();
    const buffer = await output.toBuffer();

    const workbook = await read(buffer);

    expect(workbook.sheetNames).toHaveLength(2);
    expect(workbook.sheetNames[0]).toBe("Sheet1");
    expect(workbook.sheetNames[1]).toBe("Sheet2");

    // Sheet1の検証
    const sheet1 = workbook.sheet("Sheet1");
    expect(sheet1.cell("A1").value).toBe("Hello");
    expect(sheet1.cell("A2").value).toBeNull(); // 空行
    expect(sheet1.cell("A3").value).toBe("World");

    // Sheet2の検証
    const sheet2 = workbook.sheet("Sheet2");
    expect(sheet2.cell("A1").value).toBe("Value");
    expect(sheet2.cell("A2").value).toBe(123);
  });

  it("should merge multiple workbooks with method chaining", async () => {
    const book1 = xlmake().sheet("A").text("A");
    const book2 = xlmake().sheet("B").text("B");
    const book3 = xlmake().sheet("C").text("C");

    const merged = xlmake().sheet("Start").text("Start").merge([book1, book2, book3]).sheet("End").text("End");

    const output = await merged.getNode();
    const buffer = await output.toBuffer();

    const workbook = await read(buffer);

    expect(workbook.sheetNames).toHaveLength(5);
    expect(workbook.sheetNames).toEqual(["Start", "A", "B", "C", "End"]);

    // 各シートの検証
    expect(workbook.sheet("Start").cell("A1").value).toBe("Start");
    expect(workbook.sheet("A").cell("A1").value).toBe("A");
    expect(workbook.sheet("B").cell("A1").value).toBe("B");
    expect(workbook.sheet("C").cell("A1").value).toBe("C");
    expect(workbook.sheet("End").cell("A1").value).toBe("End");
  });

  it("should preserve table data when merged", async () => {
    const book1 = xlmake()
      .sheet("Sheet1")
      .table({
        preset: "basic",
        columns: [{ key: "value", label: "Value" }],
        data: [{ value: 123 }],
      });

    const merged = xlmake().merge([book1]);
    const output = await merged.getNode();
    const buffer = await output.toBuffer();

    const workbook = await read(buffer);
    const sheet = workbook.sheet("Sheet1");

    // データが正しく保持されていることを検証
    expect(sheet.cell("A1").value).toBe("Value");
    expect(sheet.cell("A2").value).toBe(123);
  });
});
