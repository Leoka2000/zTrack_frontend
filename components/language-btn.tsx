"use client";
import { useTranslation } from "../i18n/TranslationProvider";

export default function LanguageButton() {
  const { t, lang, setLang } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{t("hello")}</h1>
      <p className="text-lg">{t("welcome")}</p>

      <div className="mt-4 space-x-2">
        <button
          disabled={lang === "en"}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setLang("en")}
        >
          English
        </button>
        <button
          disabled={lang === "hu"}
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setLang("hu")}
        >
          Hungarian
        </button>
      </div>
    </div>
  );
}
