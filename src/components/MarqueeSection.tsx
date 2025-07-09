import React from 'react';

export const MarqueeSection: React.FC = () => {
  return (
    <div className="bg-primary-600 py-3 overflow-hidden border-y border-primary-500">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-white text-sm font-medium">
          🚀 Launching soon: Virtual Reality Tours • AI-Powered Recommendations • Real-time Translation • 
          Offline AR Experience • Social Sharing Features • Personalized Itineraries • 
          🚀 Launching soon: Virtual Reality Tours • AI-Powered Recommendations • Real-time Translation • 
          Offline AR Experience • Social Sharing Features • Personalized Itineraries •
        </span>
      </div>
    </div>
  );
};