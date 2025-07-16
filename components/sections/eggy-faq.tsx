'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Gamepad2, Smartphone, Trophy } from 'lucide-react';

const EggyFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "Game Basics",
      icon: Gamepad2,
      color: "text-blue-400",
      questions: [
        {
          question: "What is the main objective in Eggy Car Unblocked?",
          answer: "Your goal is to drive as far as possible while keeping your egg safe on top of your car. The egg is fragile and will break if it falls off or bounces too hard, ending your run."
        },
        {
          question: "How do I control the car?",
          answer: "Use the arrow keys on your keyboard: Right arrow to accelerate forward, Left arrow to brake/reverse, and the car will tilt naturally with momentum. On mobile devices, use the on-screen touch controls."
        },
        {
          question: "What happens when my egg breaks?",
          answer: "When your egg breaks, the game ends and your final distance score is recorded. You can restart immediately to try beating your previous record."
        },
        {
          question: "Is there a way to save my progress?",
          answer: "Eggy Car is designed as a continuous run game. Your best distance is automatically saved locally in your browser, but each run starts fresh with a new egg."
        }
      ]
    },
    {
      title: "Gameplay Tips",
      icon: Trophy,
      color: "text-yellow-400",
      questions: [
        {
          question: "What's the best strategy for high scores?",
          answer: "Focus on smooth, controlled driving rather than speed. Gentle acceleration and careful braking will keep your egg stable. Learn to use momentum to your advantage on hills."
        },
        {
          question: "How do I handle steep hills?",
          answer: "For uphill climbs, maintain steady acceleration without overdoing it. For downhill sections, use light braking to control speed and prevent the egg from bouncing violently."
        },
        {
          question: "Are there any power-ups or special items?",
          answer: "Eggy Car focuses on pure physics-based gameplay without power-ups. The challenge comes from mastering the car's handling and egg physics in various terrain conditions."
        },
        {
          question: "What's considered a good distance score?",
          answer: "Beginners typically reach 100-300 meters. Intermediate players achieve 500-1000 meters. Expert players can consistently travel over 2000 meters. The world record holders reach incredible distances!"
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Smartphone,
      color: "text-green-400",
      questions: [
        {
          question: "Why is Eggy Car Unblocked so popular?",
          answer: "Eggy Car Unblocked combines simple controls with challenging physics-based gameplay. It's accessible anywhere, requires no downloads, and provides endless entertainment with its procedurally generated terrain."
        },
        {
          question: "Can I play Eggy Car Unblocked on mobile?",
          answer: "Yes! Eggy Car Unblocked is fully optimized for mobile devices. The touch controls are responsive and the game adapts to different screen sizes automatically."
        },
        {
          question: "The game won't load - what should I do?",
          answer: "First, check your internet connection. Then try refreshing the page, clearing your browser cache, or using a different browser. Make sure JavaScript is enabled in your browser settings."
        },
        {
          question: "Is there a full-screen mode?",
          answer: "Yes! Click the fullscreen button in the game controls to expand Eggy Car to your entire screen for an immersive experience."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Eggy Car Unblocked Games FAQ
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Everything you need to know about mastering Eggy Car Unblocked
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center mb-6">
                  <CategoryIcon className={`w-6 h-6 ${category.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = categoryIndex * 100 + questionIndex;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div 
                        key={questionIndex}
                        className="bg-slate-900/50 rounded-lg border border-slate-700/30 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/50 transition-colors duration-200"
                        >
                          <span className="text-white font-medium pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-4 pb-4">
                            <div className="pt-2 border-t border-slate-700/30">
                              <p className="text-gray-300 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              Still Need Help?
            </h4>
            <p className="text-gray-400 mb-4">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2 rounded-lg transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EggyFAQ; 