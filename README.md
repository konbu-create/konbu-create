# 昆布クリエイト | Konbu Create — Landing Page

個人クリエイト集団「昆布クリエイト」の公式ランディングページ。

> well-being × 技術 × 遊び — AIと遊び心で未来をつくる

公開URL: `https://konbu-create.pages.dev/` (Cloudflare Pages)

## Stack

- Vite 5 + TypeScript 5（フレームワークなし、素の HTML/CSS/DOM）
- 枯れた技術優先、依存最小限
- レスポンシブ / ダークテーマ / OGP対応 / SEO meta / sitemap / JSON-LD

## 起動方法

```bash
npm install
npm run dev      # http://localhost:5174
```

## ビルド

```bash
npm run build    # dist/ に出力
npm run preview -- --host 0.0.0.0 --port 5174
```

## Tailscale 公開

`vite.config.ts` で以下を設定済み:

```ts
server: { host: '0.0.0.0', port: 5174, allowedHosts: ['konbu.border-saury.ts.net'] }
preview: { host: '0.0.0.0', port: 5174 }
```

プレビュー起動後:

```
http://konbu.border-saury.ts.net:5174
```

Tailscaleが有効な環境でアクセス可能。

## デプロイ (Cloudflare Pages)

### 方法A: ダッシュボード連携（推奨・簡単）

1. Cloudflare Dashboard → Pages → Create project → Connect to Git
2. リポジトリ `konbu/konbu-create` を選択
3. Build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: `20`
4. Save → 初回デプロイで `https://konbu-create.pages.dev/` が発行される

### 方法B: GitHub Actions + Wrangler（自動デプロイ）

`.github/workflows/deploy.yml` が `main` pushで `wrangler pages deploy dist` を実行:

必要Secrets (GitHub → Settings → Secrets and variables → Actions):
- `CLOUDFLARE_API_TOKEN` — Cloudflare Dashboard → My Profile → API Tokens → Create Token → Edit Cloudflare Workers (or Pages) テンプレート
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare Dashboard 右側 Account ID

初回のみ手動でPagesプロジェクトを作成しておく:
```bash
npx wrangler pages project create konbu-create --production-branch=main
```

以降 `git push origin main` で自動デプロイ。

### ローカルから手動デプロイ

```bash
npm run build
npx wrangler pages deploy dist --project-name=konbu-create
```

## セクション構成

- Hero — 昆布クリエイトとは
- About — 理念 (well-being × 技術 × 遊び) / リーダー紹介
- Tech Stack — AI / Vibe Coding / 自律エージェント / Web/PWA / Capacitor / GameDev + アーキテクチャ図
- Works — ①着膨れ勇者 (https://kibure-yusha.pages.dev/) ②ホムンクルス (hermes+opencode+SearXNG+systemd/DDD)
- Philosophy — 枯れた技術優先 / バイブコーディング / 高速検証
- Contact — GitHub / Email (make.konbu.master@gmail.com)

## ファイル構成

```
index.html
src/
  main.ts        # IntersectionObserver, header, burger, smooth scroll
  style.css      # デザインシステム全体
public/
  icon.png               # ヘッダー/OGP用 512
  icon-circle.png        # Aboutアバター用 円形透過
  icon-192.png / apple-touch-icon.png / favicon.png
  ogp.png        # OGP画像 (1200x630, アイコン埋め込み)
  favicon.svg
  robots.txt
  sitemap.xml
vite.config.ts
.github/workflows/deploy.yml  # Cloudflare Pages デプロイ
```

## ライセンス

© 2026 Konbu Create
