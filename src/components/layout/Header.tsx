"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "News & Media", href: "#news" },
  { name: "Our Brands", href: "#brands" },
  { name: "About Us", href: "#about" },
  { name: "Career", href: "#career" },
  { name: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy to highlight active nav item based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" } // Triggers when section hits the upper middle of viewport
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler with offset for the fixed header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const section = document.querySelector(href);
    if (section) {
      const headerOffset = 90; // Approximate height of your fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-100 ${
        isScrolled ? "bg-white shadow-sm py-4" : "bg-white py-5 md:py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center">
          <div className="flex items-end font-bold tracking-tight">
             <span className="text-3xl text-gray-900 leading-none mr-1">AKIJ</span>
             <span className="text-xl text-brand-green leading-none">VENTURE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[15px] font-medium transition-colors ${
                  isActive ? "text-brand-green" : "text-gray-800 hover:text-brand-green"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="container-custom flex flex-col py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 text-[15px] font-medium text-gray-800 hover:text-brand-green border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}