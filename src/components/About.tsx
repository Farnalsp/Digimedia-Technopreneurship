import React from 'react';
import { Sparkles, Users, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];
  const aboutRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* What is DigiMedia Reality */}
          <div 
            ref={aboutRef}
            className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out"
          >
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('aboutTitle')}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {t('aboutDescription')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AR Experience</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Teknologi AR canggih untuk pengalaman wisata yang immersive
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Premium Quality</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Konten berkualitas tinggi dengan standar internasional
                </p>
              </div>
            </div>
          </div>

          {/* Behind the Scenes */}
          <div 
            ref={teamRef}
            className="opacity-0 translate-x-[50px] transition-all duration-1000 ease-out"
          >
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('behindScenes')}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {t('teamDescription')}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Destinations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">100K+</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Users</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};