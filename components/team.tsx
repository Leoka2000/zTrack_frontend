"use client";

import React from "react";
import { Card } from "./ui/card";
import { Plus } from "lucide-react";
import BackgroundShades from "./utils/background-shades";
import { useTranslation } from "../i18n/TranslationProvider";

const TEAM_MEMBERS = [
  {
    id: "member-1",
    name: "Emma Richardson",
    title: "Chief Executive Officer (CEO)",
    image: "/zoltan-erdei.jpg",
    linkedin: "https://www.linkedin.com/in/zoltan-erdei-zanesystems/",
  },
  {
    id: "member-2",
    name: "Leo Reus",
    title: "Software Developer",
    image: "/leo.jpeg",
    linkedin: "https://www.linkedin.com/in/leoreus",
  }
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-16 bg-transparent">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row justify-between isolate relative items-start mb-16 gap-2">
          <BackgroundShades />

          <div className="text-4xl md:text-6xl">
            <h1 className="grotesk font-medium text-lime-950 mb-2">
              {t("team.title")}
            </h1>
            <span
              className="grotesk font-medium md:text-6xl text-4xl
             text-[#428354]
             [background-image:linear-gradient(90deg,#428354,#defe3e)]
             [-webkit-background-clip:text]
             background-clip:text
             [-webkit-text-fill-color:transparent]"
            >
              {t("team.subtitle")}
            </span>
          </div>

          <div className="max-w-md lg:text-right">
            <p className="text-neutral-600 leading-relaxed 2xl:text-2xl text-lg">
              {t("team.description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative isolate">
          {TEAM_MEMBERS.map((member) => (
            <a
              key={member.id}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="border-none p-8 bg-transparent overflow-visible max-h-[30rem] cursor-pointer isolate relative">
                <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/5] bg-neutral-900 shadow-xl shadow-neutral-200/50">
                  <span className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md text-white p-2 rounded-full border border-white/30">
                    <Plus size={18} strokeWidth={3} />
                  </span>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 
                               brightness-[0.8] grayscale-[0.3] 
                               group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />
                </div>

                <div className="px-2 space-y-1">
                  <p className="text-[#428354] text-base font-bold grotesk uppercase tracking-[0.15em]">
                    {t(`team.members.${member.id}.title`)}
                  </p>
                  <h3 className="text-2xl grotesk font-bold text-lime-950 tracking-tight transition-colors duration-300">
                    {t(`team.members.${member.id}.name`)}
                  </h3>
                </div>
              </Card>
            </a>
          ))}
          <div className="relative isolate">
            <BackgroundShades />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
