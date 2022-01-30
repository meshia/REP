import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
 
const availableLanguages = [ 'he', 'en', 'ru', 'fr' ];

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
 
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    initImmediate: false,
    lng: availableLanguages[0],
    backend: {
      /* translation file path */
      loadPath: '/locals/{{lng}}/{{ns}}.json'
    },
    fallbackLng: availableLanguages[0],
    detection: {
        checkWhitelist: true, // options for language detection
    },
    whitelist: availableLanguages,
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: [
         'main',
         'home',
         'blog',
         'careers'
        ],
    defaultNS: 'main',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    requestOptions: {
      // used for fetch, can also be a function (payload) => ({ method: 'GET' })
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default'
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: 'languageChanged',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
  });
 
export default i18n;