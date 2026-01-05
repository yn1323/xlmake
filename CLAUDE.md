# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## 参照ドキュメント
- @doc/claude/basic.md
- @doc/claude/self.md

## 🚨 核心制約

### YOU MUST（必須事項）
- YOU MUST: 質問をする場合は、1つずつ質問してください。チャットなので。。。
- YOU MUST: ユーザーの指示で不明瞭な箇所は必ず聞き返してください。これすごく重要！！ぜひ一緒に仕様をつくっていきましょう！
- YOU MUST: コードの確認は下記のコマンドを利用してください。
   - `pnpm format` - Biomeフォーマット（作業完了前に必ず実行）
   - `pnpm lint` - Biomeリンティング（作業完了前に必ず実行）
   - `pnpm type-check` - TypeScript型チェック（作業完了前に必ず実行）
   - `pnpm test` - Vitestテスト（ロジック、UI修正時のみ）

### IMPORTANT（重要事項）
- IMPORTANT: 3ステップ以上でTodoWrite使用
- IMPORTANT: 作業開始前に計画することを好む
- IMPORTANT: バレルエクスポート禁止
- IMPORTANT: utf-8を利用すること
- IMPORTANT: TypeScriptの型は推論を利用すること
- IMPORTANT: 定数化は2箇所以上で利用しているときのみとする
- IMPORTANT: 開発者の指摘が誤っているときは、根拠を示して反論すること
- IMPORTANT: このライブラリ呼び出し方法を検討するときは、Developer Experienceを重視して考えること
- IMPORTANT: リリース前につきソースコードの修正時のマイグレーション考慮は不要。でも警告くらいは出してね

## 開発コマンド

### コード品質・型チェック
- `pnpm lint` - Biomeリンティングの実行（チェックのみ）
- `pnpm format` - Biomeによるコードフォーマット
- `pnpm type-check` - TypeScript型チェックの実行

### テスト
- `pnpm test` - 全てのVitestテストの実行

## アーキテクチャ概要

### 技術スタック
- **ビルドツール**: Vite 7.1.7（高速開発サーバー）
- **パッケージマネージャ**: pnpm

### テストアーキテクチャ
プロジェクトでは多層テスト手法を採用:

1. **ロジックテスト**: Vitestを使用したユーティリティ・ビジネスロジックのユニットテスト
   - `test/*.test.ts`に配置
   - 分離されたNode.js環境で実行

## コード品質基準

### フォーマット・リンティング
- Biome設定: 2スペースインデント、120文字行幅を強制
- インポート整理を有効化
- Reactドメインルールを適用
- 配列インデックスキーを許可（noArrayIndexKey無効）
- forEachを許可（noForEach無効）

## エラーハンドリング戦略
- エラー発生時は`throw new Error()` してください

## テスト戦略
- コードの単体テストを書くこと
- 実際にExcelを出力してレイアウトが正しいか確認すること（レイアウト確認は開発者に投げてOK）
