import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { CurrentEraSection } from "@/components/sections/CurrentEraSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { VideosSection } from "@/components/sections/VideosSection";
import { TheArtistSection } from "@/components/sections/TheArtistSection";
import { LiveSection } from "@/components/sections/LiveSection";
import { ArchiveSection } from "@/components/sections/ArchiveSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { FinalSection } from "@/components/sections/FinalSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <CurrentEraSection />
        <MusicSection />
        <VideosSection />
        <TheArtistSection />
        <LiveSection />
        <ArchiveSection />
        <JournalSection />
        <FinalSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
