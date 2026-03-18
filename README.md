# 🛍️ AI Listing Creator

> AI 驱动的电商 Listing 创作工具，支持亚马逊、Shopify、速卖通等平台。基于 Google Gemini API。

![AI Listing Creator](https://img.shields.io/badge/Powered%20by-Gemini%20AI-blue?style=for-the-badge&logo=google)
![Deploy on Vercel](https://img.shields.io/badge/Deploy%20on-Vercel-black?style=for-the-badge&logo=vercel)

## ✨ 功能特性

- **📝 智能文案生成** — 自动生成标题、五行卖点（Bullet Points）、A+ 产品描述
- **🤖 AI 产品分析** — 上传图片自动提取产品特征、卖点、目标人群
- **🎨 组图 Prompt 生成** — 规划 8 个专业摄影场景，支持 Main/Aplus/Lifestyle
- **🖼️ AI 图片生成** — 基于 Gemini 批量生成产品图片
- **✨ A+ 页面方案** — 自动规划 6 个 A+ 模块，包含英雄图、对比表格等
- **📝 文字叠加** — 在生成图片上添加卖点文字和功能标注
- **🎨 品牌风格** — 10+ 预设风格（柔粉甜美/法式优雅/沙龙专业等）
- **⚡ 一键全流程** — 一键完成从分析到文案再到图片的全流程

## 🚀 快速部署到 Vercel

### 方法一：Fork 后一键部署（推荐）

1. **Fork 本仓库**到你的 GitHub 账号

2. **登录 Vercel** → [vercel.com](https://vercel.com)

3. 点击 **「New Project」** → 选择你 Fork 的仓库

4. 在 **Environment Variables** 中添加：
   ```
   GEMINI_API_KEY = 你的Gemini API Key
   ```

5. 点击 **「Deploy」** 🎉

### 方法二：命令行部署

```bash
# 克隆仓库
git clone https://github.com/你的用户名/ai-listing-creator.git
cd ai-listing-creator

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
# 编辑 .env，填入你的 GEMINI_API_KEY

# 本地运行
npm run dev

# 部署到 Vercel
npx vercel --prod
```

## 🔑 获取 Gemini API Key

1. 访问 [Google AI Studio](https://aistudio.google.com/app/apikey)
2. 登录 Google 账号
3. 点击 **「Create API Key」**
4. 复制 API Key

> 💡 Gemini API 目前提供**免费额度**，足够日常使用。

## 📁 项目结构

```
ai-listing-creator/
├── public/
│   └── index.html          # 主应用（纯前端，单文件）
├── api/
│   └── gemini.js           # Vercel Serverless 代理（保护 API Key）
├── package.json
├── vercel.json             # Vercel 部署配置
├── .env.example            # 环境变量示例
└── README.md
```

## 🛠️ 本地开发

```bash
npm install
cp .env.example .env       # 填入你的 API Key
npm run dev                 # 启动开发服务器 http://localhost:3000
```

## 📖 使用说明

1. **上传产品图片** — 支持多张，JPG/PNG/WEBP
2. **输入产品信息** — 标题、描述（可选，AI 会从图片提取）
3. **选择目标平台** — 亚马逊、Shopify、速卖通等
4. **AI 提取特征** — 自动分析产品并在右侧显示分析结果
5. **全部生成** — 一键生成完整文案
6. **生成组图 Prompt** — 规划摄影场景
7. **批量生成图片** — AI 生成产品图片
8. **文字叠加** — 添加卖点标注

## 🔧 技术栈

- **前端**: 纯 HTML/CSS/JavaScript（零框架，零依赖）
- **AI**: Google Gemini API（文字 + 图片生成）
- **部署**: Vercel（静态托管 + Serverless Functions）

## 📄 License

MIT License

---

Made with ❤️ by AI Listing Creator Team
