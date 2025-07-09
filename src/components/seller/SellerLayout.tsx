'use client';

import React from 'react';
import {
  LayoutDashboard,
  Package,
  Plus,
  DollarSign,
  BarChart3,
  Settings,
} from 'lucide-react';

import { Tab } from '@/types/sellerTabs';

interface SellerLayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'items', label: 'My Items', icon: Package },
  { id: 'add-item', label: 'Add Item', icon: Plus },
  { id: 'sales', label: 'Sales', icon: DollarSign },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const SellerLayout: React.FC<SellerLayoutProps> = ({
  children,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Fixed Sidebar with top margin to account for fixed navbar */}
      <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-sm z-10 hidden md:block">
        <div className="p-4">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id as Tab)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main content area with left and top margin */}
      <main className="flex-1 ml-0 md:ml-64 px-4 py-8 overflow-x-auto">
        {children}
      </main>
    </div>
  );
};

export default SellerLayout;
