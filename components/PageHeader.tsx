import { Reveal } from "@/components/animations";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="bg-[#080808]">
      <div className="mx-auto max-w-[1480px] px-5 pb-14 pt-32 sm:px-8 md:pb-20 md:pt-40">
        <Reveal>
          <p className="font-serif text-xl italic leading-snug text-[#a8342a]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] font-normal leading-[0.92] tracking-[0.01em] text-[#F2F0EB]">
            {title}
          </h1>
          {description ? (
            <p className="mt-7 max-w-[62ch] text-base leading-relaxed text-[#8a8a8a]">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
