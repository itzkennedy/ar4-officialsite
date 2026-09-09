import { videos, channel, getFeaturedVideo } from "@/lib/videos";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { Newsletter } from "@/components/Newsletter";
import { VideoCard } from "@/components/VideoCard";
import { StaggerGroup, StaggerItem } from "@/components/animations";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/icons";


export default function VideosPage() {
  const featured = getFeaturedVideo();
  const rest = videos.filter((v) => v.id !== featured.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Moving Pictures"
          title="Film."
          description="The films of AR4, official videos, visualisers and lyric films from the world of IT'S NOT DAT DEEP, on YouTube."
        />

        <section className="bg-[#08080a]">
          <div className="mx-auto max-w-[1480px] px-5 pb-16 sm:px-8 md:pb-24">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#1a1a1a] pb-6">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#9b9b93]">
                  The Channel
                  <span className="ml-3 text-[#F2F0EA]">@ar4oluwa</span>
                </p>
              </div>
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#F2F0EA] underline decoration-[#a8342a] decoration-2 underline-offset-4 transition-colors hover:text-[#a8342a]"
              >
                Visit the channel
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-sm bg-[#111]">
              <iframe
                src={`https://www.youtube.com/embed/${featured.youtubeId}`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
          <div className="mx-auto max-w-[1480px] px-5 py-16 sm:px-8 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeader eyebrow="The Archive" title="All Films" />
              <ButtonLink
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="md"
                showArrow
              >
                Visit the channel
              </ButtonLink>
            </div>

            <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((video, i) => (
                <StaggerItem key={video.id}>
                  <VideoCard video={video} index={i} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
