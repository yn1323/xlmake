import { z } from "zod";

// ImageSource（Buffer or string）
const imageSourceSchema = z.union([
  z.instanceof(Buffer),
  z
    .string()
    .url(), // URL形式
  z
    .string()
    .min(1), // ファイルパス
]);

// ImageOptions
export const imageOptionsSchema = z
  .object({
    source: imageSourceSchema,
    width: z.number().positive().optional(),
    height: z.number().positive().optional(),
    row: z.number().int().min(0).optional(),
    col: z.number().int().min(0).optional(),
  })
  .strict();
