"use client";

import React from "react";
import Image from "next/image";
import WebDashboardMockup from "../mockups/web-dashboard-mockup";
import { Link, Youtube } from "lucide-react";
import { useTranslation } from "../../i18n/TranslationProvider";

export default function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { id: "home", key: "home" },
    { id: "about", key: "about_us" },
    { id: "products", key: "products" },
    { id: "faq", key: "faq" },
    { id: "team", key: "team" },
    { id: "blog", key: "blog" },
    { id: "contact", key: "contact" },
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

  return (
    <div className="min-h-screen bg-[#1a1a1a] 2xl:px-5 2xl:pt-7 overflow-x-hidden">
      {/* Mockup Section */}
      <div className="p-4 md:p-8">
        <div className="bg-[#CDFF4D] rounded-3xl p-8 md:p-12 lg:p-16  overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="flex-1 w-full z-10">
              <h1 className="text-3xl lg:text-3xl font-bold text-black leading-tight mb-6 grotesk">
                {t("footer.headline")}
              </h1>
              <p className="text-neutral-700 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
                {t("footer.description")}
              </p>

              <div className="flex items-center gap-8 mb-8 md:gap-12">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-black">
                    4.8
                  </div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    {t("footer.rating")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-black">
                    500k+
                  </div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    {t("footer.activeUsers")}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center lg:justify-end items-center overflow-visible">
              <div className="w-full md:block hidden scale-125 md:mt-0 mt-10 md:scale-120 lg:max-w-none">
                <WebDashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 md:py-16">
        <div className="flex justify-center w-full mb-20">
          <Image
            src="/zanelogo.png"
            alt="Logo"
            width={200}
            height={80}
            className="object-contain invert brightness-0 opacity-50"
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Navigation */}
            <div>
              <h3 className="text-white text-lg font-medium mb-6">
                {t("footer.navigation")}
              </h3>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {t(`footer.nav.${item.key}`)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white text-lg font-medium mb-6">
                {t("footer.legal")}
              </h3>
              <nav className="flex flex-col gap-3">
                <a href="https://zane.hu/terms-and-conditions/" target="_blank" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t("footer.terms")}
                </a>
                <a href="https://zane.hu/privacy-policy/" target="_blank" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t("footer.privacy")}
                </a>
              </nav>
            </div>

      
            <div>
              <h3 className="text-white text-lg font-medium mb-6">{t("footer.social")}</h3>
              <nav className="flex flex-col gap-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/zanesystems/posts/?feedView=all"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Link size={18} />
                  {t("footer.linkedin")}
                </a>
                <a
                  href="https://www.youtube.com/@zanesystemskft5905"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Youtube size={18} />
                  {t("footer.youtube")}
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t flex flex-col gap-4 justify-center border-gray-800 pt-8 items-center">
            <p className="text-gray-100 grotesk text-sm tracking-wide">
              {t("footer.copyright")}
            </p>
            <a
              href="https://www.linkedin.com/in/leoreus"
              target="_blank"
              className="grotesk text-[#CDFF4D] text-sm font-medium hover:underline transition-all"
            >
              {t("footer.developedBy")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
