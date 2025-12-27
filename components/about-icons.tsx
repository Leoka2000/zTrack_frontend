"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { useTranslation } from "../i18n/TranslationProvider";

export function AboutIcons() {
  const { t } = useTranslation();

  return (
    <section className="w-full mb-3 flex flex-col md:flex-row gap-3">
      <Card className="flex-1 rounded-3xl  bg-gray-50 overflow-hidden">
       

        <CardHeader className="items-center space-y-4">
          <div className="relative w-full h-52">
            <Image
              src="/about-card-img1.avif"
              alt={t("aboutIcons.card1.alt")}
              fill
              className="w-full md:px-32"
            />
          </div>
        </CardHeader>
        <CardContent className="text-start md:pl-10 md:pb-0 pl-10 pb-10 flex flex-col items-start">
          <div className="space-y-2 text-start">
            <div className="text-7xl grotesk font-bold text-neutral-900">
              {t("aboutIcons.card1.value")}
            </div>
            <CardTitle className="text-4xl grotesk mb-4 text-neutral-900">
              {t("aboutIcons.card1.title")}
            </CardTitle>
          </div>
          <CardDescription className="text-lg w-[15rem]">
            {t("aboutIcons.card1.description")}
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="flex-1 rounded-3xl bg-gray-50">
        <CardHeader className="items-center">
          <div className="relative w-full h-52">
            <Image
              src="/about-card-img2.avif"
              alt={t("aboutIcons.card2.alt")}
              fill
              className="w-full md:px-32"
            />
          </div>
        </CardHeader>
        <CardContent className="text-start flex flex-col mb-6 ml-6 items-start">
          <div className="space-y-2 text-start">
            <div className="text-7xl font-bold grotesk text-neutral-900">
              {t("aboutIcons.card2.value")}
            </div>
            <CardTitle className="text-4xl grotesk mb-4 text-neutral-900">
              {t("aboutIcons.card2.title")}
            </CardTitle>
          </div>
          <CardDescription className="text-lg w-[15rem]">
            {t("aboutIcons.card2.description")}
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}
