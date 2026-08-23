# 昆布クリエイト | Konbu Create — Landing Page

兵庫県川西市拠点の個人クリエイト集団「昆布クリエイト」の公式ランディングページ。

> well-being × 技術 × 遊び — AIと遊び心で未来をつくる

## Stack

- Vite 5 + TypeScript 5（フレームワークなし、素の HTML/CSS/DOM）
- 枯れた技術優先、依存最小限
- レスポンシブ / ダークテーマ / OGP対応 / SEO meta / sitemap

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

## セクション構成

- Hero — 昆布クリエイトとは
- About — 理念 (well-being × 技術 × 遊び) / リーダー紹介
- Tech Stack — AI / Vibe Coding / 自律エージェント / Web/PWA / Capacitor / GameDev + アーキテクチャ図
- Works — ①着膨れ勇者 (https://kibure-yusha.pages.dev/) ②ホムンクルス (hermes+opencode+SearXNG+systemd/DDD)
- Philosophy — 枯れた技術優先 / バイブコーディング / 高速検証
- Contact — GitHub / X / Email (mailto)

## ファイル構成

```
index.html
src/
  main.ts        # IntersectionObserver, header, burger, smooth scroll
  style.css      # デザインシステム全体
public/
  ogp.png        # OGP画像 (1200x630)
  favicon.svg
  robots.txt
  sitemap.xml
vite.config.ts
```

## ライセンス

© 2026 Konbu Create
