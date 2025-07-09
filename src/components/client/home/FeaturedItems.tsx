'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, MapPin, Clock } from 'lucide-react';

const FeaturedItems = () => {
  const featuredItems = [
    {
      id: 1,
      title: 'iPhone 14 Pro Max',
      price: '$899',
      originalPrice: '$1,199',
      image:
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop',
      seller: 'TechDeals Pro',
      location: 'New York, NY',
      timeLeft: '2 days left',
      condition: 'Like New',
      isFeatured: true,
    },
    {
      id: 2,
      title: 'MacBook Air M2',
      price: '$1,099',
      originalPrice: '$1,399',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop',
      seller: 'Apple Reseller',
      location: 'Los Angeles, CA',
      timeLeft: '5 days left',
      condition: 'Excellent',
      isFeatured: true,
    },
    {
      id: 3,
      title: 'Sony WH-1000XM4',
      price: '$199',
      originalPrice: '$349',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
      seller: 'AudioGear',
      location: 'Chicago, IL',
      timeLeft: '1 day left',
      condition: 'Very Good',
      isFeatured: false,
    },
    {
      id: 4,
      title: 'Canon EOS R5',
      price: '$2,499',
      originalPrice: '$3,899',
      image:
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop',
      seller: 'PhotoPro',
      location: 'Miami, FL',
      timeLeft: '3 days left',
      condition: 'Like New',
      isFeatured: true,
    },
  ];

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured Items</h2>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group"
          >
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {item.isFeatured && (
                <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Featured
                </span>
              )}
              <button className="absolute top-3 right-3 bg-white/90 hover:bg-white p-1.5 rounded-full transition">
                <Heart className="h-4 w-4 text-gray-700" />
              </button>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {item.condition}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {item.timeLeft}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                {item.title}
              </h3>

              <div className="flex items-center space-x-2 mb-3">
                <span className="text-2xl font-bold text-green-600">
                  {item.price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {item.originalPrice}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span className="font-medium truncate">{item.seller}</span>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.location}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md transition">
                  Make Offer
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm py-2 rounded-md transition">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
