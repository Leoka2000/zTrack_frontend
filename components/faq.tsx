"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DotPatternBackground from "./utils/dot-pattern";
import BackgroundShades from "./utils/background-shades";
import { useTranslation } from "../i18n/TranslationProvider";

export default function FAQ() {
  const { t } = useTranslation();

  // Get FAQ items from translations
  const faqItems = t("faq.items", { returnObjects: true });

  return (
    <section id="faq" className="relative w-full md:my-24">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        {/* Left Section */}
        <div className="space-y-6 relative isolate text-4xl md:text-6xl md:w-[45%]">
          <BackgroundShades />
          <h1 className="grotesk text-lime-950 font-medium md:leading-16">
            {t("faq.title_line_1")}
            <br />
            <span
              className="grotesk font-medium md:text-6xl text-4xl
             text-[#428354]
             [background-image:linear-gradient(90deg,#428354,#defe3e)]
             [-webkit-background-clip:text]
             background-clip:text
             [-webkit-text-fill-color:transparent]"
            >
              {t("faq.title_line_2")}
            </span>
          </h1>
          <p className="text-gray-600 max-w-md text-lg">{t("faq.description")}</p>
        </div>

        {/* Right Section: Accordion */}
        <div className="md:w-[50%] w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item: { question: string; answer: string }, idx: number) => (
              <div
                key={idx}
                className="border-1 shadow-md group isolate relative rounded-xl p-[2px]"
              >
                <AccordionItem
                  value={`item-${idx}`}
                  className="rounded-[11px] bg-white border-none"
                >
                  <AccordionTrigger className="text-left cursor-pointer grotesk font-semibold text-lime-900 hover:no-underline py-6 px-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 pt-2 px-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
