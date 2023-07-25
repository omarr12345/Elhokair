import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// Change Dir
i18n.on("languageChanged", (locale) => {
  let diraction = i18n.dir(locale);
  document.body.dir = diraction;
});

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: i18n.language,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


