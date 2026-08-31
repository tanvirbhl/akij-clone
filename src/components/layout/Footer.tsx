"use client";

// Social SVG Components to replace missing Lucide brand icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const headerOffset = window.innerWidth < 1024 ? 80 : 90;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#1a202c] text-white pt-16 pb-8 mt-auto border-t-[4px] border-brand-green">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-end font-bold tracking-tight mb-4 bg-white inline-block px-3 py-1 rounded-sm">
              <span className="text-2xl text-gray-900 leading-none mr-1">AKIJ</span>
              <span className="text-[17px] text-brand-green leading-none">VENTURE</span>
            </div>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-6">
              Building a better future with sustainable business practices, high-quality products, and innovative ventures across Bangladesh and the globe.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all">
                <FacebookIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all">
                <TwitterIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all">
                <YoutubeIcon />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column 1 */}
          <div>
            <h3 className="text-[17px] font-bold text-white mb-5 border-b border-gray-700 pb-2 inline-block">Company</h3>
            <ul className="space-y-3 text-[15px] text-gray-400">
              <li><a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-brand-green transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="#leadership" onClick={(e) => handleScroll(e, "#leadership")} className="hover:text-brand-green transition-colors">Leadership</a></li>
              <li><a href="#career" onClick={(e) => handleScroll(e, "#career")} className="hover:text-brand-green transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h3 className="text-[17px] font-bold text-white mb-5 border-b border-gray-700 pb-2 inline-block">Explore</h3>
            <ul className="space-y-3 text-[15px] text-gray-400">
              <li><a href="#brands" onClick={(e) => handleScroll(e, "#brands")} className="hover:text-brand-green transition-colors">Our Brands</a></li>
              <li><a href="#sister-concerns" onClick={(e) => handleScroll(e, "#sister-concerns")} className="hover:text-brand-green transition-colors">Sister Concerns</a></li>
              <li><a href="#newsletters" onClick={(e) => handleScroll(e, "#newsletters")} className="hover:text-brand-green transition-colors">Newsletters</a></li>
              <li><a href="#news" onClick={(e) => handleScroll(e, "#news")} className="hover:text-brand-green transition-colors">News & Media</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[17px] font-bold text-white mb-5 border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <address className="text-gray-400 text-[14px] not-italic space-y-3 leading-relaxed">
              <p>
                <strong className="text-white block mb-1">Corporate Office:</strong>
                Akij House, 198 Bir Uttam Mir Shawkat Sarak,<br />
                Tejgaon, Dhaka-1208, Bangladesh.
              </p>
              <p>
                <strong className="text-white block mb-1">Email:</strong>
                <a href="mailto:info@akij.net" className="hover:text-brand-green transition-colors">info@akij.net</a><br />
                <a href="mailto:support@akijventure.com" className="hover:text-brand-green transition-colors">support@akijventure.com</a>
              </p>
              <p>
                <strong className="text-white block mb-1">Phone:</strong>
                08000121212
              </p>
            </address>
          </div>
          
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-gray-500">
          <p>&copy; {new Date().getFullYear()} Akij Venture Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}