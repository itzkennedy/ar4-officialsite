import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { SocialLinks } from "@/components/SocialLinks";
import { youtubeChannel } from "@/lib/videos";
import { AppleIcon, SpotifyIcon, YouTubeIcon } from "@/components/icons";

const streamIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Spotify: SpotifyIcon,
  "Apple Music": AppleIcon,
};

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#080808]">
      <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-4xl font-normal uppercase text-[#F2F0EB]">
              REE<span className="text-[#D65A31]">PLAY</span>
            </p>
            <p className="mt-3 max-w-[280px] font-serif text-lg italic leading-relaxed text-[#6b6b64]">
              Raw evolved energy, playing loud all year.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-3" aria-label="Footer navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-[0.06em] text-[#9b9b93] transition-colors hover:text-[#F2F0EB]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[#6b6b64]">
              Follow
            </p>
            <SocialLinks className="mt-4 flex items-center gap-4" />
            <div className="mt-10">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[#6b6b64]">
                Stream
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                {siteConfig.streaming.map((platform) => {
                  const Icon = streamIcons[platform.name];
                  if (!Icon) return null;
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#55554e] transition-colors hover:text-[#F2F0EB]"
                    >
                      <Icon className="h-4 w-4 text-[#9b9b93] transition-colors group-hover:text-[#D65A31]" />
                      {platform.name}
                    </a>
                  );
                })}
              </div>
              <div className="mt-8">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-[#6b6b64]">
                  Videos
                </p>
                <a
                  href={youtubeChannel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#55554e] transition-colors hover:text-[#F2F0EB]"
                >
                  <YouTubeIcon className="h-4 w-4 text-[#9b9b93] transition-colors group-hover:text-[#D65A31]" />
                  {youtubeChannel.handle}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#1a1a1a] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[#55554e]">
            © 2026 Nechecodes
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[#55554e]">
            @reeplaysumtin
          </p>
        </div>
      </div>
    </footer>
  );
}
