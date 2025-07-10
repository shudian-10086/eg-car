'use client';

import React, { useState } from 'react';
import { Star, Users, Gamepad2, RotateCcw, Maximize2, X } from 'lucide-react';

const GamePlayer = () => {
  const [isGameFullscreen, setIsGameFullscreen] = useState(false);

  // Reload game
  const reloadGame = () => {
    const iframe = document.getElementById('main-game-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    setIsGameFullscreen(!isGameFullscreen);
  };

  return (
    <>
      {/* Fullscreen Game Overlay */}
      {isGameFullscreen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex flex-col">
          <div className="bg-black/90 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-lg">
                  🥚
                </div>
                <span className="text-white font-semibold">Eggy Car</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={reloadGame}
                className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                title="Reload Game"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-white"
                title="Exit Fullscreen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <iframe
            src="https://ubg98.github.io/EggyCar/"
            className="flex-1 border-none"
            allowFullScreen
            title="Eggy Car Game"
          />
        </div>
      )}

      {/* Game Section */}
      <section id="game-section" className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Game Title and Info */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-3xl">
                🥚
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Eggy Car
                </h1>
                <p className="text-gray-400 text-lg">Drive carefully with your precious egg cargo!</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-gray-300">4.8</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">2.1M players</span>
              </div>
              <div className="flex items-center space-x-1">
                <Gamepad2 className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Racing</span>
              </div>
            </div>
          </div>

          {/* Game Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={reloadGame}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Reload</span>
              </button>
              <button
                onClick={toggleFullscreen}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
            
            <div className="text-sm text-gray-400">
              Use arrow keys to drive • Keep the egg safe!
            </div>
          </div>

          {/* Game iframe */}
          <div className="w-full h-[70vh] bg-slate-800/50 rounded-xl p-4 backdrop-filter blur-10px border border-white/10">
            <iframe
              id="main-game-iframe"
              src="https://ubg98.github.io/EggyCar/"
              className="w-full h-full border-none rounded-xl bg-black"
              allowFullScreen
              title="Eggy Car Game"
            />
          </div>

          {/* Game Instructions */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🏎️</div>
              <h3 className="font-semibold mb-1">Drive Smooth</h3>
              <p className="text-sm text-gray-400">Use arrow keys to control your car</p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🥚</div>
              <h3 className="font-semibold mb-1">Protect Egg</h3>
              <p className="text-sm text-gray-400">Don't let the egg fall and break</p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-semibold mb-1">High Score</h3>
              <p className="text-sm text-gray-400">Go as far as possible to win</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamePlayer; 