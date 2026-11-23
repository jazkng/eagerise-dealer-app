# Excedio module map

| 业务功能 | 入口 / 导航 | 主要文件 | 数据读取 / 写入 |
|---|---|---|---|
| 品牌首页与介绍 | `#home`, `#about` | `index.html`, `style.css`, `assets/logo.png` | 静态内容，只读 |
| 产品分类与弹窗 | `#products` | `index.html`, `app.js`, `assets/category-*.png` | 分类概念资料；浏览器状态 |
| 经销商查询 | `#dealers` | `app.js`, `dealers.js` | 172 条已导入门店；关键词、州、城市及分页存在 URL |
| 车型询价 | `#vehicle-form` | `index.html`, `app.js` | 临时浏览器状态；生成 WhatsApp 文案，不自动发送 |
| 门店联络与地图 | 经销商卡片 | `app.js` | 打开电话、WhatsApp 或 Google Maps 搜索链接 |
| 支持与移动导航 | `#support`, Menu | `index.html`, `app.js`, `style.css` | 静态 FAQ 与浏览器状态 |

Root files are editable source. `npm run build` regenerates `dist/`; `.openai/hosting.json` retains the original ChatGPT Site identity.
