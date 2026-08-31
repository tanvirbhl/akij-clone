"use client";

import { motion } from "framer-motion";
import { Eye, Target, Flag } from "lucide-react";
import { aboutData } from "@/data/about";

export default function AboutSection() {
  return (
    <section className="bg-white">
      {/* Top White Section */}
      <div className="section-padding container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-bold text-gray-900"
          >
            About Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">
          {/* Column 1: Description Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-700 text-[15px] leading-relaxed text-justify"
          >
            <p>{aboutData.companyDescription}</p>
          </motion.div>

          {/* Column 2: Logo Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 bg-[#e6f4ec] rounded-full flex items-center justify-center p-8">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-sm">
                <div className="flex items-end font-bold tracking-tight">
                  <span className="text-3xl text-gray-900 leading-none mr-1">AKIJ</span>
                  <span className="text-xl text-brand-green leading-none">VENTURE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Values & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Values Card */}
            <div className="bg-[#28a745] text-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                {/* FIXED: Removed quotes around curly braces */}
                <Eye size={24} strokeWidth={2.5} />
                <h3 className="text-xl font-bold">Values</h3>
              </div>
              <p className="text-[15px] leading-relaxed font-medium">
                {aboutData.values}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#2d2d2d] text-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                {/* FIXED: Removed quotes around curly braces */}
                <Target size={24} strokeWidth={2.5} />
                <h3 className="text-xl font-bold">Vision</h3>
              </div>
              <p className="text-[15px] text-gray-300 leading-relaxed">
                {aboutData.vision}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Dark Section (Mission) */}
      <div className="bg-[#2d2d2d] py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Mission Intro Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-600 rounded-xl p-6 sm:p-8 flex flex-col justify-center min-h-[200px]"
            >
              <div className="flex items-center gap-3 mb-4 text-white">
                {/* FIXED: Removed quotes around curly braces */}
                <Flag size={24} strokeWidth={2} />
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              <p className="text-white text-[15px] font-medium leading-relaxed">
                {aboutData.mission.intro}
              </p>
            </motion.div>

            {/* Mission Points Cards */}
            {aboutData.mission.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="border border-gray-600 rounded-xl p-6 sm:p-8 flex items-center min-h-[200px]"
              >
                <p className="text-white text-[15px] leading-relaxed font-medium">
                  {point}
                </p>
              </motion.div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}