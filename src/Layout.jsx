import React, { useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ChatBot, { ChatBotTrigger } from '@/components/ChatBot';

export default function Layout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Global function to open chat
  React.useEffect(() => {
    window.openChat = () => setIsChatOpen(true);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="icon" type="image/png" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" />
      </Helmet>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        
        {/* Chat Bot */}
        <AnimatePresence>
          {isChatOpen && <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
        </AnimatePresence>
        
        {!isChatOpen && <ChatBotTrigger onClick={() => setIsChatOpen(true)} />}
      </div>
    </HelmetProvider>
  );
}