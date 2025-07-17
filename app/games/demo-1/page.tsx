'use client';

import React, { useState } from 'react';
import { ArrowLeft, Maximize2, RotateCcw, X } from 'lucide-react';
import Link from 'next/link';

export default function Demo1Game() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const reloadGame = () => {
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <>
      {/* 全屏模式 */}
      {isFullscreen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex flex-col">
          <div className="bg-black/90 p-4 flex justify-between items-center flex-shrink-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-lg">
                  🎮
                </div>
                <span className="text-white font-semibold">Demo Game 1</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={reloadGame}
                className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                title="重新加载游戏"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                title="退出全屏"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full h-full">
            <iframe
              id="game-iframe-fullscreen"
              src="/games/demo-1/index.html"
              className="w-full h-full border-none"
              allowFullScreen
              title="Demo Game 1"
            />
          </div>
        </div>
      )}

      {/* 常规页面 */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* 导航栏 */}
        <nav className="bg-black/30 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                  <span>返回主页</span>
                </Link>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-lg">
                    🎮
                  </div>
                  <span className="font-semibold">Demo Game 1</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* 主要内容 */}
        <main className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 游戏信息 */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                🎮 Demo Game 1
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                这是一个示例游戏，展示如何将静态游戏文件集成到项目中。您可以将您的游戏文件放在相同的结构中。
              </p>
            </div>

            {/* 游戏控制 */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <button
                  onClick={reloadGame}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>重新加载</span>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors text-sm"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>全屏模式</span>
                </button>
              </div>
              
              <div className="text-sm text-gray-400">
                路径：/games/demo-1/ • 点击全屏获得最佳体验
              </div>
            </div>

            {/* 游戏iframe */}
            <div className="relative w-full bg-slate-800/50 rounded-xl border border-white/10 overflow-hidden">
              <div className="relative w-full aspect-video">
                <iframe
                  id="game-iframe"
                  src="/games/demo-1/index.html"
                  className="w-full h-full border-none"
                  allowFullScreen
                  title="Demo Game 1"
                />
              </div>
            </div>

            {/* 游戏说明 */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/30 rounded-lg p-6">
                <div className="text-2xl mb-3">📁</div>
                <h3 className="font-semibold mb-2">文件结构</h3>
                <p className="text-sm text-gray-400">
                  游戏文件位于 <code className="bg-slate-700 px-2 py-1 rounded">public/games/demo-1/</code> 目录中
                </p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-6">
                <div className="text-2xl mb-3">🌐</div>
                <h3 className="font-semibold mb-2">访问路径</h3>
                <p className="text-sm text-gray-400">
                  通过 <code className="bg-slate-700 px-2 py-1 rounded">/games/demo-1/</code> 路径访问游戏
                </p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-6">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">集成方式</h3>
                <p className="text-sm text-gray-400">
                  使用iframe嵌入，支持全屏模式和重新加载功能
                </p>
              </div>
            </div>

            {/* 技术信息 */}
            <div className="mt-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-xl font-bold mb-4 text-white">💻 技术实现</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">静态文件部署</h4>
                  <ul className="space-y-1 text-gray-400">
                    <li>• 文件放在 public/games/ 目录</li>
                    <li>• Next.js 自动处理静态文件服务</li>
                    <li>• 支持所有静态资源（HTML、CSS、JS、图片等）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">功能特性</h4>
                  <ul className="space-y-1 text-gray-400">
                    <li>• 响应式设计，适配所有设备</li>
                    <li>• 全屏模式支持</li>
                    <li>• 游戏重新加载功能</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 