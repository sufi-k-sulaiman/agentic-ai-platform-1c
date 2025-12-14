import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Layout({ children }) {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}