import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#08080a]">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-6xl font-normal uppercase leading-none text-[#F2F0EA]">
              AR<span className="text-[#a8342a]">4</span>
            </p>
            <p className="mt-4 max-w-[280px] font-serif text-lg italic leading-relaxed text-[#6b6861]">
              one man soldier. Araoluwa Giwa-Osagie.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-3" aria-label="Footer navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-[0.06em] text-[#9b9b93] transition-colors hover:text-[#F2F0EA]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[#6b6861]">
              Follow
            </p>
            <SocialLinks className="mt-4 flex items-center gap-4" iconClassName="h-5 w-5" />

            <div className="mt-10">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[#6b6861]">
                Stream
              </p>
              <div className="mt-4 flex flex-col items-start gap-3">
                {siteConfig.streaming.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#55554e] transition-colors hover:text-[#F2F0EA]"
                  >
                    <span aria-hidden="true" className="font-display text-[0.8rem] text-[#a8342a] transition-transform duration-300 group-hover:translate-x-0.5">
                      ↗
                    </span>
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#1a1a1a] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[#55554e]">
            © 2026{" "}
            <a
              href="https://www.instagram.com/neche_kennedy/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#F2F0EA]"
            >
              nechecodes
            </a>
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[#55554e]">
            @ar4oluwa
          </p>
        </div>
      </div>
    </footer>
  );
}
