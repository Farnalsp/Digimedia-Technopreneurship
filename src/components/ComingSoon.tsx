import React from 'react';
import { Ticket, VolumeX, Bot, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ComingSoon: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];
  const comingSoonRef = useScrollAnimation();

  const upcomingFeatures = [
    {
      icon: Ticket,
      title: t('ticketBooking'),
      description: 'Pesan tiket wisata langsung melalui aplikasi',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
    },
    {
      icon: VolumeX,
      title: t('virtualTour'),
      description: 'Jelajahi destinasi dari rumah dengan VR 360°',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
    },
    {
      icon: Bot,
      title: t('aiGuide'),
      description: 'Panduan wisata AI yang personal dan interaktif',
      color: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={comingSoonRef}
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('comingSoon')}
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('comingSoonDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden opacity-0 translate-y-4"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`
              }}
            >
              {/* Blur overlay */}
              <div className="absolute inset-0 bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {t('comingSoon')}
                </div>
              </div>

              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};