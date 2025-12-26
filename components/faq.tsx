import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DotPatternBackground from "./utils/dot-pattern";
import BackgroundShades from "./utils/background-shades";

export default function FAQ() {
  return (
    <section id="faq"  className="relative w-full md:my-24 ">
      

      <div className=" mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
        
        <div className="space-y-6 relative isolate text-4xl md:text-6xl md:w-[45%]">
          <BackgroundShades />
          <h1 className="grotesk text-lime-950 font-medium md:leading-16">
            Smart Grazing
            <br />
            <span
              className="grotesk font-medium md:text-6xl text-4xl
             text-[#428354]
             [background-image:linear-gradient(90deg,#428354,#defe3e)]
             [-webkit-background-clip:text]
             background-clip:text
             [-webkit-text-fill-color:transparent]"
            >
            Basics: FAQs
            </span>
          </h1>

          <p className="text-gray-600 max-w-md text-lg">
            Explore our FAQs to discover how we secure your herd with precision, 
            rugged durability, and real-time intelligence. Find the answers for your pasture below!
          </p>
        </div>

        <div className="md:w-[50%] w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                value: "item-1",
                title: "How does the ZTrack G-100 maintain power in remote areas?",
                content:
                  "The G-100 features high-efficiency solar harvesting. With just 3 hours of direct daily sunlight, the device stays fully charged, ensuring continuous monitoring without manual intervention.",
              },
              {
                value: "item-2",
                title: "What happens if an animal moves out of cellular range?",
                content:
                  "Our devices utilize NB-IoT and LTE-M for deep rural penetration. If cellular signals fail, the G-100 can store location data internally and sync once a connection is re-established.",
              },
              {
                value: "item-3",
                title: "How accurate is the GPS tracking for individual animals?",
                content:
                  "The ZTrack G-100 uses a multi-constellation GNSS receiver (GPS, GLONASS, Galileo) providing pinpoint accuracy within 2.5 meters under clear sky conditions.",
              },
              {
                value: "item-4",
                title: "Can I set up virtual boundaries for my herd?",
                content:
                  "Yes! Through our mobile app, you can create custom Geofences. If any animal crosses these boundaries, you will receive an instant push notification or SMS alert.",
              },
              {
                value: "item-5",
                title: "Is the hardware durable enough for harsh weather?",
                content:
                  "Absolutely. The G-100 is IP67-rated, making it fully waterproof and dustproof. It is tested to operate in extreme temperatures ranging from -20°C to +60°C.",
              },
            ].map((item) => (
              <div
                key={item.value}
                className="border-1 shadow-md group isolate relative rounded-xl p-[2px]"
                
              >
                
                <AccordionItem
                  value={item.value}
                  className="rounded-[11px] bg-white border-none"
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