import ExcelJS from "exceljs";
import type { WorkbookState } from "../types/workbook";
import { SheetWriter } from "./sheet-writer";

/**
 * ワークブックを書き込む
 * @param state ワークブック状態
 * @returns ExcelJSのWorkbookオブジェクト
 */
export async function writeWorkbook(state: WorkbookState): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();

  for (const sheetState of state.sheets) {
    const worksheet = workbook.addWorksheet(sheetState.name);
    const writer = new SheetWriter(workbook, worksheet);
    await writer.writeSheet(sheetState);
  }

  return workbook;
}
