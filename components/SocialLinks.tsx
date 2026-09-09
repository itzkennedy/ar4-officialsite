import type { SVGProps } from "react";
import { siteConfig } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  SoundCloudIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons";

const socialIconMap: Record<string, React.ComponentType<SVGProps<SVGSVGElement>>> = {
  Instagram: InstagramIcon,
  "X / Twitter": XIcon,
  Facebook: FacebookIcon,
  YouTube: YouTubeIcon,
  SoundCloud: SoundCloudIcon,
};

export function SocialLinks({
  className = "flex items-center gap-4",
  iconClassName = "h-5 w-5",
  onNavigate,
}: {
  className?: string;
  iconClassName?: string;
  onNavigate?: () => void;
}) {
  return (
    <div className={className}>
      {siteConfig.socials.map((social) => {
        const Icon = socialIconMap[social.name];
        if (!Icon) return null;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            aria-label={`${social.name}, ${social.handle}`}
            className="inline-flex h-9 w-9 items-center justify-center text-[#9b9b93] transition-colors duration-300 hover:text-[#a8342a]"
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
}
