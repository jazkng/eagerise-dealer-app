# Eagerise 经销商应用系统

## 项目概述

这是一个为 Eagerise Sdn. Bhd. 开发的现代化经销商管理Web应用系统。该系统整合了Aurora和Clif Designs等品牌，为经销商、客户和管理员提供全方位的产品展示、经销商管理和客户线索追踪功能。

## 核心功能

### 1. 首页（Home）
- **品牌展示**：突出展示Eagerise生态系统
- **统计数据**：实时显示产品数量、活跃经销商、新线索和月度销售额
- **特色产品**：展示热门产品卡片
- **品牌介绍**：Aurora和Clif Designs品牌说明

### 2. 产品目录（Products）
- **完整产品列表**：展示所有Aurora和Clif Designs产品
- **产品搜索**：快速查找产品功能
- **产品详情**：包含价格、评分、特性标签
- **询价功能**：客户可直接询价

### 3. 经销商定位（Dealers）
- **经销商搜索**：按城市或邮编查找经销商
- **经销商列表**：显示所有认证经销商
- **联系方式**：电话、地址等完整信息
- **验证标识**：显示经销商认证状态

### 4. 经销商仪表板（Dashboard）
- **客户线索管理**：追踪新线索、已联系、已转化状态
- **库存管理**：查看产品库存状态
- **数据分析**：
  - 线索转化率：68%
  - 客户满意度：92%
  - 响应时间：85%
- **性能指标**：月度业绩统计

## 技术栈

- **前端框架**：React 18
- **构建工具**：Vite
- **样式方案**：Tailwind CSS
- **UI组件**：shadcn/ui
- **图标库**：Lucide React
- **路由管理**：React Router
- **包管理器**：pnpm

## 设计特色

### 品牌色彩
- **主色调**：绿色系（#00cc00）- 代表创新和活力
- **辅助色**：蓝色、橙色、紫色 - 用于数据可视化
- **背景色**：浅灰色渐变 - 提供现代感

### 用户体验
- **响应式设计**：完美支持桌面、平板和移动设备
- **直观导航**：清晰的顶部导航栏
- **视觉层次**：使用卡片、渐变和阴影创建深度
- **交互反馈**：悬停效果、过渡动画
- **移动优先**：移动端菜单和自适应布局

## 项目结构

```
eagerise-dealer-app/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 图片、图标等资源
│   ├── components/     # React组件
│   │   └── ui/        # shadcn/ui组件
│   ├── App.jsx        # 主应用组件
│   ├── App.css        # 全局样式和主题
│   ├── main.jsx       # 应用入口
│   └── index.css      # 基础样式
├── index.html          # HTML模板
├── package.json        # 项目依赖
└── vite.config.js     # Vite配置
```

## 如何运行

### 开发环境

1. 安装依赖：
```bash
cd eagerise-dealer-app
pnpm install
```

2. 启动开发服务器：
```bash
pnpm run dev
```

3. 访问应用：
打开浏览器访问 `http://localhost:5173`

### 生产构建

1. 构建项目：
```bash
pnpm run build
```

2. 预览构建结果：
```bash
pnpm run preview
```

构建文件将生成在 `dist/` 目录中。

## 功能模块详解

### 首页模块
- Hero区域展示品牌口号和主要CTA按钮
- 4个统计卡片展示关键业务指标
- 特色产品网格展示热门产品
- 品牌介绍区域展示Aurora和Clif Designs

### 产品模块
- 产品卡片包含：品牌标签、评分、价格、特性标签
- 搜索框支持产品快速查找
- 询价和详情按钮提供用户交互
- 响应式网格布局适配不同屏幕

### 经销商模块
- 经销商定位器支持地理位置搜索
- 经销商卡片显示认证状态
- 联系按钮和地图查看功能
- 验证标识增强信任度

### 仪表板模块
- 三个标签页：客户线索、库存、分析
- 线索状态追踪（新建、已联系、已转化）
- 库存状态一览
- 性能指标可视化（进度条）

## 数据模型

### 产品（Products）
```javascript
{
  id: 1,
  name: "Aurora Premium Sound System",
  brand: "Aurora",
  category: "Complete System",
  price: 2499,
  image: "🔊",
  rating: 4.8,
  features: ["Premium Audio", "12-Channel", "Bluetooth 5.0"]
}
```

### 经销商（Dealers）
```javascript
{
  id: 1,
  name: "Sound Masters KL",
  city: "Kuala Lumpur",
  phone: "+60 3-1234 5678",
  verified: true
}
```

### 客户线索（Leads）
```javascript
{
  id: 1,
  customer: "Ahmad Ibrahim",
  product: "Aurora Premium Sound System",
  status: "new",
  date: "2025-10-10"
}
```

## 未来扩展功能

根据路线图，以下功能计划在未来阶段实现：

### Phase 3（月4-5）
- **应用内支付**：集成在线支付网关
- **忠诚度奖励系统**：客户积分和奖励机制
- **高级搜索**：多条件筛选和排序
- **实时通知**：线索更新推送

### Phase 4（月6+）
- **多语言支持**：英语、马来语、中文
- **移动应用**：原生iOS和Android应用
- **高级分析**：更详细的业务洞察
- **API集成**：与第三方系统对接

## 部署说明

### 静态托管部署
应用可以部署到任何静态网站托管服务：

- **Vercel**：推荐，零配置部署
- **Netlify**：简单易用
- **GitHub Pages**：免费托管
- **AWS S3 + CloudFront**：企业级方案

### 环境变量
目前应用使用静态数据，未来可配置：
- `VITE_API_URL`：后端API地址
- `VITE_MAPS_API_KEY`：地图服务密钥
- `VITE_ANALYTICS_ID`：分析工具ID

## 性能优化

- **代码分割**：Vite自动处理
- **懒加载**：按需加载组件
- **图片优化**：使用emoji减少图片加载
- **CSS优化**：Tailwind CSS自动清除未使用样式
- **缓存策略**：利用浏览器缓存

## 浏览器支持

- Chrome（推荐）
- Firefox
- Safari
- Edge
- 移动浏览器（iOS Safari、Chrome Mobile）

## 许可证

© 2025 Eagerise Sdn. Bhd. | Powered by Innovation

---

**开发团队**：Manus AI
**版本**：1.0.0
**最后更新**：2025年10月11日

