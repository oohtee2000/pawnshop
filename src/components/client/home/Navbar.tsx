'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Bell, User, Menu, X, ShoppingCart, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            
            <span className="text-2xl font-bold text-blue-600">PawnNexus</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Icon */}
            <button className="lg:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <Link href="/cart" aria-label="Cart">
              <div className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </div>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" aria-label="Wishlist">
              <div className="relative p-2 text-gray-500 hover:text-pink-500 transition-colors">
                <Heart className="h-5 w-5" />
              </div>
            </Link>

            {/* Notifications */}
            <button
              aria-label="Notifications"
              className="relative p-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {/* Profile */}
            <button
              aria-label="Profile"
              className="flex items-center space-x-2 p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:block text-sm font-medium">Profile</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-3 pb-4 space-y-3 bg-gray-50 rounded-md mt-2 shadow">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </form>

            {/* Mobile Icons for Cart, Wishlist, etc. */}
            <div className="flex justify-around text-gray-700">
              <Link href="/cart" className="flex flex-col items-center text-sm hover:text-blue-600">
                <ShoppingCart className="h-5 w-5 mb-1" />
                Cart
              </Link>
              <Link href="/wishlist" className="flex flex-col items-center text-sm hover:text-pink-500">
                <Heart className="h-5 w-5 mb-1" />
                Wishlist
              </Link>
              <button className="flex flex-col items-center text-sm hover:text-blue-600">
                <Bell className="h-5 w-5 mb-1" />
                Alerts
              </button>
              <button className="flex flex-col items-center text-sm hover:text-blue-600">
                <User className="h-5 w-5 mb-1" />
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
