import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Official videos from Reeplay: music videos, collabs, freestyles and behind the scenes from the channel.",
};

export default async function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}