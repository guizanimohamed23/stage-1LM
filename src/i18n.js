import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar', // default language
    lng: 'ar', // start with French
    backend: {
      loadPath: '/Locales/{{lng}}/translation.json', // Path to the translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
