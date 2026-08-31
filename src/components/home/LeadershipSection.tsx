"use client";

import { motion } from "framer-motion";
import { leadershipData } from "@/data/leadership";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="flex flex-col">
      
      {/* ----------------- PART 1: THE FOUNDER (White Background) ----------------- */}
      <div className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/3] lg:aspect-[4/3.5] bg-gray-100 rounded-[16px] overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                [Image: {leadershipData.founder.image}]
              </div>
              
              {/* Green Name Tag Overlay */}
              <div className="absolute bottom-0 right-0 bg-brand-green text-white p-4 md:p-5 rounded-tl-[16px]">
                <h4 className="font-bold text-[15px] md:text-[17px] leading-tight">
                  {leadershipData.founder.name}
                </h4>
                <p className="font-bold text-[13px] md:text-[14px] mt-1">
                  {leadershipData.founder.role}
                </p>
              </div>
            </motion.div>

            {/* Founder Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h2 className="text-4xl md:text-[46px] lg:text-[52px] font-bold text-gray-900 leading-[1.15] mb-8">
                {leadershipData.founder.title}
              </h2>
              
              <div className="space-y-5 text-gray-800 text-[16px] leading-relaxed">
                {leadershipData.founder.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ----------------- PART 2: THE CHAIRMAN (Dark Background) ----------------- */}
      <div className="bg-[#2d2d2d] py-16 md:py-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Chairman Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col order-2 lg:order-1"
            >
              <span className="text-gray-300 font-semibold text-[13px] tracking-wider uppercase mb-3 block">
                {leadershipData.chairman.subtitle}
              </span>
              <h2 className="text-4xl md:text-[46px] font-bold text-white leading-[1.2] mb-8">
                {leadershipData.chairman.title}
              </h2>
              
              <div className="space-y-6 text-gray-300 text-[17px] md:text-[18px] leading-relaxed">
                {leadershipData.chairman.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Chairman Image with Concentric Circles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center order-1 lg:order-2"
            >
              {/* Concentric Circles Background */}
              <div className="absolute inset-0 w-full h-full bg-[#3a3a3a] rounded-full opacity-20"></div>
              <div className="absolute inset-0 m-auto w-[80%] h-[80%] bg-[#404040] rounded-full opacity-40"></div>
              <div className="absolute inset-0 m-auto w-[60%] h-[60%] bg-[#4a4a4a] rounded-full opacity-60"></div>
              
              {/* Image Placeholder */}
              <div className="relative z-10 w-[70%] h-[90%] bg-gray-400 rounded-t-full flex items-end justify-center pb-10 overflow-hidden bottom-0 absolute">
                <span className="text-gray-700 text-sm font-medium mb-10 text-center px-4">
                  [Image: {leadershipData.chairman.image}]
                </span>
              </div>

              {/* Green Name Tag Overlay */}
              <div className="absolute -bottom-6 left-0 right-0 mx-auto w-[90%] bg-brand-green text-center p-4 md:p-5 rounded-lg z-20 shadow-lg">
                <h4 className="text-white font-bold text-[18px] md:text-[20px]">
                  {leadershipData.chairman.name}
                </h4>
                <p className="text-white font-bold text-[14px] mt-1">
                  {leadershipData.chairman.role}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      
    </section>
  );
}