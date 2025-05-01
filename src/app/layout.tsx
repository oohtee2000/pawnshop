// Removed unused Navbar import
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Pawnshop App',
  description: 'A modern pawnshop management app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: '80vh', padding: '1rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
