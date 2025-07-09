'use client';

import { ArrowRight, Smartphone, DollarSign } from 'lucide-react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-800/90"></div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied users who have found amazing deals and sold their items with ease
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Buyer Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                <Smartphone className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Buyers</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Discover incredible deals on quality pre-owned items from trusted sellers across the country.
            </p>
            <Link href="/categories/electronics" className="inline-flex items-center px-5 py-2.5 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition">
              Start Shopping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Seller Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Sellers</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Turn your unused items into cash quickly and safely with our easy-to-use selling platform.
            </p>
            <button className="inline-flex items-center px-5 py-2.5 border border-white text-white font-semibold rounded hover:bg-white hover:text-blue-600 transition">
              List Your Items
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-blue-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-sm">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$2M+</div>
              <div className="text-sm">Items Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
