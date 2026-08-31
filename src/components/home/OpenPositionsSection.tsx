"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { jobsData } from "@/data/jobs";

export default function OpenPositionsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-bold text-[14px] tracking-wider uppercase mb-2 block"
          >
            APPLY NOW
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[42px] font-bold text-[#1a202c] mb-6"
          >
            Open Positions
          </motion.h2>
          
          {/* Green Divider Line */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-1.5 bg-brand-green mx-auto rounded-full"
          />
        </div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full overflow-x-auto rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white border border-gray-100"
        >
          <table className="w-full min-w-[900px] text-left border-collapse">
            <thead>
              <tr className="bg-brand-green text-white">
                <th className="py-5 px-6 font-semibold text-[16px]">Designation</th>
                <th className="py-5 px-6 font-semibold text-[16px]">Unit</th>
                <th className="py-5 px-6 font-semibold text-[16px]">Department</th>
                <th className="py-5 px-6 font-semibold text-[16px]">Experience</th>
                <th className="py-5 px-6 font-semibold text-[16px]">Deadline</th>
                <th className="py-5 px-6 font-semibold text-[16px] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {jobsData.map((job) => (
                <tr 
                  key={job.id} 
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <td className="py-5 px-6 text-[#1a202c] font-bold text-[16px]">
                    {job.designation}
                  </td>
                  <td className="py-5 px-6 text-gray-500 font-medium text-[15px]">
                    {job.unit}
                  </td>
                  <td className="py-5 px-6 text-gray-500 font-medium text-[15px]">
                    {job.department}
                  </td>
                  <td className="py-5 px-6 text-gray-500 font-medium text-[15px]">
                    {job.experience}
                  </td>
                  <td className="py-5 px-6 text-[#e53e3e] font-semibold text-[15px]">
                    {job.deadline}
                  </td>
                  <td className="py-5 px-6 text-right">
                    <Link href={job.link}>
                      <button className="bg-brand-green text-white px-5 py-2.5 rounded-full text-[14px] font-medium inline-flex items-center gap-1.5 hover:bg-brand-green-dark transition-all shadow-sm group-hover:shadow-md">
                        Details
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}