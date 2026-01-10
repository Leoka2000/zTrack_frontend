"use client";

import * as React from "react";
import { useTranslation } from "../i18n/TranslationProvider";
import { Button } from "@/components/ui/button";

export default function LanguageDropdown() {
  const { lang, setLang } = useTranslation();

  const languages = [
    { code: "en", icon: "/uk.png", alt: "English" },
    { code: "hu", icon: "/hu.png", alt: "Magyar" },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((l) => {
        const isActive = lang === l.code;
        return (
          <Button
            key={l.code}
            variant="ghost"
            size="icon"
            onClick={() => setLang(l.code as "en" | "hu")}
            className={`w-9 h-9 2xl:w-12 2xl:h-12 p-0 rounded-full overflow-hidden transition-all border-2 ${
              isActive 
                ? "border-[#d7f448] opacity-100" 
                : "border-transparent opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src={l.icon}
              alt={l.alt}
              className="w-full h-full object-cover"
            />
          </Button>
        );
      })}
    </div>
  );
}