"use client";

import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const posts = [
  {
    title: "Building a Cyber-Style Portfolio with Next.js",
    desc: "How I designed and built a futuristic portfolio using Next.js, Tailwind CSS and motion.",
    date: "Jan 2026",
    tag: "Next.js",
    href: "#",
  },
  {
    title: "Why UI Details Matter More Than You Think",
    desc: "Small UI decisions that silently improve user experience and product quality.",
    date: "Dec 2025",
    tag: "UI/UX",
    href: "#",
  },
  {
    title: "From React to Next.js: My Learning Curve",
    desc: "Mistakes, lessons and mental shifts while moving from React to Next.js App Router.",
    date: "Nov 2025",
    tag: "Frontend",
    href: "#",
  },
  {
    title: "Designing with Glassmorphism & Cyber Grids",
    desc: "How to use glass UI and grid systems without overdoing the cyber aesthetic.",
    date: "Oct 2025",
    tag: "Design",
    href: "#",
  },
  {
    title: "Performance Tips for Modern React Apps",
    desc: "Simple techniques to make React apps feel instant and smooth.",
    date: "Sep 2025",
    tag: "Performance",
    href: "#",
  },
  {
    title: "Thinking Like a Frontend Engineer",
    desc: "How mindset, not tools, separates average UIs from great experiences.",
    date: "Aug 2025",
    tag: "Career",
    href: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05080f] text-white px-6 md:px-16 py-32">

      {/* 🔥 CYBER GRADIENT BASE */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b18] via-[#05080f] to-black" />

      {/* 🔥 GLOW BLOBS */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      {/* 🔥 CYBER GRID (MATCH HERO) */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-24">

        {/* ================= HEADER ================= */}
        <section>
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-cyan-300 mb-6">
            <Sparkles size={14} />
            Blog
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Writing about  
            <span className="block text-cyan-300">code & clarity.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
            Thoughts, lessons and breakdowns from my journey as a frontend
            developer — focused on building better interfaces and systems.
          </p>
        </section>

        {/* ================= POSTS ================= */}
        <section className="space-y-10">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.href}
              className="group block rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* LEFT */}
                <div className="space-y-3 max-w-3xl">
                  <h2 className="text-2xl font-semibold group-hover:text-cyan-300 transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 leading-relaxed">
                    {post.desc}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-400 tracking-widest uppercase">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300 bg-cyan-400/10">
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2 text-cyan-300 group-hover:translate-x-1 transition">
                  Read
                  <ArrowRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </section>

      </div>
    </main>
  );
}
