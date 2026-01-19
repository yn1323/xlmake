
## xlmakeドキュメント（website/docs）

ドキュメントサイトの修正・実装時は以下を参照。

### 入門（Getting Started）
| ファイル | 説明 |
|---------|------|
| `docs/intro.md` | xlmakeの紹介、ExcelJSとの比較、主な特徴 |
| `docs/installation.md` | インストール方法、動作環境 |
| `docs/quick-start.md` | 基本的な使い方、Node.js/ブラウザでの使用例 |

### ガイド（Guides）
| ファイル | 説明 |
|---------|------|
| `docs/guides/basic-usage.md` | ビルダーパターン、シート操作、テーブル/テキスト追加、出力方法 |
| `docs/guides/styling.md` | プリセット、CellStyle、_rowStyle、条件付きスタイル、罫線設定 |
| `docs/guides/multi-sheet.md` | 複数シートの作成、シート名の制約 |
| `docs/guides/images.md` | 画像挿入方法、ImageOptions |
| `docs/guides/reading.md` | read()関数、WorkbookReader/SheetReader/CellReader |

### APIリファレンス（API Reference）
| ファイル | 説明 |
|---------|------|
| `docs/api-reference/overview.md` | API全体像、xlmake()/read()、メソッド一覧 |
| `docs/api-reference/xlmake.md` | xlmake()ファクトリ、WorkbookBuilder/SheetBuilder |
| `docs/api-reference/table.md` | .table() API、TableOptions、Column定義 |
| `docs/api-reference/text.md` | .text() API、TextInput |
| `docs/api-reference/image.md` | .image() API、ImageOptions |
| `docs/api-reference/styling.md` | CellStyle/TableStyle/BorderStyle型定義 |
| `docs/api-reference/reading.md` | read() API、WorkbookReader/SheetReader/CellReader |

### サンプル（Examples）
| ファイル | 説明 |
|---------|------|
| `docs/examples/basic-table.md` | 基本的なテーブル作成例 |
| `docs/examples/presets.md` | basic/minimal/stripedプリセットの使用例 |
| `docs/examples/multi-header.md` | マルチヘッダー（階層ヘッダー）の例 |
| `docs/examples/cell-merge.md` | 同値セルの縦方向マージ例 |
| `docs/examples/borders.md` | 罫線設定の例 |

### リファレンス（Reference）
| ファイル | 説明 |
|---------|------|
| `docs/reference/presets.md` | プリセット一覧と仕様詳細 |
| `docs/reference/limitations.md` | 未サポート機能（チャート、数式、マクロ等） |
| `docs/reference/excel-constraints.md` | Excel仕様による制約（シート名、行列数等） |
