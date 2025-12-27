"use client";

import * as React from "react";
import { useTranslation } from "../i18n/TranslationProvider";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageDropdown() {
  const { lang, setLang } = useTranslation();

  const languages = [
    { code: "en", icon: "/uk.png" },
    { code: "hu", icon: "/hu.png" },
  ];

  // Filter out current language from dropdown
  const otherLanguages = languages.filter((l) => l.code !== lang);

  return (
    <DropdownMenu
      onCloseAutoFocus={(e) => e.preventDefault()}
    >
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-10 h-10 p-1 rounded-full flex items-center justify-center"
        >
          <img
            src={languages.find((l) => l.code === lang)?.icon}
            alt={lang}
            className="w-8 h-8 rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-12 p-1">
        {otherLanguages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className="flex items-center justify-center p-1 cursor-pointer"
          >
            <img
              src={l.icon}
              alt={l.code}
              className="w-6 h-6 rounded-full"
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
