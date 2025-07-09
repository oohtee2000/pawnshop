'use client';

import React from 'react';
import Image from 'next/image';
import { TrendingUp, Eye, ArrowRight } from 'lucide-react';

const TrendingSection = () => {
  const trendingItems = [
    {
      id: 1,
      title: 'Gaming Setup Bundle',
      price: '$1,299',
      views: 156,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop',
      trend: '+25%',
    },
    {
      id: 2,
      title: 'Vintage Rolex Watch',
      price: '$4,999',
      views: 89,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
      trend: '+18%',
    },
    {
      id: 3,
      title: 'Designer Handbag',
      price: '$899',
      views: 203,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
      trend: '+12%',
    },
  ];

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Trending Now</h2>
        </div>
        <button className="flex items-center space-x-1 px-4 py-1.5 text-sm font-medium border border-gray-300 rounded hover:bg-gray-100 transition">
          <span>View All</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-4">
        {trendingItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image using next/image */}
            <div className="relative w-16 h-16">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-lg object-cover"
                sizes="64px"
              />
            </div>

            {/* Text and Info */}
            <div className="flex-1 ml-4">
              <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
              <div className="flex items-center flex-wrap gap-4 mt-1 text-sm text-gray-600">
                <span className="text-green-600 font-medium">{item.price}</span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1 text-gray-400" />
                  {item.views} views
                </span>
                <span className="text-green-500 font-medium">{item.trend}</span>
              </div>
            </div>

            {/* Action Button */}
            <button className="px-3 py-1.5 text-sm font-medium border border-gray-300 rounded hover:bg-gray-100 transition">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
