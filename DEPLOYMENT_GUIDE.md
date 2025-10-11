# Eagerise 经销商应用 - 部署指南

## 快速开始

本应用是一个基于React + Vite构建的现代化Web应用，可以部署到任何支持静态网站托管的平台。

## 本地开发

### 前置要求
- Node.js 18+ 或 Node.js 22+
- pnpm（推荐）或 npm

### 安装和运行

1. **安装依赖**
```bash
cd eagerise-dealer-app
pnpm install
```

2. **启动开发服务器**
```bash
pnpm run dev
```
应用将在 `http://localhost:5173` 运行

3. **构建生产版本**
```bash
pnpm run build
```
构建文件将生成在 `dist/` 目录

4. **预览生产构建**
```bash
pnpm run preview
```

## 部署选项

### 选项 1: Vercel（推荐）

Vercel提供零配置部署，最适合React应用。

**步骤：**

1. 安装Vercel CLI
```bash
npm i -g vercel
```

2. 在项目目录运行
```bash
cd eagerise-dealer-app
vercel
```

3. 按照提示完成部署

**或者通过GitHub：**
1. 将代码推送到GitHub仓库
2. 访问 [vercel.com](https://vercel.com)
3. 导入GitHub仓库
4. Vercel会自动检测Vite配置并部署

### 选项 2: Netlify

**步骤：**

1. 构建项目
```bash
pnpm run build
```

2. 安装Netlify CLI
```bash
npm install -g netlify-cli
```

3. 部署
```bash
netlify deploy --prod --dir=dist
```

**或者通过拖放：**
1. 访问 [netlify.com](https://netlify.com)
2. 将 `dist/` 文件夹拖放到部署区域

### 选项 3: GitHub Pages

**步骤：**

1. 在 `vite.config.js` 中添加base路径：
```javascript
export default defineConfig({
  base: '/eagerise-dealer-app/',
  // ... 其他配置
})
```

2. 构建项目
```bash
pnpm run build
```

3. 部署到gh-pages分支
```bash
cd dist
git init
git add -A
git commit -m 'Deploy'
git push -f git@github.com:username/eagerise-dealer-app.git main:gh-pages
```

4. 在GitHub仓库设置中启用GitHub Pages，选择gh-pages分支

### 选项 4: AWS S3 + CloudFront

**步骤：**

1. 构建项目
```bash
pnpm run build
```

2. 创建S3存储桶并配置静态网站托管

3. 上传dist目录内容到S3
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. 配置CloudFront分发以加速访问

5. 设置自定义域名（可选）

### 选项 5: 传统Web服务器

**Apache配置：**

1. 构建项目并将 `dist/` 目录内容复制到服务器

2. 创建 `.htaccess` 文件：
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx配置：**

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/eagerise-dealer-app;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 环境变量配置

目前应用使用静态数据。如需连接后端API，可在项目根目录创建 `.env` 文件：

```env
VITE_API_URL=https://api.eagerise.com
VITE_MAPS_API_KEY=your_maps_api_key
VITE_ANALYTICS_ID=your_analytics_id
```

在代码中使用：
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 性能优化建议

### 1. 启用Gzip/Brotli压缩
在服务器配置中启用压缩可显著减少传输大小。

**Nginx示例：**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### 2. 配置CDN
使用CDN加速静态资源访问，建议使用：
- Cloudflare
- AWS CloudFront
- Fastly

### 3. 启用HTTP/2
现代浏览器支持HTTP/2，可提升加载速度。

### 4. 图片优化
虽然当前使用emoji，但如果添加真实图片，建议：
- 使用WebP格式
- 实现懒加载
- 使用响应式图片

## 域名配置

### 自定义域名设置

1. **购买域名**（如 dealer.eagerise.com）

2. **配置DNS记录**
   - A记录：指向服务器IP
   - 或CNAME记录：指向托管平台域名

3. **配置SSL证书**
   - 使用Let's Encrypt免费证书
   - 或托管平台自动提供的SSL

## 监控和分析

### Google Analytics集成

1. 在 `index.html` 中添加：
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 错误监控

建议集成Sentry进行错误追踪：
```bash
pnpm add @sentry/react
```

## 持续集成/持续部署（CI/CD）

### GitHub Actions示例

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install pnpm
      run: npm install -g pnpm
    
    - name: Install dependencies
      run: pnpm install
    
    - name: Build
      run: pnpm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID}}
        vercel-project-id: ${{ secrets.PROJECT_ID}}
        vercel-args: '--prod'
        working-directory: ./
```

## 故障排查

### 常见问题

**问题1：白屏或404错误**
- 检查路由配置
- 确保服务器配置了SPA回退到index.html

**问题2：样式未加载**
- 检查base路径配置
- 确认CSS文件正确引入

**问题3：构建失败**
- 清除node_modules重新安装
- 检查Node.js版本兼容性

## 安全建议

1. **启用HTTPS**：强制使用SSL/TLS
2. **设置安全头**：
```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
```
3. **定期更新依赖**：运行 `pnpm update`
4. **环境变量保护**：不要将敏感信息提交到Git

## 备份和恢复

1. **代码备份**：使用Git版本控制
2. **数据库备份**：如集成后端，定期备份数据
3. **配置备份**：保存环境变量和配置文件

## 扩展性考虑

### 添加后端API

当需要连接真实后端时：

1. 创建API服务层
```javascript
// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`)
  return response.json()
}
```

2. 在组件中使用
```javascript
import { useEffect, useState } from 'react'
import { getProducts } from './services/api'

function Products() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts().then(setProducts)
  }, [])
  
  // ...
}
```

### 添加状态管理

对于复杂应用，可集成Redux或Zustand：
```bash
pnpm add zustand
```

## 支持和维护

- **技术支持**：info@eagerise.com
- **文档更新**：定期更新本指南
- **版本发布**：遵循语义化版本控制

---

**最后更新**：2025年10月11日
**维护团队**：Eagerise Development Team

