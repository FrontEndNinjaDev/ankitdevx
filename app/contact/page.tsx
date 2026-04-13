"use client";

import {
  Mail,
  Phone,
  Github,
  Instagram,
  Facebook,
  Download,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
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
      <div className="relative z-10 max-w-5xl mx-auto space-y-32">

        {/* ================= HEADER ================= */}
        <section>
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-cyan-300 mb-6">
            <Sparkles size={14} />
            Contact
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Let’s <span className="text-cyan-300">connect.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
            Have a project in mind, a question, or just want to say hello?
            I’m always open to meaningful conversations and collaborations.
          </p>
        </section>

        {/* ================= CONTACT CARDS ================= */}
        <section className="grid md:grid-cols-2 gap-8">

          {/* LEFT: DIRECT CONTACT */}
          <div className="space-y-6">
            <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-xl border border-cyan-400/20">
              <div className="flex items-center gap-3 text-cyan-300 mb-2">
                <Mail />
                <span className="font-medium">Email</span>
              </div>
              <p className="text-gray-400">
                <a
                  href="mailto:yourmail@gmail.com"
                  className="hover:text-cyan-300 transition"
                >
                  yourmail@gmail.com
                </a>
              </p>
            </div>

            <div className="rounded-3xl p-6 bg-white/5 backdrop-blur-xl border border-cyan-400/20">
              <div className="flex items-center gap-3 text-cyan-300 mb-2">
                <Phone />
                <span className="font-medium">Phone</span>
              </div>
              <p className="text-gray-400">
                <a
                  href="tel:+911234567890"
                  className="hover:text-cyan-300 transition"
                >
                  +91 12345 67890
                </a>
              </p>
            </div>

            {/* RESUME */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:shadow-[0_0_30px_#22d3ee] transition w-fit"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* RIGHT: SOCIAL LINKS */}
          <div className="rounded-3xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 space-y-6">

            <h2 className="text-2xl font-semibold">
              Find me online
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition"
              >
                <Github />
                GitHub
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-purple-400/40 hover:text-purple-300 transition"
              >
                <Instagram />
                Instagram
              </a>

              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-blue-400/40 hover:text-blue-300 transition"
              >
                <Facebook />
                Facebook
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/40 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition"
              >
                <Mail />
                Email Me
              </a>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
