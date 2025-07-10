import React from 'react';
import { Play } from 'lucide-react';

const GameFooter = () => {
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">GameHub</span>
            </div>
            <p className="text-gray-400 text-sm">
              The ultimate destination for HTML5 gaming entertainment.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Games</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Racing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Puzzle</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Arcade</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leaderboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tournaments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 GameHub. All rights reserved. Built with passion for gamers worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default GameFooter; 