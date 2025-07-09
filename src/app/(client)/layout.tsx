// src/app/(client)/layout.tsx
'use client';

import React from 'react';
import Navbar from '@/components/client/home/Navbar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
    </div>
  );
};

export default ClientLayout;
