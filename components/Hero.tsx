"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-40 overflow-hidden bg-[#05080f]">

      {/* 🔥 CYBER GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b18] via-[#05080f] to-black" />

      {/* 🔥 GLOW BLOBS */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      {/* 🔥 SUBTLE GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            <span className="text-cyan-300">Ankit</span>
            <span className="text-purple-400">.dev</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
            Building futuristic, high-performance web experiences using
            Next.js, React, Framer Motion, and cyber-inspired UI systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:shadow-[0_0_30px_#22d3ee] transition">
              Hire Me
            </button>

            <button className="px-6 py-3 rounded-xl bg-purple-500/20 border border-purple-400 text-purple-300 hover:shadow-[0_0_30px_#a855f7] transition">
              My Work
            </button>
          </div>

          {/* ===== DEV PORTFOLIO SIGNALS ===== */}
          <div className="mt-10 space-y-6">

            {/* AVAILABILITY STATUS */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-400/30 text-green-300 text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Freelance & Full-Time
            </div>

            {/* TECH STACK */}
            <div>
              <p className="text-xs text-gray-400 mb-3 tracking-widest">
                TECH STACK
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1
                      rounded-lg
                      bg-white/5
                      border border-white/10
                      text-xs
                      text-gray-300
                      backdrop-blur-md
                      hover:border-cyan-400/40
                      hover:text-cyan-300
                      transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* QUICK STATS */}
            <div className="flex gap-6 text-sm">
              <div>
                <div className="text-cyan-300 font-semibold text-lg">
                  10+
                </div>
                <div className="text-xs text-gray-400">
                  Projects
                </div>
              </div>

              <div>
                <div className="text-purple-300 font-semibold text-lg">
                  1+ yrs
                </div>
                <div className="text-xs text-gray-400">
                  Experience
                </div>
              </div>

              <div>
                <div className="text-cyan-300 font-semibold text-lg">
                  Frontend
                </div>
                <div className="text-xs text-gray-400">
                  Focus
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT GLASS BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative w-full"
        >
          <div className="relative rounded-2xl overflow-hidden p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_60px_rgba(59,130,246,0.25)]">

            {/* INNER GLOW */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />

            {/* LAPTOP */}
            <motion.img
              src="/laptop.png"
              alt="Futuristic Laptop"
              className="w-full object-contain rounded-xl scale-[0.95] drop-shadow-[0_0_45px_rgba(59,130,246,0.6)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* ===== BOTTOM PORTFOLIO HINT ===== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 z-20">

        {/* VALUE CARDS */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { title: "Fast Performance", desc: "Optimized, production-ready builds" },
            { title: "Clean UI", desc: "Modern glass & cyber aesthetics" },
            { title: "Scalable Code", desc: "Maintainable React & Next.js" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-xl
                px-4 py-3
                text-center
                text-sm
                text-gray-300
                shadow-[0_0_30px_rgba(0,0,0,0.3)]
              "
            >
              <div className="text-cyan-300 font-semibold">
                {item.title}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* SCROLL INDICATOR */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-2 opacity-70">
            <span className="text-xs text-gray-400 tracking-widest">
              SCROLL
            </span>
            <motion.div
              className="w-[2px] h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
