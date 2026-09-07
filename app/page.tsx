import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { LatestReleaseSection } from "@/components/sections/LatestReleaseSection";
import { FeaturedMusicSection } from "@/components/sections/FeaturedMusicSection";
import { VideosSection } from "@/components/sections/VideosSection";
import { AntiWorldSection } from "@/components/sections/AntiWorldSection";
import { LiveSection } from "@/components/sections/LiveSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <LatestReleaseSection />
        <FeaturedMusicSection />
        <VideosSection />
        <AntiWorldSection />
        <LiveSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}