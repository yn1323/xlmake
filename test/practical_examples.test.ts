import { describe, it, expect } from 'vitest';
import { createWorkbook } from '../src';
import { readExcel } from './utils';
import * as path from 'path';
import * as fs from 'fs';

const OUTPUT_DIR = path.join(__dirname, 'output');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

describe('Practical Excel Examples', () => {
  it('should generate all practical examples in a single workbook', async () => {
    const filePath = path.join(OUTPUT_DIR, 'practical_examples.xlsx');
    const workbook = createWorkbook();

    // --- Sheet 1: 売上レポート ---
    workbook.addSheet({
      name: '売上レポート',
      title: {
        label: '2025年1月 売上レポート',
        style: {
          fill: { color: '#1F4E79' },
          font: { color: '#FFFFFF', bold: true, size: 16 },
          alignment: { horizontal: 'center' }
        }
      },
      headers: [
        {
          key: 'department',
          label: '部署',
          width: 15,
          merge: 'vertical',
          style: { alignment: { vertical: 'middle', horizontal: 'center' } }
        },
        { key: 'salesperson', label: '担当者', width: 15 },
        { key: 'date', label: '日付', width: 12, format: 'yyyy/mm/dd' },
        { key: 'product', label: '商品名', width: 20 },
        { key: 'quantity', label: '数量', width: 8, style: { alignment: { horizontal: 'right' } } },
        { key: 'unitPrice', label: '単価', width: 12, format: '¥#,##0' },
        { key: 'amount', label: '売上金額', width: 15, format: '¥#,##0' },
        {
          key: 'target',
          label: '目標達成',
          width: 12,
          style: (val) => ({
            font: {
              color: val === '達成' ? '#006600' : '#CC0000',
              bold: val === '達成'
            },
            alignment: { horizontal: 'center' }
          })
        }
      ],
      rows: [
        { department: '営業1課', salesperson: '田中太郎', date: new Date('2025-01-05'), product: 'ノートPC', quantity: 5, unitPrice: 150000, amount: 750000, target: '達成' },
        { department: '営業1課', salesperson: '田中太郎', date: new Date('2025-01-12'), product: 'モニター', quantity: 10, unitPrice: 35000, amount: 350000, target: '達成' },
        { department: '営業1課', salesperson: '佐藤花子', date: new Date('2025-01-08'), product: 'キーボード', quantity: 20, unitPrice: 8000, amount: 160000, target: '未達' },
        { department: '営業2課', salesperson: '鈴木一郎', date: new Date('2025-01-10'), product: 'マウス', quantity: 50, unitPrice: 3000, amount: 150000, target: '未達' },
        { department: '営業2課', salesperson: '高橋美咲', date: new Date('2025-01-15'), product: 'ノートPC', quantity: 8, unitPrice: 150000, amount: 1200000, target: '達成' },
      ],
      styles: {
        header: {
          fill: { color: '#2E75B6' },
          font: { color: '#FFFFFF', bold: true },
          alignment: { horizontal: 'center' }
        },
        row: (_, index) => index % 2 === 1 ? { fill: { color: '#DEEBF7' } } : {}
      },
      borders: 'all'
    });

    // --- Sheet 2: 従業員名簿 ---
    workbook.addSheet({
      name: '従業員名簿',
      title: {
        label: '株式会社サンプル 従業員名簿 2025年度',
        style: {
          fill: { color: '#375623' },
          font: { color: '#FFFFFF', bold: true, size: 14 },
          alignment: { horizontal: 'center' }
        }
      },
      headers: [
        { key: 'empId', label: { value: '社員番号', style: { font: { bold: true } } }, width: 12 },
        { key: 'name', label: { value: '氏名', style: { font: { bold: true } } }, width: 15 },
        { key: 'nameKana', label: { value: 'フリガナ', style: { font: { bold: true } } }, width: 18 },
        { key: 'department', label: { value: '部署', style: { font: { bold: true } } }, width: 15 },
        { key: 'position', label: { value: '役職', style: { font: { bold: true } } }, width: 12 },
        { key: 'joinDate', label: { value: '入社日', style: { font: { bold: true } } }, width: 12, format: 'yyyy/mm/dd' },
        { key: 'email', label: { value: 'メール', style: { font: { bold: true } } }, width: 25 },
        {
          key: 'status',
          label: { value: '在籍状況', style: { font: { bold: true } } },
          width: 10,
          style: (val) => ({
            fill: { color: val === '在籍' ? '#C6EFCE' : val === '休職' ? '#FFEB9C' : '#FFC7CE' },
            font: { color: val === '在籍' ? '#006100' : val === '休職' ? '#9C5700' : '#9C0006' },
            alignment: { horizontal: 'center' }
          })
        }
      ],
      rows: [
        { empId: 'EMP001', name: '山田太郎', nameKana: 'ヤマダタロウ', department: '経営企画部', position: '部長', joinDate: new Date('2010-04-01'), email: 'yamada@example.com', status: '在籍' },
        { empId: 'EMP002', name: '佐藤花子', nameKana: 'サトウハナコ', department: '人事部', position: '課長', joinDate: new Date('2015-04-01'), email: 'sato@example.com', status: '在籍' },
        { empId: 'EMP003', name: '鈴木一郎', nameKana: 'スズキイチロウ', department: '営業部', position: '主任', joinDate: new Date('2018-04-01'), email: 'suzuki@example.com', status: '休職' },
        { empId: 'EMP004', name: '高橋美咲', nameKana: 'タカハシミサキ', department: '開発部', position: '一般', joinDate: new Date('2020-04-01'), email: 'takahashi@example.com', status: '在籍' },
        { empId: 'EMP005', name: '田中健太', nameKana: 'タナカケンタ', department: '営業部', position: '一般', joinDate: new Date('2022-04-01'), email: 'tanaka@example.com', status: '退職' },
      ],
      styles: {
        header: {
          fill: { color: '#538135' },
          font: { color: '#FFFFFF' },
          alignment: { horizontal: 'center' }
        },
        body: { alignment: { vertical: 'middle' } }
      },
      borders: 'all',
      autoWidth: true
    });

    // --- Sheet 3: 請求書 ---
    workbook.addSheet({
      name: '請求書',
      title: {
        label: '請 求 書',
        style: {
          font: { bold: true, size: 24 },
          alignment: { horizontal: 'center' }
        }
      },
      headers: [
        { key: 'no', label: 'No.', width: 6, style: { alignment: { horizontal: 'center' } } },
        { key: 'item', label: '品目', width: 30 },
        { key: 'spec', label: '仕様', width: 20 },
        { key: 'quantity', label: '数量', width: 10, style: { alignment: { horizontal: 'right' } } },
        { key: 'unit', label: '単位', width: 8, style: { alignment: { horizontal: 'center' } } },
        { key: 'unitPrice', label: '単価', width: 15, format: '¥#,##0' },
        { key: 'amount', label: '金額', width: 15, format: '¥#,##0', style: { font: { bold: true } } }
      ],
      rows: [
        { no: 1, item: 'システム開発費', spec: 'Webアプリケーション', quantity: 1, unit: '式', unitPrice: 2000000, amount: 2000000 },
        { no: 2, item: 'サーバー構築費', spec: 'AWS環境構築', quantity: 1, unit: '式', unitPrice: 500000, amount: 500000 },
        { no: 3, item: '保守費用（月額）', spec: '12ヶ月分', quantity: 12, unit: '月', unitPrice: 50000, amount: 600000 },
        { no: 4, item: 'ドキュメント作成費', spec: '設計書・マニュアル', quantity: 1, unit: '式', unitPrice: 300000, amount: 300000 },
        { no: '', item: '', spec: '', quantity: '', unit: '', unitPrice: '', amount: '' },
        { no: '', item: '', spec: '', quantity: '', unit: { value: '小計', style: { font: { bold: true }, alignment: { horizontal: 'right' } } }, unitPrice: '', amount: { value: 3400000, style: { font: { bold: true } } } },
        { no: '', item: '', spec: '', quantity: '', unit: { value: '消費税(10%)', style: { alignment: { horizontal: 'right' } } }, unitPrice: '', amount: 340000 },
        { no: '', item: '', spec: '', quantity: '', unit: { value: '合計', style: { font: { bold: true, size: 14 }, alignment: { horizontal: 'right' } } }, unitPrice: '', amount: { value: 3740000, style: { font: { bold: true, size: 14 }, fill: { color: '#FFFF00' } } } },
      ],
      styles: {
        header: {
          fill: { color: '#4472C4' },
          font: { color: '#FFFFFF', bold: true },
          alignment: { horizontal: 'center' }
        }
      },
      borders: 'all'
    });

    // --- Sheet 4: 在庫管理表 ---
    const getStockStatus = (stock: number, reorderPoint: number) => {
      if (stock === 0) return '欠品';
      if (stock < reorderPoint) return '要発注';
      if (stock < reorderPoint * 2) return '適正';
      return '過剰';
    };

    const inventoryRows = [
      { code: 'A001', name: 'ボールペン（黒）', category: '文房具', stock: 500, reorderPoint: 100, unitPrice: 100 },
      { code: 'A002', name: 'ボールペン（赤）', category: '文房具', stock: 50, reorderPoint: 100, unitPrice: 100 },
      { code: 'A003', name: 'ノート（A4）', category: '文房具', stock: 0, reorderPoint: 50, unitPrice: 200 },
      { code: 'B001', name: 'コピー用紙（A4）', category: '用紙', stock: 200, reorderPoint: 100, unitPrice: 500 },
      { code: 'B002', name: 'コピー用紙（A3）', category: '用紙', stock: 30, reorderPoint: 50, unitPrice: 800 },
      { code: 'C001', name: 'トナー（黒）', category: '消耗品', stock: 10, reorderPoint: 5, unitPrice: 8000 },
      { code: 'C002', name: 'トナー（カラー）', category: '消耗品', stock: 2, reorderPoint: 3, unitPrice: 12000 },
    ].map(row => ({
      ...row,
      status: getStockStatus(row.stock, row.reorderPoint),
      stockValue: row.stock * row.unitPrice
    }));

    workbook.addSheet({
      name: '在庫管理表',
      title: {
        label: '在庫管理表（2025年1月末時点）',
        style: {
          fill: { color: '#7030A0' },
          font: { color: '#FFFFFF', bold: true, size: 14 },
          alignment: { horizontal: 'center' }
        }
      },
      headers: [
        { key: 'code', label: '商品コード', width: 12, style: { alignment: { horizontal: 'center' } } },
        { key: 'name', label: '商品名', width: 20 },
        {
          key: 'category',
          label: 'カテゴリ',
          width: 12,
          merge: 'vertical',
          style: { alignment: { vertical: 'middle', horizontal: 'center' } }
        },
        { key: 'stock', label: '在庫数', width: 10, style: { alignment: { horizontal: 'right' } } },
        { key: 'reorderPoint', label: '発注点', width: 10, style: { alignment: { horizontal: 'right' } } },
        { key: 'unitPrice', label: '単価', width: 12, format: '¥#,##0' },
        { key: 'stockValue', label: '在庫金額', width: 15, format: '¥#,##0' },
        {
          key: 'status',
          label: '状態',
          width: 10,
          style: (val) => {
            const colors: Record<string, { bg: string; fg: string }> = {
              '欠品': { bg: '#FF0000', fg: '#FFFFFF' },
              '要発注': { bg: '#FFC000', fg: '#000000' },
              '適正': { bg: '#92D050', fg: '#000000' },
              '過剰': { bg: '#00B0F0', fg: '#000000' }
            };
            const color = colors[val] || { bg: '#FFFFFF', fg: '#000000' };
            return {
              fill: { color: color.bg },
              font: { color: color.fg, bold: true },
              alignment: { horizontal: 'center' }
            };
          }
        }
      ],
      rows: inventoryRows,
      styles: {
        header: {
          fill: { color: '#5B2C6F' },
          font: { color: '#FFFFFF', bold: true },
          alignment: { horizontal: 'center' }
        },
        row: (_, index) => index % 2 === 1 ? { fill: { color: '#E8DAEF' } } : {}
      },
      borders: 'all'
    });

    // --- Sheet 5: 勤怠表 ---
    const generateAttendanceData = () => {
      const data = [];
      for (let day = 1; day <= 10; day++) {
        const isWeekend = [4, 5, 11, 12].includes(day);
        if (isWeekend) {
          data.push({
            date: new Date(2025, 0, day),
            dayOfWeek: day === 4 || day === 11 ? '土' : '日',
            startTime: '-',
            endTime: '-',
            breakTime: '-',
            workHours: 0,
            overtime: 0,
            note: '休日'
          });
        } else {
          const overtime = day % 3 === 0 ? 2 : 0; // Deterministic for testing
          data.push({
            date: new Date(2025, 0, day),
            dayOfWeek: ['日', '月', '火', '水', '木', '金', '土'][new Date(2025, 0, day).getDay()],
            startTime: '09:00',
            endTime: overtime > 0 ? `${18 + overtime}:00` : '18:00',
            breakTime: '1:00',
            workHours: 8 + overtime,
            overtime: overtime,
            note: overtime >= 2 ? '要確認' : ''
          });
        }
      }
      return data;
    };

    workbook.addSheet({
      name: '勤怠表',
      title: {
        label: '勤怠表 - 山田太郎 2025年1月',
        style: {
          font: { bold: true, size: 14 },
          alignment: { horizontal: 'center' }
        }
      },
      headers: [
        { key: 'date', label: '日付', width: 12, format: 'mm/dd' },
        {
          key: 'dayOfWeek',
          label: '曜日',
          width: 6,
          style: (val) => ({
            font: { color: val === '土' ? '#0000FF' : val === '日' ? '#FF0000' : '#000000' },
            alignment: { horizontal: 'center' }
          })
        },
        { key: 'startTime', label: '出勤', width: 8, style: { alignment: { horizontal: 'center' } } },
        { key: 'endTime', label: '退勤', width: 8, style: { alignment: { horizontal: 'center' } } },
        { key: 'breakTime', label: '休憩', width: 8, style: { alignment: { horizontal: 'center' } } },
        { key: 'workHours', label: '勤務時間', width: 10, style: { alignment: { horizontal: 'center' } } },
        {
          key: 'overtime',
          label: '残業',
          width: 8,
          style: (val) => ({
            fill: val >= 2 ? { color: '#FFCCCC' } : undefined,
            font: { color: val >= 2 ? '#CC0000' : '#000000', bold: val >= 2 },
            alignment: { horizontal: 'center' }
          })
        },
        {
          key: 'note',
          label: '備考',
          width: 15,
          style: (val) => ({
            font: { color: val === '要確認' ? '#FF0000' : val === '休日' ? '#888888' : '#000000' }
          })
        }
      ],
      rows: generateAttendanceData(),
      styles: {
        header: {
          fill: { color: '#4472C4' },
          font: { color: '#FFFFFF', bold: true },
          alignment: { horizontal: 'center' }
        }
      },
      borders: 'all'
    });

    await workbook.save(filePath);

    // --- Assertions ---
    const wb = await readExcel(filePath);

    // Sales report assertions
    const salesSheet = wb.getWorksheet('売上レポート');
    expect(salesSheet).toBeDefined();
    if (salesSheet) {
      expect(salesSheet.getCell(1, 1).value).toBe('2025年1月 売上レポート');
      expect(salesSheet.getCell(3, 2).value).toBe('田中太郎');
      expect(salesSheet.getCell(3, 7).numFmt).toBe('¥#,##0');
      // Vertical merge check
      const dept1 = salesSheet.getCell(3, 1);
      const dept2 = salesSheet.getCell(4, 1);
      expect(dept2.master).toBe(dept1);
    }

    // Employee list assertions
    const empSheet = wb.getWorksheet('従業員名簿');
    expect(empSheet).toBeDefined();
    if (empSheet) {
      expect(empSheet.getCell(1, 1).value).toBe('株式会社サンプル 従業員名簿 2025年度');
      expect(empSheet.getCell(2, 1).value).toBe('社員番号');
      expect(empSheet.getCell(3, 2).value).toBe('山田太郎');
    }

    // Invoice assertions
    const invoiceSheet = wb.getWorksheet('請求書');
    expect(invoiceSheet).toBeDefined();
    if (invoiceSheet) {
      expect(invoiceSheet.getCell(1, 1).value).toBe('請 求 書');
      expect(invoiceSheet.getCell(3, 2).value).toBe('システム開発費');
      const totalCell = invoiceSheet.getCell(10, 7);
      expect(totalCell.value).toBe(3740000);
    }

    // Inventory assertions
    const invSheet = wb.getWorksheet('在庫管理表');
    expect(invSheet).toBeDefined();
    if (invSheet) {
      const outOfStockCell = invSheet.getCell(5, 8);
      expect(outOfStockCell.value).toBe('欠品');
      expect(invSheet.getCell(3, 7).numFmt).toBe('¥#,##0');
    }

    // Attendance assertions
    const attSheet = wb.getWorksheet('勤怠表');
    expect(attSheet).toBeDefined();
    if (attSheet) {
      expect(attSheet.getCell(3, 1).numFmt).toBe('mm/dd');
      expect(attSheet.getCell(2, 3).value).toBe('出勤');
    }
  });
});
