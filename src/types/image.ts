// 画像ソース（Buffer, URL, ファイルパス）
export type ImageSource = Buffer | string;

// 画像オプション
export type ImageOptions = {
  source: ImageSource;
  width?: number; // ピクセル単位
  height?: number; // ピクセル単位
  row?: number; // 配置する行（0-indexed）
  col?: number; // 配置する列（0-indexed）
};
