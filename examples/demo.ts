import { createWorkbook, defineSheet } from '../src';
import * as path from 'path';

// Define Data Type
interface Employee {
  department: string;
  name: string;
  position: string;
  salary: number;
  hireDate: Date;
  isManager: boolean;
}

// Define Schema
const employeeSheet = defineSheet<Employee>({
  name: 'Employees',
  columns: [
    { 
      key: 'department', 
      header: 'Department', 
      width: 'auto',
      merge: 'vertical',
      style: { 
        alignment: { vertical: 'middle', horizontal: 'center' },
        font: { bold: true }
      }
    },
    { key: 'name', header: 'Name', width: 20 },
    { key: 'position', header: 'Position', width: 20 },
    { 
      key: 'salary', 
      header: 'Salary', 
      width: 15, 
      format: '$#,##0',
      style: (val) => val > 80000 ? { font: { color: '#008800', bold: true } } : {}
    },
    { key: 'hireDate', header: 'Hire Date', width: 15, format: 'yyyy-mm-dd' },
    { 
      key: 'isManager', 
      header: 'Role', 
      format: (val) => val ? 'Manager' : 'Staff',
      style: (val) => val ? { fill: { color: '#FFFFAA' } } : {}
    }
  ],
  header: {
    rows: ['Employee Roster 2025'],
    style: {
      fill: { color: '#4472C4' },
      font: { color: '#FFFFFF', bold: true, size: 14 },
      alignment: { horizontal: 'center' }
    },
    borders: 'header-body'
  },
  borders: 'outer',
  autoWidth: {
    padding: 4
  }
});

// Mock Data
const employees: Employee[] = [
  { department: 'Engineering', name: 'Alice', position: 'Frontend Dev', salary: 75000, hireDate: new Date('2023-01-15'), isManager: false },
  { department: 'Engineering', name: 'Bob', position: 'Backend Dev', salary: 82000, hireDate: new Date('2022-05-20'), isManager: false },
  { department: 'Engineering', name: 'Charlie', position: 'Tech Lead', salary: 120000, hireDate: new Date('2020-11-01'), isManager: true },
  { department: 'Sales', name: 'David', position: 'Sales Rep', salary: 60000, hireDate: new Date('2024-02-10'), isManager: false },
  { department: 'Sales', name: 'Eve', position: 'Sales Manager', salary: 95000, hireDate: new Date('2019-08-15'), isManager: true },
  { department: 'HR', name: 'Frank', position: 'Recruiter', salary: 55000, hireDate: new Date('2023-09-01'), isManager: false },
];

// Execute
(async () => {
  const outputPath = path.join(__dirname, 'demo_output.xlsx');
  console.log(`Generating demo Excel file at: ${outputPath}`);
  
  await createWorkbook()
    .addSheet(employeeSheet, employees)
    .save(outputPath);
    
  console.log('Done! ✨');
})();
