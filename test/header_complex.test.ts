import { describe, it, expect } from 'vitest';
import { createWorkbook } from '../src';
import { readExcel } from './utils';
import * as path from 'path';
import * as fs from 'fs';

const OUTPUT_DIR = path.join(__dirname, 'output');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

describe('Complex Header', () => {
  it('should render multi-row headers with colSpan', async () => {
    const filePath = path.join(OUTPUT_DIR, 'header_colspan.xlsx');

    await createWorkbook()
      .addSheet({
        name: 'ColSpanTest',
        headers: [
          { key: 'col1', label: 'Col 1' },
          { key: 'col2', label: 'Col 2' },
          { key: 'col3', label: 'Col 3' }
        ],
        multiRowHeaders: {
          rows: [
            [
              { value: 'Group A', colSpan: 2 },
              'Group B'
            ],
            ['Sub 1', 'Sub 2', 'Sub 3']
          ]
        },
        rows: [
          { col1: 'A1', col2: 'B1', col3: 'C1' },
          { col1: 'A2', col2: 'B2', col3: 'C2' }
        ]
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet('ColSpanTest');

    expect(sheet).toBeDefined();
    if (sheet) {
      // Check Group A merge (colSpan: 2)
      const groupA = sheet.getCell(1, 1);
      expect(groupA.value).toBe('Group A');

      // Check that cell (1,2) is merged to (1,1)
      const cell12 = sheet.getCell(1, 2);
      expect(cell12.master).toBe(groupA);

      // Check Group B
      const groupB = sheet.getCell(1, 3);
      expect(groupB.value).toBe('Group B');

      // Check Sub headers (row 2)
      expect(sheet.getCell(2, 1).value).toBe('Sub 1');
      expect(sheet.getCell(2, 2).value).toBe('Sub 2');
      expect(sheet.getCell(2, 3).value).toBe('Sub 3');

      // Check data starts at row 3
      expect(sheet.getCell(3, 1).value).toBe('A1');
      expect(sheet.getCell(3, 2).value).toBe('B1');
      expect(sheet.getCell(3, 3).value).toBe('C1');

      // Check second data row
      expect(sheet.getCell(4, 1).value).toBe('A2');
    }
  });

  it('should render multi-row headers with rowSpan', async () => {
    const filePath = path.join(OUTPUT_DIR, 'header_rowspan.xlsx');

    await createWorkbook()
      .addSheet({
        name: 'RowSpanTest',
        headers: [
          { key: 'col1', label: 'Col 1' },
          { key: 'col2', label: 'Col 2' },
          { key: 'col3', label: 'Col 3' }
        ],
        multiRowHeaders: {
          rows: [
            [
              { value: 'Group 1', colSpan: 2 },
              { value: 'Group 2', rowSpan: 2 }
            ],
            ['Sub 1', 'Sub 2']
          ]
        },
        rows: [
          { col1: 'A', col2: 'B', col3: 'C' }
        ]
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet('RowSpanTest');

    expect(sheet).toBeDefined();
    if (sheet) {
      // Check Group 1 merge (colSpan: 2)
      const group1 = sheet.getCell(1, 1);
      expect(group1.value).toBe('Group 1');
      expect(group1.isMerged).toBe(true);

      // Check cell (1,2) is merged to (1,1)
      const cell12 = sheet.getCell(1, 2);
      expect(cell12.master).toBe(group1);

      // Check Group 2 merge (rowSpan: 2)
      const group2 = sheet.getCell(1, 3);
      expect(group2.value).toBe('Group 2');
      expect(group2.isMerged).toBe(true);

      // Check cell (2,3) is merged to (1,3)
      const cell23 = sheet.getCell(2, 3);
      expect(cell23.master).toBe(group2);

      // Check Sub headers
      expect(sheet.getCell(2, 1).value).toBe('Sub 1');
      expect(sheet.getCell(2, 2).value).toBe('Sub 2');

      // Check data starts at row 3
      expect(sheet.getCell(3, 1).value).toBe('A');
      expect(sheet.getCell(3, 2).value).toBe('B');
      expect(sheet.getCell(3, 3).value).toBe('C');
    }
  });

  it('should render 3-row headers with complex merges', async () => {
    const filePath = path.join(OUTPUT_DIR, 'header_complex_3rows.xlsx');

    await createWorkbook()
      .addSheet({
        name: 'ThreeRowHeader',
        headers: [
          { key: 'a', label: 'A' },
          { key: 'b', label: 'B' },
          { key: 'c', label: 'C' },
          { key: 'd', label: 'D' }
        ],
        multiRowHeaders: {
          rows: [
            [
              { value: 'Main Group', colSpan: 4 }
            ],
            [
              { value: 'Left', colSpan: 2 },
              { value: 'Right', colSpan: 2 }
            ],
            ['A', 'B', 'C', 'D']
          ]
        },
        rows: [
          { a: 1, b: 2, c: 3, d: 4 }
        ]
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet('ThreeRowHeader');

    expect(sheet).toBeDefined();
    if (sheet) {
      // Check Main Group spans all 4 columns
      const mainGroup = sheet.getCell(1, 1);
      expect(mainGroup.value).toBe('Main Group');

      // Check Left spans columns 1-2
      const left = sheet.getCell(2, 1);
      expect(left.value).toBe('Left');

      // Check Right spans columns 3-4
      const right = sheet.getCell(2, 3);
      expect(right.value).toBe('Right');

      // Check individual headers in row 3
      expect(sheet.getCell(3, 1).value).toBe('A');
      expect(sheet.getCell(3, 2).value).toBe('B');
      expect(sheet.getCell(3, 3).value).toBe('C');
      expect(sheet.getCell(3, 4).value).toBe('D');

      // Check data starts at row 4
      expect(sheet.getCell(4, 1).value).toBe(1);
      expect(sheet.getCell(4, 2).value).toBe(2);
    }
  });

  it('should apply styles to multi-row header cells', async () => {
    const filePath = path.join(OUTPUT_DIR, 'header_styled.xlsx');

    await createWorkbook()
      .addSheet({
        name: 'StyledHeader',
        headers: [
          { key: 'col1', label: 'Col 1' },
          { key: 'col2', label: 'Col 2' }
        ],
        multiRowHeaders: {
          rows: [
            [
              {
                value: 'Styled Group',
                colSpan: 2,
                style: {
                  font: { bold: true },
                  fill: { color: '#4472C4' },
                  alignment: { horizontal: 'center' }
                }
              }
            ],
            ['Header 1', 'Header 2']
          ]
        },
        rows: [
          { col1: 'Data 1', col2: 'Data 2' }
        ]
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet('StyledHeader');

    expect(sheet).toBeDefined();
    if (sheet) {
      const styledCell = sheet.getCell(1, 1);
      expect(styledCell.value).toBe('Styled Group');
      expect(styledCell.font?.bold).toBe(true);
      expect(styledCell.alignment?.horizontal).toBe('center');
    }
  });

  it('should work with title rows and multi-row headers', async () => {
    const filePath = path.join(OUTPUT_DIR, 'header_with_title.xlsx');

    await createWorkbook()
      .addSheet({
        name: 'WithTitle',
        headers: [
          { key: 'col1', label: 'Col 1' },
          { key: 'col2', label: 'Col 2' }
        ],
        title: {
          label: 'Report Title'
        },
        multiRowHeaders: {
          rows: [
            [{ value: 'Group', colSpan: 2 }],
            ['A', 'B']
          ]
        },
        rows: [
          { col1: 'X', col2: 'Y' }
        ]
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet('WithTitle');

    expect(sheet).toBeDefined();
    if (sheet) {
      // Title should be at row 1
      expect(sheet.getCell(1, 1).value).toBe('Report Title');

      // Multi-row headers should start at row 2
      expect(sheet.getCell(2, 1).value).toBe('Group');
      expect(sheet.getCell(3, 1).value).toBe('A');
      expect(sheet.getCell(3, 2).value).toBe('B');

      // Data should start at row 4
      expect(sheet.getCell(4, 1).value).toBe('X');
      expect(sheet.getCell(4, 2).value).toBe('Y');
    }
  });

  it('should apply header-body border after multi-row headers', async () => {
    const filePath = path.join(OUTPUT_DIR, 'header_border.xlsx');

    await createWorkbook()
      .addSheet({
        name: 'BorderTest',
        headers: [
          { key: 'col1', label: 'Col 1' },
          { key: 'col2', label: 'Col 2' }
        ],
        multiRowHeaders: {
          rows: [
            [{ value: 'Group', colSpan: 2 }],
            ['A', 'B']
          ]
        },
        rows: [
          { col1: 'X', col2: 'Y' }
        ],
        borders: 'header-body'
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet('BorderTest');

    expect(sheet).toBeDefined();
    if (sheet) {
      // The border should be on the last header row (row 2)
      const lastHeaderCell = sheet.getCell(2, 1);
      expect(lastHeaderCell.border?.bottom?.style).toBe('medium');
    }
  });

  it('should work with single row when no multiRowHeaders is specified', async () => {
    const filePath = path.join(OUTPUT_DIR, 'header_single_row.xlsx');

    await createWorkbook()
      .addSheet({
        name: 'SingleRow',
        headers: [
          { key: 'name', label: 'Name' },
          { key: 'age', label: 'Age' }
        ],
        rows: [
          { name: 'Alice', age: 30 }
        ]
      })
      .save(filePath);

    const workbook = await readExcel(filePath);
    const sheet = workbook.getWorksheet('SingleRow');

    expect(sheet).toBeDefined();
    if (sheet) {
      // Header should be at row 1
      expect(sheet.getCell(1, 1).value).toBe('Name');
      expect(sheet.getCell(1, 2).value).toBe('Age');

      // Data should be at row 2
      expect(sheet.getCell(2, 1).value).toBe('Alice');
      expect(sheet.getCell(2, 2).value).toBe(30);
    }
  });
});
