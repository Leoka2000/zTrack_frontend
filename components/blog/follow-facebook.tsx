"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BackgroundShades from "../utils/background-shades";
import { useTranslation } from "../../i18n/TranslationProvider";

export default function SocialConnect() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-6 isolate relative text-left">
          <BackgroundShades />
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 grotesk">
              {t("socialConnect.title")}
            </h2>
            <span
              className="grotesk font-medium md:text-6xl text-4xl
             text-[#428354]
             [background-image:linear-gradient(90deg,#428354,#defe3e)]
             [-webkit-background-clip:text]
             background-clip:text
             [-webkit-text-fill-color:transparent]"
            >
              {t("socialConnect.subtitle")}
            </span>
          </div>

          <p
            dangerouslySetInnerHTML={{
              __html: t("contactForm.description"),
            }}
          />

          <div className="flex flex-col gap-4 pt-4">
            <a
              href="https://www.facebook.com/ZaneSystems"
              target="_blank"
              className="w-full max-w-72"
            >
              <Button className="grotesk text-black w-full h-16 py-6 transition-all duration-300 flex items-center justify-between px-6 text-lg border-none">
                {t("socialConnect.facebook")}
                <div className="w-14 h-10 relative flex items-center justify-center shrink-0">
                  <Image
                    src="/facebook-logo.png"
                    alt="Facebook"
                    width={90}
                    height={90}
                    className="object-contain ml-5 "
                  />
                </div>
              </Button>
            </a>

            <a
              href="https://zane.hu/"
              target="_blank"
              className="w-full max-w-72"
            >
              <Button
                variant="outline"
                className="group w-full h-16 text-lg transition-colors flex items-center justify-between px-6 grotesk"
              >
                <span className="grotesk">{t("socialConnect.website")}</span>
                <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center shrink-0">
                  <ArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                  />
                </span>
              </Button>
            </a>
          </div>
        </div>

        <div className="flex-1 w-full md:h-[590px] h-[400px] relative isolate rounded-[2.5rem] overflow-hidden">
          <Image
            src="/facebook-undraw.svg"
            alt={t("socialConnect.imageAlt")}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
