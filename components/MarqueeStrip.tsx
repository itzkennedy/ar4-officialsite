export function MarqueeStrip({
  phrases = ["AR4", "IT'S NOT DAT DEEP", "one man soldier", "NEW MUSIC", "NEED YA", "PAY NO MIND"],
}: {
  phrases?: string[];
}) {
  const item = (key: string, text: string) => (
    <span
      key={key}
      className="flex items-center font-display text-3xl font-normal uppercase text-[#1f1f1f]"
    >
      {text}
      <span className="mx-8 text-[#a8342a]">✦</span>
    </span>
  );

  return (
    <div
      className="hidden overflow-hidden border-y border-[#1a1a1a] bg-[#0c0c0c] py-5 md:block"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex shrink-0 items-center">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {phrases.map((p, i) => item(`${n}-${i}`, p))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
