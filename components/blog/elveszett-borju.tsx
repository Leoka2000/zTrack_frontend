"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useTranslation } from "../../i18n/TranslationProvider";

export default function ElveszettBorju() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-gray-50 flex items-center justify-center my-5 mt-3">
      <div className="w-full bg-neutral-50 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Main Card Image Section */}
        <div className="md:w-5/6 relative flex items-center justify-center min-h-[300px] overflow-hidden rounded-2xl shadow-xl shadow-neutral-200/50">
          <div className="absolute top-3 left-3 z-10 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
            {t("elveszettBorju.date_badge")}
          </div>

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />

          <Image
            src="/elveszett-borju.png"
            alt={t("elveszettBorju.image_alt")}
            fill
            className="object-cover transition-all duration-700 brightness-[0.8] grayscale-[0.3]"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="md:w-5/6 p-8 md:p-12 flex flex-col justify-between">
          
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-10">
              
              <div className="ms-10">
                <Image
                  src="/zanelogo.png"
                  alt="ZaneSystems Logo"
                  width={50}
                  height={50}
                  className="brightness-0 md:w-24 w-44"
                  priority
                />
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900">
                  {t("elveszettBorju.tag_line")}
                </h3>

                <p className="text-sm text-gray-500">
                  {t("elveszettBorju.subtitle")}
                </p>
              </div>
            </div>

            <span className="bg-[#d7f448] md:flex hidden text-black px-4 py-2 rounded-full text-sm font-medium">
              {t("elveszettBorju.category")}
            </span>
          </div>

          <div className="flex-grow">
            <h1 className="text-3xl grotesk md:text-4xl text-neutral-800 mb-4 font-medium leading-tight">
              {t("elveszettBorju.title")}
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
              {t("elveszettBorju.preview")}
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button" className="h-12 group">
                  <span className="mx-6 text-lg">
                    {t("elveszettBorju.cta")}
                  </span>

                  <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center">
                    <ArrowRight
                      size={16}
                      className="text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
                    />
                  </span>
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[800px] max-h-[90vh] p-0 overflow-y-auto bg-neutral-900 text-neutral-100 border-neutral-800 rounded-2xl">
                
                {/* Top image in dialog */}
                <div className="w-full h-96 relative overflow-hidden">
                  <Image
                    src="/elveszett-borju.png"
                    alt="Calf in meadow with wildflowers"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Dialog card content */}
                <div className="p-8 md:p-12">
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-6">
                    {t("elveszettBorju.title")}
                  </h1>

                  {/* Meta info */}
                  <div className="flex items-center gap-2 text-neutral-400 mb-8 pb-8 border-b border-neutral-700">
                    <CalendarDays size={20} />
                    <span className="text-sm">{t("elveszettBorju.date_badge")}</span>
                  </div>

                  {/* Blog content */}
                  <div className="text-neutral-300 leading-relaxed space-y-4">
                    <p>{t("borju-dialog-blog.paragraph1")}</p>
                    <p>{t("borju-dialog-blog.paragraph2")}</p>
                    <p>{t("borju-dialog-blog.paragraph3")}</p>
                  </div>
                </div>

              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
