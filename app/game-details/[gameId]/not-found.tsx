import Link from 'next/link';
import GameNavigation from '@/components/layout/game-navigation';
import GameFooter from '@/components/layout/game-footer';

export default function GameNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <GameNavigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-8xl mb-8">🎮</div>
          <h1 className="text-4xl font-bold text-red-400 mb-4">Game Not Found</h1>
          <p className="text-xl text-gray-400 mb-8">
            Sorry, the game you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </Link>
            <p className="text-sm text-gray-500">
              Browse our collection of free unblocked games
            </p>
          </div>
        </div>
      </main>
      <GameFooter />
    </div>
  );
}
