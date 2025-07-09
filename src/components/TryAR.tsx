import React, { useState } from 'react';
import { QrCode, Camera, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const TryAR: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: keyof typeof translations) => translations[key][language];
  const [isScanning, setIsScanning] = useState(false);
  const arRef = useScrollAnimation();

  const handleScanQR = () => {
    // Simulate camera permission request
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => {
          setIsScanning(true);
          // Simulate scanning process
          setTimeout(() => {
            setIsScanning(false);
            alert('QR Code scanned successfully! AR experience would start here.');
          }, 3000);
        })
        .catch((err) => {
          console.error('Camera access denied:', err);
          alert('Camera access is required to scan QR codes.');
        });
    } else {
      alert('Camera API not supported in this browser.');
    }
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={arRef}
          className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('tryAR')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('arDescription')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Example */}
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 mb-6 inline-block">
              <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mx-auto relative">
                <QrCode className="w-32 h-32 text-gray-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AR</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Contoh QR Code yang tersedia di berbagai destinasi wisata
            </p>
          </div>

          {/* Scanner Interface */}
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 mb-6">
              <div className="w-48 h-48 bg-black rounded-lg flex items-center justify-center mx-auto relative">
                {isScanning ? (
                  <div className="text-white">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                    <p className="text-sm">Scanning...</p>
                  </div>
                ) : (
                  <Camera className="w-32 h-32 text-gray-500" />
                )}
                {isScanning && (
                  <div className="absolute inset-4 border-2 border-primary-600 rounded-lg animate-pulse">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary-600"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary-600"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary-600"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary-600"></div>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleScanQR}
              disabled={isScanning}
              className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
            >
              {isScanning ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Scanning...
                </>
              ) : (
                <>
                  <QrCode className="mr-2 w-5 h-5" />
                  {t('scanQR')}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
            Cara Menggunakan AR
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Temukan QR Code di destinasi wisata
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Scan menggunakan kamera smartphone
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Nikmati pengalaman AR yang menakjubkan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scanning Modal */}
      {isScanning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Scanning QR Code
              </h3>
              <button
                onClick={() => setIsScanning(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">
                Mendeteksi QR Code...
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};