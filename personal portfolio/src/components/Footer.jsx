import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Heart, Code2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { navLinks, socialLinks } from '../data/navigation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050816] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-t from-blue-900/10 via-violet-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-violet-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-bold text-sm text-white">PM</span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                Priyansh Manav
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Developer &amp; Creative Coder. Pursuing B.Tech in Computer Science Engineering (3rd Year). Focused on crafting robust web architectures and expressive digital experiences.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com/priyansh-manav/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyansh-manav-669294380/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:priyanshmanav0@gmail.com"
                aria-label="Send direct email"
                className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links Column */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={scrollToTop}
                  className="flex items-center text-xs font-mono text-blue-400 hover:text-blue-300 pt-2 transition-colors group"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-3.5 h-3.5 ml-1 transition-transform group-hover:-translate-y-0.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono space-y-3 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Priyansh Manav. All rights reserved.
          </div>

          {/* <div className="flex items-center space-x-1.5">
            <span>Engineered with React, Vite &amp; Tailwind</span>
            <span className="text-slate-600">•</span>
            <span className="text-blue-400">#050816</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
