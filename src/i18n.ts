import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import english from './languages/en/translation.json';
import espanol from './languages/es/translation.json';
import catala from './languages/ca/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: english },
      es: { translation: espanol },
      ca: { translation: catala },
    },
    //web por defecto en ingles
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;