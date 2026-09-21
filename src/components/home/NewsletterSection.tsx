"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export interface NewsletterItem {
  _id: string;
  title: string;
  month: string;
  year: string;
  description: string;
  pdfFileUrl: string;
}

export default function NewsletterSection({ newsletters }: { newsletters: NewsletterItem[] }) {
  // If no newsletters, don't render the section
  if (!newsletters || newsletters.length === 0) return null;

  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-brand-green font-bold text-[14px] tracking-wider uppercase mb-2 block"
          >
            STAY UPDATED
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-[42px] font-bold text-[#1a202c]"
          >
            Monthly Newsletters
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsletters.map((newsletter, index) => (
            <motion.div
              key={newsletter._id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {newsletter.month} {newsletter.year}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">{newsletter.title}</h3>
              <p className="text-gray-600 text-[15px] mb-8 flex-grow line-clamp-2">{newsletter.description}</p>
              
              <a href={newsletter.pdfFileUrl} target="_blank" rel="noreferrer" className="mt-auto">
                <button className="w-full py-3 rounded-xl border-2 border-gray-100 text-gray-700 font-semibold flex items-center justify-center gap-2 group-hover:border-brand-green group-hover:text-brand-green transition-colors">
                  <Download size={18} /> Download PDF
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}