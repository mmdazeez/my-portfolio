"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  LinkIcon,
  TrendingUp,
  Cpu,
  BarChart3,
  FileText,
} from "lucide-react";

const experience = [
  {
    role: "Process Improvement Engineer",
    company: "Cognizant",
    location: "United States (Remote)",
    dates: "Aug 2024 — Present",
    bullets: [
      "Spearheaded cross-functional Lean Six Sigma initiatives across digital finance and customer care operations.",
      "Achieved a 20% reduction in cycle time and a 15% throughput improvement by eliminating 30+ non-value-added steps.",
      "Deployed AI-driven RPA workflows using UiPath and Power Automate, resulting in $110K+ in annual savings.",
      "Improved task accuracy by 40% and regulatory compliance by 35% through automated process controls.",
      "Led agile process reengineering and Value Stream Mapping (VSM) for seamless cloud-based platform integration."
    ],
    achievement: "Improved first-pass yield from 82% to 93% within six months through DMAIC-based optimization."
  },
  {
    role: "Mechanical Design Engineer",
    company: "HCL Technologies",
    location: "India",
    dates: "Jun 2019 — Jul 2023",
    bullets: [
      "Led end-to-end mechanical design of semiconductor processing modules using Creo and ASME Y14.5 GD&T standards.",
      "Applied advanced DFM/DFA principles to complex assemblies, driving an 80% reduction in post-prototype design rework.",
      "Automated engineering release workflows in SAP PLM and Teamcenter, cutting design release time by 30%.",
      "Reduced thermal misalignment issues by 25% through optimized 2D/3D drawing packages and supplier documentation.",
      "Minimized BOM errors and improved traceability by 25% through structured configuration control and ISO 9001 practices."
    ],
    achievement: "Double Awardee (ERS Champion & Live Wire Award) for consistent productivity and early delivery of critical design phases."
  }
];

const featuredProjects = [
  {
    title: "Multi-Purpose 3D Printer",
    company: "Academic Project",
    desc: "Designed and fabricated a modular 3D printer with interchangeable toolheads for FDM, CNC, and laser cutting. Validated frame stability via FEA in ANSYS to achieve precision of ±0.3 mm.",
    highlight: "Received top honors at the University Innovation Expo.",
  }
];

const metrics = [
  { value: "$110K+", label: "Annual Savings" },
  { value: "20%", label: "Cycle Time Reduction" },
  { value: "40%", label: "Accuracy Improvement" },
  { value: "80%", label: "Rework Reduction" },
];

const skillCategories = [
  { name: "Optimization", skills: ["Lean Six Sigma", "DMAIC", "Kaizen", "VSM", "RCA"] },
  { name: "Automation", skills: ["UiPath", "Power Automate", "Python", "Ansible", "RPA"] },
  { name: "Data", skills: ["Power BI", "Tableau", "Excel", "KPI Dashboards", "Data Storytelling"] },
  { name: "Engineering", skills: ["Creo", "SolidWorks", "SAP PLM", "Teamcenter", "DFM/DFA"] }
];

export default function Page() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative bg-[#06111f]">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/background.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/10 via-[#06111f]/60 to-[#06111f]" />
      </div>

      <div className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center"
          >
            <div>
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6 font-medium">
                Open to New Opportunities
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Mahammad Azeez Mogal
              </h1>

              <p className="mt-5 text-xl md:text-2xl text-cyan-300 font-medium">
                Process Improvement Engineer | Automation & Operational Excellence
              </p>

              <p className="mt-6 text-slate-300 text-lg leading-8 max-w-3xl">
                I blend mechanical engineering discipline with a passion for digital transformation. I specialize in identifying operational bottlenecks and implementing smart automation to save costs and boost efficiency.
              </p>
              
              <p className="mt-4 text-slate-300 text-lg leading-8 max-w-3xl">
                Whether it's optimizing a supply chain workflow or designing complex semiconductor modules, my goal is always the same: deliver measurable business impact through data-driven decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-slate-950 font-semibold hover:scale-[1.02] transition shadow-lg shadow-cyan-400/20"
                >
                  View Experience <ArrowRight size={18} />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-300 hover:bg-cyan-400/20 transition"
                >
                  <FileText size={18} /> Resume
                </a>

                <a
                  href="mailto:mmdazeez786@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition"
                >
                  <Mail size={18} /> Contact Me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-cyan-300" />
                  Nashua, New Hampshire
                </div>
                <a href="mailto:mmdazeez786@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Mail size={16} className="text-cyan-300" />
                  mmdazeez786@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/mahammad-azeez-mogal-a3822a166"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400 transition"
                >
                  <LinkIcon size={16} className="text-cyan-300" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-[#0b1728]/60 p-5 hover:bg-[#0b1728]/80 transition"
                  >
                    <div className="text-3xl md:text-3xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs text-slate-400 font-medium uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                  <TrendingUp size={16} />
                  Core Value
                </div>
                <p className="mt-3 text-slate-300 text-sm leading-6 italic">
                  &ldquo;Strong mix of manufacturing discipline, automation mindset, and business-focused process improvement.&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
          </div>

          <div className="grid gap-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl group hover:border-cyan-400/30 transition-all font-sans"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-cyan-300 transition-colors uppercase tracking-tight">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-slate-400 font-medium uppercase tracking-widest text-xs">
                      <span className="text-cyan-400">{exp.company}</span>
                      <span className="opacity-20">|</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-slate-400 whitespace-nowrap">
                    {exp.dates}
                  </div>
                </div>

                <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                  <ul className="space-y-4 list-none">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-4 text-slate-300 leading-relaxed font-light">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400/60 mt-2.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="h-full">
                    <div className="sticky top-24 p-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl">
                      <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4">Key Achievement</div>
                      <p className="text-slate-200 text-sm leading-relaxed font-medium italic">
                        &ldquo;{exp.achievement}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="flex items-center gap-3 mb-12">
            <Cpu className="text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/8 transition">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">{project.title}</h3>
                    <p className="mt-2 text-cyan-400 text-xs font-bold uppercase tracking-widest">{project.company}</p>
                    <p className="mt-4 text-slate-400 leading-relaxed font-light">{project.desc}</p>
                  </div>
                  <div className="px-5 py-3 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-widest">
                    {project.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="flex items-center gap-3 mb-12">
            <Cpu className="text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Expertise</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.name} className="rounded-3xl border border-white/8 bg-white/5 p-6 backdrop-blur-md hover:bg-white/8 transition">
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-6">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-medium hover:bg-cyan-400/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/8 transition">
              <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">Rivier University</h3>
              <p className="mt-2 text-cyan-300 font-medium">Master of Science &bull; Computer Information Systems</p>
              <p className="mt-1 text-slate-500 text-sm">2023 — 2025 | Nashua, NH</p>
            </div>

            <div className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/8 transition">
              <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">Bapatla Engineering College</h3>
              <p className="mt-2 text-cyan-300 font-medium">Bachelor of Technology &bull; Mechanical Engineering</p>
              <p className="mt-1 text-slate-500 text-sm">2017 — 2020 | Andhra Pradesh, India</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}