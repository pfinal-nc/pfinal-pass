#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 检查 pfinal-pass 项目结构...\n');

// 检查必要的文件
const requiredFiles = [
  'package.json',
  'nuxt.config.ts',
  'app.vue',
  'assets/css/main.css',
  'components/PasswordGenerator.vue',
  'components/AppNavbar.vue',
  'components/AppFooter.vue',
  'layouts/default.vue',
  'pages/index.vue',
  'pages/about.vue',
  'pages/privacy.vue',
  '.github/workflows/deploy.yml',
  'README.md'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - 文件不存在`);
    allFilesExist = false;
  }
});

console.log('\n📋 项目结构检查结果:');
if (allFilesExist) {
  console.log('🎉 所有必要文件都已创建！');
  console.log('\n🚀 下一步操作:');
  console.log('1. 运行 npm install 安装依赖');
  console.log('2. 运行 npm run dev 启动开发服务器');
  console.log('3. 访问 http://localhost:3000 查看网站');
} else {
  console.log('⚠️  部分文件缺失，请检查项目结构');
}

console.log('\n📁 项目目录结构:');
function printTree(dir, prefix = '') {
  const items = fs.readdirSync(dir).filter(item => !item.startsWith('.'));
  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const currentPrefix = isLast ? '└── ' : '├── ';
    const nextPrefix = isLast ? '    ' : '│   ';
    
    console.log(`${prefix}${currentPrefix}${item}`);
    
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory() && !item.includes('node_modules')) {
      printTree(itemPath, prefix + nextPrefix);
    }
  });
}

try {
  printTree('.');
} catch (error) {
  console.log('无法显示目录树');
}
