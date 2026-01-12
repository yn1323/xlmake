/**
 * Bufferかどうかを安全に判定（ブラウザ環境でもエラーにならない）
 */
export function isBuffer(value: unknown): value is Buffer {
  return typeof Buffer !== "undefined" && Buffer.isBuffer(value);
}

/**
 * URLかどうかを判定
 */
export function isUrl(value: string): boolean {
  return value.startsWith("http://") || value.startsWith("https://");
}
