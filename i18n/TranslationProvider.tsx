"use client";

import React, { createContext, useContext, useState } from "react";
import en from "../public/locales/en.json"
import hu from "../public/locales/hu.json"

type Lang = "en" | "hu";

const translations: Record<Lang, any> = { en, hu };

type TranslationContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

// ✅ DOT-NOTATION RESOLVER
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object") {
      return acc[key];
    }
    return undefined;
  }, obj);
}

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    const value = getNestedValue(translations[lang], key);
    return value ?? key;
  };

  return (
    <TranslationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return ctx;
}
