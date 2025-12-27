"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../public/locales/en.json";
import hu from "../public/locales/hu.json";

type Lang = "en" | "hu";

const translations: Record<Lang, any> = { en, hu };

type TranslationContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

// Dot-notation resolver
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object") return acc[key];
    return undefined;
  }, obj);
}

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("hu"); // default to Hungarian

  // Optional: load saved language from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && (saved === "en" || saved === "hu")) {
      setLang(saved);
    }
  }, []);

  // Optional: save selection to localStorage
  const setLanguage = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string): string => {
    const value = getNestedValue(translations[lang], key);
    return value ?? key;
  };

  return (
    <TranslationContext.Provider value={{ lang, setLang: setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used within TranslationProvider");
  return ctx;
}
