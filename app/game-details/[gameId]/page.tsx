'use client'; // Client Component
import { useParams } from 'next/navigation';
import { Play, Star, Users } from 'lucide-react';
import Image from 'next/image';
import GameNavigation from '@/components/layout/game-navigation';
import GameFooter from '@/components/layout/game-footer';
import { featuredGames, type Game } from '@/lib/game-data';

// Game-specific content data
const gameContent = {
  'rooftop-snipers-2': {
    introduction: `"Rooftop Snipers 2" is a hilarious two-player fighting game developed by Joonas "Regalis" Rikkonen. Players must knock their opponents off the rooftop using sniper rifles, with physics-driven action that makes the game incredibly fun. Release Date: 2021 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Player 1: WASD to move, Spacebar to shoot
- Player 2: Arrow keys to move, Enter to shoot

### Tips & Tricks
1. Use recoil to jump to higher positions.
2. Predict your opponent's movement trajectory when shooting.
3. Bullets can bounce off map edges - use this to your advantage.`,
    faq: `### Q: What platforms does the game support?
A: Supports browsers, PC, and mobile devices (via web access).

### Q: How do I start local multiplayer?
A: Connect two keyboards or controllers and select "Local Versus" mode.

### Q: Does the game have single-player mode?
A: Yes, you can challenge AI opponents in single-player mode.`,
    embedPath: '/embed/rooftopsnipers2/index.html'
  },
  'zombocalypse': {
    introduction: `"Zombocalypse" is an intense action-packed zombie survival game where you fight against hordes of undead creatures. Armed with various weapons, you must survive wave after wave of zombie attacks in this thrilling apocalypse scenario. Release Date: 2020 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Arrow keys or WASD to move
- Mouse to aim and shoot
- Spacebar to reload
- Number keys to switch weapons

### Tips & Tricks
1. Keep moving to avoid being surrounded by zombies.
2. Aim for headshots to deal maximum damage.
3. Manage your ammunition carefully.
4. Use the environment to your advantage.`,
    faq: `### Q: How many weapons are available?
A: The game features multiple weapons including pistols, shotguns, and assault rifles.

### Q: Is there a survival mode?
A: Yes, survive as long as possible against endless zombie waves.

### Q: Can I play with friends?
A: Currently, this is a single-player experience focused on survival.`,
    embedPath: '/embed/zombocalypse/index.html'
  },
  'run-3': {
    introduction: `"Run 3" is an endless running game set in space where you navigate through a series of tunnels. With its unique gravity mechanics and challenging obstacles, this game will test your reflexes and spatial awareness as you run, jump, and even run on walls! Release Date: 2014 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Arrow keys or WASD to move
- Spacebar to jump
- Use walls and ceiling to change gravity direction

### Tips & Tricks
1. Use the walls to change your running direction.
2. Plan your jumps carefully to avoid falling into space.
3. Collect power-ups to help you progress.
4. Master the gravity mechanics for advanced levels.`,
    faq: `### Q: How many levels are there?
A: Run 3 features hundreds of challenging levels with increasing difficulty.

### Q: Are there different characters?
A: Yes, you can unlock different characters with unique abilities.

### Q: What happens if I fall off the track?
A: You'll restart from the beginning of the current level.`,
    embedPath: '/embed/run3/index.html'
  },
  'basket-random': {
    introduction: `"Basket Random" is a fun and chaotic basketball game featuring unpredictable physics and random elements. Each match brings new surprises with changing courts, balls, and player abilities. Perfect for quick matches with friends or solo play! Release Date: 2021 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Player 1: W key to jump/shoot
- Player 2: Up arrow key to jump/shoot
- Move automatically based on physics

### Tips & Tricks
1. Time your jumps perfectly for better shots.
2. Adapt to changing court conditions.
3. Use the random elements to your advantage.
4. Practice timing for different ball types.`,
    faq: `### Q: How many players can play?
A: Basket Random supports 1-2 players in local multiplayer.

### Q: Do the courts change during gameplay?
A: Yes, courts and conditions change randomly during matches.

### Q: What makes each game different?
A: Random physics, different balls, and changing environments keep each game unique.`,
    embedPath: '/embed/basketrandom/index.html'
  },
  'jetpack-joyride': {
    introduction: `"Jetpack Joyride" is an endless runner game where you play as Barry Steakfries, who breaks into a secret laboratory and steals an experimental jetpack. Fly through the lab, avoid obstacles, collect coins, and see how far you can go! Release Date: 2011 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Click or hold spacebar to fly up
- Release to fall down
- Collect coins and power-ups
- Avoid lasers, missiles, and other obstacles

### Tips & Tricks
1. Master the jetpack's momentum and timing.
2. Collect coins to unlock new jetpacks and outfits.
3. Use vehicles when they appear for protection.
4. Watch for warning signs before obstacles appear.`,
    faq: `### Q: How do I get a high score?
A: Survive longer, collect more coins, and complete missions.

### Q: Are there different jetpacks?
A: Yes, you can unlock various jetpacks with different designs.

### Q: What are the vehicles for?
A: Vehicles provide temporary protection and unique abilities.`,
    embedPath: '/embed/jetpackjoyride/index.html'
  },
  'monkey-mart': {
    introduction: `"Monkey Mart" is a delightful simulation game where you manage a supermarket run by monkeys. Plant fruits, stock shelves, and serve customers in this charming business management game. Build your monkey empire one banana at a time! Release Date: 2022 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Arrow keys or WASD to move
- Spacebar to interact/pick up items
- Mouse to navigate menus
- Manage inventory and serve customers

### Tips & Tricks
1. Keep shelves stocked to satisfy customers.
2. Upgrade your equipment for better efficiency.
3. Plant and harvest fruits to maintain supply.
4. Expand your store as you earn more money.`,
    faq: `### Q: How do I expand my store?
A: Earn money by serving customers and use it to buy new sections.

### Q: Can I automate tasks?
A: Yes, you can hire monkey assistants to help with various tasks.

### Q: What products can I sell?
A: Fruits, vegetables, and other grocery items that you can grow or purchase.`,
    embedPath: '/embed/monkeymart/index.html'
  },
  'n-gon': {
    introduction: `"N-Gon" is a unique physics-based puzzle platformer where you control a shape-shifting polygon. Navigate through challenging levels using matter.js physics engine, solving puzzles and overcoming obstacles with your geometric abilities. Release Date: 2020 | Platform: Web, PC`,
    guide: `### Controls
- Arrow keys or WASD to move
- Mouse to interact with objects
- Spacebar to jump
- Use physics to solve puzzles

### Tips & Tricks
1. Experiment with different shapes and movements.
2. Use momentum to reach higher platforms.
3. Study the physics interactions carefully.
4. Look for creative solutions to complex puzzles.`,
    faq: `### Q: What makes this game unique?
A: The game uses advanced 2D physics and shape-shifting mechanics.

### Q: How many levels are there?
A: The game features dozens of challenging physics-based levels.

### Q: Is it suitable for all ages?
A: Yes, it's a family-friendly puzzle game that challenges spatial thinking.`,
    embedPath: '/embed/ngon/index.html'
  },
  'pizza-tower': {
    introduction: `"Pizza Tower" is a fast-paced 2D platformer inspired by the Wario Land series. Play as Peppino Spaghetti, a pizza chef on a mission to save his restaurant from destruction. With unique cartoon-style graphics and frenetic gameplay, this game offers an unforgettable experience! Release Date: 2023 | Platform: Web, PC`,
    guide: `### Controls
- Arrow keys or WASD to move
- Spacebar to jump
- Z or X for actions
- Run and build momentum for special moves

### Tips & Tricks
1. Build up speed to break through walls and enemies.
2. Use Peppino's transformation abilities strategically.
3. Explore levels thoroughly to find secrets.
4. Master the combo system for higher scores.`,
    faq: `### Q: What's the goal of the game?
A: Save Peppino's pizza restaurant from the evil Pizza Tower.

### Q: Are there boss battles?
A: Yes, face off against unique bosses with different attack patterns.

### Q: Can I replay levels?
A: Yes, replay levels to improve your score and find hidden secrets.`,
    embedPath: '/embed/pizzatower/index.html'
  },
  'stickman-hook': {
    introduction: `"Stickman Hook" is an addictive skill game where you swing through hundreds of challenging levels. Control a stickman as he swings from hook to hook, performing acrobatic stunts and reaching the finish line. Master the physics-based movement for the ultimate swinging experience! Release Date: 2019 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Click and hold to grab hooks
- Release to let go and swing
- Time your grabs and releases perfectly
- Use momentum to reach distant hooks

### Tips & Tricks
1. Build momentum by swinging in larger arcs.
2. Time your releases at the peak of your swing.
3. Look ahead to plan your next hook grab.
4. Use walls and obstacles to change direction.`,
    faq: `### Q: How many levels are there?
A: Stickman Hook features hundreds of increasingly challenging levels.

### Q: Can I customize my character?
A: Yes, unlock different stickman skins as you progress.

### Q: What happens if I miss a hook?
A: You'll fall and restart from the beginning of the level.`,
    embedPath: '/embed/stickman-hook/index.html'
  },
  'stickman-golf': {
    introduction: `"Super Stickman Golf" is an award-winning physics puzzle game that combines golf with creative level design. Navigate through impossible courses with portals, sticky walls, and other unique mechanics. This isn't your ordinary golf game! Release Date: 2011 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Mouse to aim and set power
- Click to shoot
- Use physics and course elements strategically
- Plan your shots carefully

### Tips & Tricks
1. Study each hole's unique mechanics before shooting.
2. Use sticky walls and portals to your advantage.
3. Consider ball physics and bouncing angles.
4. Experiment with different power levels.`,
    faq: `### Q: What makes this golf game special?
A: Unique physics puzzles with portals, sticky surfaces, and creative obstacles.

### Q: How many courses are available?
A: Multiple themed courses with dozens of challenging holes.

### Q: Is there a multiplayer mode?
A: The game focuses on single-player puzzle-solving experiences.`,
    embedPath: '/embed/stickmangolf/index.html'
  },
  'tiny-fishing': {
    introduction: `"Tiny Fishing" is a relaxing fishing game where you cast your line into the depths of the ocean. Catch different types of fish, upgrade your equipment, and see how deep you can go. Perfect for a calming gaming session! Release Date: 2021 | Platform: Web, PC, Mobile`,
    guide: `### Controls
- Click and drag to cast your line
- Move mouse to control the hook
- Catch fish by timing your movements
- Upgrade your gear with earned coins

### Tips & Tricks
1. Time your casts to catch multiple fish.
2. Upgrade your line length to reach deeper waters.
3. Different fish are worth different amounts.
4. Be patient and strategic with your movements.`,
    faq: `### Q: How do I catch bigger fish?
A: Upgrade your equipment and fish in deeper waters.

### Q: What can I do with the coins I earn?
A: Purchase upgrades for your fishing line, hook, and other equipment.

### Q: Are there rare fish to discover?
A: Yes, explore deeper waters to find rare and valuable fish species.`,
    embedPath: '/embed/tinyfishing/index.html'
  },
  'weavesilk': {
    introduction: `"Weavesilk" is a unique generative art game that lets you create beautiful, flowing artwork with simple mouse movements. Watch as your gestures transform into stunning silk-like patterns and colors. It's both a game and an art creation tool! Release Date: 2020 | Platform: Web, PC`,
    guide: `### Controls
- Move mouse to create flowing patterns
- Click and drag for different effects
- Experiment with different movements
- Save your artistic creations

### Tips & Tricks
1. Try different mouse movement speeds and patterns.
2. Experiment with circular and linear motions.
3. Layer multiple patterns for complex designs.
4. Use the full canvas space for larger artworks.`,
    faq: `### Q: Can I save my artwork?
A: Yes, you can save your creations as image files.

### Q: Is there a specific goal?
A: The goal is creative expression - there's no right or wrong way to play.

### Q: What makes the patterns appear?
A: Advanced algorithms translate your mouse movements into flowing silk-like visuals.`,
    embedPath: '/embed/weavesilk/index.html'
  }
};

export default function GameDetailsPage() {
  const params = useParams();
  const gameId = params.gameId as string;

  // Find the game data
  const currentGame = featuredGames.find(game => 
    game.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === gameId
  );

  // Get game content or use default
  const content = gameContent[gameId as keyof typeof gameContent] || {
    introduction: `Welcome to ${currentGame?.title || 'this amazing game'}! Experience exciting gameplay with stunning graphics and engaging mechanics.`,
    guide: `### How to Play
- Use standard controls to navigate
- Follow on-screen instructions
- Have fun and enjoy the game!`,
    faq: `### Q: How do I start playing?
A: Simply click the play button and follow the instructions.

### Q: Is this game free?
A: Yes, all our games are completely free to play.`,
    embedPath: currentGame?.gameUrl.startsWith('/embed/') ? currentGame.gameUrl : '/embed/default/index.html'
  };

  // If game not found, show error
  if (!currentGame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <GameNavigation />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-3xl font-bold text-red-400">Game Not Found</h1>
            <p className="text-gray-400">The requested game could not be found.</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </button>
          </div>
        </main>
        <GameFooter />
      </div>
    );
  }

  // Get recommended games (exclude current game and get 4 random games)
  const getRecommendedGames = (): Game[] => {
    const otherGames = featuredGames.filter(game => game.id !== currentGame.id);
    // Shuffle and get first 4 games
    const shuffled = otherGames.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const recommendedGames = getRecommendedGames();

  // Handle game launch
  const launchGame = (game: Game) => {
    const gameSlug = game.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
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
            title={currentGame.title}
          />
        </div>
        
        {/* Game Title and Rating */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <h1 className="text-3xl font-bold">{currentGame.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{currentGame.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{currentGame.players} players</span>
            </div>
            <span className="px-2 py-1 bg-slate-700 rounded text-xs">{currentGame.category}</span>
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
            {recommendedGames.map((game) => (
              <div 
                key={game.id} 
                className="bg-slate-800/50 rounded-xl p-4 hover:scale-105 transition-all duration-300 group backdrop-filter blur-10px border border-white/10 cursor-pointer"
                onClick={() => launchGame(game)}
              >
                {/* Game Cover */}
                <div className={`w-full h-32 bg-gradient-to-br ${game.gradient} rounded-lg mb-3 relative overflow-hidden`}>
                  <Image
                    src={game.image}
                    alt={game.title}
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
                    {game.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {game.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{game.players}</span>
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