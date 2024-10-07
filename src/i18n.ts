// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('./locales/en.json'),
  },
  es: {
    translation: require('./locales/es.json'),
  },
};

const savedLanguage = localStorage.getItem('language') || 'es';  // Cargar idioma desde localStorage o usar 'es' por defecto

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Idioma inicial
    fallbackLng: 'en',  // Idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
