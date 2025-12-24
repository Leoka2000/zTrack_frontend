import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutTop from "@/components/about-top";
import { AboutIcons } from "@/components/about-icons";
import { AboutIcons2 } from "@/components/about-icons2";

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
import FooterTop from "@/components/footer/footer";
import Footer from "@/components/footer/footer-bottom";
import GoalsSection from "@/components/lime-cards";
import ContactForm from "@/components/contact-form";
import LetsConnect from "@/components/lets-connect";
import Team from "@/components/team";
import BlogCards from "@/components/blog-cards";
import WebDashboardMockup_DualScreen from "@/components/mockups/web-dashboard-mockup2";
import WebDashboardMockup from "@/components/mockups/web-dashboard-mockup";
import DashboardWithCardsAndMockup from "@/components/mockups/pages/dashboard-mockup-cards";

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
         <DashboardWithCardsAndMockup />
        </div>
        <main className="bg-neutral-950 relative   ">
          
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
              <Team/>
             <FAQ/>
             <BlogCards />
             <DotPatternBackground />
                 <LetsConnect />
          <ContactForm />

          <FooterTop/>
      
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
