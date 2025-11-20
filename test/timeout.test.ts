import { describe, it, expect } from 'vitest';
import { createWorkbook, defineSheet } from '../src';
import * as path from 'path';
import * as fs from 'fs';

const OUTPUT_DIR = path.join(__dirname, 'output');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

describe('Timeout Functionality', () => {
  it('should timeout if operation takes too long', async () => {
    const filePath = path.join(OUTPUT_DIR, 'timeout.xlsx');
    
    // Create enough data to take some time
    const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}` }));
    
    const sheetDef = defineSheet<{ id: number; name: string }>({
      name: 'Timeout',
      columns: [
          { key: 'id', header: 'ID' },
          { key: 'name', header: 'Name' }
      ]
    });

    const sf = createWorkbook().addSheet(sheetDef, data);

    // Set timeout to 1ms to ensure it fails
    await expect(sf.save(filePath, { timeout: 1 })).rejects.toThrow(/Operation timed out/);
  });

  it('should respect custom timeout', async () => {
    const filePath = path.join(OUTPUT_DIR, 'custom_timeout.xlsx');
    const data = [{ id: 1, name: 'Test' }];
    const sheetDef = defineSheet<{ id: number; name: string }>({
        name: 'Timeout',
        columns: [{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]
    });

    // Should pass with sufficient timeout
    await expect(createWorkbook().addSheet(sheetDef, data).save(filePath, { timeout: 5000 })).resolves.not.toThrow();
  });
});
