# 业务模块位置

当前是静态示例应用；以下数据均在 `src/App.jsx` 中定义或保存在 React 本机状态，未接入真实交易或客户数据库。`src/components/ui/` 为共用组件库。

| 业务功能 | 入口 / 导航 | 主要组件 | 相关工具 | 数据读取 / 写入 |
|---|---|---|---|---|
| 首页与品牌展示 | home | App.jsx 首页分支（展厅风格）| ShowroomProductCard、`src/lib/showroom.js` 配色 | 内置产品与示例统计，只读 |
| 产品目录与详情 | products | App.jsx 产品列表（ShowroomProductCard）；`src/components/ProductDetailPage.jsx` 全屏详情页 | Input、Card、Button、Badge | 内置产品；本机搜索与 selectedProduct；产品图片放 `public/products/<品牌>/`（webp）；详情页可选字段 images/highlights/specs/inBox/warranty/downloads，缺资料显示「资料待补充」 |
| 经销商查询与详情 | dealers | App.jsx 经销商列表与详情 | Input、Card、Button | 内置经销商；本机搜索与 selectedDealer |
| 经销商看板 | dashboard | App.jsx 看板分支 | Tabs、Card、Badge | 内置线索、库存、示例指标，只读 |
| 产品询价 | 产品询价按钮 | App.jsx 询价表单 | Input、Textarea、Button | 表单状态与成功提示；未发送到后端 |
| 语言与模式切换 | 顶部导航 | App.jsx 导航与 translations | Button | 本机 language、systemMode、activeTab 状态 |

入口：`src/main.jsx`。构建：`vite.config.js`，`@` 指向 `src/`。检查：`.github/workflows/ci.yml` 执行锁定依赖安装、lint 和构建。
