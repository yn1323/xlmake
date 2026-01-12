import { z } from "zod";
import { isBuffer } from "../utils/buffer";

// ImageSource（Buffer or string）
// ブラウザ環境でも動作するようにカスタムバリデーターを使用
const imageSourceSchema = z.union([
  z.custom<Buffer>((val) => isBuffer(val), {
    message: "Expected Buffer",
  }),
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
