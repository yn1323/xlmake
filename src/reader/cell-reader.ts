import type { Cell } from "exceljs";
import { argbToHex } from "../styles/converter";
import type { AlignType, CellStyle, LineStyle } from "../types/style";

/**
 * セルの値とスタイルを保持
 */
export class CellReader {
  constructor(private cell: Cell) {}

  /**
   * セルの値を取得
   */
  get value(): string | number | boolean | null {
    const val = this.cell.value;

    // リッチテキストの場合
    if (val && typeof val === "object" && "richText" in val) {
      return val.richText.map((rt: { text: string }) => rt.text).join("");
    }

    // 数式の場合（結果を返す）
    if (val && typeof val === "object" && "result" in val) {
      const result = val.result;
      if (typeof result === "string" || typeof result === "number" || typeof result === "boolean") {
        return result;
      }
      return null;
    }

    // プリミティブ値
    if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
      return val;
    }

    return null;
  }

  /**
   * セルのスタイルを取得
   */
  get style(): CellStyle | undefined {
    const cellStyle = this.cell.style;
    if (!cellStyle) return undefined;

    const xlmakeStyle: CellStyle = {};

    // フォント
    if (cellStyle.font) {
      if (cellStyle.font.name) xlmakeStyle.fontFamily = cellStyle.font.name;
      if (cellStyle.font.size) xlmakeStyle.fontSize = cellStyle.font.size;
      if (cellStyle.font.bold) xlmakeStyle.bold = true;
      if (cellStyle.font.italic) xlmakeStyle.italic = true;
      if (cellStyle.font.underline) xlmakeStyle.underline = true;
      if (cellStyle.font.strike) xlmakeStyle.strike = true;

      // 色
      if (cellStyle.font.color?.argb) {
        xlmakeStyle.color = argbToHex(cellStyle.font.color.argb);
      }
    }

    // 塗りつぶし
    if (cellStyle.fill?.type === "pattern" && cellStyle.fill.fgColor?.argb) {
      xlmakeStyle.fill = argbToHex(cellStyle.fill.fgColor.argb);
    }

    // 配置（水平・垂直両方対応）
    if (cellStyle.alignment) {
      const h = cellStyle.alignment.horizontal;
      const v = cellStyle.alignment.vertical;

      if (h === "left" || h === "center" || h === "right") {
        if (v && v !== "middle") {
          // 垂直が middle 以外なら複合形式
          xlmakeStyle.align = `${v}-${h}` as AlignType;
        } else {
          // 垂直が middle またはなしなら従来形式
          xlmakeStyle.align = h;
        }
      }
    }

    // 数値フォーマット
    if (cellStyle.numFmt) {
      xlmakeStyle.format = this.detectFormat(cellStyle.numFmt);

      // 小数点以下の桁数を検出
      if (xlmakeStyle.format === "number") {
        const match = cellStyle.numFmt.match(/\.(\d+)/);
        if (match) {
          xlmakeStyle.decimalPlaces = match[1].length;
        }

        // 桁区切りカンマ
        if (cellStyle.numFmt.includes(",")) {
          xlmakeStyle.thousandsSeparator = true;
        }
      }
    }

    return Object.keys(xlmakeStyle).length > 0 ? xlmakeStyle : undefined;
  }

  /**
   * 数値フォーマットから format を検出
   */
  private detectFormat(numFmt: string): "string" | "number" | "date" | undefined {
    if (numFmt === "@") return "string";
    if (numFmt.includes("yyyy") || numFmt.includes("mm") || numFmt.includes("dd")) {
      return "date";
    }
    if (numFmt.includes("#") || numFmt.includes("0")) {
      return "number";
    }
    return undefined;
  }

  /**
   * セルの罫線情報を取得
   */
  get border(): CellBorder | undefined {
    const cellBorder = this.cell.border;
    if (!cellBorder) return undefined;

    const result: CellBorder = {};

    if (cellBorder.top?.style) {
      result.top = {
        style: cellBorder.top.style as LineStyle,
        color: cellBorder.top.color?.argb ? argbToHex(cellBorder.top.color.argb) : undefined,
      };
    }
    if (cellBorder.bottom?.style) {
      result.bottom = {
        style: cellBorder.bottom.style as LineStyle,
        color: cellBorder.bottom.color?.argb ? argbToHex(cellBorder.bottom.color.argb) : undefined,
      };
    }
    if (cellBorder.left?.style) {
      result.left = {
        style: cellBorder.left.style as LineStyle,
        color: cellBorder.left.color?.argb ? argbToHex(cellBorder.left.color.argb) : undefined,
      };
    }
    if (cellBorder.right?.style) {
      result.right = {
        style: cellBorder.right.style as LineStyle,
        color: cellBorder.right.color?.argb ? argbToHex(cellBorder.right.color.argb) : undefined,
      };
    }

    return Object.keys(result).length > 0 ? result : undefined;
  }
}

/**
 * セルの罫線情報
 */
export type CellBorder = {
  top?: { style: LineStyle; color?: string };
  bottom?: { style: LineStyle; color?: string };
  left?: { style: LineStyle; color?: string };
  right?: { style: LineStyle; color?: string };
};
