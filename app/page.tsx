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
} from "lucide-react";

const experience = [
  {
    company: "Cognizant",
    role: "Process Improvement Engineer",
    dates: "Aug 2024 - Present",
    location: "United States",
    bullets: [
      "Reduced process cycle time by 20% across digital finance and customer care operations.",
      "Improved throughput by 15% by eliminating 30+ non-value-added steps.",
      "Saved $110K+ annually using UiPath and Power Automate automation.",
      "Improved task accuracy by 40% and reduced incident resolution time by 25%.",
      "Raised compliance by 35% and achieved 90% adoption of redesigned workflows.",
    ],
  },
  {
    company: "HCL Technologies",
    role: "Mechanical Design Engineer",
    dates: "Jun 2019 - Jul 2023",
    location: "India",
    bullets: [
      "Designed semiconductor processing modules using Creo and GD&T standards.",
      "Reduced thermal misalignment issues by 25% through improved drawing and RFQ documentation.",
      "Cut post-prototype design rework by 80% using DFM/DFA principles.",
      "Reduced design release time by 30% through SAP PLM and Teamcenter workflow improvements.",
      "Improved traceability and reduced BOM errors by 25%.",
    ],
  },
];

const metrics = [
  { value: "$110K+", label: "Annual Savings" },
  { value: "20%", label: "Cycle Time Reduction" },
  { value: "40%", label: "Accuracy Improvement" },
  { value: "80%", label: "Rework Reduction" },
];

const skills = [
  "Lean Six Sigma",
  "DMAIC",
  "Kaizen",
  "UiPath",
  "Power Automate",
  "Python",
  "Power BI",
  "Tableau",
  "BPMN",
  "SAP PLM",
  "Creo",
  "Azure",
  "AWS",
  "ServiceNow",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.12),transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center"
        >
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6">
              Open to opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
              Mahammad Azeez Mogal
            </h1>

            <p className="mt-5 text-xl md:text-2xl text-cyan-300 max-w-3xl">
              Process Improvement Engineer driving operational excellence through Lean Six Sigma, automation, and data.
            </p>

            <p className="mt-6 text-slate-300 text-lg leading-8 max-w-3xl">
              I blend process improvement, automation, and engineering problem-solving to reduce cycle time,
              improve quality, and deliver measurable business impact across manufacturing and digital operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-slate-950 font-semibold hover:scale-[1.02] transition"
              >
                View Experience <ArrowRight size={18} />
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
              <a
                href="mailto:mmdazeez786@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-300 transition"
              >
                <Mail size={16} className="text-cyan-300" />
                mmdazeez786@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mahammad-azeez-mogal-a3822a166"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-300 transition"
              >
                <LinkIcon size={16} className="text-cyan-300" />
                LinkedIn
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[28px] border border-white/10 bg-white/6 backdrop-blur-xl p-6 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-[#0b1728]/80 p-5"
                >
                  <div className="text-3xl md:text-4xl font-semibold text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <div className="flex items-center gap-2 text-cyan-300 font-medium">
                <TrendingUp size={18} />
                Core Value
              </div>
              <p className="mt-3 text-slate-200 leading-7">
                Strong mix of manufacturing discipline, automation mindset, and business-focused process improvement.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-cyan-300 mb-4">
              <Cpu size={20} />
              <h3 className="text-lg font-semibold text-white">Automation</h3>
            </div>
            <p className="text-slate-300 leading-7">
              UiPath, Power Automate, and Python to reduce manual effort and improve accuracy.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-cyan-300 mb-4">
              <BarChart3 size={20} />
              <h3 className="text-lg font-semibold text-white">Analytics</h3>
            </div>
            <p className="text-slate-300 leading-7">
              Power BI and Tableau dashboards for KPI tracking, process visibility, and stakeholder reporting.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-cyan-300 mb-4">
              <TrendingUp size={20} />
              <h3 className="text-lg font-semibold text-white">Improvement</h3>
            </div>
            <p className="text-slate-300 leading-7">
              Lean Six Sigma, DMAIC, Kaizen, and RCA to improve throughput, yield, and workflow efficiency.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="text-cyan-300" />
          <h2 className="text-3xl md:text-4xl font-semibold">Experience</h2>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/6 backdrop-blur-xl p-7"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{job.role}</h3>
                  <p className="mt-2 text-cyan-300 font-medium">{job.company}</p>
                  <p className="mt-1 text-slate-400">{job.location}</p>
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 h-fit">
                  {job.dates}
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {job.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-white/8 bg-[#0c1727]/80 px-4 py-4 text-slate-300 leading-7"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <Cpu className="text-cyan-300" />
          <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-slate-200 backdrop-blur-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="text-cyan-300" />
          <h2 className="text-3xl md:text-4xl font-semibold">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-white/10 bg-white/6 backdrop-blur-xl p-6">
            <h3 className="text-xl font-semibold">Rivier University</h3>
            <p className="mt-2 text-cyan-300">Master&apos;s in Computer and Information Sciences</p>
            <p className="mt-2 text-slate-400">2023 - 2025</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/6 backdrop-blur-xl p-6">
            <h3 className="text-xl font-semibold">Bapatla Engineering College</h3>
            <p className="mt-2 text-cyan-300">Bachelor of Technology in Mechanical Engineering</p>
            <p className="mt-2 text-slate-400">2017 - 2020</p>
          </div>
        </div>
      </section>
    </main>
  );
}