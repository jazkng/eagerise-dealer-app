import { cpSync, mkdirSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js', 'dealers.js', 'products.js', 'assets']) {
  cpSync(file, `dist/${file}`, { recursive: true });
}
console.log('Built Excedio static site in dist/');
