'use client';

import React from 'react';
import { Activity, ShoppingBag, Heart, User } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'purchase',
      title: 'You made an offer on iPhone 14 Pro',
      time: '2 hours ago',
      icon: ShoppingBag,
      iconColor: 'text-green-600',
    },
    {
      id: 2,
      type: 'favorite',
      title: 'Added MacBook Air to favorites',
      time: '5 hours ago',
      icon: Heart,
      iconColor: 'text-red-600',
    },
    {
      id: 3,
      type: 'profile',
      title: 'Updated your profile information',
      time: '1 day ago',
      icon: User,
      iconColor: 'text-blue-600',
    },
    {
      id: 4,
      type: 'purchase',
      title: 'Offer accepted for Gaming Headset',
      time: '2 days ago',
      icon: ShoppingBag,
      iconColor: 'text-green-600',
    },
  ];

  const stats = [
    { label: 'Items Saved', value: '12' },
    { label: 'Active Offers', value: '3' },
    { label: 'This Month', value: '$2,450' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats */}
      <section className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Stats</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activity */}
      <section className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <button className="text-sm text-blue-600 font-medium hover:underline focus:outline-none">
            View All
          </button>
        </div>

        <div className="space-y-5">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 ${activity.iconColor}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
        <div className="space-y-2">
          {['My Offers', 'Saved Items', 'Purchase History', 'Account Settings'].map((text) => (
            <button
              key={text}
              className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md transition"
            >
              {text}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecentActivity;
