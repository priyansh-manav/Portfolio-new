import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Terminal, AlertTriangle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-md w-full space-y-8 glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <span className="font-mono text-xs text-red-400 uppercase tracking-widest px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 inline-block">
              // ERROR 404
            </span>

            <h1 className="font-heading text-6xl sm:text-7xl font-extrabold text-white tracking-tight">
              4<span className="text-gradient-primary">0</span>4
            </h1>

            <h2 className="font-heading text-xl font-bold text-slate-200">
              Page Not Found
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              The requested coordinate does not exist in this sector or has been moved.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium text-xs flex items-center justify-center shadow-lg transition-all"
            >
              <Home className="w-3.5 h-3.5 mr-1.5" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
