# NPM Publishing Setup

このプロジェクトは、GitHub Actionsを使用してnpmへの自動公開を行います。

## 自動公開の仕組み

`main`ブランチにコードがマージされると、以下の処理が自動的に実行されます:

1. **テストの実行**: `npm test`でテストを実行
2. **バージョンアップ**: minorバージョンを自動的にインクリメント (例: 1.0.0 → 1.1.0)
3. **ビルド**: TypeScriptコードをコンパイル
4. **NPM公開**: npmレジストリにパッケージを公開
5. **コミット&タグ**: バージョン変更をコミットし、タグをプッシュ

## 初回セットアップ

### 1. NPMアクセストークンの取得

1. [npmjs.com](https://www.npmjs.com/)にログイン
2. アカウント設定 → Access Tokens → Generate New Token
3. Token Type: **Automation** を選択
4. トークンをコピー (一度しか表示されません)

### 2. GitHubシークレットの設定

1. GitHubリポジトリページを開く
2. Settings → Secrets and variables → Actions
3. "New repository secret"をクリック
4. 以下を入力:
   - Name: `NPM_TOKEN`
   - Secret: 先ほどコピーしたnpmトークン
5. "Add secret"をクリック

## 使用方法

### 通常のリリース

1. 機能ブランチで開発
2. Pull Requestを作成
3. レビュー後、`main`ブランチにマージ
4. GitHub Actionsが自動的にバージョンアップ&公開を実行

### 手動でのバージョン管理

自動公開を一時的にスキップしたい場合は、コミットメッセージに`[skip ci]`を含めてください:

```bash
git commit -m "docs: update README [skip ci]"
```

## ワークフローの確認

GitHub Actionsの実行状況は以下で確認できます:
- リポジトリの "Actions" タブ
- 各コミットのステータスチェック

## トラブルシューティング

### 公開が失敗する場合

1. **NPM_TOKENが設定されているか確認**
   - GitHub Settings → Secrets and variables → Actions で確認

2. **npmパッケージ名が利用可能か確認**
   - `npm view sheetflow` で既存パッケージを確認
   - 既に存在する場合は、`package.json`の`name`を変更

3. **テストが通っているか確認**
   - ローカルで `npm test` を実行

### バージョン管理の注意点

- ワークフローは**minorバージョン**のみを自動更新します
- major/patchバージョンの変更が必要な場合は、手動で`npm version`を実行してください:
  ```bash
  npm version major  # 1.0.0 → 2.0.0
  npm version patch  # 1.0.0 → 1.0.1
  ```
