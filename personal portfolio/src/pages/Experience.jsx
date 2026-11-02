import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Milestone, Code2, CheckCircle2, Calendar, Award, ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { journeyMilestones } from '../data/experience';

export default function Experience() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          tag="// 04. EXPERIENCE"
          title="Education &amp; Engineering"
          gradientWord="Journey"
          subtitle="A showcase of my technical experience, hands-on projects, learning milestones, and growth as a Computer Science Engineering student.."
        />

        {/* Milestone Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-8 space-y-16">
          {journeyMilestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#050816] border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 transition-all">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Timestamp on Left for Large Screens */}
              <div className="hidden md:block absolute -left-40 top-1 text-right w-28">
                <span className="font-mono text-xs font-semibold text-blue-400 block">
                  {item.period}
                </span>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mt-0.5">
                  {item.status}
                </span>
              </div>

              {/* Main Timeline Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 group-hover:border-blue-500/40 relative">
                {/* Mobile Timestamp */}
                <div className="md:hidden mb-2">
                  <span className="font-mono text-xs text-blue-400 font-semibold">
                    {item.period} • {item.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-950/40 border border-blue-500/30 text-cyan-300">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.institution}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-mono text-violet-300 mb-4">
                  {item.role}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 block mb-1">
                    Key Outcomes &amp; Insights:
                  </span>
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Philosophy Note */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-950/20 via-slate-900/60 to-violet-950/20 border border-slate-800 text-center max-w-3xl mx-auto space-y-3">
          <GraduationCap className="w-8 h-8 text-cyan-400 mx-auto" />
          <h4 className="font-heading text-lg font-bold text-white">
            Built on Skills, Proven Through Projects
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            I focus on building practical skills through hands-on projects, applying engineering fundamentals, and continuously learning as a Computer Science Engineering student.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
