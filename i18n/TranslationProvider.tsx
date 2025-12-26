"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Translations = Record<string, string>;

interface TranslationContextType {
  t: (key: string) => string;
  lang: string;
  setLang: (lang: string) => void;
}

const TranslationContext = createContext<TranslationContextType>({
  t: (key) => key,
  lang: "en",
  setLang: () => {},
});

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [lang, setLang] = useState("en");
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    let canceled = false;

    const loadTranslations = async () => {
      try {
        const res = await fetch(`/locales/${lang}.json`);
        if (!res.ok) throw new Error(`Failed to fetch /locales/${lang}.json`);
        const data: Translations = await res.json();

        if (!canceled) {
          setTranslations(data);
          console.log("✅ Loaded translations for", lang, data);
        }
      } catch (err) {
        console.error("❌ Error loading translations:", err);
        if (!canceled) setTranslations({});
      }
    };

    loadTranslations();

    return () => {
      canceled = true; // prevent state updates if unmounted
    };
  }, [lang]);

  const t = (key: string) => translations[key] || key;

  return (
    <TranslationContext.Provider value={{ t, lang, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);
