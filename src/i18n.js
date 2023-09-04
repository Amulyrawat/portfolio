import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from './locales/translationEN.json'
import translationHi from './locales/translationHi.json'

const resources = {
    en: {
        translation: translationEn
    },
    hi: {
        translation: translationHi
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'hi',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;