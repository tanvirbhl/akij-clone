"use client";

import { Calendar, ArrowUpRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { newsData } from "@/data/news";
import Link from "next/link";
import CompanyVideoSection from "./CompanyVideoSection";

export default function NewsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-semibold text-[13px] tracking-wider uppercase mb-1 block"
          >
            EXPLORE OUR
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[38px] font-bold text-gray-900"
          >
            News & Media
          </motion.h2>
        </div>

        {/* Featured News Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full aspect-[16/9] lg:aspect-[4/2.5] rounded-[20px] overflow-hidden bg-[#e6f4ec] flex items-center justify-center relative group"
          >
             <div className="absolute inset-0 flex items-center justify-center text-brand-green font-medium text-sm">
               [Image: {newsData.featured.image}]
             </div>
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          </motion.div>

          {/* Featured Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4 pt-2"
          >
            <span className="text-brand-green font-medium text-[15px]">
              {newsData.featured.subTitle}
            </span>
            <h3 className="text-3xl lg:text-[34px] font-bold text-gray-900 leading-[1.2]">
              {newsData.featured.title}
            </h3>
            
            <div className="flex items-center text-brand-green gap-2 py-1">
              <Calendar size={18} strokeWidth={2} />
              <span className="font-medium text-[15px]">{newsData.featured.date}</span>
            </div>
            
            <p className="text-gray-700 text-[15px]">
              {newsData.featured.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-3">
              <Link href={newsData.featured.link}>
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-brand-green text-white px-5 py-2.5 rounded-full text-[15px] font-medium flex items-center gap-1.5 hover:bg-brand-green-dark transition-colors"
                >
                  Learn More
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </motion.button>
              </Link>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full border border-brand-green text-brand-green hover:bg-[#e6f4ec] transition-colors"
                aria-label="Share"
              >
                <Share2 size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Secondary News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.recent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group"
            >
              {/* Card Image */}
              <div className="w-full aspect-[4/2.5] rounded-[20px] overflow-hidden bg-gray-100 flex items-center justify-center relative mb-5">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-xs p-4 text-center">
                  [Image: {item.image}]
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow">
                <p className="text-brand-green text-[13px] font-medium leading-relaxed line-clamp-3 mb-2">
                  {item.subTitle}
                </p>
                
                <h4 className="text-[22px] font-bold text-gray-900 leading-snug mb-3">
                  {item.title}
                </h4>
                
                <div className="flex items-center text-brand-green gap-2 mb-3">
                  <Calendar size={16} strokeWidth={2} />
                  <span className="font-medium text-[14px]">{item.date}</span>
                </div>
                
                <p className="text-gray-600 text-[14px] leading-relaxed line-clamp-3 mb-5 flex-grow">
                  {item.excerpt}
                </p>

                {/* Card Actions */}
                <div className="flex items-center gap-3 mt-auto">
                  <Link href={item.link}>
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-brand-green text-white px-4 py-2 rounded-full text-[14px] font-medium flex items-center gap-1.5 hover:bg-brand-green-dark transition-colors"
                    >
                      Learn More
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </motion.button>
                  </Link>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full border border-brand-green text-brand-green hover:bg-[#e6f4ec] transition-colors"
                    aria-label="Share"
                  >
                    <Share2 size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Learn More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Link href="/news">
            <button className="px-8 py-2.5 rounded-full border border-brand-green text-brand-green font-medium hover:bg-brand-green hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
      {/* <div className="mt-2">
        <CompanyVideoSection/>
      </div> */}
    </section>
  );
}