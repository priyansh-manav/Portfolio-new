import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import { socialLinks } from "../data/navigation";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: initialService ? `Inquiry regarding ${initialService}` : "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please provide your name.";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email format.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setErrors({});

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "Message send nahi hua. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("priyanshmanav0@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <SectionHeading
          tag="// 06. REACH OUT"
          title="Let's Build Something"
          gradientWord="Amazing"
          subtitle="Open to software development internships, freelance web projects, and collaborations. Let's connect and discuss how I can contribute using React, Django, and modern web technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="font-heading text-xl font-bold text-white">
                Contact Information
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                I am responsive via email and LinkedIn. Feel free to copy my
                email directly or fill out the message form.
              </p>

              {/* Email Direct Copy Box */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate text-xs font-mono">
                    <span className="text-slate-400 block text-[10px]">
                      Direct Email
                    </span>
                    <span className="text-white font-medium truncate">
                      priyanshmanav0@gmail.com
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 ml-2 cursor-pointer"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">
                  Social Channels
                </span>

                <a
                  href="https://github.com/priyansh-manav/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#050816]/70 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all text-xs font-mono text-slate-300 group"
                >
                  <div className="flex items-center space-x-2.5">
                    <GithubIcon className="w-4 h-4 text-blue-400" />
                    <span>github.com/priyansh-manav</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/priyansh-manav-669294380/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#050816]/70 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all text-xs font-mono text-slate-300 group"
                >
                  <div className="flex items-center space-x-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>linkedin.com/in/priyansh-manav</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Availability Status */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-3 text-xs font-mono text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Status: Available for Internships &amp; Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 relative shadow-2xl">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <h4 className="font-heading text-2xl font-bold text-white">
                      Message Prepared Successfully!
                    </h4>

                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out,{" "}
                      <span className="text-white font-medium">
                        {formData.name}
                      </span>
                      . Your inquiry has been received. You can also reach me
                      directly at{" "}
                      <a
                        href={`mailto:priyanshmanav0@gmail.com?subject=${encodeURIComponent(formData.subject)}`}
                        className="text-cyan-300 underline font-mono"
                      >
                        priyanshmanav0@gmail.com
                      </a>
                      .
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                          });
                        }}
                        className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <h4 className="font-heading text-lg font-bold text-white">
                        Send a Direct Message
                      </h4>
                      <span className="text-[11px] font-mono text-slate-500">
                        * All fields required
                      </span>
                    </div>

                    {/* Name & Email Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-mono text-slate-300 mb-1.5"
                        >
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Anixa"
                          className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.name
                              ? "border-red-500 focus:border-red-400"
                              : "border-slate-700/80 focus:border-blue-500"
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[11px] text-red-400 font-mono mt-1 block">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono text-slate-300 mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.email
                              ? "border-red-500 focus:border-red-400"
                              : "border-slate-700/80 focus:border-blue-500"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-400 font-mono mt-1 block">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Full-Stack Internship / Project Discussion"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.subject
                            ? "border-red-500 focus:border-red-400"
                            : "border-slate-700/80 focus:border-blue-500"
                        }`}
                      />
                      {errors.subject && (
                        <span className="text-[11px] text-red-400 font-mono mt-1 block">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message Area */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline, or opportunity..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                          errors.message
                            ? "border-red-500 focus:border-red-400"
                            : "border-slate-700/80 focus:border-blue-500"
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[11px] text-red-400 font-mono mt-1 block">
                          {errors.message}
                        </span>
                      )}
                    </div>
                    {errors.submit && (
                      <p role="alert" className="text-sm text-red-400">
                        {errors.submit}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium text-xs sm:text-sm flex items-center justify-center shadow-lg shadow-blue-900/30 border border-blue-400/30 transition-all active:scale-95 disabled:opacity-60 cursor-pointer"
                    >
                      {loading ? (
                        <div className="flex items-center space-x-2">
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Preparing Dispatch...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Backend & Formspree Integration Note */}
        {/* <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 max-w-3xl mx-auto space-y-2">
          <div className="flex items-center space-x-2 text-cyan-300 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Form Configuration Note for Production:</span>
          </div>
          <p>
            This contact form includes client-side validation and feedback states. To connect it directly to an automated inbox service in production, simply hook the <code className="text-blue-300">onSubmit</code> handler to your preferred form service (such as <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-cyan-300 underline">Formspree</a>, <a href="https://emailjs.com" target="_blank" rel="noreferrer" className="text-cyan-300 underline">EmailJS</a>, or a Django REST mail endpoint).
          </p>
        </div> */}
      </div>
    </PageTransition>
  );
}
