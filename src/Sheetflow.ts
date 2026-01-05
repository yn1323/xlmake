import ExcelJS from "exceljs";
import { HeaderDef, type HeaderLabel, type HeaderLabelCell, type SheetConfig, type XLStyle } from "./types";
import { mapStyle } from "./utils/style";

// Helper: Check if label is multi-row (array)
function isMultiRowLabel(label: HeaderLabel): label is (string | HeaderLabelCell)[] {
  return Array.isArray(label);
}

// Helper: Get label text from HeaderLabel or HeaderLabelCell
function getLabelText(label: string | HeaderLabelCell | { value: string; style?: XLStyle }): string {
  return typeof label === "string" ? label : label.value;
}

// Helper: Get label style from HeaderLabelCell
function getLabelStyle(label: string | HeaderLabelCell): XLStyle | undefined {
  return typeof label === "string" ? undefined : label.style;
}

export class XLKit {
  private workbook: ExcelJS.Workbook;

  constructor() {
    this.workbook = new ExcelJS.Workbook();
  }

  addSheet(config: SheetConfig): XLKit {
    // Validate Sheet Name
    if (!config.name) {
      throw new Error("Sheet name is required.");
    }
    if (config.name.length > 31) {
      throw new Error(`Sheet name "${config.name}" exceeds the maximum length of 31 characters.`);
    }
    const invalidChars = /[\\/?*[\]:]/;
    if (invalidChars.test(config.name)) {
      throw new Error(`Sheet name "${config.name}" contains invalid characters (\\ / ? * [ ] :).`);
    }

    const sheet = this.workbook.addWorksheet(config.name);
    const data = config.rows;

    // Determine if multi-row headers are used
    const hasMultiRowHeaders = config.headers.some((h) => isMultiRowLabel(h.label));

    // Calculate header row count
    let headerRowCount = 1;
    if (hasMultiRowHeaders) {
      headerRowCount = Math.max(...config.headers.map((h) => (isMultiRowLabel(h.label) ? h.label.length : 1)));
    }

    // Validate: Check for vertical duplicate values in multi-row headers
    if (hasMultiRowHeaders) {
      config.headers.forEach((header, colIdx) => {
        if (isMultiRowLabel(header.label)) {
          for (let rowIdx = 1; rowIdx < header.label.length; rowIdx++) {
            const currentText = getLabelText(header.label[rowIdx]);
            const prevText = getLabelText(header.label[rowIdx - 1]);
            if (currentText === prevText) {
              throw new Error(
                `Vertical duplicate header values are not allowed. ` +
                  `Column "${header.key}" has duplicate value "${currentText}" at rows ${rowIdx} and ${rowIdx + 1}. ` +
                  `Use different values for each row.`,
              );
            }
          }
        }
      });
    }

    // Handle autoWidth
    const autoWidthConfig =
      typeof config.autoWidth === "boolean" ? { enabled: config.autoWidth } : config.autoWidth || {};
    const autoWidthEnabled = autoWidthConfig.enabled !== false;

    // 1. Setup Columns
    const columns = config.headers.map((header, colIndex) => {
      let width = header.width;

      if (!width && autoWidthEnabled) {
        width = "auto";
      }

      if (width === "auto") {
        let maxLen = 0;

        // Consider header label(s)
        if (autoWidthConfig.headerIncluded !== false) {
          if (isMultiRowLabel(header.label)) {
            header.label.forEach((lbl) => {
              const text = getLabelText(lbl);
              let len = 0;
              for (let i = 0; i < text.length; i++) {
                len += text.charCodeAt(i) > 255 ? 2 : 1;
              }
              if (len > maxLen) maxLen = len;
            });
          } else {
            const text = getLabelText(header.label);
            for (let i = 0; i < text.length; i++) {
              maxLen += text.charCodeAt(i) > 255 ? 2 : 1;
            }
          }
        }

        // Check data length
        data.forEach((row) => {
          const cellData = row[header.key];
          const val = this.isCellValueWithStyle(cellData) ? cellData.value : cellData;
          const str = val != null ? String(val) : "";
          let len = 0;
          for (let i = 0; i < str.length; i++) {
            len += str.charCodeAt(i) > 255 ? 2 : 1;
          }
          if (len > maxLen) maxLen = len;
        });

        const padding = autoWidthConfig.padding ?? 2;
        const constant = autoWidthConfig.charWidthConstant ?? 1.2;
        width = (maxLen + padding) * constant;
      }

      return {
        header: undefined, // We'll add headers manually
        key: String(header.key),
        width: typeof width === "number" ? width : 15,
      };
    });
    sheet.columns = columns;

    // 2. Apply Title Rows (if any)
    if (config.title) {
      const titleLabels = Array.isArray(config.title.label) ? config.title.label : [config.title.label];

      titleLabels.forEach((titleText) => {
        const titleRow = sheet.insertRow(1, [titleText]);

        if (config.headers.length > 1) {
          sheet.mergeCells(1, 1, 1, config.headers.length);
        }

        if (config.title!.style) {
          const mappedTitleStyle = mapStyle(config.title!.style);
          titleRow.eachCell((cell) => {
            cell.style = { ...cell.style, ...mappedTitleStyle };
          });
        }
      });
    }

    // Calculate row indices
    const titleRowCount = config.title ? (Array.isArray(config.title.label) ? config.title.label.length : 1) : 0;
    const headerStartRowIndex = titleRowCount + 1;
    const headerEndRowIndex = titleRowCount + headerRowCount;

    // 3. Build and render header grid
    if (hasMultiRowHeaders) {
      // Build header grid: grid[row][col] = { text, style }
      const grid: { text: string; style?: XLStyle }[][] = [];
      for (let r = 0; r < headerRowCount; r++) {
        grid[r] = [];
        for (let c = 0; c < config.headers.length; c++) {
          const header = config.headers[c];
          if (isMultiRowLabel(header.label)) {
            if (r < header.label.length) {
              grid[r][c] = {
                text: getLabelText(header.label[r]),
                style: getLabelStyle(header.label[r]),
              };
            } else {
              // Extend last value if array is shorter
              const lastIdx = header.label.length - 1;
              grid[r][c] = {
                text: getLabelText(header.label[lastIdx]),
                style: getLabelStyle(header.label[lastIdx]),
              };
            }
          } else {
            // Single value - same for all rows
            grid[r][c] = {
              text: getLabelText(header.label),
              style: typeof header.label === "object" && !Array.isArray(header.label) ? header.label.style : undefined,
            };
          }
        }
      }

      // Calculate merges based on same values
      // mergeInfo[row][col] = { rowSpan, colSpan, isStart }
      const mergeInfo: { rowSpan: number; colSpan: number; isStart: boolean }[][] = [];
      for (let r = 0; r < headerRowCount; r++) {
        mergeInfo[r] = [];
        for (let c = 0; c < config.headers.length; c++) {
          mergeInfo[r][c] = { rowSpan: 1, colSpan: 1, isStart: true };
        }
      }

      // Calculate horizontal merges (colSpan) - same text in same row
      for (let r = 0; r < headerRowCount; r++) {
        let c = 0;
        while (c < config.headers.length) {
          const startCol = c;
          const currentText = grid[r][c].text;
          let colSpan = 1;

          // Count consecutive same values
          while (c + colSpan < config.headers.length && grid[r][c + colSpan].text === currentText) {
            mergeInfo[r][c + colSpan].isStart = false;
            colSpan++;
          }

          mergeInfo[r][startCol].colSpan = colSpan;
          c += colSpan;
        }
      }

      // Render header cells and apply merges
      for (let r = 0; r < headerRowCount; r++) {
        const excelRowIndex = headerStartRowIndex + r;
        const row = sheet.getRow(excelRowIndex);

        for (let c = 0; c < config.headers.length; c++) {
          const info = mergeInfo[r][c];
          if (!info.isStart) continue; // Skip merged cells

          const cell = row.getCell(c + 1);
          cell.value = grid[r][c].text;

          // Apply cell-specific style
          if (grid[r][c].style) {
            const mappedStyle = mapStyle(grid[r][c].style!);
            cell.style = { ...cell.style, ...mappedStyle };
          }

          // Apply merge if colSpan > 1
          if (info.colSpan > 1) {
            sheet.mergeCells(excelRowIndex, c + 1, excelRowIndex, c + info.colSpan);
          }
        }
      }

      // Apply styles.header to all header rows
      if (config.styles?.header) {
        const mappedHeaderStyle = mapStyle(config.styles.header);
        for (let r = headerStartRowIndex; r <= headerEndRowIndex; r++) {
          const row = sheet.getRow(r);
          row.eachCell((cell) => {
            cell.style = { ...cell.style, ...mappedHeaderStyle };
          });
        }
      }

      // Apply styles.all to all header rows
      if (config.styles?.all) {
        const mappedAllStyle = mapStyle(config.styles.all);
        for (let r = headerStartRowIndex; r <= headerEndRowIndex; r++) {
          const row = sheet.getRow(r);
          row.eachCell((cell) => {
            cell.style = { ...mappedAllStyle, ...cell.style };
          });
        }
      }
    } else {
      // Single row header
      const headerRow = sheet.getRow(headerStartRowIndex);

      config.headers.forEach((header, colIndex) => {
        const cell = headerRow.getCell(colIndex + 1);
        cell.value = getLabelText(header.label as string | { value: string; style?: XLStyle });

        // Apply label style
        if (typeof header.label === "object" && !Array.isArray(header.label) && header.label.style) {
          const mappedStyle = mapStyle(header.label.style);
          cell.style = { ...cell.style, ...mappedStyle };
        }
      });

      // Apply styles.header
      if (config.styles?.header) {
        const mappedHeaderStyle = mapStyle(config.styles.header);
        headerRow.eachCell((cell) => {
          cell.style = { ...cell.style, ...mappedHeaderStyle };
        });
      }

      // Apply styles.all
      if (config.styles?.all) {
        const mappedAllStyle = mapStyle(config.styles.all);
        headerRow.eachCell((cell) => {
          cell.style = { ...mappedAllStyle, ...cell.style };
        });
      }
    }

    // 4. Add Data & Apply Styles
    data.forEach((rowData, rowIndex) => {
      const rowValues: any = {};

      config.headers.forEach((header) => {
        const cellData = rowData[header.key];
        rowValues[header.key] = this.isCellValueWithStyle(cellData) ? cellData.value : cellData;
      });

      const addedRow = sheet.addRow(rowValues);

      // Apply styles to each cell
      config.headers.forEach((header, colIndex) => {
        const cell = addedRow.getCell(colIndex + 1);
        const cellData = rowData[header.key];
        const cellValue = this.isCellValueWithStyle(cellData) ? cellData.value : cellData;

        let finalStyle: any = {};

        // 1. styles.all
        if (config.styles?.all) {
          finalStyle = { ...finalStyle, ...mapStyle(config.styles.all) };
        }

        // 2. styles.body
        if (config.styles?.body) {
          finalStyle = { ...finalStyle, ...mapStyle(config.styles.body) };
        }

        // 3. styles.column[key]
        if (config.styles?.column?.[header.key]) {
          finalStyle = { ...finalStyle, ...mapStyle(config.styles.column[header.key]) };
        }

        // 4. styles.row(data, index)
        if (config.styles?.row) {
          const rowStyle = config.styles.row(rowData, rowIndex);
          finalStyle = { ...finalStyle, ...mapStyle(rowStyle) };
        }

        // 5. headers[].style (object or function)
        if (header.style) {
          if (typeof header.style === "function") {
            const cellStyle = header.style(cellValue, rowData, rowIndex);
            finalStyle = { ...finalStyle, ...mapStyle(cellStyle) };
          } else {
            finalStyle = { ...finalStyle, ...mapStyle(header.style) };
          }
        }

        // 6. rows[].{key}.style (highest priority)
        if (this.isCellValueWithStyle(cellData) && cellData.style) {
          finalStyle = { ...finalStyle, ...mapStyle(cellData.style) };
        }

        cell.style = finalStyle;

        // Apply format
        if (header.format) {
          if (typeof header.format === "string") {
            cell.numFmt = header.format;
          } else {
            cell.value = header.format(cellValue);
          }
        }
      });
    });

    // 5. Apply Vertical Merges (for data rows)
    config.headers.forEach((header, colIndex) => {
      if (header.merge === "vertical") {
        let startRow = headerEndRowIndex + 1;
        let previousValue: any = null;

        for (let i = 0; i < data.length; i++) {
          const currentRowIndex = headerEndRowIndex + i + 1;
          const cell = sheet.getCell(currentRowIndex, colIndex + 1);
          const currentValue = cell.value;

          if (i === 0) {
            previousValue = currentValue;
            continue;
          }

          if (currentValue !== previousValue) {
            if (currentRowIndex - 1 > startRow) {
              sheet.mergeCells(startRow, colIndex + 1, currentRowIndex - 1, colIndex + 1);
            }
            startRow = currentRowIndex;
            previousValue = currentValue;
          }
        }

        const lastRowIndex = headerEndRowIndex + data.length;
        if (lastRowIndex > startRow) {
          sheet.mergeCells(startRow, colIndex + 1, lastRowIndex, colIndex + 1);
        }
      }
    });

    // 6. Apply Borders
    if (config.borders === "all") {
      sheet.eachRow((row) => {
        row.eachCell((cell) => {
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        });
      });
    } else if (config.borders === "outer") {
      const lastRow = sheet.rowCount;
      const lastCol = sheet.columnCount;

      for (let c = 1; c <= lastCol; c++) {
        const topCell = sheet.getCell(1, c);
        topCell.border = { ...topCell.border, top: { style: "thin" } };
        const bottomCell = sheet.getCell(lastRow, c);
        bottomCell.border = { ...bottomCell.border, bottom: { style: "thin" } };
      }
      for (let r = 1; r <= lastRow; r++) {
        const leftCell = sheet.getCell(r, 1);
        leftCell.border = { ...leftCell.border, left: { style: "thin" } };
        const rightCell = sheet.getCell(r, lastCol);
        rightCell.border = { ...rightCell.border, right: { style: "thin" } };
      }
    } else if (config.borders === "header-body") {
      const lastCol = sheet.columnCount;
      for (let c = 1; c <= lastCol; c++) {
        const headerCell = sheet.getCell(headerEndRowIndex, c);
        headerCell.border = { ...headerCell.border, bottom: { style: "medium" } };
      }
    }

    return this;
  }

  private isCellValueWithStyle(val: any): val is { value: any; style: XLStyle } {
    return val !== null && typeof val === "object" && "value" in val && !Array.isArray(val) && !(val instanceof Date);
  }

  async save(path: string, options?: { timeout?: number }): Promise<void> {
    if (!path || path.trim() === "") {
      throw new Error("File path cannot be empty.");
    }
    if (typeof process !== "undefined" && process.versions && process.versions.node) {
      const timeout = options?.timeout ?? 10000;

      const writePromise = this.workbook.xlsx.writeFile(path);
      const timeoutPromise = new Promise<void>((_, reject) => {
        setTimeout(() => reject(new Error(`Operation timed out after ${timeout}ms`)), timeout);
      });

      await Promise.race([writePromise, timeoutPromise]);
    } else {
      throw new Error("File system access is only available in Node.js environment. Use saveToBuffer() instead.");
    }
  }

  async saveToBuffer(options?: { timeout?: number }): Promise<Uint8Array> {
    const timeout = options?.timeout ?? 10000;

    const writePromise = this.workbook.xlsx.writeBuffer();
    const timeoutPromise = new Promise<ExcelJS.Buffer>((_, reject) => {
      setTimeout(() => reject(new Error(`Operation timed out after ${timeout}ms`)), timeout);
    });

    const buffer = await Promise.race([writePromise, timeoutPromise]);
    return new Uint8Array(buffer as ArrayBuffer);
  }

  async download(filename: string, options?: { timeout?: number }): Promise<void> {
    if (typeof window === "undefined" || typeof document === "undefined") {
      throw new Error(
        "download() is only available in browser environment. Use save() for Node.js or saveToBuffer() for custom handling.",
      );
    }

    const buffer = await this.saveToBuffer(options);
    const blob = new Blob([buffer.buffer as ArrayBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}

export function createWorkbook(): XLKit {
  return new XLKit();
}
