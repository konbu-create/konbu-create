# 昆布クリエイト | Konbu Create — Landing Page

個人クリエイト集団「昆布クリエイト」の公式ランディングページ。

> well-being × 技術 × 遊び — AIと遊び心で未来をつくる

公開URL: `https://konbu-create.github.io/konbu-create/` (GitHub Pages, public repo)

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
npm run build              # dist/ に出力 (Cloudflare/ローカル用, base /)
npm run build:gh           # GitHub Pages用 (base /konbu-create/ + canonical書き換え)
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

## デプロイ (GitHub Pages — ローカルビルド)

> GitHub Actionsでのビルドは行わず、ローカルでビルドして `gh-pages` ブランチにpushする方式（Actionsのビルドコスト節約）

```bash
# 初回: gh-pagesパッケージはインストール済み
npm run deploy          # = npm run build:gh && gh-pages -d dist
# 確認のみ
npm run deploy:preview  # --dry-run
```

`npm run deploy` は:
1. `VITE_SITE_URL=https://konbu-create.github.io/konbu-create/ VITE_BASE=/konbu-create/ vite build` で `dist/` を生成（canonical/OGPがGitHub Pages URLに書き換わる）
2. `gh-pages -d dist` で `gh-pages` ブランチにpush → GitHub Pagesが自動公開

GitHub側の設定は済み: `Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: gh-pages / (root)` で `https://konbu-create.github.io/konbu-create/` が公開中。

※ Cloudflare Pages (`https://konbu-create.pages.dev/`) は手動 `wrangler pages deploy` でも上げられるが、現在はGitHub Pages一本で運用。

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
vite.config.ts           # VITE_SITE_URL/VITE_BASE対応
package.json             # deployスクリプト (gh-pages)
```

## ライセンス

© 2026 Konbu Create
