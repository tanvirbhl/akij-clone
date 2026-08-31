"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
  };

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
            CONTACT US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[38px] font-bold text-gray-900"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to talk with us?
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-md">
              Have question in mind? Want to know more about our company or give
              report just fill up below form we will get touch with you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-gray-900 font-semibold text-[15px] mb-2">
                  Name: <span className="text-brand-green">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-shadow"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-900 font-semibold text-[15px] mb-2">
                  Email: <span className="text-brand-green">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-shadow"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-gray-900 font-semibold text-[15px] mb-2">
                  Subject: <span className="text-brand-green">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-shadow"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-gray-900 font-semibold text-[15px] mb-2">
                  Message: <span className="text-brand-green">*</span>
                </label>
                <textarea
                  placeholder="Enter Your Message"
                  required
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-shadow resize-y"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-brand-green text-white font-bold text-[16px] py-3.5 rounded-full hover:bg-brand-green-dark transition-colors duration-300 mt-2"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* Contact Info Card */}
            <div className="bg-[#2a3441] rounded-[16px] p-6 md:p-8 mb-6 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-white font-bold text-[16px] mb-3">Call Us</h4>
                  <p className="text-gray-300 text-[13px] leading-relaxed">
                    Toll Free: 08000121212<br />
                    Phone: 08000121212
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-[16px] mb-3">Email Us</h4>
                  <p className="text-gray-300 text-[13px] leading-relaxed break-all">
                    info@akij.net<br />
                    support@akijventure.com
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-[16px] mb-3">Visit Us</h4>
                  <p className="text-gray-300 text-[13px] leading-relaxed">
                    Akij House, 198 Bir Uttam Mir, Shawkat Sarak, Tejgaon Sarak
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full flex-grow min-h-[350px] lg:min-h-[400px] bg-gray-200 rounded-[16px] overflow-hidden shadow-inner relative border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902263162758!2d90.3980172153628!3d23.75086398458925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8908da66c0d%3A0x6a0a0b63b2f82c47!2sAkij%20House!5e0!3m2!1sen!2sbd!4v1689312567849!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Akij Venture Location"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}