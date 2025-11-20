import { describe, it, expect } from 'vitest';
import { createWorkbook, defineSheet } from '../src';
import { readExcel } from './utils';
import * as path from 'path';
import * as fs from 'fs';

const OUTPUT_DIR = path.join(__dirname, 'output');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

describe('Multiple Sheets', () => {
  it('should create a workbook with multiple sheets', async () => {
    const filePath = path.join(OUTPUT_DIR, 'multi.xlsx');
    
    interface User { name: string }
    interface Product { title: string }

    const userSheet = defineSheet<User>({
      name: 'Users',
      columns: [{ key: 'name', header: 'Name' }]
    });

    const productSheet = defineSheet<Product>({
      name: 'Products',
      columns: [{ key: 'title', header: 'Title' }]
    });

    await createWorkbook()
      .addSheet(userSheet, [{ name: 'Alice' }])
      .addSheet(productSheet, [{ title: 'Laptop' }])
      .save(filePath);

    const workbook = await readExcel(filePath);
    
    const sheet1 = workbook.getWorksheet('Users');
    const sheet2 = workbook.getWorksheet('Products');
    
    expect(sheet1).toBeDefined();
    expect(sheet2).toBeDefined();
    
    if(sheet1 && sheet2) {
        expect(sheet1.getCell(2, 1).value).toBe('Alice');
        expect(sheet2.getCell(2, 1).value).toBe('Laptop');
    }
  });
});
