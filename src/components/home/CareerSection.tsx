"use client";

import { motion } from "framer-motion";

export default function CareerSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-bold text-[13px] tracking-wider uppercase mb-2 block"
          >
            LET'S EXPLORE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[38px] font-bold text-gray-900"
          >
            Our Career Section
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h3 className="text-3xl md:text-[42px] lg:text-[46px] font-medium text-[#2d3748] leading-[1.2] mb-6">
              Join Bangladesh's largest and talented industrial conglomerate today!
            </h3>
            
            <p className="text-gray-700 text-[16px] md:text-[17px] leading-relaxed">
              Join our team and experience a dynamic work environment with opportunities for growth. 
              Be part of a passionate and cohesive team delivering innovative solutions and supply 
              chain for customer satisfaction.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            {/* Image Placeholder - Aspect ratio and rounding matched to the design */}
            <div className="w-full aspect-[4/3.2] bg-[#f0f4f2] rounded-[24px] overflow-hidden flex items-center justify-center relative shadow-sm border border-gray-100">
              <div className="absolute inset-0 flex items-center justify-center text-brand-green font-medium px-4 text-center">
                [Image: /images/career/team-illustration.png]
              </div>
              {/* Optional overlay for a slight tint */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}