"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Educore",
    desc: "Futuristic developer portfolio with neon UI, animations and smooth routing.",
    image: "/projects/project1.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    desc: "Modern shopping platform with cart, filters and scalable architecture.",
    image: "/projects/project2.png",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Marketsphere",
    desc: "Real-time chat app inspired by WhatsApp with media support.",
    image: "/projects/project3.png",
    tech: ["Next.js", "Socket.io", "Node.js"],
    live: "#",
    github: "#",
  },
  {
    title: "CMS UI",
    desc: "Naukri-like job portal with search, filters and recruiter flow.",
    image: "/projects/project4.png",
    tech: ["React", "TypeScript", "API"],
    live: "#",
    github: "#",
  },
  {
    title: "Video Tube",
    desc: "Fast and clean UI tool to download YouTube videos in multiple formats.",
    image: "/projects/project5.png",
    tech: ["Next.js", "Node.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    desc: "Analytics dashboard with charts, tables and role-based UI.",
    image: "/projects/project6.png",
    tech: ["React", "Chart.js", "Tailwind"],
    live: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05080f] text-white px-6 md:px-16 py-32">

      {/* 🔥 CYBER GRADIENT BASE (SAME AS HERO) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b18] via-[#05080f] to-black" />

      {/* 🔥 GLOW BLOBS (MATCH HERO INTENSITY) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      {/* 🔥 CYBER GRID (MATCH HERO EXACTLY) */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Selected <span className="text-cyan-300">Projects</span>
          </h1>
          <p className="mt-6 max-w-2xl text-gray-400 text-lg">
            A curated collection of work focused on performance,
            clean UI systems and cyber-inspired design.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500"
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-purple-500/15" />
              </div>

              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="relative p-6 space-y-4">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-300 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-5 pt-4">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200 transition"
                  >
                    Live <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
                  >
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
