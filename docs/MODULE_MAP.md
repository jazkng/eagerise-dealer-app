# Excedio module map

| 业务功能 | 入口 / 导航 | 主要文件 | 数据读取 / 写入 |
|---|---|---|---|
| 品牌首页与介绍 | `#home`, `#about` | `index.html`, `style.css`, `app.js`（首页轮播）, `assets/logo.png`, `assets/hero/*.webp` | 静态内容，只读；首页大图为 APEX / ELITE / 360° 三张轮播（裁自供应商海报），每 5 秒切换 |
| 产品（分类筛选 + 型号阵容） | `#products` | `products.js`, `app.js`, `assets/products/*.webp` | 分类标签筛选 7 款供应商型号（海报与规格，只读）；无型号的分类显示「Coming soon」并可直接问经销商；型号或分类带入 WhatsApp 询价 |
| 经销商查询 | `#dealers` | `app.js`, `dealers.js` | 172 条已导入门店；关键词、州、城市及分页存在 URL |
| 车型询价 | `#vehicle-form` | `index.html`, `app.js` | 临时浏览器状态；生成 WhatsApp 文案，不自动发送 |
| 门店联络与地图 | 经销商卡片 | `app.js` | 打开电话、WhatsApp 或 Google Maps 搜索链接 |
| 支持与移动导航 | `#support`, Menu | `index.html`, `app.js`, `style.css` | 静态 FAQ 与浏览器状态 |

Root files are editable source. `npm run build` regenerates `dist/`; `.openai/hosting.json` retains the original ChatGPT Site identity.
