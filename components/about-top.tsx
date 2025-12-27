"use client";

import * as React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import BgBelowShade from "./utils/bg-below-shade";
import { useTranslation } from "../i18n/TranslationProvider";

export default function AboutTop() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative w-full py-24 isolate overflow-hidden">
      <BgBelowShade />
      <div className="relative mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 overflow-hidden z-10 px-4 md:px-0">
        {/* Titles */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight">
            <span className="text-green-950 grotesk">{t("about.title_line_1")}</span>
            <br />
            <span
              className="grotesk font-medium md:text-6xl text-4xl
             text-[#428354]
             [background-image:linear-gradient(90deg,#428354,#defe3e)]
             [-webkit-background-clip:text]
             background-clip:text
             [-webkit-text-fill-color:transparent]"
            >
              {t("about.title_line_2")}
            </span>{" "}
          </h1>
        </div>

        {/* Description + Dialog */}
        <div className="flex-1 flex flex-col items-start md:items-end gap-6">
          <p className="text-gray-600 text-left md:text-right max-w-md leading-relaxed">
            {t("about.description")}
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-lg h-12 font-semibold rounded-full transition-colors group"
              >
                <span className="mx-6">{t("about.cta_primary")}</span>
                <span className="p-1 rounded-full bg-neutral-900 flex items-center justify-center">
                  <ArrowRight
                    size={48}
                    strokeWidth={1.75}
                    className="w-3 h-4 text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                  />
                </span>
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto bg-white rounded-3xl border-none p-8">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold grotesk text-green-950 mb-4">
                   {t("aboutMission.title")}
                </DialogTitle>
                <DialogDescription
                  className="text-lg text-gray-700 leading-relaxed space-y-4"
                  
                >
                  {t(`aboutMission.description`)}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
