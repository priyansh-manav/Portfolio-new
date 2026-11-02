import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] flex flex-col relative selection:bg-blue-600/30 selection:text-cyan-300">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Global Ambient Background Atmosphere */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-24 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <BackToTop />
    </div>
  );
}
