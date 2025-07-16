'use client';

import React, { useState, useEffect } from 'react';
import { Play, Search, Menu, X } from 'lucide-react';

const GameNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('game-section');

  const navigationItems = [
    { href: '#game-section', label: 'Play Game', id: 'game-section' },
    { href: '#game-features', label: 'Features', id: 'game-features' },
    { href: '#game-tips', label: 'Tips & Tricks', id: 'game-tips' },
    { href: '#controls-guide', label: 'Controls', id: 'controls-guide' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
    {/* href: '#games-grid', label: 'More Games', id: 'games-grid' */}
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed w-full top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Eggy Car Unblocked
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-white relative py-2 px-3 rounded-lg ${
                  activeSection === item.id
                    ? 'text-white bg-slate-800/50'
                    : 'text-gray-300 hover:bg-slate-800/30'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full translate-y-1"></div>
                )}
              </button>
            ))}
          </div>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-slate-800 rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-48"
              />
            </div>
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-700 py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-white bg-slate-800/50'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center bg-slate-800 rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="bg-transparent text-sm text-white placeholder-gray-400 outline-none flex-1"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GameNavigation; 