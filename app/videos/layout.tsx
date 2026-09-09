import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Film",
  description:
    "The films of AR4: official music videos, visualisers and lyric videos, streaming on YouTube under the channel AR4.",
};

export default async function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
