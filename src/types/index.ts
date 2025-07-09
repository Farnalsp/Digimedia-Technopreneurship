export interface Place {
  id: string;
  name: string;
  location: string;
  distance?: number;
  image: string;
  description?: string;
}

export interface Language {
  code: 'id' | 'en';
  name: string;
  flag: string;
}

export interface Theme {
  mode: 'light' | 'dark';
}

export interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}