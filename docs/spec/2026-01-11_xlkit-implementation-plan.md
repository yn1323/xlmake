# xlkit 実装計画

## 概要

本ドキュメントは xlkit renewal の技術実装計画を定義する。
上流設計（2026-01-06_xlkit-design.md）に基づき、具体的なディレクトリ構成・設定ファイル・実装方針を記載する。

---

## 今回のゴール

**最小限の骨格を作り、デモページが見れる状態にする**

コア実装・API詳細は動くものができてから決める。

---

## 決定事項

| 項目 | 決定 |
|------|------|
| 開発方針 | ゼロから作り直す（既存 v1.1.0 は参考程度） |
| パッケージ構成 | 単一パッケージ（モノレポではない） |
| src/ 構成 | レイヤー分割（api/, core/, utils/） |
| API 形式 | ファクトリ関数 `xlkit()` |
| ビルド | tsup（ESM + CJS 両対応） |
| テスト | 単体: コロケーション / 結合: tests/ |
| デモ | npm 同梱、`npx xlkit demo` で起動 |

---

## ディレクトリ構成
※renewalのファイルはすべてrootに移行済み

```
renewal/
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── biome.json
├── vitest.config.ts
├── src/
│   ├── index.ts              # エントリーポイント
│   ├── api/                  # 公開インターフェース
│   │   └── (実装時に追加)
│   ├── core/                 # 内部ロジック
│   │   └── (実装時に追加)
│   └── utils/                # 共通ユーティリティ
│       └── (実装時に追加)
├── tests/                    # 結合テスト
│   ├── integration.test.ts
│   └── output/               # 生成したExcel（git管理対象）
│       └── .gitkeep
├── demo/                     # デモサイト（React + Vite）
│   ├── index.html
│   ├── main.tsx
│   └── vite.config.ts
└── bin/                      # CLI
    └── cli.ts                # npx xlkit demo 用
```

---

## 設定ファイル詳細

### package.json

```json
{
  "name": "xlkit",
  "version": "0.0.0",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist", "demo", "bin"],
  "bin": {
    "xlkit": "./bin/cli.js"
  },
  "scripts": {
    "build": "tsup",
    "dev": "vite demo",
    "test": "vitest run",
    "test:watch": "vitest",
    "type-check": "tsc --noEmit",
    "lint": "biome check",
    "format": "biome check --write"
  },
  "dependencies": {
    "exceljs": "^4.4.0"
  },
  "devDependencies": {
    "@biomejs/biome": "^2.3.10",
    "@types/node": "^24.10.1",
    "@vitejs/plugin-react": "^4.4.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tsup": "^8.5.0",
    "typescript": "^5.9.3",
    "vite": "^7.1.7",
    "vitest": "^4.0.12"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "demo", "tests"]
}
```

### tsup.config.ts

```typescript
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
});
```

### vitest.config.ts

```typescript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: [
      "src/**/*.test.ts",  // コロケーション（単体テスト）
      "tests/**/*.test.ts" // 結合テスト
    ],
  },
});
```

### biome.json

既存の設定を流用（2スペースインデント、120文字行幅、インポート整理有効）

---

## テスト戦略

### 単体テスト（コロケーション）

- 配置: `src/**/*.test.ts`
- 目的: 関数内部のロジック検証
- 例: `src/api/xlkit.test.ts`, `src/utils/color.test.ts`

### 結合テスト

- 配置: `tests/*.test.ts`
- 目的: 実際の Excel 生成・読み取り検証
- 出力先: `tests/output/`（git管理対象）

生成した Excel ファイルは git にコミットする。
レビュー時に実際のファイルを確認できるメリットがある。

---

## デモサイト

### 構成

- React + Vite
- demo/index.html をエントリーポイント
- 複数のサンプルをボタンで Excel ダウンロード

### 起動方法

```bash
# 開発時
pnpm dev

# npm パッケージインストール後
npx xlkit demo
```

---

## CLI

### bin/cli.ts

```typescript
#!/usr/bin/env node
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const demoDir = join(__dirname, "..", "demo");

const command = process.argv[2];

if (command === "demo") {
  spawn("npx", ["vite", demoDir], { stdio: "inherit", shell: true });
} else {
  console.log("Usage: xlkit demo");
}
```

---

## 実装ステップ

### Phase 1: プロジェクト基盤（今回）

1. package.json 作成
2. tsconfig.json 作成
3. tsup.config.ts 作成
4. biome.json 作成（既存を流用）
5. vitest.config.ts 作成
6. src/index.ts 作成（空 export）
7. tests/output/.gitkeep 作成
8. demo/ 作成（Hello xlkit 表示）
9. bin/cli.ts 作成

### Phase 2 以降（後日）

- API 設計の詳細決定
- コア実装（ExcelJS 連携）
- スタイリング機能
- マージ機能
- 読み取り機能
- ストリーミング対応

---

## 検証方法

```bash
# デモページ表示確認
pnpm dev

# ビルド確認
pnpm build

# コード品質確認
pnpm lint
pnpm type-check

# テスト実行
pnpm test
```

---

## 決定の経緯（2026-01-11）

### パッケージ構成について
- Q: モノレポにしますか？
- A: 無理にモノレポにしない。package.json は /renewal 配下に1つ。ディレクトリで demo, src を分ける。

### npm publish 時のバンドル問題
- Q: demo も npm にアップロードされると利用先にバンドルされる？
- A: バンドラーは import から辿れるモジュールだけをバンドルするので、demo が index.ts から export されていなければ利用先にはバンドルされない。ただし npm パッケージのダウンロードサイズは大きくなる。

### src/ 構成について
- Q: フラット vs レイヤー分割？
- A: レイヤー分割（api/, core/, utils/）。公開インターフェースと内部ロジックを分離。

### API 形式について
- Q: ファクトリ関数 vs new コンストラクタ vs ビルダーパターン？
- A: ファクトリ関数 `xlkit()`。new 不要でシンプル、最近のライブラリのトレンドに沿っている。

### テスト戦略について
- Q: テストの配置は？
- A: 単体テストはコロケーション（src/**/*.test.ts）、結合テストは tests/ ディレクトリ。
- Q: 生成した Excel は？
- A: tests/output/ に配置、git にコミットする（レビュー時に確認できるように）。
