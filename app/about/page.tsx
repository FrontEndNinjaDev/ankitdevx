"use client";

import { Code2, Brain, Rocket, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05080f] text-white px-6 md:px-16 py-32">

      {/* 🔥 CYBER GRADIENT BASE (SAME AS HERO) */}
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
      <div className="relative z-10 max-w-6xl mx-auto space-y-40">

        {/* ================= INTRO ================= */}
        <section className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-cyan-300 mb-6">
            <Sparkles size={14} />
            About Me
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Designing the web  
            <span className="block text-cyan-300">with intent.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            I’m <span className="text-cyan-300 font-semibold">Ankit</span>,
            a frontend developer who focuses on building high-performance,
            visually clean, and scalable web experiences.
            I enjoy mixing logic with design to create interfaces that feel
            smooth, modern, and purposeful.
          </p>
        </section>

        {/* ================= PHILOSOPHY ================= */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              How I think about building
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I believe great products are built when performance,
              clarity, and aesthetics are treated equally.
              Code should be readable, scalable, and predictable.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I care deeply about the details users don’t consciously notice,
              but would instantly feel if they were missing.
            </p>
          </div>

          <div className="relative rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_60px_rgba(59,130,246,0.25)]">
            <Brain className="text-cyan-300 mb-4" />
            <p className="text-xs tracking-widest uppercase text-gray-400">
              Philosophy
            </p>
            <p className="mt-3 text-xl font-semibold text-white">
              Simplicity scales.  
              Complexity breaks.
            </p>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="space-y-10">
          <h2 className="text-3xl font-semibold">
            Tools I use daily
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Redux Toolkit",
            ].map((skill) => (
              <div
                key={skill}
                className="group rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition"
              >
                <Code2 className="text-cyan-300 mb-3 group-hover:scale-110 transition" />
                <p className="text-white font-medium">{skill}</p>
                <p className="text-sm text-gray-400 mt-1">
                  Used in real-world production projects
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-3xl p-6 bg-white/5 border border-white/10">
            <p className="text-4xl font-bold text-cyan-300">10+</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Projects Built
            </p>
          </div>

          <div className="rounded-3xl p-6 bg-white/5 border border-white/10">
            <p className="text-4xl font-bold text-purple-300">1+ yrs</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Experience
            </p>
          </div>

          <div className="rounded-3xl p-6 bg-white/5 border border-white/10">
            <p className="text-4xl font-bold text-cyan-300">Frontend</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Primary Focus
            </p>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/10 pt-16">
          <div>
            <h2 className="text-3xl font-semibold">
              Let’s build something meaningful
            </h2>
            <p className="text-gray-400 mt-2">
              Open to freelance, full-time roles and serious collaborations.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:shadow-[0_0_30px_#22d3ee] transition"
          >
            Get in touch
            <Rocket size={18} />
          </a>
        </section>

      </div>
    </main>
  );
}
