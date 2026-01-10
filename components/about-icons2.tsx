"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { useTranslation } from "../i18n/TranslationProvider";

export function AboutIcons2() {
  const { t } = useTranslation();

  return (
    <section className="w-full pt-3 relative isolate overflow-x-clip">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto">
        <Card className="lg:col-span-2 relative overflow-hidden rounded-3xl h-[400px] lg:h-[500px] bg-black">
          <Image
            src="/grazing-image.jpg"
            alt={t("aboutIcons2.card1.alt")}
            fill
            className="object-cover"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%)",
              zIndex: 1,
            }}
          />
          <div
            className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white"
            style={{ zIndex: 2 }}
          >
            <h2 className="text-4xl md:text-6xl  grotesk font-bold mb-4 text-balance">
              {t("aboutIcons2.card1.title")}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl 2xl:text-2xl opacity-90">
              {t("aboutIcons2.card1.description")}
            </p>
          </div>
        </Card>

        <div className="lg:col-span-1 shadow-md bg-[#d7f448] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center h-[400px] lg:h-[500px]">
          <h2 className="text-2xl md:text-4xl font-bold grotesk md:mt-0 mt-8 mb-3 md:mb-6 text-gray-900">
            {t("aboutIcons2.card2.title")}
          </h2>
          <p className="text-base md:text-lg mb-0 2xl:text-2xl md:mb-8 text-gray-800">
            {t("aboutIcons2.card2.description")}
          </p>
          <div className="mt-auto">
            <Image
              src="/farm-tractor-bro.svg"
              alt={t("aboutIcons2.card2.alt")}
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
