import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --color-primary: #0F2B46;
          --color-secondary: #1E5A8A;
          --color-accent: #10B981;
          --color-accent-hover: #059669;
          --color-text: #0F2B46;
          --color-text-muted: #64748B;
          --color-bg: #FFFFFF;
          --color-bg-alt: #FAFBFC;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        ::selection {
          background-color: #10B981;
          color: white;
        }
      `}</style>
      
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}