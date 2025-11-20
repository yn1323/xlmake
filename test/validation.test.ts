import { describe, it, expect } from 'vitest';
import { createWorkbook, defineSheet } from '../src';

describe('Validation', () => {
  it('should validate sheet names', () => {
      const sf = createWorkbook();
      interface Data { id: number }
      
      expect(() => sf.addSheet(defineSheet<Data>({
          name: '',
          columns: []
      }), [])).toThrow();

      expect(() => sf.addSheet(defineSheet<Data>({
          name: 'A'.repeat(32),
          columns: []
      }), [])).toThrow();

      expect(() => sf.addSheet(defineSheet<Data>({
          name: 'Invalid:',
          columns: []
      }), [])).toThrow();
  });

  it('should validate file path', async () => {
      const sf = createWorkbook();
      await expect(sf.save('')).rejects.toThrow();
  });
});
