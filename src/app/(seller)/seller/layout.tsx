import React from 'react';
import Navbar from '@/components/seller/Navbar';

const SellerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 px-4 py-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
};

export default SellerLayout;
