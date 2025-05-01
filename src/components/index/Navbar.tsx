'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* Replace SVG with your logo if needed */}
          <svg className="h-10 w-10 text-blue-600" viewBox="0 0 10240 10240">
            <path d="..." />
          </svg>
          <span className="text-2xl font-bold text-blue-600">PawnNexus</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-sm text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600 transition">About Us</Link>
          <Link href="/services" className="text-sm text-gray-700 hover:text-blue-600 transition">Services</Link>
          <Link href="/pricing" className="text-sm text-gray-700 hover:text-blue-600 transition">Pricing</Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-3">
          <Link href="/signin" className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-sm font-semibold rounded-xl transition">Sign In</Link>
          <Link href="/signup" className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold rounded-xl transition">Sign Up</Link>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <Link href="/" className="text-sm text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600 transition">About Us</Link>
            <Link href="/services" className="text-sm text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link href="/pricing" className="text-sm text-gray-700 hover:text-blue-600 transition">Pricing</Link>
            <Link href="/contact" className="text-sm text-gray-700 hover:text-blue-600 transition">Contact</Link>
            <Link href="/signin" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition">Sign In</Link>
            <Link href="/signup" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
