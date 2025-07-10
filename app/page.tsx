'use client';

import GameNavigation from '@/components/layout/game-navigation';
import GamePlayer from '@/components/sections/game-player';
import GameFeatures from '@/components/sections/game-features';
import GameTips from '@/components/sections/game-tips';
import ControlsGuide from '@/components/sections/controls-guide';
import EggyFAQ from '@/components/sections/eggy-faq';
import GamesGrid from '@/components/sections/games-grid';
import StatsSection from '@/components/sections/stats-section';
import GameFooter from '@/components/layout/game-footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <GameNavigation />
      <main>
        <GamePlayer />
        <GameFeatures />
        <GameTips />
        <ControlsGuide />
        <EggyFAQ />
        <GamesGrid />
        <StatsSection />
      </main>
      <GameFooter />
    </div>
  );
}