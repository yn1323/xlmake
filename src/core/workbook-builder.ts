import { writeWorkbook } from "../engine/writer";
import { BrowserOutput } from "../output/browser";
import { NodeOutput } from "../output/node";
import type { WorkbookState } from "../types/workbook";
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

    // 既存のシート名と重複チェック
    if (this.state.sheets.some((s) => s.name === sheetName)) {
      throw new Error(`シート名 "${sheetName}" は既に存在します`);
    }

    // 新しいシートを追加
    const sheetState = { name: sheetName, blocks: [] };
    this.state.sheets.push(sheetState);

    // SheetBuilder を返す（このワークブックの状態を共有）
    return new SheetBuilder(this, sheetState);
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
 * xlkit ファクトリ関数
 */
export function xlkit(): WorkbookBuilder {
  return new WorkbookBuilder();
}
