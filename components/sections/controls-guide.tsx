import React from 'react';
import { Keyboard, Smartphone, ArrowRight, ArrowLeft, RotateCcw, Settings } from 'lucide-react';

const ControlsGuide = () => {
  const keyboardControls = [
    {
      key: "→",
      icon: ArrowRight,
      action: "Accelerate Forward",
      description: "Press and hold to move forward and gain speed",
      tip: "Use gentle, controlled presses for better egg stability"
    },
    {
      key: "←", 
      icon: ArrowLeft,
      action: "Brake / Reverse",
      description: "Slow down or move backward",
      tip: "Light tapping is better than holding for smooth control"
    },
    {
      key: "R",
      icon: RotateCcw,
      action: "Quick Restart",
      description: "Instantly restart the game after a crash",
      tip: "Perfect for rapid retry sessions to improve your score"
    }
  ];

  const mobileControls = [
    {
      icon: "👆",
      action: "Touch Right Side",
      description: "Tap and hold the right side of the screen to accelerate forward",
      tip: "Use light pressure for fine control"
    },
    {
      icon: "👈",
      action: "Touch Left Side", 
      description: "Tap the left side of the screen to brake or reverse",
      tip: "Quick taps work better than long holds"
    },
    {
      icon: "🔄",
      action: "Restart Button",
      description: "Tap the restart button to try again after crashing",
      tip: "Located in the top-right corner during gameplay"
    }
  ];

  const advancedTechniques = [
    {
      title: "Feathering",
      description: "Rapidly tap the controls instead of holding them for micro-adjustments",
      difficulty: "Intermediate",
      color: "text-yellow-400"
    },
    {
      title: "Momentum Conservation",
      description: "Release acceleration before hills to use gravity naturally",
      difficulty: "Advanced", 
      color: "text-orange-400"
    },
    {
      title: "Predictive Braking",
      description: "Start braking before obstacles, not when you reach them",
      difficulty: "Expert",
      color: "text-red-400"
    }
  ];

  return (
    <section id="controls-guide" className="py-16 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Eggy Car Unblocked Controls
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Learn the essential controls and advanced techniques to become an Eggy Car Unblocked champion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Keyboard Controls */}
          <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-center mb-6">
              <Keyboard className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Desktop Controls</h3>
            </div>

            <div className="space-y-4">
              {keyboardControls.map((control, index) => {
                const Icon = control.icon;
                return (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{control.key}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{control.action}</h4>
                        <p className="text-gray-400 text-sm">{control.description}</p>
                      </div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-blue-300 text-sm">
                        💡 <strong>Pro Tip:</strong> {control.tip}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-center mb-6">
              <Smartphone className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Mobile Controls</h3>
            </div>

            <div className="space-y-4">
              {mobileControls.map((control, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">{control.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{control.action}</h4>
                      <p className="text-gray-400 text-sm">{control.description}</p>
                    </div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <p className="text-green-300 text-sm">
                      📱 <strong>Mobile Tip:</strong> {control.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Techniques */}
        <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-700/30 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🏆 Advanced Control Techniques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advancedTechniques.map((technique, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 h-full">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {technique.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {technique.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${technique.color} bg-current bg-opacity-10`}>
                    {technique.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Control Settings */}
        <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
          <div className="flex items-center mb-6">
            <Settings className="w-6 h-6 text-purple-400 mr-3" />
            <h3 className="text-xl font-bold text-white">Control Sensitivity Tips</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-400">For Beginners</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  Use short, gentle taps instead of holding buttons
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  Focus on smooth acceleration rather than maximum speed
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">•</span>
                  Practice stopping gently without sudden jerks
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-400">For Experts</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  Master the rhythm of acceleration pulses
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  Learn to predict and pre-adjust for terrain changes
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2 mt-1">•</span>
                  Use micro-adjustments to maintain perfect egg balance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlsGuide; 