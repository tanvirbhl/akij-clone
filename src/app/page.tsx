import AboutSection from "@/components/home/AboutSection";
import NewsSection from "@/components/home/NewsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import BrandsSection from "@/components/home/BrandsSection";
import SisterConcernsSection from "@/components/home/SisterConcernsSection";
import CareerSection from "@/components/home/CareerSection";
import ContactSection from "@/components/home/ContactSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import OpenPositionsSection from "@/components/home/OpenPositionsSection";

export default function Home() {
  return (
    <>
      <div id="home"></div>
      <div id="news">
        <NewsSection />
      </div>

      <div id="newsletters">
        <NewsletterSection />
      </div>
      <div id="brands">
        <BrandsSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>
      <LeadershipSection />
      <div id="career">
        <CareerSection/>
        <OpenPositionsSection/> 
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
