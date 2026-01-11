import type { BorderStyle, TableStyle } from "../types/style";

/**
 * テーブルプリセットの型定義
 */
export type TablePresetConfig = {
  style?: TableStyle;
  border?: BorderStyle;
  stripedRowColor?: string; // striped用の奇数行背景色
};

/**
 * プリセット定義
 */
export const TABLE_PRESETS: Record<string, TablePresetConfig> = {
  basic: {
    style: {
      header: {
        bold: true,
        fill: "#4472C4", // Excelの標準青
        color: "#FFFFFF", // 白文字
        align: "center",
      },
      body: {
        align: "left",
      },
    },
    border: {
      outline: "thin",
      headerBody: "thin",
      headerInner: "thin",
      bodyInner: "thin",
    },
  },

  minimal: {
    style: {
      header: {
        bold: true,
        align: "left",
      },
      body: {
        align: "left",
      },
    },
    // 罫線なし
  },

  striped: {
    style: {
      header: {
        bold: true,
        fill: "#4472C4",
        color: "#FFFFFF",
        align: "center",
      },
      body: {
        align: "left",
      },
    },
    border: {
      outline: "thin",
      headerBody: "thin",
      headerInner: "thin",
      bodyInner: "thin",
    },
    stripedRowColor: "#F2F2F2", // 奇数行の背景色（薄いグレー）
  },
};

/**
 * プリセット名からプリセット設定を取得
 */
export function getPreset(presetName: string): TablePresetConfig {
  const preset = TABLE_PRESETS[presetName];
  if (!preset) {
    throw new Error(`不明なプリセット名: ${presetName}`);
  }
  return preset;
}

/**
 * プリセットが存在するかチェック
 */
export function hasPreset(presetName: string): boolean {
  return presetName in TABLE_PRESETS;
}
