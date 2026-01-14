import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { read, xlmake } from "../../src/index";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "output");

// テスト用のサンプルデータ（マージ検証用）
const mergeData = [
  { category: "食品", subcategory: "果物", name: "りんご", price: 100 },
  { category: "食品", subcategory: "果物", name: "みかん", price: 80 },
  { category: "食品", subcategory: "野菜", name: "にんじん", price: 50 },
  { category: "家電", subcategory: "テレビ", name: "液晶TV", price: 50000 },
  { category: "家電", subcategory: "テレビ", name: "有機EL", price: 100000 },
];

describe("09-merge.xlsx", () => {
  const outputPath = join(outputDir, "09-merge.xlsx");

  it("should generate and verify merge features", async () => {
    // 生成
    const node = await xlmake()
      // MergeSameValues: ボディの垂直マージ（テーブル全体設定）
      .sheet("MergeSameValues")
      .table({
        mergeSameValues: true,
        columns: [
          { key: "category" as const, label: "カテゴリ" },
          { key: "name" as const, label: "商品名" },
          { key: "price" as const, label: "価格" },
        ],
        data: mergeData,
      })
      // ColumnMergeSameValues: 列単位のマージ設定
      .sheet("ColumnMergeSameValues")
      .table({
        columns: [
          { key: "category" as const, label: "カテゴリ", mergeSameValues: true },
          { key: "subcategory" as const, label: "サブカテゴリ", mergeSameValues: true },
          { key: "name" as const, label: "商品名" },
          { key: "price" as const, label: "価格" },
        ],
        data: mergeData,
      })
      // MultiHeader: マルチヘッダー（2階層）
      .sheet("MultiHeader")
      .table({
        columns: [
          {
            label: "商品情報",
            children: [
              { key: "category" as const, label: "カテゴリ" },
              { key: "name" as const, label: "商品名" },
            ],
          },
          { key: "price" as const, label: "価格" },
        ],
        data: mergeData,
      })
      // DeepMultiHeader: マルチヘッダー（3階層）
      .sheet("DeepMultiHeader")
      .table({
        columns: [
          {
            label: "商品",
            children: [
              {
                label: "詳細",
                children: [
                  { key: "category" as const, label: "カテゴリ" },
                  { key: "name" as const, label: "商品名" },
                ],
              },
            ],
          },
          { key: "price" as const, label: "価格" },
        ],
        data: mergeData,
      })
      // MergeWithBorder: ボディマージ + ボーダー設定
      .sheet("MergeWithBorder")
      .table({
        mergeSameValues: true,
        columns: [
          { key: "category" as const, label: "カテゴリ" },
          { key: "name" as const, label: "商品名" },
          { key: "price" as const, label: "価格" },
        ],
        data: mergeData,
        border: {
          outline: "medium",
          headerBody: "medium",
          bodyInner: "thin",
        },
      })
      // MultiHeaderWithBorder: マルチヘッダー + ボーダー設定
      .sheet("MultiHeaderWithBorder")
      .table({
        columns: [
          {
            label: "商品情報",
            children: [
              { key: "category" as const, label: "カテゴリ" },
              { key: "name" as const, label: "商品名" },
            ],
          },
          { key: "price" as const, label: "価格" },
        ],
        data: mergeData,
        border: {
          outline: "medium",
          headerBody: "medium",
          headerInner: "thin",
          bodyInner: "thin",
        },
      })
      // DeepMultiHeaderWithBorder: マルチヘッダー（3階層） + ボーダー設定
      .sheet("DeepMultiHeaderWithBorder")
      .table({
        columns: [
          {
            label: "商品",
            children: [
              {
                label: "詳細",
                children: [
                  { key: "category" as const, label: "カテゴリ" },
                  { key: "name" as const, label: "商品名" },
                ],
              },
            ],
          },
          { key: "price" as const, label: "価格" },
        ],
        data: mergeData,
        border: {
          outline: "medium",
          headerBody: "medium",
          headerInner: "thin",
          bodyInner: "thin",
        },
      })
      .getNode();

    // ファイル保存（目視確認用）
    await node.saveToFile(outputPath);

    // 読み取り
    const buffer = await node.toBuffer();
    const workbook = await read(buffer);

    // === MergeSameValues シートの検証 ===
    const mergeSheet = workbook.sheet("MergeSameValues");

    // ヘッダー行
    expect(mergeSheet.cell("A1").value).toBe("カテゴリ");
    expect(mergeSheet.cell("B1").value).toBe("商品名");
    expect(mergeSheet.cell("C1").value).toBe("価格");

    // データの最初のセル
    expect(mergeSheet.cell("A2").value).toBe("食品");
    expect(mergeSheet.cell("B2").value).toBe("りんご");

    // マージ範囲の検証（カテゴリ列）
    // 「食品」は3行連続なので A2:A4 でマージされるべき
    // 「家電」は2行連続なので A5:A6 でマージされるべき
    const mergeSameValuesMerges = mergeSheet.mergedCells;
    expect(mergeSameValuesMerges).toContain("A2:A4"); // 食品
    expect(mergeSameValuesMerges).toContain("A5:A6"); // 家電

    // === ColumnMergeSameValues シートの検証 ===
    const colMergeSheet = workbook.sheet("ColumnMergeSameValues");

    // カテゴリ列のマージ
    expect(colMergeSheet.mergedCells).toContain("A2:A4"); // 食品
    expect(colMergeSheet.mergedCells).toContain("A5:A6"); // 家電

    // サブカテゴリ列のマージ
    expect(colMergeSheet.mergedCells).toContain("B2:B3"); // 果物
    expect(colMergeSheet.mergedCells).toContain("B5:B6"); // テレビ

    // 商品名と価格はマージされない（mergeSameValuesが設定されていない）

    // === MultiHeader シートの検証 ===
    const multiHeaderSheet = workbook.sheet("MultiHeader");

    // ヘッダー1行目
    expect(multiHeaderSheet.cell("A1").value).toBe("商品情報");
    expect(multiHeaderSheet.cell("C1").value).toBe("価格");

    // ヘッダー2行目
    expect(multiHeaderSheet.cell("A2").value).toBe("カテゴリ");
    expect(multiHeaderSheet.cell("B2").value).toBe("商品名");

    // マージ範囲の検証
    // 「商品情報」は横に2列マージ: A1:B1
    // 「価格」は縦に2行マージ: C1:C2
    expect(multiHeaderSheet.mergedCells).toContain("A1:B1"); // 商品情報 colSpan=2
    expect(multiHeaderSheet.mergedCells).toContain("C1:C2"); // 価格 rowSpan=2

    // === DeepMultiHeader シートの検証 ===
    const deepMultiHeaderSheet = workbook.sheet("DeepMultiHeader");

    // ヘッダー1行目
    expect(deepMultiHeaderSheet.cell("A1").value).toBe("商品");
    expect(deepMultiHeaderSheet.cell("C1").value).toBe("価格");

    // ヘッダー2行目
    expect(deepMultiHeaderSheet.cell("A2").value).toBe("詳細");

    // ヘッダー3行目
    expect(deepMultiHeaderSheet.cell("A3").value).toBe("カテゴリ");
    expect(deepMultiHeaderSheet.cell("B3").value).toBe("商品名");

    // マージ範囲の検証
    // 「商品」は横に2列マージ: A1:B1
    // 「詳細」は横に2列マージ: A2:B2
    // 「価格」は縦に3行マージ: C1:C3
    expect(deepMultiHeaderSheet.mergedCells).toContain("A1:B1"); // 商品 colSpan=2
    expect(deepMultiHeaderSheet.mergedCells).toContain("A2:B2"); // 詳細 colSpan=2
    expect(deepMultiHeaderSheet.mergedCells).toContain("C1:C3"); // 価格 rowSpan=3

    // === MergeWithBorder シートの検証 ===
    const mergeWithBorderSheet = workbook.sheet("MergeWithBorder");

    // マージが正しく適用されている
    expect(mergeWithBorderSheet.mergedCells).toContain("A2:A4"); // 食品

    // 罫線が適用されている（左上角）
    expect(mergeWithBorderSheet.cell("A1").border?.top?.style).toBe("medium");
    expect(mergeWithBorderSheet.cell("A1").border?.left?.style).toBe("medium");

    // === MultiHeaderWithBorder シートの検証 ===
    const multiHeaderWithBorderSheet = workbook.sheet("MultiHeaderWithBorder");

    // ヘッダーのマージが正しく適用されている
    expect(multiHeaderWithBorderSheet.mergedCells).toContain("A1:B1"); // 商品情報
    expect(multiHeaderWithBorderSheet.mergedCells).toContain("C1:C2"); // 価格

    // 罫線が適用されている
    expect(multiHeaderWithBorderSheet.cell("A1").border?.top?.style).toBe("medium");

    // === DeepMultiHeaderWithBorder シートの検証 ===
    const deepMultiHeaderWithBorderSheet = workbook.sheet("DeepMultiHeaderWithBorder");

    // ヘッダーのマージが正しく適用されている
    expect(deepMultiHeaderWithBorderSheet.mergedCells).toContain("A1:B1"); // 商品 colSpan=2
    expect(deepMultiHeaderWithBorderSheet.mergedCells).toContain("A2:B2"); // 詳細 colSpan=2
    expect(deepMultiHeaderWithBorderSheet.mergedCells).toContain("C1:C3"); // 価格 rowSpan=3

    // 罫線が適用されている（外枠）
    expect(deepMultiHeaderWithBorderSheet.cell("A1").border?.top?.style).toBe("medium");
    expect(deepMultiHeaderWithBorderSheet.cell("A1").border?.left?.style).toBe("medium");

    // ヘッダー内部の水平線はthin（headerInner）であるべき
    expect(deepMultiHeaderWithBorderSheet.cell("A2").border?.top?.style).toBe("thin");
    expect(deepMultiHeaderWithBorderSheet.cell("A3").border?.top?.style).toBe("thin");
  });
});
