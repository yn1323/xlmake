import { writeWorkbook } from "../engine/writer";
import { BrowserOutput } from "../output/browser";
import { NodeOutput } from "../output/node";
import type { WorkbookState } from "../types/workbook";
import { validateSheetName } from "../validators/excel-constraints";
import { SheetBuilder } from "./sheet-builder";

export class WorkbookBuilder {
  private state: WorkbookState;

  constructor() {
    this.state = {
      sheets: [],
    };
  }

  /**
   * シートを追加する
   * @param name シート名（省略時は "Sheet1", "Sheet2", ...）
   */
  sheet(name?: string): SheetBuilder {
    // シート名が省略された場合、自動生成
    const sheetName = name ?? `Sheet${this.state.sheets.length + 1}`;

    // シート名のExcel制約チェック
    validateSheetName(sheetName);

    // 既存のシート名と重複チェック
    if (this.state.sheets.some((s) => s.name === sheetName)) {
      throw new Error(`Sheet name "${sheetName}" already exists`);
    }

    // 新しいシートを追加
    const sheetState = { name: sheetName, blocks: [] };
    this.state.sheets.push(sheetState);

    // SheetBuilder を返す（このワークブックの状態を共有）
    return new SheetBuilder(this, sheetState);
  }

  /**
   * 複数のワークブックをマージする
   * @param workbooks マージするワークブックの配列
   * @returns this（メソッドチェーン用）
   */
  merge(workbooks: (WorkbookBuilder | SheetBuilder)[]): this {
    for (const workbook of workbooks) {
      const sourceState = workbook.getState();

      // 空のワークブックは無視
      if (sourceState.sheets.length === 0) {
        continue;
      }

      // 各シートを自身のワークブックに追加
      for (const sheet of sourceState.sheets) {
        // シート名の重複チェック
        if (this.state.sheets.some((s) => s.name === sheet.name)) {
          throw new Error(`Sheet name "${sheet.name}" already exists`);
        }

        // シート名のExcel制約チェック（念のため）
        validateSheetName(sheet.name);

        // シートを追加
        this.state.sheets.push(sheet);
      }
    }

    return this;
  }

  /**
   * ワークブックの状態を取得（内部用）
   */
  getState(): WorkbookState {
    return this.state;
  }

  /**
   * ブラウザ向け出力オブジェクトを取得
   */
  async getBrowser(): Promise<BrowserOutput> {
    const workbook = await writeWorkbook(this.state);
    return new BrowserOutput(workbook);
  }

  /**
   * Node.js向け出力オブジェクトを取得
   */
  async getNode(): Promise<NodeOutput> {
    const workbook = await writeWorkbook(this.state);
    return new NodeOutput(workbook);
  }
}

/**
 * Create a new Excel workbook with a declarative, chainable API
 *
 * @example
 * ```typescript
 * import { xlmake } from 'xlmake';
 *
 * // Basic usage
 * const workbook = xlmake()
 *   .sheet('Sales')
 *   .table({
 *     columns: [
 *       { key: 'name', label: 'Product' },
 *       { key: 'price', label: 'Price' }
 *     ],
 *     data: [
 *       { name: 'Widget', price: 100 },
 *       { name: 'Gadget', price: 200 }
 *     ]
 *   });
 *
 * // Node.js: Save to file
 * await workbook.getNode().then(output => output.saveToFile('report.xlsx'));
 *
 * // Browser: Download
 * await workbook.getBrowser().then(output => output.download('report.xlsx'));
 * ```
 *
 * @returns A new WorkbookBuilder instance for building Excel workbooks
 */
export function xlmake(): WorkbookBuilder {
  return new WorkbookBuilder();
}
