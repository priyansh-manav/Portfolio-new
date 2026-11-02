import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Terminal, Code2, Database, Layers, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import PageTransition from '../components/PageTransition';
import Scene3D from '../components/Scene3D';
import FloatingCodeCard from '../components/FloatingCodeCard';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';

const roles = [
  'Full-Stack Developer',
  'React Developer',
  'Creative Coder'
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden py-12 lg:py-20">
        {/* Subtle radial glow spots */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 radial-glow-blue pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 radial-glow-violet pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-slate-300">Open for Opportunities &amp; Internships</span>
                <span className="text-cyan-400 font-semibold">• B.Tech CSE (3rd Year)</span>
              </motion.div>

              {/* Main Animated Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2"
              >
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  Hi, I'm <br />
                  <span className="text-gradient-primary">Priyansh Manav</span>
                </h1>

                {/* Animated Role Text */}
                <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
                  <span className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mr-2">
                    I am a
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[roleIndex]}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300 border-b-2 border-cyan-400 pb-0.5"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Professional Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                I build responsive web applications with React, Django, and PostgreSQL, combining clean interfaces with reliable backend functionality. I enjoy solving practical problems and turning ideas into working products.
              </motion.p>

              {/* Call to Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <Link
                  to="/projects"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium text-sm flex items-center shadow-lg shadow-blue-900/30 hover:shadow-blue-700/40 border border-blue-400/40 transition-all active:scale-95 group"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/resume"
                  className="px-6 py-3.5 rounded-xl bg-[#0A1024]/90 hover:bg-[#101A32] text-slate-200 hover:text-white font-medium text-sm flex items-center border border-slate-700/80 hover:border-slate-500 transition-all active:scale-95 group"
                >
                  <Download className="w-4 h-4 mr-2 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                  <span>View Resume</span>
                </Link>
              </motion.div>

              {/* Quick Tech Badge Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-slate-400"
              >
                <span className="text-slate-500 font-semibold">
                  Core Stack:</span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-blue-300">React.js</span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-violet-300">Django</span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-cyan-300">PostgreSQL</span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-purple-300">JavaScript</span>
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300">Tailwind CSS</span>
              </motion.div>
            </div>

            {/* Right Column: 3D Technical Sculpture & Floating Code Card */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              {/* Interactive 3D Canvas */}
              <div className="relative w-full aspect-square max-w-[420px] mx-auto">
                <Scene3D className="w-full h-full" />

                {/* Floating Micro-badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-2 left-2 z-20 px-3 py-1.5 rounded-lg glass-panel border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-xl flex items-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>Interactive 3D Mesh</span>
                </motion.div>
              </div>

              {/* Floating Code Panel */}
              <div className="w-full mt-4">
                <FloatingCodeCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHORT ABOUT / VALUE PROPOSITION ================= */}
      <section className="py-20 relative border-t border-slate-800/80 bg-[#070D1E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Identity</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
                Engineering with <span className="text-gradient-cyan">Discipline &amp; Imagination</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                I'm a (3rd year) B.Tech Computer Science Engineering student who enjoys building practical web applications with clean interfaces and reliable backend systems. I work with React, Django, and databases to turn ideas into functional products while continuously improving my problem-solving and development skills.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-white transition-colors group"
                >
                  <span>Read My Development Journey</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-6 rounded-2xl border border-slate-800">
                <div className="text-3xl font-heading font-bold text-blue-400 mb-1">3rd</div>
                <div className="text-sm font-medium text-slate-200">Year CSE Student</div>
                <p className="text-xs text-slate-400 mt-2">Active undergraduate academic focus in algorithmic problem-solving &amp; DBMS.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800">
                <div className="text-3xl font-heading font-bold text-violet-400 mb-1">3+</div>
                <div className="text-sm font-medium text-slate-200">Featured Builds</div>
                <p className="text-xs text-slate-400 mt-2">Full-stack expense tracking, e-commerce platform, and spiritual web apps.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800">
                <div className="text-3xl font-heading font-bold text-cyan-400 mb-1">Full-Stack</div>
                <div className="text-sm font-medium text-slate-200">Development Focus</div>
                <p className="text-xs text-slate-400 mt-2">Frontend, APIs and databases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS PREVIEW ================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">// Portfolio</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
                Featured <span className="text-gradient-primary">Projects</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl">
                Explore genuine full-stack applications with verified codebases, responsive user interfaces, and structured data handling.
              </p>
            </div>
            <Link
              to="/projects"
              className="mt-6 md:mt-0 inline-flex items-center text-xs font-mono font-semibold text-cyan-400 hover:text-white transition-colors group"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS OVERVIEW PREVIEW ================= */}
      <section className="py-24 relative border-t border-slate-800/80 bg-[#070D1E]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="// 03. TOOLKIT"
            title="Technical Competencies &"
            gradientWord="Skills"
            subtitle="Organized across frontend, backend logic, relational databases, and modern developer workflows."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">Frontend</h3>
              <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                <li>• React.js (Hooks &amp; SPA)</li>
                <li>• JavaScript (ES6+)</li>
                <li>• Tailwind CSS</li>
                <li>• HTML5 &amp; CSS3</li>
                <li>• Responsive UI Design</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">Backend &amp; APIs</h3>
              <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                <li>• Python</li>
                <li>• Django</li>
                <li>• Django REST Framework</li>
                <li>• RESTful API Design</li>
                <li>• JSON Serialization</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">Databases</h3>
              <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                <li>• PostgreSQL</li>
                <li>• MySQL</li>
                <li>• Schema Design</li>
                <li>• SQL Queries &amp; Joins</li>
                <li>• ORM Data Access</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">Tools &amp; Workflow</h3>
              <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                <li>• Git &amp; GitHub</li>
                <li>• Vite Dev Server</li>
                <li>• VS Code &amp; Postman</li>
                <li>• Responsive Testing</li>
                <li>• UI Implementation</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/skills"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm font-medium text-slate-200 hover:text-white hover:border-blue-500/50 transition-all group"
            >
              <span>Explore Interactive Skill Matrix</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 text-cyan-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#0A1024] via-[#101A32] to-[#0A1024] border border-blue-500/30 shadow-2xl text-center overflow-hidden">
            {/* Background cyber grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-25" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-900/40 border border-blue-400/30 text-xs font-mono text-cyan-300">
                // Let's Connect
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Ready to build something <span className="text-gradient-primary">extraordinary?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Whether you're looking for an enthusiastic full-stack developer intern, a collaborative teammate, or assistance with modern web development, my inbox is always open.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium text-sm shadow-lg shadow-blue-900/30 border border-blue-400/40 transition-all active:scale-95 flex items-center"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-700/80 transition-all"
                >
                  View Available Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
