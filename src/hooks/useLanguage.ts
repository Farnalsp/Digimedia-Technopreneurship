import { useState, useEffect } from 'react';

export type LanguageCode = 'id' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('language');
    return (saved as LanguageCode) || 'id';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return { language, setLanguage };
};