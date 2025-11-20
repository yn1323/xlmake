import ExcelJS from 'exceljs';

export async function readExcel(path: string) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(path);
  return workbook;
}

export function getCellValue(sheet: ExcelJS.Worksheet, row: number, col: number) {
  const cell = sheet.getRow(row).getCell(col);
  return cell.value;
}

export function getCellStyle(sheet: ExcelJS.Worksheet, row: number, col: number) {
    const cell = sheet.getRow(row).getCell(col);
    return cell.style;
}
