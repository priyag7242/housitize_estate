import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 sm:py-24 lg:py-32">
      <div className="container text-center mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@example.com" className="hover:text-gray-900">info@example.com</a>
              </li>
              <li className="flex items-center justify-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-gray-900">+91 1234552365</a>
              </li>
              <li className="flex items-center justify-center">
                <MapPin size={18} className="lg:-translate-y-3 xl:-translate-y-0" />
                <span>123 Example St, Jaipur, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="hover:text-gray-900 hover:-translate-y-1 transition-transform duration-200"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-900 hover:-translate-y-1 transition-transform duration-200"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-900 hover:-translate-y-1 transition-transform duration-200"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-900 hover:-translate-y-1 transition-transform duration-200"><Linkedin size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-900">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-gray-900">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-gray-900">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-gray-900">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2025 DEMIGOD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

