#!/bin/bash

# pfinal-pass 项目快速设置脚本

echo "🚀 正在设置 pfinal-pass 项目..."

# 检查 Node.js 版本
if ! command -v node &> /dev/null; then
    echo "❌ 请先安装 Node.js (版本 >= 18)"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ 需要 Node.js 版本 >= 18，当前版本: $(node -v)"
    exit 1
fi

echo "✅ Node.js 版本检查通过: $(node -v)"

# 安装依赖
echo "📦 正在安装依赖..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ 依赖安装成功"
else
    echo "❌ 依赖安装失败"
    exit 1
fi

# 生成静态网站
echo "🔨 正在构建项目..."
npm run generate

if [ $? -eq 0 ]; then
    echo "✅ 项目构建成功"
else
    echo "❌ 项目构建失败"
    exit 1
fi

echo ""
echo "🎉 项目设置完成！"
echo ""
echo "📋 可用命令："
echo "  npm run dev      - 启动开发服务器"
echo "  npm run generate - 构建静态网站"
echo "  npm run preview  - 预览构建结果"
echo ""
echo "🌐 开发服务器将在 http://localhost:3000 启动"
echo "📁 构建文件位于 .output/public 目录"
echo ""
echo "🚀 运行 'npm run dev' 开始开发！"
