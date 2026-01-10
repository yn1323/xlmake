import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: [
      "src/**/*.test.ts", // コロケーション（単体テスト）
      "tests/**/*.test.ts", // 結合テスト
    ],
  },
});
