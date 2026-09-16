import type { ReleaseLink } from "@/lib/releases";
import {
  AppleIcon,
  AudiomackIcon,
  DeezerIcon,
  SpotifyIcon,
  YouTubeIcon,
} from "@/components/icons";
import { ArrowIcon } from "@/components/icons";

const icons: Record<ReleaseLink["platform"], React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Spotify: SpotifyIcon,
  "Apple Music": AppleIcon,
  Audiomack: AudiomackIcon,
  Deezer: DeezerIcon,
  YouTube: YouTubeIcon,
};

export function ListenLinks({ links, className = "" }: { links: ReleaseLink[]; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      {links.map((link) => {
        const Icon = icons[link.platform];
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#9b9b93] transition-colors hover:text-[#F2F0EA]"
          >
            <Icon className="h-4 w-4 text-[#9b9b93] transition-colors group-hover:text-magenta" />
            {link.platform}
          </a>
        );
      })}
    </div>
  );
}

export function ListenButton({
  href,
  label = "Listen Now",
  variant = "primary",
  className = "",
}: {
  href: string;
  label?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}) {
  const base = "inline-flex items-center gap-3 px-8 py-4 text-[0.68rem] font-bold uppercase tracking-[0.25em] transition-all duration-300";
  const variants = {
    primary:
      "bg-[#F2F0EA] text-[#080808] hover:bg-magenta hover:text-[#F2F0EA]",
    outline:
      "border border-[#2a2a2a] text-[#F2F0EA] hover:border-magenta hover:text-magenta",
    ghost: "text-[#F2F0EA] hover:text-magenta",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}