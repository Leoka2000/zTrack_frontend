import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DotPatternBackground from "./utils/dot-pattern";

export default function FAQ() {
  return (
    <section className="relative w-full md:my-32">
      <DotPatternBackground />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start gap-20">
        
        {/* Left side */}
        <div className="space-y-6 md:w-[45%]">
          <h1 className="text-5xl grotesk font-bold text-lime-800 leading-tight">
            EV Charging
            <br />
            <span className="text-[#8b9d3a] grotesk">
              Basics: FAQs
            </span>
          </h1>

          <p className="text-gray-600 max-w-md text-lg">
            Explore our FAQs to discover how we power your drive with speed,
            smarts, and sustainability. Find the spark to your questions below!
          </p>
        </div>

        {/* Right side */}
        <div className="md:w-[50%] w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            
            {[
              {
                value: "item-1",
                title:
                  "What makes Volthaus chargers different from other EV chargers?",
                content:
                  "Volthaus chargers stand out with their intelligent charging technology, seamless app integration, and energy management features.",
              },
              {
                value: "item-2",
                title:
                  "Are Volthaus chargers compatible with all electric vehicles?",
                content:
                  "Yes, Volthaus chargers are designed to be universally compatible with all electric vehicles.",
              },
              {
                value: "item-3",
                title:
                  "How long does it take to fully charge an EV with a Volthaus charger?",
                content:
                  "Charging time depends on your vehicle and charger model.",
              },
              {
                value: "item-4",
                title: "Can I install a Volthaus charger at home?",
                content:
                  "Absolutely! Volthaus chargers are designed for easy home installation.",
              },
              {
                value: "item-5",
                title:
                  "Do Volthaus chargers support renewable energy sources?",
                content:
                  "Yes! Volthaus chargers are fully compatible with renewable energy systems.",
              },
            ].map((item) => (
              <div
                key={item.value}
                className="
                border-2
                shadow-md
                  group rounded-xl p-[1px]
                  bg-gradient-to-b
                  from-[#f1f9b6]
                  via-[#d7f448]
                  to-[#c2dd3a]
                  transition-all duration-300
                  hover:from-[#f6fbd2]
                  hover:via-[#d7f448]
                  hover:to-[#b9d830]
                "
              >
                <AccordionItem
                  value={item.value}
                  className="
                    rounded-[11px]
                    bg-white
                    border-none
                  "
                >
                  <AccordionTrigger className="text-left cursor-pointer font-semibold text-lime-900 hover:no-underline py-6 px-6">
                    {item.title}
                  </AccordionTrigger>

                  <AccordionContent className="text-gray-600 pb-6 pt-2 px-6">
                    {item.content}
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
