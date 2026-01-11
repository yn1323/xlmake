import type { Alignment, Border, Borders, Fill, Font, Style } from "exceljs";
import type { BorderStyle, CellStyle, LineStyle } from "../types/style";

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

/**
 * ExcelJS Border オブジェクトを生成
 */
function createBorder(style: LineStyle, color?: string): Partial<Border> {
  const border: Partial<Border> = { style };
  if (color) {
    border.color = { argb: hexToArgb(color) };
  }
  return border;
}

/**
 * ヘッダーセル用のボーダーを生成
 */
export function createHeaderCellBorder(
  border: BorderStyle | undefined,
  position: { isFirstCol: boolean; isLastCol: boolean; isFirstRow: boolean },
  isLastHeaderRow: boolean,
): Partial<Borders> | undefined {
  if (!border) return undefined;

  const { outline, headerBody, headerInner, borderColor } = border;
  const borders: Partial<Borders> = {};

  // 上罫線（最初の行 → outline、それ以外 → headerInner）
  if (position.isFirstRow && outline) {
    borders.top = createBorder(outline, borderColor);
  } else if (!position.isFirstRow && headerInner) {
    borders.top = createBorder(headerInner, borderColor);
  }

  // 下罫線（最後のヘッダー行 → headerBody、それ以外 → headerInner）
  if (isLastHeaderRow && headerBody) {
    borders.bottom = createBorder(headerBody, borderColor);
  } else if (!isLastHeaderRow && headerInner) {
    borders.bottom = createBorder(headerInner, borderColor);
  }

  // 左罫線
  if (position.isFirstCol && outline) {
    borders.left = createBorder(outline, borderColor);
  } else if (!position.isFirstCol && headerInner) {
    borders.left = createBorder(headerInner, borderColor);
  }

  // 右罫線
  if (position.isLastCol && outline) {
    borders.right = createBorder(outline, borderColor);
  } else if (!position.isLastCol && headerInner) {
    borders.right = createBorder(headerInner, borderColor);
  }

  return Object.keys(borders).length > 0 ? borders : undefined;
}

/**
 * ボディセル用のボーダーを生成
 */
export function createBodyCellBorder(
  border: BorderStyle | undefined,
  position: { isFirstCol: boolean; isLastCol: boolean; isFirstRow: boolean; isLastRow: boolean },
): Partial<Borders> | undefined {
  if (!border) return undefined;

  const { outline, bodyInner, borderColor } = border;
  const borders: Partial<Borders> = {};

  // 上罫線（最初の行はheaderBodyで対応済みなのでbodyInnerのみ）
  if (!position.isFirstRow && bodyInner) {
    borders.top = createBorder(bodyInner, borderColor);
  }

  // 下罫線
  if (position.isLastRow && outline) {
    borders.bottom = createBorder(outline, borderColor);
  } else if (!position.isLastRow && bodyInner) {
    borders.bottom = createBorder(bodyInner, borderColor);
  }

  // 左罫線
  if (position.isFirstCol && outline) {
    borders.left = createBorder(outline, borderColor);
  } else if (!position.isFirstCol && bodyInner) {
    borders.left = createBorder(bodyInner, borderColor);
  }

  // 右罫線
  if (position.isLastCol && outline) {
    borders.right = createBorder(outline, borderColor);
  } else if (!position.isLastCol && bodyInner) {
    borders.right = createBorder(bodyInner, borderColor);
  }

  return Object.keys(borders).length > 0 ? borders : undefined;
}
