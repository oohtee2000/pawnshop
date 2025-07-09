'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, LayoutDashboard, Bell, User } from 'lucide-react';

const navLinks = [
  { href: '/seller/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
  { href: '/seller/notification', label: 'Notification', icon: <Bell size={16} /> },
  { href: '/seller/profile', label: 'Profile', icon: <User size={16} /> },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Tag */}
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold text-gray-900">PawnShop Pro</h1>
          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Seller</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-red-600 transition-colors">
          <div className="w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center font-semibold">
            JS
          </div>
          <span>Logout</span>
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
