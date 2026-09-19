import AboutSection from "@/components/home/AboutSection";
import NewsSection from "@/components/home/NewsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import BrandsSection from "@/components/home/BrandsSection";
import SisterConcernsSection from "@/components/home/SisterConcernsSection";
import CareerSection from "@/components/home/CareerSection";
import ContactSection from "@/components/home/ContactSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import OpenPositionsSection from "@/components/home/OpenPositionsSection";
import CompanyVideoSection from "@/components/home/CompanyVideoSection";
import ClientsSection from "@/components/home/ClientsSection";

import { getNews } from "@/app/actions/news";

export default async function Home() {
  const { featuredNews, recentNews } = await getNews();
  return (
    <>
      <div id="home"></div>
      <div id="news">
        <NewsSection featuredNews={featuredNews} recentNews={recentNews} />
      </div>

      <div>
        <CompanyVideoSection/>
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
        <ClientsSection />
        <CareerSection />
        <OpenPositionsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
