import i18n from 'i18next';
import Languagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { SearchParamKey } from './constants/SearchParamKey';

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  fr: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next',
    },
  },
};
const supportedLngs = Object.keys(resources);
const fallbackNS = supportedLngs[0];

i18n
  .use(Languagedetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs,
    fallbackNS,
    detection: {
      lookupQuerystring: SearchParamKey,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['en'];
  }
}
