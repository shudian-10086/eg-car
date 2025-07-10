'use client';

import React, { useState } from 'react';
import { Star, TrendingUp, Zap, Users, Play } from 'lucide-react';
import { featuredGames, type Game, type Category } from '@/lib/game-data';

const GamesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('featured');

  const categories: Category[] = [
    { id: 'featured', name: 'Featured', icon: Star },
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'action', name: 'Action', icon: Zap },
    { id: 'puzzle', name: 'Puzzle', icon: Users }
  ];

  // Launch other games
  const launchGame = (game: Game) => {
    const iframe = document.getElementById('main-game-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = game.gameUrl;
    }
    // Scroll to game section
    const gameSection = document.getElementById('game-section');
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="games-grid" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">More Amazing Games</h2>
          <p className="text-gray-400 text-lg">Discover more exciting HTML5 games to play</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <div key={game.id} className="bg-slate-800/50 rounded-xl p-6 hover:scale-105 transition-all duration-300 group backdrop-filter blur-10px border border-white/10">
              {/* Game Cover */}
              <div 
                className={`w-full h-48 bg-gradient-to-br ${game.gradient} rounded-lg mb-4 flex items-center justify-center text-6xl relative overflow-hidden cursor-pointer`}
                onClick={() => launchGame(game)}
              >
                <span className="relative z-10">{game.image}</span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </button>
              </div>

              {/* Game Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                <p className="text-sm text-gray-400">{game.category}</p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{game.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{game.players}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-2">{game.description}</p>

                <button 
                  onClick={() => launchGame(game)}
                  className="w-full mt-4 bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-500 hover:to-purple-500 
                           py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesGrid; 