"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { newsletterData } from "@/data/newsletters";

// SVG matching the exact document/PDF badge styling from the reference
function PdfIcon({ className = "w-8 h-10" }: { className?: string }) {
  return (
    <div className="relative inline-flex flex-col items-start mb-6">
      <svg
        className={className}
        viewBox="0 0 32 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Document outline with folded corner */}
        <path d="M6 2 H20 L28 10 V34 A4 4 0 0 1 24 38 H6 A4 4 0 0 1 2 34 V6 A4 4 0 0 1 6 2 Z" />
        <path d="M20 2 V10 H28" />
      </svg>
      <span className="text-[10px] font-bold text-gray-900 absolute top-5 left-1.5 tracking-tighter">
        PDF
      </span>
    </div>
  );
}

export default function NewsletterSection() {
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
            CORPORATE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[38px] font-bold text-gray-900"
          >
            Monthly News Letter
          </motion.h2>
        </div>

        {/* Newsletter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsletterData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="border-2 border-brand-green rounded-xl p-6 sm:p-7 flex flex-col justify-between bg-white shadow-xs transition-shadow hover:shadow-md"
            >
              <div>
                <PdfIcon className="w-8 h-10 text-gray-900" />

                <h3 className="text-[20px] font-bold text-gray-900 leading-snug mb-3">
                  {item.title} <br />
                  {item.month} {item.year}
                </h3>

                <p className="text-gray-600 text-[13px] mb-8 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-brand-green text-brand-green rounded-full px-4 py-1.5 text-[14px] font-medium flex items-center gap-1 hover:bg-brand-green hover:text-white transition-colors duration-200"
                  >
                    Learn More
                    <ArrowUpRight size={16} strokeWidth={2.2} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-14"
        >
          <Link href="/newsletters">
            <button className="px-8 py-2.5 rounded-full border border-brand-green text-brand-green font-medium text-[15px] hover:bg-brand-green hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}