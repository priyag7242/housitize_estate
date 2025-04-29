import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: 'url("/assets/images/construction-hero2.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Footer Content */}
      <div className="relative z-10 py-12 px-4 sm:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text">
                <li className="flex items-center justify-center">
                  <Mail size={18} className="mr-2" />
                  <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a>
                </li>
                <li className="flex items-center justify-center">
                  <Phone size={18} className="mr-2" />
                  <a href="tel:+1234567890" className="hover:text-white">+91 1234552365</a>
                </li>
                <li className="flex items-center justify-center text-center">
                  <MapPin size={18} className="mr-2" />
                  <span>123 Example St, Jaipur, India</span>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
                <a href="#" className="hover:text-pink-400"><Instagram size={24} /></a>
                <a href="#" className="hover:text-blue-300"><Twitter size={24} /></a>
                <a href="#" className="hover:text-blue-500"><Linkedin size={24} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 ">
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-12 border-t border-white/20 pt-6">
            <p>&copy; 2025 <span className="font-semibold">HOUSITIZE</span>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
