import { describe, it, expect } from 'vitest';
import { createWorkbook } from '../src';
import { readExcel } from './utils';
import * as path from 'path';
import * as fs from 'fs';
import ExcelJS from 'exceljs';

const OUTPUT_DIR = path.join(__dirname, 'output');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

describe('Formatting & Layout Features', () => {
  it('should generate formatting and layout examples in a single workbook', async () => {
    const filePath = path.join(OUTPUT_DIR, 'formatting.xlsx');
    const workbook = createWorkbook();

    // --- Sheet 1: Number & Date Formats ---
    workbook.addSheet({
      name: 'Formats',
      headers: [
        { key: 'date', label: 'Date', format: 'yyyy-mm-dd' },
        { key: 'money', label: 'Money', format: '$#,##0' },
        { key: 'percent', label: 'Percent', format: '0.00%' },
        { key: 'yen', label: 'Yen', format: '¥#,##0' }
      ],
      rows: [
        { date: new Date('2025-01-01'), money: 1000, percent: 0.1234, yen: 50000 },
        { date: new Date('2025-06-15'), money: 2500, percent: 0.5678, yen: 120000 }
      ]
    });

    // --- Sheet 2: Leading Zeros (String Preservation) ---
    workbook.addSheet({
      name: 'LeadingZeros',
      headers: [{ key: 'code', label: 'Code' }],
      rows: [
        { code: '007' },
        { code: '0123' },
        { code: '00456' }
      ]
    });

    // --- Sheet 3: Vertical Merge ---
    workbook.addSheet({
      name: 'VerticalMerge',
      headers: [
        { key: 'group', label: 'Group', merge: 'vertical', style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
        { key: 'item', label: 'Item' }
      ],
      rows: [
        { group: 'A', item: '1' },
        { group: 'A', item: '2' },
        { group: 'A', item: '3' },
        { group: 'B', item: '4' },
        { group: 'B', item: '5' }
      ],
      borders: 'all'
    });

    // --- Sheet 4: Auto Width ---
    workbook.addSheet({
      name: 'AutoWidth',
      headers: [
        { key: 'short', label: 'Short', width: 'auto' },
        { key: 'long', label: 'Long Text Column', width: 'auto' },
        { key: 'japanese', label: '日本語', width: 'auto' }
      ],
      rows: [
        { short: 'A', long: 'This is a very long text to test auto width calculation', japanese: 'これは日本語のテストです' },
        { short: 'B', long: 'Short', japanese: '短い' }
      ]
    });

    await workbook.save(filePath);

    // --- Assertions ---
    const wb = await readExcel(filePath);

    // Format assertions
    const formatSheet = wb.getWorksheet('Formats');
    expect(formatSheet).toBeDefined();
    if (formatSheet) {
      expect(formatSheet.getCell(2, 1).numFmt).toBe('yyyy-mm-dd');
      expect(formatSheet.getCell(2, 2).numFmt).toBe('$#,##0');
      expect(formatSheet.getCell(2, 3).numFmt).toBe('0.00%');
      expect(formatSheet.getCell(2, 4).numFmt).toBe('¥#,##0');
    }

    // Leading zeros assertions
    const zerosSheet = wb.getWorksheet('LeadingZeros');
    expect(zerosSheet).toBeDefined();
    if (zerosSheet) {
      const cell = zerosSheet.getCell(2, 1);
      expect(cell.value).toBe('007');
      expect(cell.type).toBe(ExcelJS.ValueType.String);
    }

    // Vertical merge assertions
    const mergeSheet = wb.getWorksheet('VerticalMerge');
    expect(mergeSheet).toBeDefined();
    if (mergeSheet) {
      const cell1 = mergeSheet.getCell(2, 1);
      const cell2 = mergeSheet.getCell(3, 1);
      const cell3 = mergeSheet.getCell(4, 1);
      expect(cell1.value).toBe('A');
      expect(cell2.master).toBe(cell1);
      expect(cell3.master).toBe(cell1);
    }

    // Auto width assertions
    const widthSheet = wb.getWorksheet('AutoWidth');
    expect(widthSheet).toBeDefined();
    if (widthSheet) {
      const longCol = widthSheet.getColumn(2);
      expect(longCol.width).toBeGreaterThan(20);
    }
  });
});
