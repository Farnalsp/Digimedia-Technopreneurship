import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useGeolocation } from '../hooks/useGeolocation';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { nearbyPlaces } from '../data/destinations';

export const NearbyPlaces: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];
  const { getCurrentPosition, loading, error } = useGeolocation();
  const [hasPermission, setHasPermission] = useState(false);
  const nearbyRef = useScrollAnimation();

  const handleLocationRequest = () => {
    getCurrentPosition();
    setHasPermission(true);
  };

  return (
    <section id="nearby" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={nearbyRef}
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('nearbyPlaces')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('locationDescription')}
          </p>
        </div>

        {!hasPermission ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Navigation className="w-12 h-12 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('allowLocation')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              {t('locationDescription')}
            </p>
            <button
              onClick={handleLocationRequest}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              {t('allowLocation')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {nearbyPlaces.map((place, index) => (
              <div
                key={place.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-4"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                }}
              >
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {place.distance} {t('km')}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {place.name}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {place.location}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                    <Clock className="w-4 h-4 mr-1" />
                    ~{Math.round((place.distance || 0) * 3)} min
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{t('loading')}</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};