"use client";

import { motion } from "framer-motion";
import { clientsData } from "@/data/clients";

export default function ClientsSection() {
  // We duplicate the array to create a seamless infinite loop
  const marqueeItems = [...clientsData, ...clientsData];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden border-b border-gray-100">
      <div className="container-custom mb-10 text-center">
        <h2 className="text-4xl md:text-[42px] font-bold text-[#56d656] mb-4 uppercase ">
          Trusted By Leading Organizations
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">
        
        {/* Left/Right Fade Gradients (Optional, for smooth edge transitions) */}
        <div className="absolute top-0 left-0 h-full w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Animated Track */}
        <motion.div
          className="flex items-center gap-16 md:gap-24 px-8 md:px-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35, // Adjust speed (higher = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((client, index) => (
            <div 
              key={`${client.id}-${index}`} 
              className="flex items-center justify-center min-w-[120px] md:min-w-[160px] h-[80px]"
            >
              {/* Image Placeholder */}
              <div className="w-full h-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                <span className="text-gray-400 text-xs text-center px-2">
                  [Logo: {client.name}]
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}