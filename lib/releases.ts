export type ReleaseType = "Album" | "EP" | "Single";

export interface ReleaseLink {
  platform: "Spotify" | "Apple Music" | "Audiomack" | "YouTube" | "Deezer";
  url: string;
}

export interface Release {
  slug: string;
  title: string;
  artist?: string;
  type: ReleaseType;
  year: number;
  month?: string;
  trackCount: number;
  artwork: string;
  description?: string;
  notes?: string;
  tracks?: string[];
  links: ReleaseLink[];
  featured?: boolean;
  latest?: boolean;
}

export const releases: Release[] = [
  {
    slug: "its-not-dat-deep",
    title: "IT'S NOT DAT DEEP",
    artist: "AR4 & denzl",
    type: "Album",
    year: 2026,
    month: "Aug",
    trackCount: 7,
    artwork: "/ar4/covers/its-not-dat-deep.jpg",
    description:
      "The debut album and the declaration of the current era. Seven tracks cut with an unbothered calm, produced alongside denzl and released through rain. labs.",
    tracks: [
      "HYPNOTIZE",
      "LOVA",
      "PAY NO MIND",
      "BROWN BENTAYGA",
      "NEED YA",
      "IDK",
      "NO BE LIE",
    ],
    notes: "℗ 2026 rain. labs, under exclusive license from AR4 & denzl.",
    links: [
      {
        platform: "Audiomack",
        url: "https://audiomack.com/ar4oluwa/album/its-not-dat-deep-6833340",
      },
    ],
    featured: true,
    latest: true,
  },
  {
    slug: "pay-no-mind",
    title: "Pay No Mind",
    artist: "AR4, denzl, SGaWD & Zamir",
    type: "Single",
    year: 2026,
    month: "May",
    trackCount: 1,
    artwork: "/ar4/covers/pay-no-mind.jpg",
    description:
      "The lead single for the era. A quiet-voiced refusal to be moved, built with denzl and carried by SGaWD and Zamir.",
    notes: "℗ 2026 rain. labs, under exclusive license from AR4 & denzl.",
    links: [
      {
        platform: "Spotify",
        url: "https://open.spotify.com/track/5NbA1oqf12C7GmnIMfQXUo",
      },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/us/album/pay-no-mind-single/1895593066",
      },
      {
        platform: "Audiomack",
        url: "https://audiomack.com/ar4oluwa/song/pay-no-mind-6255239",
      },
    ],
    featured: true,
  },
  {
    slug: "no-be-lie",
    title: "No Be Lie",
    artist: "AR4 & denzl",
    type: "Single",
    year: 2025,
    month: "Nov",
    trackCount: 1,
    artwork: "/ar4/covers/no-be-lie.jpg",
    description:
      "The record that started turning heads before the era fully arrived. Carried into the album, where it lives on as a centrepiece.",
    links: [
      {
        platform: "Audiomack",
        url: "https://audiomack.com/ar4oluwa/song/no-be-lie-2971355",
      },
    ],
  },
  {
    slug: "10-toes",
    title: "10 TOES",
    artist: "AR4, denzl, malik bawa & Lexi",
    type: "Single",
    year: 2026,
    month: "Jan",
    trackCount: 1,
    artwork: "/ar4/covers/10-toes.jpg",
    description:
      "A low, grounded flex, feet planted. One of the records that defined AR4's most-played run.",
    links: [
      { platform: "Audiomack", url: "https://audiomack.com/ar4oluwa" },
    ],
  },
  {
    slug: "nirv4n4-j4ded",
    title: "NIRV4N4 / J4DED",
    artist: "AR4 & FADAH",
    type: "Single",
    year: 2024,
    month: "Dec",
    trackCount: 2,
    artwork: "/ar4/covers/nirv4n4-j4ded.jpg",
    description:
      "A two-part study in duality, heaven-leaning ease and quiet exhaustion, shared with FADAH.",
    links: [
      { platform: "Audiomack", url: "https://audiomack.com/ar4oluwa" },
    ],
  },
  {
    slug: "dedicated",
    title: "Dedicated",
    artist: "AR4",
    type: "Single",
    year: 2024,
    month: "Feb",
    trackCount: 1,
    artwork: "/ar4/covers/dedicated.jpg",
    description:
      "The debut single. A melodious testament to the road travelled and the road ahead, produced by MOFO, and the start of it all.",
    notes: "Written by Araoluwa Giwa-Osagie. Produced by MOFO.",
    links: [
      { platform: "Audiomack", url: "https://audiomack.com/ar4oluwa" },
    ],
  },
];

export const getReleaseBySlug = (slug: string): Release | undefined =>
  releases.find((r) => r.slug === slug);

export const latestRelease = releases.find((r) => r.latest);
export const featuredReleases = releases.filter((r) => r.featured || r.latest);
export const albumsOnly = releases.filter((r) => r.type === "Album");
