import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Code2,
  Compass,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Terminal,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import { learningPhilosophy } from "../data/experience";

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Hero */}
        <SectionHeading
          tag="// 01. PROFILE & MINDSET"
          title="About"
          gradientWord="Priyansh Manav"
          subtitle="Full-Stack Developer, Creative Coder, and 3rd-year Computer Science Engineering undergraduate passionate about purposeful web development."
        />

        {/* Narrative & Highlights Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <h3 className="font-heading text-2xl font-bold text-white">
              Building Ideas Into Powerful Web Experiences.
            </h3>

            <p>
              I am a 3rd-year{" "}
              <strong className="text-white font-semibold">
                B.Tech Computer Science Engineering
              </strong>{" "}
              student passionate about building modern, responsive, and reliable web applications.
            </p>

            <p>
             I enjoy turning ideas into real-world projects, combining clean UI design with functional backend systems. My current tech stack includes {" "}
              <span className="text-sky-300 font-mono">React.js</span>,{" "}
              <span className="text-cyan-300 font-mono">Tailwind CSS</span>,{" "}
              <span className="text-yellow-300 font-mono">JavaScript</span>,{" "}
              <span className="text-blue-300 font-mono">Python</span>,{" "}
              <span className="text-sky-300 font-mono">REST APIs</span>,{" "}
              <span className="text-violet-300 font-mono">Django</span>, and{" "}
              <span className="text-emerald-300 font-mono">PostgreSQL</span>.
            </p>

            <p>
              Through projects like an Expense Manager and a Sadhana Tracker, I'm gaining hands-on experience in frontend development, backend integration, database management, and creating responsive user experiences.
            </p>

            <p>
              Beyond writing code, I enjoy solving problems, learning new technologies, and improving the way applications look and work. I'm continuously working on strengthening my development skills and building projects that solve practical problems.
            </p>
            <p>
              <strong className="text-white font-semibold">
                Currently focused on:
              </strong>{" "} Full-Stack Development, Data Structures & Algorithms, and building production-ready web applications.
            </p>

            {/* Quick Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Disciplined Codebase</span>
                </div>
                <p className="text-xs text-slate-400">
                  Clean modular component hierarchies, strict typing/linting
                  conventions, and reusable state utilities.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center space-x-2 text-violet-400 font-semibold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Full-Stack Mindset</span>
                </div>
                <p className="text-xs text-slate-400">
                  Comfortable modeling relational schemas, designing REST APIs,
                  and fine-tuning responsive interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card: Academic & Identity Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-violet-600 to-cyan-400 p-[2px]">
                  <div className="w-full h-full bg-[#070D1E] rounded-[14px] flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-white">
                      PM
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Priyansh Manav
                  </h4>
                  <p className="text-xs font-mono text-cyan-300">
                    Full-Stack Developer
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    B.Tech CSE Student
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Current Program</span>
                  <span className="text-slate-200">
                    B.Tech Computer Science
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Academic Standing</span>
                  <span className="text-emerald-400">3rd Year — B.Tech CSE</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Primary Frontend</span>
                  <span className="text-blue-300">React.js, Tailwind CSS, JavaScript</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Primary Backend</span>
                  <span className="text-violet-300">Python, Django, REST APIs</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Databases</span>
                  <span className="text-cyan-300">PostgreSQL, MySQL</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Version Control</span>
                  <span className="text-slate-200">Git &amp; GitHub</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <Link
                  to="/resume"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 font-medium text-xs flex items-center justify-center transition-colors"
                >
                  <span>View My Resume</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Development Philosophy Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
              // Core Beliefs
            </span>
            <h3 className="font-heading text-3xl font-bold text-white mt-2">
              Development Philosophy
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPhilosophy.principles.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 relative group"
              >
                
                <h4 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center max-w-3xl mx-auto">
            <p className="font-heading italic text-base sm:text-lg text-slate-200">
              "{learningPhilosophy.quote}"
            </p>
            <span className="block mt-2 font-mono text-xs text-blue-400">
              — Priyansh Manav
            </span>
          </div>
        </div>

        {/* Technical Problem-Solving Approach */}
        <div className="mb-20 glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                // MY DEVELOPMENT PROCESS
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                From Idea to Production-Ready Product.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
               I turn complex ideas into reliable, user-friendly applications through structured planning, clean architecture, and continuous refinement.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#050816]/70 border border-slate-800">
                <span className="font-mono text-xs text-blue-400">Step 01 / PLAN</span>
                <h5 className="font-heading text-base font-semibold text-white mt-1">
                  Understand Before Building
                </h5>
                <p className="text-xs text-slate-400 mt-2">
                  Break the problem into clear requirements, plan the data model, and define how the frontend and backend will communicate.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#050816]/70 border border-slate-800">
                <span className="font-mono text-xs text-violet-400">
                  Step 02 / BUILD
                </span>
                <h5 className="font-heading text-base font-semibold text-white mt-1">
                 Build with Clean Architecture
                </h5>
                <p className="text-xs text-slate-400 mt-2">
                  Create reusable React components and organized backend logic that are easier to understand, maintain, and extend.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#050816]/70 border border-slate-800">
                <span className="font-mono text-xs text-cyan-400">Step 03 / INTEGRATE</span>
                <h5 className="font-heading text-base font-semibold text-white mt-1">
                  Connect Every Layer
                </h5>
                <p className="text-xs text-slate-400 mt-2">
                  Integrate REST APIs and databases, handle loading and error states, validate inputs, and keep data flows predictable.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#050816]/70 border border-slate-800">
                <span className="font-mono text-xs text-emerald-400">
                  Step 04 / REFINE
                </span>
                <h5 className="font-heading text-base font-semibold text-white mt-1">
                  Test, Optimize &amp; Polish
                </h5>
                <p className="text-xs text-slate-400 mt-2">
                  Check responsive layouts, fix edge cases, improve performance, and refine interactions across devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action CTA */}
        <div className="text-center pt-8 border-t border-slate-800">
          <h4 className="font-heading text-2xl font-bold text-white mb-3">
            Want to see how this translates to code?
          </h4>
          <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
            Explore real-world projects where thoughtful design meets reliable engineering.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium text-sm flex items-center shadow-lg hover:shadow-blue-900/30 transition-all"
            >
              <span>Explore Featured Projects</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
