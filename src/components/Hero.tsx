import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];
  const heroRef = useScrollAnimation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d6/a1/76/pemandangan-pulau2-kecil.jpg?w=800&h=-1&s=1"
          alt="Pantai Pahawang"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div 
        ref={heroRef}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t('heroTitle')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
            {t('exploreNow')}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center justify-center group">
            <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};