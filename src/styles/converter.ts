import type { Alignment, Fill, Font, Style } from "exceljs";
import type { CellStyle } from "../types/style";

/**
 * xlkitのCellStyleをExcelJSのStyleに変換
 */
export function convertToExcelJSStyle(style: CellStyle | undefined): Partial<Style> {
  if (!style) return {};

  const excelStyle: Partial<Style> = {};

  // フォント
  if (hasFont(style)) {
    excelStyle.font = convertFont(style);
  }

  // 塗りつぶし
  if (style.fill) {
    excelStyle.fill = convertFill(style.fill);
  }

  // 配置
  if (style.align) {
    excelStyle.alignment = convertAlignment(style.align);
  }

  // 数値フォーマット
  if (style.format) {
    excelStyle.numFmt = convertNumFmt(style);
  }

  return excelStyle;
}

/**
 * フォント関連のプロパティがあるかチェック
 */
function hasFont(style: CellStyle): boolean {
  return !!(
    style.fontFamily ||
    style.fontSize ||
    style.bold ||
    style.italic ||
    style.underline ||
    style.strike ||
    style.color
  );
}

/**
 * フォントを変換
 */
function convertFont(style: CellStyle): Partial<Font> {
  const font: Partial<Font> = {};

  if (style.fontFamily) font.name = style.fontFamily;
  if (style.fontSize) font.size = style.fontSize;
  if (style.bold) font.bold = true;
  if (style.italic) font.italic = true;
  if (style.underline) font.underline = true;
  if (style.strike) font.strike = true;

  if (style.color) {
    // #RRGGBB → ARGB形式に変換
    font.color = { argb: hexToArgb(style.color) };
  }

  return font;
}

/**
 * 塗りつぶしを変換
 */
function convertFill(hexColor: string): Fill {
  return {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: hexToArgb(hexColor) },
  };
}

/**
 * 配置を変換
 */
function convertAlignment(align: "left" | "center" | "right"): Partial<Alignment> {
  return {
    horizontal: align,
    vertical: "middle", // 垂直方向は常に中央
  };
}

/**
 * 数値フォーマットを変換
 */
function convertNumFmt(style: CellStyle): string {
  if (style.format === "date") {
    return "yyyy-mm-dd"; // 日付フォーマット
  }

  if (style.format === "number") {
    const { decimalPlaces = 0, thousandsSeparator = false } = style;

    // 桁区切りカンマ
    const base = thousandsSeparator ? "#,##0" : "#0";

    // 小数点以下
    if (decimalPlaces > 0) {
      const decimals = "0".repeat(decimalPlaces);
      return `${base}.${decimals}`;
    }

    return base;
  }

  // "string" or 未指定
  return "@"; // テキスト形式
}

/**
 * #RRGGBB → AARRGGBB (ARGB形式) に変換
 * 不透明度は常に100% (FF)
 */
function hexToArgb(hex: string): string {
  // "#RRGGBB" → "FFRRGGBB"
  return `FF${hex.slice(1).toUpperCase()}`;
}

/**
 * ARGB → #RRGGBB に変換（読み取りAPI用）
 */
export function argbToHex(argb: string): string {
  // "FFRRGGBB" → "#RRGGBB"
  return `#${argb.slice(2).toUpperCase()}`;
}
