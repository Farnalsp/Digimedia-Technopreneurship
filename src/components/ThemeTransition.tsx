import React from 'react';

interface ThemeTransitionProps {
  isTransitioning: boolean;
}

export const ThemeTransition: React.FC<ThemeTransitionProps> = ({ isTransitioning }) => {
  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div className="absolute inset-0 bg-primary-600 transform transition-transform duration-300 ease-in-out origin-left scale-x-100 animate-curtain" />
    </div>
  );
};