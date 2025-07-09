'use client';

import React from 'react';
// import ClientHeader from '@/components/client';
import QuickActions from '@/components/client/home/QuickActions';
import Categories from '@/components/client/home/Categories';
import FeaturedItems from '@/components/client/home/FeaturedItems';
import RecentActivity from '@/components/client/home/RecentActivity';
import TrendingSection from '@/components/client/home/TrendingSection';

const ClientHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <ClientHeader /> */}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-gray-600">
            Discover amazing items and connect with sellers in your area
          </p>
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Categories */}
        <Categories />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Featured Items - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <FeaturedItems />
            <TrendingSection />
          </div>

          {/* Sidebar - Recent Activity */}
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientHome;
