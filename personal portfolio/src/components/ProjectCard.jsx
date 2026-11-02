import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectCard({ project, index = 0 }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="group relative h-full flex flex-col rounded-2xl bg-[#101A32]/80 border border-slate-700/60 hover:border-blue-500/50 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20"
      >
        {/* Visual Preview Header */}
        <div
          className={`relative h-48 sm:h-56 w-full bg-gradient-to-br ${project.mockupGradient} p-5 flex flex-col justify-between overflow-hidden border-b border-slate-800/80`}
        >
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          {/* Top Bar inside mockup */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[11px] font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{project.category}</span>
            </span>

            <div className="flex items-center space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} GitHub repository`}
                className="p-1.5 rounded-lg bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="p-1.5 rounded-lg bg-slate-900/80 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mockup Graphic Representation */}
          {/* <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-2xl bg-[#050816]/70 border border-slate-700/60 shadow-lg mb-2 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-300">
              <Layers className="w-7 h-7 text-blue-400 group-hover:text-cyan-300 transition-colors" />
            </div>
            <span className="font-heading font-semibold text-sm tracking-wide text-white/90">
              {project.title}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {project.technologies.slice(0, 3).join(' • ')}
            </span>
          </div> */}

          {/* Mockup Graphic Representation */}
          {project.image ? (
            <div className="relative z-10 my-auto mx-auto w-full max-w-md overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="block w-full h-auto max-h-52 object-cover object-top"
                loading="lazy"
              />
            </div>


            

          ) : (
            <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
              <div className="p-3 rounded-2xl bg-[#050816]/70 border border-slate-700/60 shadow-lg mb-2 group-hover:scale-110 group-hover:border-blue-400/50 transition-all duration-300">
                <Layers className="w-7 h-7 text-blue-400 group-hover:text-cyan-300 transition-colors" />
              </div>

              <span className="font-heading font-semibold text-sm tracking-wide text-white/90">
                {project.title}
              </span>

              <span className="text-[11px] font-mono text-slate-400">
                {project.technologies.slice(0, 3).join(" • ")}
              </span>
            </div>
          )}

          {/* Bottom subtle bar */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>v1.0 Ready</span>
            <span className="text-emerald-400 font-semibold">Active Build</span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-heading text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-blue-400">
              {project.subtitle}
            </p>
            <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/80 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Card Action Link */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center text-xs font-semibold text-cyan-400 group-hover:text-white transition-colors"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>

            <span className="text-[11px] font-mono text-slate-500">
              #{project.id.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
