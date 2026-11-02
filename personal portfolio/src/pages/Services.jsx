import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Layout,
  Layers,
  Smartphone,
  Palette,
  Network,
  Zap,
  CheckCircle2,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { servicesData } from '../data/services';

const serviceIcons = {
  Layout,
  Layers,
  Smartphone,
  Palette,
  Network,
  Zap
};

export default function Services() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          tag="// 05. OFFERINGS"
          title="Engineering &amp; Development"
          gradientWord="Services"
          subtitle="Building responsive websites and full-stack web applications with modern frontend technologies, backend APIs, and database integration."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, idx) => {
            const IconComponent = serviceIcons[service.icon] || Layout;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between group hover:border-blue-500/50 transition-all duration-300"
              >
                <div>
                  {/* Service Icon & ID */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:bg-blue-600/30 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      0{idx + 1} //
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono text-blue-400 mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      Scope &amp; Deliverables:
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills & Service CTA */}
                <div className="pt-4 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700/80 hover:border-blue-400/50 text-xs font-medium flex items-center justify-center transition-all group/btn"
                  >
                    <span>Request Collaboration</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Collaboration Workflow Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 text-center max-w-4xl mx-auto space-y-6">
          <MessageSquare className="w-10 h-10 text-cyan-400 mx-auto" />
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Have a Project or Internship Opportunity?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            I'm open to software development internships, freelance web projects, and collaborations where I can build practical solutions using React, Django, and modern web technologies.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium text-sm shadow-lg shadow-blue-900/30 transition-all"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
