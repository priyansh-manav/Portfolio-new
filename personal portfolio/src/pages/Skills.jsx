import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Braces,
  Palette,
  FileCode,
  Smartphone,
  Terminal,
  Server,
  Network,
  Database,
  Layers,
  GitBranch,
  Zap,
  Cpu,
  Layout,
  Binary,
  Sparkles,
  CheckCircle2,
  Filter
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { skillsData } from '../data/skills';

// Icon mapping dictionary
const iconMap = {
  Code2,
  Braces,
  Palette,
  FileCode,
  Smartphone,
  Terminal,
  Server,
  Network,
  Database,
  Layers,
  GitBranch,
  Zap,
  Cpu,
  Layout,
  Binary,
  Sparkles
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend & APIs' },
    { id: 'databases', name: 'Databases' },
    { id: 'tools', name: 'Tools & Workflow' },
    { id: 'approach', name: 'UI & Approach' }
  ];

  const filteredData = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((group) => group.id === selectedCategory);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          tag="// 02. COMPETENCIES"
          title="Technical"
          gradientWord="Skills & Stack"
          subtitle="Honest, practical breakdown of my full-stack programming competencies, frameworks, and developer workflows."
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-900/30 border border-blue-400/40'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Groups Display */}
        <div className="space-y-16">
          {filteredData.map((group, groupIdx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 sm:mt-0 font-mono">
                  {group.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      className="glass-card p-6 rounded-2xl border border-slate-800/90 hover:border-blue-500/40 flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
                    >
                      {/* Ambient hover glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-full blur-xl transition-all" />

                      <div className="space-y-3 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:text-cyan-300 group-hover:border-blue-500/40 transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-950/40 border border-blue-500/30 text-cyan-300">
                            {skill.highlight}
                          </span>
                        </div>

                        <h4 className="font-heading text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                          {skill.name}
                        </h4>

                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                        <span className="flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                          Used in Projects
                        </span>
                        <span>Full-Stack</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic & Practical Integration Note */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0A1024] border border-slate-800 max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs text-cyan-400">// Note on Technical Credibility</span>
          <h4 className="font-heading text-xl font-bold text-white">
            Practical Skills, Real Projects
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            I focus on building practical applications and continuously improving my technical skills through hands-on development. My experience includes projects like <strong className="text-slate-200">Expense Manager</strong> (React, Django, PostgreSQL) and <strong className="text-slate-200">StyleX E-Commerce</strong>. where I apply modern web technologies to solve real-world problems.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
