"use client";

import * as React from "react";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "../i18n/TranslationProvider";

export default function Navbar() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = React.useState("home");

  // Accessing the nested 'navbar' object from your JSON
  const navItems = [
    { id: "home", label: t("navbar.home") },
    { id: "about", label: t("navbar.about_us") },
    { id: "products", label: t("navbar.products") },
    { id: "team", label: t("navbar.team") },
    { id: "faq", label: t("navbar.faq") },
    { id: "blog", label: t("navbar.blog") },
  ];

  const NAVBAR_HEIGHT = 80;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - NAVBAR_HEIGHT,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 1;
      let current = "home";

      for (let i = 0; i < navItems.length; i++) {
        const el = document.getElementById(navItems[i].id);
        if (!el) continue;

        const nextEl =
          i + 1 < navItems.length
            ? document.getElementById(navItems[i + 1].id)
            : null;
        const top = el.offsetTop - NAVBAR_HEIGHT;
        const bottom = nextEl
          ? nextEl.offsetTop - NAVBAR_HEIGHT
          : document.body.scrollHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          current = navItems[i].id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollEvent);
    handleScrollEvent();
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [navItems]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 w-full flex justify-center">
      <div className="w-full max-w-7xl md:mx-0 mx-4 mt-4 md:my-4 bg-neutral-950/40 backdrop-blur-lg rounded-full border border-neutral-800/40 overflow-hidden">
        <div className="flex items-center justify-between p-2">
          {/* Logo */}
          <div
            className="flex items-center gap-2 pl-2 cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            <div className="w-16 h-10 bg-[#d7f448] text-neutral-900 rounded-full flex items-center justify-center shrink-0">
              <Image
                src="/zanelogo.png"
                alt="Logo"
                width={52}
                height={52}
                className="brightness-0 object-contain"
                priority
              />
            </div>
            <span className="text-neutral-50 text-xl font-semibold hidden sm:block">
              ZtrackMap
            </span>
                  <div className="block ml-10"><LanguageDropdown /></div> 
          </div>
      

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-lg grotesk font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#d7f448] font-bold"
                    : "text-neutral-50 hover:text-[#d7f448]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact & Language */}
          <div className="hidden md:flex gap-2 pr-2">
            <Button
              className="group grotesk rounded-full shadow-sm text-neutral-950 bg-gradient-to-r from-[#2af78a] to-[#defe3e] h-10 px-6 font-bold transition-all flex items-center justify-center border-none hover:opacity-90"
              onClick={() => handleScroll("contact")}
            >
              <span className="text-lg">{t("navbar.contact")}</span>
              <span className="ml-2 p-1 rounded-full bg-neutral-950 flex items-center justify-center shrink-0">
                <ArrowRight
                  size={12}
                  strokeWidth={1.5}
                  className="text-white transition-transform duration-300 group-hover:-rotate-45"
                />
              </span>
            </Button>
      
          </div>

          {/* Mobile drawer */}
          <div className="md:hidden pr-2">
            <Drawer>
              <DrawerTrigger className="flex items-center justify-center w-10 h-10 rounded-full text-neutral-50 bg-transparent border-none outline-none cursor-pointer">
                <Menu className="w-6 h-6" />
              </DrawerTrigger>

              <DrawerContent className="bg-neutral-950 border-neutral-800 outline-none">
                <div className="flex flex-col gap-6 p-8">
                  {navItems.map((item) => (
                    <DrawerClose asChild key={item.id}>
                      <button
                        onClick={() => handleScroll(item.id)}
                        className={`text-2xl font-bold grotesk text-left transition-colors ${
                          activeSection === item.id
                            ? "text-[#d7f448]"
                            : "text-neutral-50 active:text-[#d7f448]"
                        }`}
                      >
                        {item.label}
                      </button>
                    </DrawerClose>
                  ))}

                  <DrawerClose asChild>
                    <Button
                      className="group grotesk rounded-full shadow-sm text-neutral-950 bg-gradient-to-r from-[#2af78a] to-[#defe3e] h-14 w-full font-bold transition-all flex items-center justify-center border-none"
                      onClick={() => handleScroll("contact")}
                    >
                      <span className="text-xl grotesk
                      ">{t("navbar.contact")}</span>
                      <span className="ml-3 p-1.5 rounded-full bg-neutral-950 flex items-center justify-center shrink-0">
                        <ArrowRight
                          size={16}
                          strokeWidth={3}
                          className="text-white"
                        />
                      </span>
                    </Button>
                  </DrawerClose>

                
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}