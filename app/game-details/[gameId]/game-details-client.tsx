'use client';

import React from 'react';
import { Play, Star, Users } from 'lucide-react';
import Image from 'next/image';
import GameNavigation from '@/components/layout/game-navigation';
import GameFooter from '@/components/layout/game-footer';
import { featuredGames, type Game } from '@/lib/game-data';

interface GameContent {
  introduction: string;
  guide: string;
  faq: string;
  embedPath: string;
}

interface GameDetailsClientProps {
  game: Game;
  content: GameContent;
}

export default function GameDetailsClient({ game, content }: GameDetailsClientProps) {
  // Get recommended games (exclude current game and get 4 random games)
  const getRecommendedGames = (): Game[] => {
    const otherGames = featuredGames.filter(g => g.id !== game.id);
    // Shuffle and get first 4 games
    const shuffled = otherGames.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const recommendedGames = getRecommendedGames();

  // Handle game launch
  const launchGame = (targetGame: Game) => {
    const gameSlug = targetGame.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    window.location.href = `/game-details/${gameSlug}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <GameNavigation />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Game iframe embed */}
        <div className="relative w-full bg-slate-800/50 border border-white/10 responsive-iframe-container">
          <iframe
            src={content.embedPath}
            className="responsive-iframe"
            sandbox="allow-scripts allow-same-origin"
            title={game.title}
          />
        </div>
        
        {/* Game Title and Rating */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <h1 className="text-3xl font-bold">{game.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{game.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{game.players} players</span>
            </div>
            <span className="px-2 py-1 bg-slate-700 rounded text-xs">{game.category}</span>
          </div>
        </div>

        {/* Game Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Game Introduction</h2>
          <p className="whitespace-pre-line text-gray-300">{content.introduction}</p>
        </section>

        {/* Gameplay Guide */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">How to Play</h2>
          <div className="whitespace-pre-line text-gray-300">{content.guide}</div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
          <div className="whitespace-pre-line text-gray-300">{content.faq}</div>
        </section>

        {/* Recommended Games */}
        <section className="mt-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="text-3xl">🎮</div>
            <h2 className="text-2xl font-semibold">More Games You Might Like</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedGames.map((recommendedGame) => (
              <div 
                key={recommendedGame.id} 
                className="bg-slate-800/50 rounded-xl p-4 hover:scale-105 transition-all duration-300 group backdrop-filter blur-10px border border-white/10 cursor-pointer"
                onClick={() => launchGame(recommendedGame)}
              >
                {/* Game Cover */}
                <div className={`w-full h-32 bg-gradient-to-br ${recommendedGame.gradient} rounded-lg mb-3 relative overflow-hidden`}>
                  <Image
                    src={recommendedGame.image}
                    alt={recommendedGame.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    onError={(e) => {
                      // If image fails to load, show placeholder
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="absolute inset-0 flex items-center justify-center text-4xl text-white">
                            🎮
                          </div>
                        `;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-white ml-1" />
                    </div>
                  </button>
                </div>

                {/* Game Info */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {recommendedGame.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {recommendedGame.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{recommendedGame.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{recommendedGame.players}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        </div>
      </main>

      {/* Footer */}
      <GameFooter />
    </div>
  );
}
