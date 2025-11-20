import { describe, it, expect } from 'vitest';
import { createWorkbook, defineSheet } from '../src';
import { readExcel, getCellStyle } from './utils';
import * as path from 'path';
import * as fs from 'fs';

const OUTPUT_DIR = path.join(__dirname, 'output');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

describe('Border Styling', () => {
  it('should apply border presets', async () => {
    const filePath = path.join(OUTPUT_DIR, 'border.xlsx');
    interface Data { val: string }
    const data: Data[] = [{ val: 'A' }, { val: 'B' }];

    const sheetDef = defineSheet<Data>({
      name: 'BorderTest',
      columns: [{ key: 'val', header: 'Value' }],
      borders: 'all'
    });

    await createWorkbook().addSheet(sheetDef, data).save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet('BorderTest');
    
    if(sheet) {
        const cell = sheet.getCell(2, 1);
        expect(cell.border).toMatchObject({
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        });
    }
  });
});
