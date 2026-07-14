import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';

export const metadata = {
  title: 'SaaSKit - Foundation',
  description: 'Production-ready Next.js foundation with App Router, TypeScript, and Tailwind'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 w-full">
          <div className="container py-10">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
