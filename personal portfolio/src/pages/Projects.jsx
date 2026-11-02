import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Layers, Code, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = ['All', 'Full-Stack', 'Frontend & UI', 'Web Application'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeFilter === 'All' || project.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(project.category.toLowerCase());
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          tag="// 03. CASE STUDIES"
          title="Featured Engineering"
          gradientWord="Projects"
          subtitle="Explore my hands-on projects, from full-stack applications to interactive web experiences, built with modern technologies."
        />

        {/* Filter & Search Toolbar */}
        <div className="glass-panel p-4 rounded-2xl border border-slate-800 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              aria-label="Search projects"
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="p-12 text-center glass-panel rounded-2xl border border-slate-800 max-w-md mx-auto">
            <Layers className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="font-heading text-lg font-bold text-white">No projects found</h4>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              Try adjusting your search criteria or resetting filters.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner on Project Integrity */}
        {/* <div className="mt-20 p-6 rounded-2xl bg-[#0A1024]/80 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>All projects are easily configurable via <code className="text-blue-300">src/data/projects.js</code></span>
          </div>
          <span className="text-slate-500">Includes live demos, GitHub repositories, and dynamic route case studies.</span>
        </div> */}
      </div>
    </PageTransition>
  );
}
