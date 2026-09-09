import type { MetadataRoute } from "next";
import { releases } from "@/lib/releases";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/music",
    "/videos",
    "/live",
    "/about",
    "/gallery",
    "/contact",
  ].map((route) => ({
    url: `https://ar4.ng${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const releaseRoutes = releases.map((release) => ({
    url: `https://ar4.ng/music/${release.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...releaseRoutes];
}