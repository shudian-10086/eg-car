import React from 'react';
import { Play } from 'lucide-react';
import Link from 'next/link';

const GameFooter = () => {
  return (
    <footer className="py-12 bg-slate-900 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden md:block text-gray-600">|</span>
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Eggy Car Unblocked. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default GameFooter; 