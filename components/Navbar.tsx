"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/icons";

function Brand({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-2xl font-normal uppercase text-[#F2F0EA] ${className}`}>
      AR<span className="text-[#a8342a]">4</span>
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onPopState = () => setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const primaryStream = siteConfig.streaming.find((s) => s.primary);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-[#08080a]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 sm:px-8 md:h-20">
          <Link
            href="/"
            className="group relative z-10 text-[#F2F0EA]"
            aria-label="AR4 Home"
          >
            <Brand />
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#a8342a] transition-all duration-300 group-hover:w-full" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs font-semibold tracking-[0.08em] transition-colors duration-300 ${
                    active ? "text-[#F2F0EA]" : "text-[#9b9b93] hover:text-[#F2F0EA]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#a8342a] transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <SocialLinks
              className="flex items-center gap-4"
              iconClassName="h-[18px] w-[18px]"
            />
            <ButtonLink
              href={primaryStream?.url ?? siteConfig.streaming[0].url}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
            >
              Listen
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="z-10 -mr-2 p-2 text-[#F2F0EA] lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon className="h-7 w-7" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-[#08080a] lg:hidden"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -32 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -32 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="grain flex min-h-full flex-col">
              <div className="flex h-16 items-center justify-between px-5 sm:px-8">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-[#F2F0EA]"
                  aria-label="AR4 Home"
                >
                  <Brand />
                </Link>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="-mr-2 p-2 text-[#F2F0EA]"
                  aria-label="Close menu"
                >
                  <CloseIcon className="h-7 w-7" />
                </button>
              </div>

              <nav
                className="flex flex-1 flex-col justify-center overflow-y-auto px-6 py-6 sm:px-12"
                aria-label="Mobile navigation"
              >
                {siteConfig.nav.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
                      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`group flex items-baseline justify-between py-3 font-display text-2xl font-normal uppercase transition-colors duration-300 sm:py-4 sm:text-3xl ${
                          active ? "text-[#a8342a]" : "text-[#F2F0EA] hover:text-[#a8342a]"
                        }`}
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-xs font-normal text-[#55554e]">
                            0{i + 1}
                          </span>
                          {item.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-[#55554e] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#a8342a]"
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="px-6 pb-10 pt-6 sm:px-12"
              >
                <ButtonLink
                  href={primaryStream?.url ?? siteConfig.streaming[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Listen Now
                </ButtonLink>

                <div className="mt-8 flex items-center gap-5 border-t border-[#1a1a1a] pt-6">
                  <SocialLinks
                    onNavigate={closeMenu}
                    iconClassName="h-6 w-6"
                  />
                  <span className="ml-auto font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[#55554e]">
                    @ar4oluwa
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
