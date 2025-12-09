import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Niger<span className="text-orange-500">Meals</span>
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Delicious Nigerian meals delivered fast. Taste the authentic flavors of home with every order!
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaMapMarkerAlt className="text-orange-500" />
              <span>Abuja, Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">→</span> Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">→</span> Menu
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">→</span> Cart
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">→</span> Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhone className="text-orange-500" />
                <a href="tel:+2349053650756" className="hover:text-orange-500 transition-colors">
                  +234 905 365 0756
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <a href="mailto:info@nigermeals.com" className="hover:text-orange-500 transition-colors">
                  info@nigermeals.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Follow us on social media for updates and special offers
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none text-white mb-2"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} NigerMeals. All Rights Reserved.
            </p>
            
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <FaHeart className="text-orange-500 animate-pulse" /> in Nigeria
            </p>
            
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}