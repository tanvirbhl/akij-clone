"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { brandsData } from "@/data/brands";
import SisterConcernsSection from "./SisterConcernsSection";

export default function BrandsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[42px] font-bold text-[#56d656] mb-4"
          >
            Explore Our Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748b] text-[16px] md:text-[17px] max-w-2xl mx-auto"
          >
            Discover excellence through our diverse portfolio of brands
          </motion.p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {brandsData.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="border border-[#eef2f0] rounded-[16px] p-6 lg:p-8 bg-[#f8fcfb] shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="w-full aspect-[16/9] flex items-center justify-center mb-8 bg-white rounded-lg border border-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium px-4 text-center">
                  [Image: {brand.image}]
                </div>
              </div>

              {/* Content */}
              <h3 className="text-[20px] font-bold text-[#2d3748] mb-3">
                {brand.title}
              </h3>
              
              <p className="text-[#64748b] text-[15px] leading-relaxed mb-8 flex-grow">
                {brand.description}
              </p>

              {/* Button */}
              <div>
                <Link href={brand.link}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#3db841] text-white px-5 py-2.5 rounded-full text-[14px] font-medium flex items-center gap-2 hover:bg-[#329e36] transition-colors"
                  >
                    Explore Products
                    <ExternalLink size={16} strokeWidth={2} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Link href="/brands">
            <button className="px-8 py-2.5 rounded-full border-2 border-brand-green text-brand-green font-medium text-[15px] hover:bg-brand-green hover:text-white transition-colors duration-300">
              Show more brands
            </button>
          </Link>
        </motion.div>
      </div>
      <SisterConcernsSection/>
    </section>
  );
}