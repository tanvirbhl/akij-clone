"use client";

import { motion } from "framer-motion";
import { companyVideoData } from "@/data/companyVideo";

export default function CompanyVideoSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          /* Removed max-w-[1000px] and added w-full so it spans the entire container */
          className="w-full bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden border border-gray-100"
        >
          {/* Video Embed Area */}
          <div className="w-full aspect-video bg-gray-200 relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={companyVideoData.videoUrl}
              title={companyVideoData.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-10 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">
              {companyVideoData.title}
            </h2>
            
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-5xl">
              Step into the world of <strong className="font-semibold text-gray-800">Akij Venture Group</strong>, one of Bangladesh's most dynamic and forward-thinking conglomerates. From tech innovations to impactful ventures across diverse industries, this video gives you an exclusive look at how Akij is shaping the future of the nation through excellence, sustainability, and vision.
            </p>

            {/* What you'll discover Box */}
            <div className="bg-[#f8fafc] rounded-xl p-6 md:p-8 mb-8 border border-gray-100">
              <h3 className="text-[16px] font-bold text-gray-900 mb-4">
                What you'll discover:
              </h3>
              <ul className="space-y-3">
                {companyVideoData.discoveries.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600 text-[15px]">
                    <span className="text-[#3b82f6] mr-3 mt-1.5 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <hr className="border-gray-100 mb-6" />

            {/* Tags Container */}
            <div className="flex flex-wrap gap-3">
              {companyVideoData.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-[13px] font-semibold px-4 py-2 rounded-lg ${tag.styles}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}