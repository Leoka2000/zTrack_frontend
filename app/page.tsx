import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutTop from "@/components/about-top";
import { AboutIcons } from "@/components/about-icons";
import { AboutIcons2 } from "@/components/about-icons2";
import { ProductShowcase } from "@/components/product-showcase";
import Image from "next/image";
import TabsComponent from "@/components/tabs-component";
import AgrosentinelsFeatures from "@/components/feature-cards";
import ProductBlog from "@/components/product-blog";
import ProductBlogTop from "@/components/product-blog-top";
import HowItWorksSteps from "@/components/how-it-works-steps";
import GreenFutureHero from "@/components/eco-card";
import DotPatternBackground from "@/components/utils/dot-pattern";
import InnovationChargeHero from "@/components/innovation-charge-hero";
import FAQ from "@/components/faq";
import Index from "@/components/footer/footer";
import Footer from "@/components/footer/footer-bottom";
import GoalsSection from "@/components/lime-cards";
import ContactForm from "@/components/contact-form";
import LetsConnect from "@/components/lets-connect";

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
          <ProductBlogTop />
          <ProductBlog />
        </div>
        <main className="bg-neutral-950 relative   mt-[15rem] py-44 ">
          <div className="h-[40vh]">
          
          </div>
          <div className="md:px-12">
            <TabsComponent />
            <AgrosentinelsFeatures />
            <HowItWorksSteps />
         
          </div>
        </main>
        <div className="md:px-12 relative">
 
          <GreenFutureHero />
          <InnovationChargeHero />
              <GoalsSection />
             <FAQ/>
             <DotPatternBackground />
                 <LetsConnect />
          <ContactForm />

          <Index/>
      
        </div>
           
        <footer className="relative">
                
    
        </footer>
        
      </div>
    </>
  );
}
/*  <footer className=" py-8">
            <div className="container mx-auto flex gap-6 flex-wrap items-center justify-center"></div>
          </footer>*/
