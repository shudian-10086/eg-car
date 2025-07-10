// Game data type definitions
export interface Game {
  id: number;
  title: string;
  category: string;
  rating: number;
  players: string;
  image: string;
  gradient: string;
  gameUrl: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: any; // Lucide icon component
}

// Game data
export const featuredGames: Game[] = [
  { 
    id: 1, 
    title: "Eggy Car", 
    category: "Racing", 
    rating: 4.8, 
    players: "2.1M", 
    image: "🥚", 
    gradient: "from-yellow-500 to-orange-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Drive carefully with your precious egg cargo!"
  },
  { 
    id: 2, 
    title: "Mind Puzzle", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "🧩", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://html5games.com/Game/mind-puzzle",
    description: "Challenge your brain with complex puzzles"
  },
  { 
    id: 3, 
    title: "Space Wars", 
    category: "Strategy", 
    rating: 4.9, 
    players: "3.2M", 
    image: "🚀", 
    gradient: "from-red-500 to-orange-500",
    gameUrl: "https://html5games.com/Game/space-wars",
    description: "Epic space battles and strategic gameplay"
  },
  { 
    id: 4, 
    title: "Card Master", 
    category: "Card", 
    rating: 4.7, 
    players: "1.5M", 
    image: "🃏", 
    gradient: "from-purple-500 to-pink-500",
    gameUrl: "https://html5games.com/Game/card-master",
    description: "Master the art of card strategy"
  }
];

// Statistics data
export const statsData = [
  { value: "5000+", label: "Games Available", color: "text-blue-400" },
  { value: "2M+", label: "Active Players", color: "text-purple-400" },
  { value: "50+", label: "Categories", color: "text-green-400" },
  { value: "24/7", label: "Online Support", color: "text-yellow-400" }
]; 