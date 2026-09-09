import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#080808] px-5 py-24 text-center">
        <p className="font-serif text-xl italic text-[#a8342a]">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-6xl font-normal uppercase leading-none text-[#F2F0EB] sm:text-8xl">
          Lost the beat.
        </h1>
        <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-[#9b9b93]">
          This page isn&apos;t in the tracklist. Rewind to a place that hits.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" variant="primary" size="lg">
            Back Home
          </ButtonLink>
        </div>
      </main>
      <Footer />
    </>
  );
}