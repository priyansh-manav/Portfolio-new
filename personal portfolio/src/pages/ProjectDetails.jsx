import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Layers,
  Terminal,
  Code2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";
import PageTransition from "../components/PageTransition";
import { projectsData, getProjectBySlug } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Find previous and next projects for bottom navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject =
    projectsData[currentIndex - 1] || projectsData[projectsData.length - 1];
  const nextProject = projectsData[currentIndex + 1] || projectsData[0];

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Hero Header */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-cyan-300">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">
              Project #{project.id.toString().padStart(2, "0")}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-blue-300 font-medium">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Action CTAs: Live Demo + Source Code */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium text-sm flex items-center shadow-lg shadow-blue-900/30 border border-blue-400/30 transition-all active:scale-95"
            >
              <span>Launch Live Demo</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm flex items-center border border-slate-700/80 transition-all active:scale-95"
            >
              <GithubIcon className="w-4 h-4 mr-2" />
              <span>Inspect Source Code</span>
            </a>
          </div>
        </div>

        {/* Visual Mockup Showcase Stage */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl bg-gradient-to-br from-[#0A1024] via-[#101A32] to-[#0A1024]">
          {/* Browser Window Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#050816]/90 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline-block">
                https://priyanshmanav.dev/apps/{project.slug}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Showcase</span>
            </div>
          </div>

          {/* Graphical UI Preview Frame */}
          {/* <div className={`p-8 sm:p-14 bg-gradient-to-br ${project.mockupGradient} flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[320px]`}>
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <div className="relative z-10 p-6 rounded-3xl bg-[#050816]/80 border border-slate-700/80 shadow-2xl max-w-lg w-full">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-cyan-300 mx-auto mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                {project.title} Interface
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {project.fullDescription}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-blue-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div> */}

          {/* Graphical UI Preview Frame */}
          <div
            className={`relative overflow-hidden bg-gradient-to-br ${project.mockupGradient} ${
              project.image
                ? "p-3 sm:p-6"
                : "p-8 sm:p-14 flex flex-col items-center justify-center text-center min-h-[320px]"
            }`}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

            {project.image ? (
              <div className="relative z-10 w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/15 bg-slate-950 shadow-2xl">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#050816]/95 border-b border-slate-800">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 truncate text-xs text-slate-400">
                    {project.title} — Live Preview
                  </span>
                </div>

                <img
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  className="block h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="relative z-10 p-6 rounded-3xl bg-[#050816]/80 border border-slate-700/80 shadow-2xl max-w-lg w-full">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-cyan-300 mx-auto mb-4">
                  <Layers className="w-6 h-6" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {project.title} Interface
                </h3>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {project.fullDescription}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-blue-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-semibold text-sm">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-heading text-lg font-bold text-white">
                The Challenge &amp; Problem
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm">
              <Lightbulb className="w-5 h-5" />
              <h3 className="font-heading text-lg font-bold text-white">
                The Engineering Solution
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features & Architecture Highlights */}
        <div className="mb-16 glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800">
          <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center">
            <Code2 className="w-6 h-6 text-blue-400 mr-2.5" />
            <span>Key Architectural Features</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Challenges */}
        {project.challenges && (
          <div className="mb-16 p-8 rounded-3xl bg-[#0A1024]/80 border border-slate-800">
            <h3 className="font-heading text-2xl font-bold text-white mb-4 flex items-center">
              <Terminal className="w-6 h-6 text-violet-400 mr-2.5" />
              <span>Technical Hurdles &amp; Engineering Resolutions</span>
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Practical obstacles encountered during architecture and how they
              were solved.
            </p>

            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-slate-800/70"
                >
                  <span className="font-mono text-cyan-400 font-bold">
                    0{idx + 1}.
                  </span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Previous and Next Project Navigation Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center space-x-3 p-4 rounded-xl glass-card border border-slate-800 hover:border-blue-500/40 w-full sm:w-auto transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <span className="text-[11px] font-mono text-slate-500 block">
                Previous Project
              </span>
              <span className="font-heading font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center justify-end space-x-3 p-4 rounded-xl glass-card border border-slate-800 hover:border-blue-500/40 w-full sm:w-auto transition-all group text-right"
          >
            <div className="text-right">
              <span className="text-[11px] font-mono text-slate-500 block">
                Next Project
              </span>
              <span className="font-heading font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
