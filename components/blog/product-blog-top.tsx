"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import BackgroundShades from "../utils/background-shades";
import { useTranslation } from "../../i18n/TranslationProvider";

export default function ProductBlogTop() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24">
      <div className="mx-auto flex flex-col lg:flex-row md:justify-between items-start lg:items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-medium leading-12 md:leading-20">
            <span className="text-green-950 grotesk">{t("productBlogTop.intro")}</span>
            <br />
            <span
              className="grotesk font-medium md:text-6xl text-4xl
                 text-[#428354]
                 [background-image:linear-gradient(90deg,#428354,#defe3e)]
                 [-webkit-background-clip:text]
                 background-clip:text
                 [-webkit-text-fill-color:transparent]"
            >
              {t("productBlogTop.product_name")}
            </span>
          </h1>
        </div>

        <div className="flex-1 flex flex-col isolate relative items-start md:items-end gap-6">
          <BackgroundShades />
          <p className="text-gray-600 text-lg  md:text-right 2xl:text-2xl text-left max-w-md leading-[1.5]">
            {t("productBlogTop.description")}
            
          </p>

          
        </div>
      </div>
    </section>
  );
}
