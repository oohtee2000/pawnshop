'use client';

import React from 'react';
import { Plus, Search, TrendingUp, MapPin } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      icon: Search,
      title: 'Browse Items',
      description: 'Explore available items',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: Plus,
      title: 'List Item',
      description: 'Sell something',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Trending',
      description: 'Popular right now',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      icon: MapPin,
      title: 'Nearby',
      description: 'Items near you',
      color: 'bg-orange-500 hover:bg-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <div
            key={index}
            className="group p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${action.color} transition-colors duration-300`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-gray-900">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-500">{action.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickActions;
