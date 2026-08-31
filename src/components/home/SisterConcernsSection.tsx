"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import { sisterConcernsData } from "@/data/sisterConcerns";

export default function SisterConcernsSection() {
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
          {sisterConcernsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-[#f8f9fc] rounded-[16px] p-5 flex flex-col items-center justify-between border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow duration-300"
            >
              {/* Logo / Image Container */}
              <div className="w-full aspect-video bg-white rounded-lg mb-6 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-xs font-medium px-4 text-center">
                  [Logo: {item.name}]
                </div>
              </div>

              {/* Content Center Aligned */}
              <div className="text-center w-full">
                <h3 className="text-[17px] font-semibold text-gray-800 mb-4 px-2 line-clamp-2">
                  {item.name}
                </h3>

                {/* Conditional Link State */}
                <a
                  href={item.isActive ? item.link : undefined}
                  target={item.isActive ? "_blank" : undefined}
                  rel={item.isActive ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center justify-center gap-1.5 text-[14px] font-medium transition-colors ${
                    item.isActive
                      ? "text-[#84cc16] hover:text-[#65a30d]" // Bright lime green for active
                      : "text-gray-300 cursor-not-allowed pointer-events-none" // Grey for inactive
                  }`}
                  aria-disabled={!item.isActive}
                >
                  <LinkIcon size={16} strokeWidth={2.5} />
                  Visit Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}