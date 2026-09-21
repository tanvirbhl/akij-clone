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
import { getAllNewsletters } from "@/app/actions/newsletter";
import { getAllSisterConcerns } from "./actions/sisterConcern";

export default async function Home() {
  // 1. Fetch ALL dynamic data here at the top
  const { featuredNews, recentNews } = await getNews();
  const newsletters = await getAllNewsletters();
  const sisterConcerns = await getAllSisterConcerns();

  return (
    <>
      <div id="home">{/* Waiting for Hero Section */}</div>

      <div id="news">
        <NewsSection featuredNews={featuredNews} recentNews={recentNews} />
      </div>

      <div>
        <CompanyVideoSection />
      </div>

      <div id="newsletters">
        {/* 2. Pass the fetched 'newsletters' variable, not the function */}
        <NewsletterSection newsletters={newsletters} />
      </div>

      <div id="brands">
        <BrandsSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <LeadershipSection />

      {/* 3. Moved ClientsSection outside of the "career" wrapper */}
      <ClientsSection />
      <div id="sister-concerns">
        <SisterConcernsSection concerns={sisterConcerns} />
      </div>
      <div id="career">
        <CareerSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
