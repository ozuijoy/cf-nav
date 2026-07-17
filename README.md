# CF-NAV 開發者導航網站

🚀 一個搭建在 Cloudflare Pages 上的開發者導航網站，提供眾多開發者的線上免費工具、API 和資源鏈接。

## 功能特性

- ✨ 現代化 UI 設計，支持深色/淺色主題
- 📱 完全響應式設計，適配所有設備
- 🌐 繁體中文前端界面
- 🔍 強大的搜索功能
- 📊 資源分類管理
- ⚡ 基於 Cloudflare Pages 部署，超快加載速度
- 🔄 支持 Cloudflare KV 存儲動態內容

## 技術棧

- **前端框架**: Vue 3
- **樣式**: Tailwind CSS + SCSS
- **構建工具**: Vite
- **部署**: Cloudflare Pages
- **存儲**: Cloudflare KV (可選)
- **包管理**: pnpm

## 快速開始

### 本地開發

```bash
# 安裝依賴
pnpm install

# 啟動開發服務器
pnpm dev

# 構建生產版本
pnpm build
```

### 部署到 Cloudflare Pages

1. 推送代碼到 GitHub
2. 連接 GitHub 帳戶到 Cloudflare Pages
3. 選擇此倉庫並配置構建設置：
   - **構建命令**: `pnpm build`
   - **構建輸出目錄**: `dist`

## 項目結構

```
cf-nav/
├── src/
│   ├── components/        # Vue 組件
│   ├── pages/            # 頁面組件
│   ├── stores/           # Pinia 狀態管理
│   ├── data/             # 導航數據
│   ├── styles/           # 全局樣式
│   ├── App.vue
│   └── main.js
├── public/               # 靜態資源
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 導航數據結構

導航數據存儲在 `src/data/nav-items.json` 中，支持以下結構：

```json
{
  "categories": [
    {
      "id": "api",
      "name": "API 服務",
      "icon": "🔌",
      "items": [
        {
          "name": "API 名稱",
          "description": "描述",
          "url": "https://...",
          "tags": ["tag1", "tag2"]
        }
      ]
    }
  ]
}
```

## 貢獻指南

歡迎提交 Pull Request 添加更多開發者資源！

## 許可證

MIT License