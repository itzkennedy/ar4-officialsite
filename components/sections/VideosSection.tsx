import { videos, channel, getFeaturedVideo } from "@/lib/videos";
import { SectionHeader } from "@/components/SectionHeader";
import { VideoCard } from "@/components/VideoCard";
import { StaggerGroup, StaggerItem } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";

export function VideosSection() {
  const featured = getFeaturedVideo();
  const rest = videos.filter((v) => v.id !== featured.id).slice(0, 3);

  return (
    <section className="border-t border-[#1a1a1a] bg-[#08080a]">
      <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 md:py-32">
        <SectionHeader eyebrow="Moving Pictures" title="Film" />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((video, i) => (
            <StaggerItem key={video.id}>
              <VideoCard video={video} index={i} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-16 flex justify-center">
          <ButtonLink
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="md"
            showArrow
          >
            The channel
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
