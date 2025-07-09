// app/components/Footer.tsx or src/components/Footer.tsx (depending on your structure)
"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="text-xl font-bold text-white">PawnSphere</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted marketplace connecting buyers and sellers for quality pre-owned items with secure transactions and fair prices.
            </p>
            <div className="flex space-x-4">
              <button aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">Browse Categories</Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-white transition-colors">Sell Items</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-white transition-colors">Safety Guide</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/electronics" className="hover:text-white transition-colors">Electronics</Link>
              </li>
              <li>
                <Link href="/categories/jewelry" className="hover:text-white transition-colors">Jewelry</Link>
              </li>
              <li>
                <Link href="/categories/tools" className="hover:text-white transition-colors">Tools</Link>
              </li>
              <li>
                <Link href="/categories/instruments" className="hover:text-white transition-colors">Instruments</Link>
              </li>
              <li>
                <Link href="/categories/collectibles" className="hover:text-white transition-colors">Collectibles</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@pawnsphere.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>123 Commerce St, City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PawnSphere. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
