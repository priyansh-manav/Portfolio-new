import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Printer,
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import { projectsData } from "../data/projects";
import { skillsData } from "../data/skills";

export default function Resume() {
  const [downloadNotice, setDownloadNotice] = useState(false);

  // const handlePrint = () => {
  //   window.print();
  // };

  const handleDownload = () => {
    // Check if real PDF exists, or prompt helpful instructions
    const pdfPath = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Priyansh_Manav_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 6000);
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
              // Curriculum Vitae
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1">
              Resume &amp;{" "}
              <span className="text-gradient-primary">Credentials</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
              B.Tech CSE Student • Full-Stack Developer • Project Portfolio
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex items-center space-x-3">
            {/* <button
              onClick={handlePrint}
              aria-label="Print resume document"
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300 hover:text-white hover:border-slate-500 transition-colors flex items-center cursor-pointer"
            >
              <Printer className="w-4 h-4 mr-1.5" />
              <span>Print / PDF</span>
            </button> */}

            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-xs font-semibold text-white shadow-lg shadow-blue-900/30 flex items-center transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 mr-1.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Download Notice banner */}
        {downloadNotice && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-blue-950/80 border border-blue-500/40 text-xs text-blue-200 flex items-start space-x-2.5"
          >
            <AlertCircle className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-white">
                Resume downloaded successfully!
              </p>

              <p className="mt-0.5 text-slate-300">
                Your resume PDF is ready. Check your Downloads folder.
              </p>
            </div>
          </motion.div>
        )}

        {/* Styled Resume Paper Document */}
        <div className="bg-[#0A1024] border border-slate-800 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl space-y-12 text-slate-200 relative overflow-hidden print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
          {/* Subtle Document Watermark Monogram */}
          <div className="absolute top-8 right-8 text-7xl font-heading font-black text-slate-800/20 select-none pointer-events-none print:hidden">
            PM
          </div>

          {/* 1. Header Information */}
          <div className="border-b border-slate-800 pb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white print:text-black">
                Priyansh Manav
              </h2>
              <p className="font-mono text-sm text-cyan-300 print:text-blue-600 mt-1">
                Aspiring Software Engineer | Full-Stack Developer
              </p>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                B.Tech in Computer Science Engineering (3rd Year)
              </p>
            </div>

            <div className="space-y-1 text-xs font-mono text-slate-400 print:text-gray-700 sm:text-right">
              <div>priyanshmanav0gmail.com</div>
              <div>github.com/priyansh-manav</div>
              <div>linkedin.com/in/priyansh-manav</div>
            </div>
          </div>

          {/* 2. Professional Summary */}
          <div className="space-y-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-blue-400 print:text-blue-800">
              01 // Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-slate-300 print:text-gray-800">
              3rd Year B.Tech Computer Science Engineering student focused on
              full-stack web development. Experienced in building React-based
              user interfaces, integrating Django REST APIs, and working with
              PostgreSQL databases through hands-on projects. Interested in
              writing clean, maintainable code and developing responsive,
              user-friendly web applications.
            </p>
          </div>

          {/* 3. Education */}
          <div className="space-y-4">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-blue-400 print:text-blue-800">
              02 // Education
            </h3>
            <div className="p-5 rounded-2xl bg-[#050816]/70 border border-slate-800/80 print:bg-transparent print:border-b print:border-gray-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h4 className="font-heading text-base font-bold text-white print:text-black">
                    Bachelor of Technology in Computer Science Engineering
                  </h4>
                  <p className="text-xs font-mono text-cyan-300 print:text-blue-600">
                    Undergraduate Degree Program
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400 print:text-gray-600 mt-1 sm:mt-0">
                  Currently in 3rd Year (Ongoing)
                </div>
              </div>
              <p className="text-xs text-slate-400 print:text-gray-700 mt-2">
                Core Coursework: Data Structures &amp; Algorithms, Database
                Management Systems (DBMS), Operating Systems, Computer Networks,
                Software Engineering, Object-Oriented Programming.
              </p>
            </div>
          </div>

          {/* 4. Technical Skills */}
          <div className="space-y-4">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-blue-400 print:text-blue-800">
              03 // Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 print:border-gray-300">
                <span className="text-cyan-300 print:text-blue-700 font-semibold block mb-1">
                  Frontend Engineering:
                </span>
                <span className="text-slate-300 print:text-gray-800">
                  React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS,
                  Responsive Design
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 print:border-gray-300">
                <span className="text-violet-300 print:text-purple-700 font-semibold block mb-1">
                  Backend &amp; Databases:
                </span>
                <span className="text-slate-300 print:text-gray-800">
                  Python, Django, Django REST Framework, REST APIs, PostgreSQL,
                  MySQL, SQL
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 print:border-gray-300">
                <span className="text-blue-300 print:text-blue-700 font-semibold block mb-1">
                  Tooling &amp; Workflow:
                </span>
                <span className="text-slate-300 print:text-gray-800">
                  Git, GitHub, Vite, VS Code, Postman, npm, Chrome DevTools
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 print:border-gray-300">
                <span className="text-emerald-300 print:text-green-700 font-semibold block mb-1">
                  Development Practices:
                </span>
                <span className="text-slate-300 print:text-gray-800">
                  Component-Based Development, Modular Code, Problem-Solving,
                  Responsive UI Development, Cross-Device Testing
                </span>
              </div>
            </div>
          </div>

          {/* 5. Featured Projects */}
          <div className="space-y-6">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-blue-400 print:text-blue-800">
              04 // Featured Software Projects
            </h3>

            {projectsData.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-[#050816]/70 border border-slate-800/80 print:bg-transparent print:border-b print:border-gray-300 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h4 className="font-heading text-base font-bold text-white print:text-black">
                    {project.title}
                  </h4>
                  <span className="text-xs font-mono text-cyan-300 print:text-blue-600">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs font-mono text-blue-300 print:text-gray-600">
                  Stack: {project.technologies.join(", ")}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
                  {project.description}
                </p>

                <ul className="pt-2 space-y-1">
                  {project.features.slice(0, 3).map((f, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-400 print:text-gray-700 flex items-start space-x-2"
                    >
                      <span className="text-cyan-400">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions for customizing PDF */}
        {/* <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 space-y-2">
          <div className="flex items-center space-x-2 text-cyan-300">
            <AlertCircle className="w-4 h-4" />
            <span className="font-bold">How to Update the Resume PDF:</span>
          </div>
          <p>
            1. Export your official PDF resume from Word, LaTeX, or Figma.
          </p>
          <p>
            2. Place the file inside <code className="text-blue-300">public/resume.pdf</code>.
          </p>
          <p>
            3. The "Download PDF" button will immediately serve your file with zero code edits.
          </p>
        </div> */}
      </div>
    </PageTransition>
  );
}
