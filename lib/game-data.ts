// Game data type definitions
export interface Game {
  id: number;
  title: string;
  category: string;
  rating: number;
  players: string;
  image: string; // 图片路径，如 "/images/games/eggy-car.jpg"
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
    title: "Zombocalypse", 
    category: "Racing", 
    rating: 4.8, 
    players: "2.1M", 
    image: "/embed/zombocalypse/zombocalypse-2.webp", 
    gradient: "from-yellow-500 to-orange-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Zombocalypse is a bloody action game about the total zombie apocalypse"
  },
  { 
    id: 2, 
    title: "Run 3", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "/embed/run3/icon.jpeg", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Run 3 is a classic where you swerve through space in a race to the finish"
  },
  { 
    id: 3, 
    title: "Basket Random", 
    category: "Strategy", 
    rating: 4.9, 
    players: "3.2M", 
    image: "/embed/basketrandom/test.png", 
    gradient: "from-red-500 to-orange-500",
    gameUrl: "https://html5games.com/Game/space-wars",
    description: "Basket Random is a chaotic 2-player arcade sports game with unpredictable physics."
  },
  { 
    id: 4, 
    title: "Jetpack Joyride", 
    category: "Card", 
    rating: 4.7, 
    players: "1.5M", 
    image: "/embed/jetpackjoyride/logo.jpeg", 
    gradient: "from-purple-500 to-pink-500",
    gameUrl: "https://html5games.com/Game/card-master",
    description: "Jetpack Joyride is a fast-paced endless runner."
  },
  { 
    id: 5, 
    title: "Monkey Mart", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "/embed/monkeymart/bg_loading.png", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Monkey Mart is an interesting supermarket management simulation game."
  },
  { 
    id: 6, 
    title: "N-Gon", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "/embed/ngon/n-gon.png", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "n-gon is a solo project written in JavaScript, CSS, and HTML using the matter.js 2-D physics library."
  },
  { 
    id: 7, 
    title: "Pizza Tower", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "/embed/pizzatower/title-sheet0.png", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Pizza Tower is a unique game with a cartoon style and engaging platformer gameplay."
  },
  { 
    id: 8, 
    title: "Rooftop Snipers 2", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "/embed/rooftopsnipers2/icon.jpeg", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Rooftop Snipers 2 will take players into an addictive confrontation on the rooftops of the city."
  },
  { 
    id: 9, 
    title: "Stickman Hook", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "/embed/stickman-hook/icon.jpg", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Stickman Hook is a skill game where you play as a swinging stickman through hundreds of challenging levels."
  },
  { 
    id: 10, 
    title: "Stickman Golf", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "/embed/stickmangolf/gold.png", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Super Stickman Golf is no ordinary game.. it's actually an award winning physics puzzler!"
  },
  { 
    id: 11, 
    title: "Tiny Fishing", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "/embed/tinyfishing/thumb.png", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Tiny Fishing is a fun fishing game where you draw your line and hook as many fish as possible."
  },
  { 
    id: 12, 
    title: "Weavesilk", 
    category: "Puzzle", 
    rating: 4.6, 
    players: "1.8M", 
    image: "/embed/weavesilk/icon.jpeg", 
    gradient: "from-green-500 to-teal-500",
    gameUrl: "https://ubg98.github.io/EggyCar/",
    description: "Weavesilk--Generative Art is an online game that you can play in modern browsers for free. "
  }
];

// Statistics data
export const statsData = [
  { value: "5000+", label: "Games Available", color: "text-blue-400" },
  { value: "2M+", label: "Active Players", color: "text-purple-400" },
  { value: "50+", label: "Categories", color: "text-green-400" },
  { value: "24/7", label: "Online Support", color: "text-yellow-400" }
]; 