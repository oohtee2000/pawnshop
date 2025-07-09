'use client';

import Link from 'next/link';
import { Search, TrendingUp, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Connect.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Trade.</span>
                <br />
                Thrive.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your trusted marketplace for quality pre-owned items. We connect sellers with buyers,
                ensuring fair deals and authentic products every time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/categories/electronics">
                <a className="inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 rounded-md transition">
                  <Search className="w-5 h-5 mr-2" />
                  Browse Items
                </a>
              </Link>

              <button className="text-lg px-8 py-3 border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 rounded-md transition">
                Sell Your Items
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Listings</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Easy Search</h3>
                  <p className="text-sm text-gray-600">
                    Find exactly what you are looking for with our advanced filters
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure Deals</h3>
                  <p className="text-sm text-gray-600">
                    Protected transactions with buyer and seller guarantees
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fair Pricing</h3>
                  <p className="text-sm text-gray-600">
                    AI-powered pricing suggestions for optimal value
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Deals</h3>
                  <p className="text-sm text-gray-600">
                    Fast turnaround times for both buying and selling
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Content */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
