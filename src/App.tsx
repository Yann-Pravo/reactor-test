import React from "react";
import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App: React.FC = () => (
  <div className="flex h-full w-full justify-center">{t("test")}</div>
);

export default App;
