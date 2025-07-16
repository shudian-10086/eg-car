import React from 'react';
import { Target, Zap, TrendingUp, Award, Lightbulb, Shield } from 'lucide-react';

const GameTips = () => {
  const tips = [
    {
      icon: Target,
      title: "Master the Balance",
      description: "Keep your car steady and avoid sudden movements. The key to success is maintaining perfect balance between speed and stability.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Smart Acceleration",
      description: "Use gentle acceleration on uphill sections and brake wisely on downhills. Sudden speed changes will make your egg bounce dangerously.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Momentum Control",
      description: "Build momentum gradually and use gravity to your advantage. Let the car flow naturally with the terrain contours.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Protect Your Cargo",
      description: "Your egg is fragile! Watch for bumps and jumps. Sometimes it's better to go slow than to risk breaking your precious cargo.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Score Multipliers",
      description: "Longer distances without stopping earn bonus points. Consistency is more rewarding than risky speed bursts.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Lightbulb,
      title: "Pro Strategy",
      description: "Study the track ahead and plan your moves. Anticipation is key - react to upcoming obstacles before they become problems.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="game-tips" className="py-16 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            🥚 Eggy Car Unblocked Mastery Guide
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Master these essential tips and become an Eggy Car Unblocked champion. Learn from the pros!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div 
                key={index}
                className="group bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tip.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {tip.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Advanced Tips Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-700/30">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            🏆 Advanced Techniques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-yellow-400 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Hill Climbing Mastery
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Approach hills with moderate speed to maintain traction
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Use short, controlled acceleration bursts on steep climbs
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Never brake while climbing - it causes dangerous backsliding
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-400 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Downhill Safety
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Use engine braking instead of hard stops
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Feather the brake to control speed without jolting the egg
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Position your car to land smoothly on flat sections
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Tips Banner */}
        <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
          <div className="flex items-center justify-center space-x-4 text-center">
            <div className="text-3xl">💡</div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-1">
                Quick Tip of the Day
              </h4>
              <p className="text-gray-300">
                Watch your egg's bounce pattern - it tells you if you're driving too aggressively!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameTips; 