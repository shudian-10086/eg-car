import React from 'react';
import { statsData } from '@/lib/game-data';

const StatsSection = () => {
  return (
    <section className="py-16 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Eggy Car Unblocked Statistics
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Join millions of players worldwide who love Eggy Car Unblocked
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index}>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 