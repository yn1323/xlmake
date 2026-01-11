import { z } from "zod";

// 色の16進数形式を検証
const hexColorRegex = /^#[\dA-Fa-f]{6}$/;

const hexColorSchema = z.string().regex(hexColorRegex, "色は #RRGGBB 形式で指定してください");

// AlignType
const alignTypeSchema = z.enum(["left", "center", "right"]);

// FormatType
const formatTypeSchema = z.enum(["string", "number", "date"]);

// CellStyle
export const cellStyleSchema = z
  .object({
    fontFamily: z.string().optional(),
    fontSize: z.number().positive().optional(),
    bold: z.boolean().optional(),
    italic: z.boolean().optional(),
    underline: z.boolean().optional(),
    strike: z.boolean().optional(),
    color: hexColorSchema.optional(),
    fill: hexColorSchema.optional(),
    align: alignTypeSchema.optional(),
    format: formatTypeSchema.optional(),
    decimalPlaces: z.number().int().min(0).optional(),
    thousandsSeparator: z.boolean().optional(),
  })
  .strict();

// LineStyle
const lineStyleSchema = z.enum(["thin", "medium", "thick", "dotted", "dashed", "double"]);

// BorderStyle
export const borderStyleSchema = z
  .object({
    outline: lineStyleSchema.optional(),
    headerBody: lineStyleSchema.optional(),
    headerInner: lineStyleSchema.optional(),
    bodyInner: lineStyleSchema.optional(),
    borderColor: hexColorSchema.optional(),
  })
  .strict();

// TableStyle
export const tableStyleSchema = z
  .object({
    header: cellStyleSchema.optional(),
    body: cellStyleSchema.optional(),
  })
  .strict();
