import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutTop from "@/components/about-top";
import { AboutIcons } from "@/components/about-icons";
import { AboutIcons2 } from "@/components/about-icons2";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <main className="md:px-8">
          <AboutTop />
          <AboutIcons />
          <AboutIcons2 />
          <footer className=" py-8">
            <div className="container mx-auto flex gap-6 flex-wrap items-center justify-center"></div>
          </footer>
        </main>
      </div>
    </>
  );
}
