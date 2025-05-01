import React from 'react';
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/about" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-yellow-500">PawnNexus</span>
              <span className="text-blue-900 font-medium">Marketplace</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Connecting sellers and buyers through trusted pawnshop owners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-900 hover:text-emerald-600">
                <span className="sr-only">Facebook</span>
                <div className="h-6 w-6 bg-blue-900 rounded-full"></div>
              </a>
              <a href="#" className="text-blue-900 hover:text-emerald-600">
                <span className="sr-only">Twitter</span>
                <div className="h-6 w-6 bg-blue-900 rounded-full"></div>
              </a>
              <a href="#" className="text-blue-900 hover:text-emerald-600">
                <span className="sr-only">Instagram</span>
                <div className="h-6 w-6 bg-blue-900 rounded-full"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-900">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Browse Items</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Sell Items</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Find Pawnshops</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">About Us</Link></li>
            </ul>
          </div>

          {/* For Sellers */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-900">For Sellers</h3>
            <ul className="space-y-3">
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">How to Sell</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Seller Fees</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Seller Dashboard</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Seller FAQ</Link></li>
            </ul>
          </div>

          {/* For Pawnshop Owners */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-900">For Pawnshop Owners</h3>
            <ul className="space-y-3">
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Benefits</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Commission Structure</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Owner Dashboard</Link></li>
              <li><Link href="/#" className="text-gray-600 hover:text-emerald-600">Owner FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} PawnNexus Marketplace. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/#" className="text-sm text-gray-600 hover:text-emerald-600">Terms of Service</Link>
              <Link href="/#" className="text-sm text-gray-600 hover:text-emerald-600">Privacy Policy</Link>
              <Link href="/#" className="text-sm text-gray-600 hover:text-emerald-600">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
