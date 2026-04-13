"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Heart,
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
} from "lucide-react";

const links = [
  { name: "Home", href: "/", scrollId: "home" },
  { name: "About", href: "/about", scrollId: "about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const bottomLinks = [
  { name: "Home", icon: Home, href: "/", scrollId: "home" },
  { name: "About", icon: User, href: "/", scrollId: "about" },
  { name: "Projects", icon: Briefcase, href: "/projects" },
  { name: "Blog", icon: BookOpen, href: "/blog" },
  { name: "Contact", icon: Mail, href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (href: string, scrollId?: string) => {
    if (href === "/" && scrollId) {
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          document
            .getElementById(scrollId)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 400);
      } else {
        document
          .getElementById(scrollId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    router.push(href);
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="relative">

          {/* NEON RUNNER */}
          <svg
            className="absolute inset-[-6px] w-[calc(100%+12px)] h-[calc(100%+12px)] pointer-events-none z-20"
            viewBox="0 0 1000 90"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="neonGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect
              x="8"
              y="8"
              width="984"
              height="74"
              rx="24"
              ry="24"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
              filter="url(#neonGlow)"
              strokeDasharray="100 2400"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-2400"
                dur="16s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>

          {/* NAV CONTENT */}
          <div className="relative z-10 flex items-center justify-between px-6 py-3 rounded-3xl bg-black/75 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.18)]">

            {/* LOGO */}
            <div
              onClick={() => handleNav("/", "home")}
              className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0a0f1f] to-[#05070f] border border-cyan-400/40 text-cyan-300 font-bold text-lg"
            >
              A
            </div>

            {/* LINKS */}
            <div className="flex items-center gap-4">
              {links.map((l) => (
                <button
                  key={l.name}
                  onClick={() => handleNav(l.href, l.scrollId)}
                  className={`group relative px-4 py-1.5 rounded-lg text-[11px] uppercase tracking-[0.25em] transition
                    ${
                      pathname === l.href
                        ? "text-cyan-300 border border-cyan-400/60 bg-cyan-500/15"
                        : "text-cyan-200/60 border border-cyan-400/20 bg-cyan-500/5 hover:text-cyan-200 hover:border-cyan-400/60 hover:bg-cyan-500/15"
                    }`}
                >
                  {l.name}
                  <span className="absolute left-2 right-2 -bottom-1 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <Heart className="text-pink-400/70 hover:text-pink-400 transition" />
              <a
                href="/resume.pdf"
                className="px-4 py-2 rounded-xl text-sm font-semibold tracking-wide text-purple-200 bg-purple-600/25 border border-purple-400/40 hover:bg-purple-600/40 transition"
              >
                Resume
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md">
        <div className="flex items-center justify-between px-5 py-3 rounded-3xl bg-black/80 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          {bottomLinks.map(({ name, icon: Icon, href, scrollId }) => (
            <button
              key={name}
              onClick={() => handleNav(href, scrollId)}
              className="flex flex-col items-center gap-1 text-cyan-200/60 hover:text-cyan-300 transition"
            >
              <Icon size={20} />
              <span className="text-[9px] uppercase tracking-widest">
                {name}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
