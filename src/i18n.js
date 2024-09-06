
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './locales/EN/translationEn.json';
import translationPT from './locales/PT/translationPT.json';
import translationES from './locales/ES/translationES.json';


const resources = {
  en:{
    translation: translationEN,
  },

  pt:{
    translation: translationPT,
},
  es:{
    translation: translationES,
},
}


i18next
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng:'pt',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18next;