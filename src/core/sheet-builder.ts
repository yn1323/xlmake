import { imageOptionsSchema } from "../schemas/image";
import { tableOptionsSchema } from "../schemas/table";
import { textInputSchema } from "../schemas/text";
import type { ImageOptions } from "../types/image";
import type { TableOptions } from "../types/table";
import type { TextInput } from "../types/text";
import type { Block, SheetState } from "../types/workbook";
import { flattenColumns } from "../utils/column";
import { validateDataSize } from "../validators/excel-constraints";
import type { WorkbookBuilder } from "./workbook-builder";

export class SheetBuilder {
  private workbook: WorkbookBuilder;
  private sheetState: SheetState;

  constructor(workbook: WorkbookBuilder, sheetState: SheetState) {
    this.workbook = workbook;
    this.sheetState = sheetState;
  }

  /**
   * テーブルを追加
   */
  table<T>(options: TableOptions<T>): this {
    // バリデーション
    const result = tableOptionsSchema.safeParse(options);
    if (!result.success) {
      throw new Error(`Invalid table options: ${result.error.message}`);
    }

    // データサイズのExcel制約チェック
    const leafColumns = flattenColumns(options.columns);
    validateDataSize(options.data.length, leafColumns.length);

    // ブロックを追加
    const block: Block = { type: "table", options: options as TableOptions<Record<string, unknown>> };
    this.sheetState.blocks.push(block);

    return this;
  }

  /**
   * テキストを追加
   */
  text(input: TextInput): this {
    // バリデーション
    const result = textInputSchema.safeParse(input);
    if (!result.success) {
      throw new Error(`Invalid text input: ${result.error.message}`);
    }

    // ブロックを追加
    const block: Block = { type: "text", input };
    this.sheetState.blocks.push(block);

    return this;
  }

  /**
   * 画像を追加
   */
  image(options: ImageOptions): this {
    // バリデーション
    const result = imageOptionsSchema.safeParse(options);
    if (!result.success) {
      throw new Error(`Invalid image options: ${result.error.message}`);
    }

    // ブロックを追加
    const block: Block = { type: "image", options };
    this.sheetState.blocks.push(block);

    return this;
  }

  /**
   * 空行を追加
   */
  space(lines = 1): this {
    // バリデーション
    if (lines <= 0) {
      throw new Error("space() argument must be a positive integer");
    }

    // ブロックを追加
    const block: Block = { type: "space", lines };
    this.sheetState.blocks.push(block);

    return this;
  }

  /**
   * 新しいシートを追加（WorkbookBuilderに委譲）
   */
  sheet(name?: string): SheetBuilder {
    return this.workbook.sheet(name);
  }

  /**
   * 複数のワークブックをマージする（WorkbookBuilderに委譲）
   */
  merge(workbooks: (WorkbookBuilder | SheetBuilder)[]): WorkbookBuilder {
    return this.workbook.merge(workbooks);
  }

  /**
   * ワークブックの状態を取得（WorkbookBuilderに委譲）
   */
  getState() {
    return this.workbook.getState();
  }

  /**
   * ブラウザ向け出力オブジェクトを取得（WorkbookBuilderに委譲）
   */
  getBrowser() {
    return this.workbook.getBrowser();
  }

  /**
   * Node.js向け出力オブジェクトを取得（WorkbookBuilderに委譲）
   */
  getNode() {
    return this.workbook.getNode();
  }
}
