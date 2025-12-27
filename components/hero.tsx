"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleScrollToAbout = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isDesktop && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay blocked, fallback to poster.");
        });
      }
    }
  }, [isDesktop]);

  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden">
      {/* Desktop video */}
      {isDesktop ? (
        <video
          ref={videoRef}
          muted
          playsInline
          loop
          autoPlay
          poster="/hero-poster.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Mobile fallback image
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/hero-img.png"
            alt="Hero background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container py-12 px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:leading-24 grotesk">
            {t("hero.title_line_1")}
            <br />
            {t("hero.title_line_2")}
            <br />
            <div className="flex items-center ms-5 gap-3">
              <div className="flex gap-2 mt-2">
                {["cube-photo1.avif", "cube-photo2.avif", "cube-photo3.avif"].map(
                  (img, i) => (
                    <div
                      key={img}
                      className={`w-12 h-12 md:w-18 md:h-18 -ms-4 rounded-2xl overflow-hidden relative border-3 border-neutral-200 shadow-lg transform ${
                        i === 0 ? "-rotate-8" : i === 1 ? "rotate-24" : "-rotate-16"
                      }`}
                    >
                      <Image src={`/${img}`} alt="" fill className="object-cover" />
                    </div>
                  )
                )}
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

          <p className="text-lg text-gray-300 mb-8 max-w-2xl">{t("hero.description")}</p>

          <div className="flex items-center gap-6 flex-wrap">
            <Button
              className="text-lg h-12 w-48 font-semibold rounded-full"
              onClick={handleScrollToAbout}
            >
              <span className="mx-3 grotesk">{t("hero.cta_primary")}</span>
              <span className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center">
                <ArrowRight className="w-3 h-4 text-neutral-200" />
              </span>
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-slate-800" />
                <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-slate-800" />
                <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-slate-800" />
              </div>
              <div className="text-sm text-gray-300">
                <div className="font-semibold">{t("hero.stats_title")}</div>
                <div className="text-gray-400">{t("hero.stats_subtitle")}</div>
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
