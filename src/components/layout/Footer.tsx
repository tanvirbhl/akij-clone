export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">AKIJ VENTURE</h2>
            <p className="text-gray-400 max-w-sm">
              Building a better future with sustainable business practices and innovative ventures.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/brands" className="hover:text-white transition-colors">Our Brands</a></li>
              <li><a href="/career" className="hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>Akij House, 198 Bir Uttam Mir Shawkat Sarak</p>
              <p>Tejgaon, Dhaka-1208, Bangladesh</p>
              <p>Email: info@akijventure.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Akij Venture Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}