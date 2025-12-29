import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutTop from "@/components/about-top";
import { AboutIcons } from "@/components/about-icons";

import ProductBlog from "@/components/blog/product-blog";
import ProductBlogTop from "@/components/blog/product-blog-top";
import DashboardWithCardsAndMockup from "../components/pages/dashboard-mockup-cards";
import Team from "@/components/team";
import FAQ from "@/components/faq";
import ElveszettBorju from "@/components/blog/elveszett-borju";
import SocialConnect from "@/components/blog/follow-facebook";
import ContactForm from "@/components/contact-form";
import FooterTop from "@/components/footer/footer";
import Footer from "@/components/footer/footer-bottom";
import { AboutIcons2 } from "@/components/about-icons2";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />

        <div id="home" className="">
          <Hero />
        </div>

        <div id="about" className="2xl:px-20 md:px-14 px-4">
          <AboutTop />
          <AboutIcons />
          <AboutIcons2 />
        </div>

        <div id="products" className="2xl:px-20 md:px-14 px-4">
          <DashboardWithCardsAndMockup />
          <ProductBlogTop />
          <ProductBlog />
        </div>

        <div id="team" className="2xl:px-20 md:px-14 px-4">
          <Team />
        </div>

        <div id="faq" className="2xl:px-20 md:px-14 px-4">
          <FAQ />
        </div>

        <div id="blog" className="2xl:px-20 md:px-14 px-4">
          <ElveszettBorju />
        </div>

        <div className="2xl:px-20 md:px-14 px-4">
          <SocialConnect />
          <ContactForm />
        </div>

        <footer className="relative">
          <FooterTop />
        </footer>
      </div>
    </>
  );
}
