"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";

// Define the shape of your MongoDB documents
export interface SisterConcernItem {
  _id: string;
  name: string;
  description: string;
  websiteLink: string;
  logoUrl: string;
}

export default function SisterConcernsSection({ concerns }: { concerns: SisterConcernItem[] }) {
  // If no data exists, don't render the section
  if (!concerns || concerns.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-bold text-gray-900 mb-3"
          >
            Sister Concerns
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748b] text-[15px] md:text-[16px]"
          >
            A network of excellence across diverse industries
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {concerns.map((item, index) => {
            // Determine if the link is active based on the websiteLink value
            const isActive = Boolean(item.websiteLink && item.websiteLink !== "#" && item.websiteLink !== "");

            return (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-[#f8f9fc] rounded-[16px] p-5 flex flex-col items-center justify-between border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow duration-300"
              >
                {/* Logo / Image Container */}
                <div className="w-full aspect-video bg-white rounded-lg mb-6 flex items-center justify-center overflow-hidden relative p-4">
                  <img 
                    src={item.logoUrl} 
                    alt={item.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>

                {/* Content Center Aligned */}
                <div className="text-center w-full">
                  <h3 className="text-[17px] font-semibold text-gray-800 mb-4 px-2 line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Conditional Link State */}
                  <a
                    href={isActive ? item.websiteLink : undefined}
                    target={isActive ? "_blank" : undefined}
                    rel={isActive ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center justify-center gap-1.5 text-[14px] font-medium transition-colors ${
                      isActive
                        ? "text-[#84cc16] hover:text-[#65a30d]" // Bright lime green for active
                        : "text-gray-300 cursor-not-allowed pointer-events-none" // Grey for inactive
                    }`}
                    aria-disabled={!isActive}
                  >
                    <LinkIcon size={16} strokeWidth={2.5} />
                    Visit Website
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}