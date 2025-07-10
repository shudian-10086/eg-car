'use client';

import React, { useState } from 'react';
import { Play, Search, Menu, X } from 'lucide-react';

const GameNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GameHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#game-section" className="text-gray-300 hover:text-white transition-colors">
              Play Game
            </a>
            <a href="#games-grid" className="text-gray-300 hover:text-white transition-colors">
              More Games
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Leaderboard
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Community
            </a>
          </div>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-slate-800 rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-48"
              />
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700 py-4">
            <div className="space-y-2">
              <a href="#game-section" className="block py-2 text-gray-300 hover:text-white transition-colors">
                Play Game
              </a>
              <a href="#games-grid" className="block py-2 text-gray-300 hover:text-white transition-colors">
                More Games
              </a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">
                Leaderboard
              </a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">
                Community
              </a>
            </div>
            <div className="mt-4 flex items-center bg-slate-800 rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="bg-transparent text-sm text-white placeholder-gray-400 outline-none flex-1"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GameNavigation; 