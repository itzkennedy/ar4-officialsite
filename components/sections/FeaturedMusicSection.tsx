import { releases } from "@/lib/releases";
import { SectionHeader } from "@/components/SectionHeader";
import { ReleaseCard } from "@/components/ReleaseCard";
import { StaggerGroup, StaggerItem } from "@/components/animations";

export function FeaturedMusicSection() {
  const featured = releases.filter((r) => r.latest || r.type !== "Single").slice(0, 6);

  return (
    <section className="border-t border-[#1a1a1a] bg-[#0c0c0c]">
      <div className="mx-auto max-w-[1480px] px-5 py-20 sm:px-8 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader eyebrow="Discography" title="Featured Music" />
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3">
          {featured.map((release, i) => (
            <StaggerItem key={release.slug}>
              <ReleaseCard release={release} index={i} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}