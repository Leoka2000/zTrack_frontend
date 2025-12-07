import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutTop from "@/components/about-top";
import { AboutIcons } from "@/components/about-icons";
import { AboutIcons2 } from "@/components/about-icons2";
import { ProductShowcase } from "@/components/product-showcase";
import Image from "next/image";
import TabsComponent from "@/components/tabs-component";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="md:px-12">
          <AboutTop />
          <AboutIcons />

          <AboutIcons2 />
        </div>
        <main className="bg-neutral-950 relative   mt-[15rem] py-44 ">
          <div className="h-[40vh]">
            <ProductShowcase />
          </div>
          <TabsComponent />
        </main>
      </div>
    </>
  );
}
/*  <footer className=" py-8">
            <div className="container mx-auto flex gap-6 flex-wrap items-center justify-center"></div>
          </footer>*/
