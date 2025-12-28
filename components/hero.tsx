"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden">
      <video
        muted
        playsInline
        loop
        autoPlay
        poster="/hero-poster.png"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/hero-video.webm" type="video/webm" />
      </video>

      <div className="block lg:hidden absolute inset-0">
        <Image
          src="/hero-img.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="container py-12 px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:leading-24 grotesk">
            {t("hero.title_line_1")}
            <br />
            {t("hero.title_line_2")}
            <br />
            <div className="flex items-center ms-5 gap-3">
              <div className="flex gap-2 mt-2">
                {[
                  "cube-photo1.avif",
                  "cube-photo2.avif",
                  "cube-photo3.avif",
                ].map((img, i) => (
                  <div
                    key={img}
                    className={`w-12 h-12 md:w-18 md:h-18 -ms-4 rounded-2xl overflow-hidden relative border-3 border-neutral-200 shadow-lg transform ${
                      i === 0
                        ? "-rotate-8"
                        : i === 1
                        ? "rotate-24"
                        : "-rotate-16"
                    }`}
                  >
                    <Image
                      src={`/${img}`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <span
                className="grotesk font-bold inline-block"
                style={{
                  minHeight: "1.1em",
                  background: "linear-gradient(90deg, #2af78a, #defe3e)",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientMove 3s ease infinite",
                }}
              >
                {t("hero.highlight")}
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            {t("hero.description")}
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <Button
              className="text-lg h-12 w-48 font-semibold rounded-full"
              onClick={() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="mx-3 grotesk">
                {t("hero.cta_primary")}
              </span>
              <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center">
                <ArrowRight className="w-3 h-4 text-neutral-200" />
              </span>
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["hero-photo1.png", "hero-photo2.png", "hero-photo3.png"].map(
                  (img) => (
                    <div
                      key={img}
                      className="w-10 h-10 rounded-full border-2 border-slate-800 overflow-hidden relative"
                    >
                      <Image
                        src={`/${img}`}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  )
                )}
              </div>
              <div className="text-sm text-gray-300">
                <div className="font-semibold">
                  {t("hero.stats_title")}
                </div>
                <div className="text-gray-400">
                  {t("hero.stats_subtitle")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:absolute hidden bottom-8 right-8 flex flex-col gap-3 z-10">
        <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full px-6 py-2 flex items-center gap-2">
          {t("hero.live_map")}
          <div className="w-3 h-3 bg-lime-400 rounded-full" />
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 flex items-center gap-2">
          {t("hero.dashboard")}
        </button>
      </div>
    </section>
  );
}
