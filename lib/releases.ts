export type ReleaseType = "Album" | "EP" | "Single" | "Joint EP";

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

const art = (path: string, size = 1200) =>
  `https://is1-ssl.mzstatic.com/image/thumb/${path}/${size}x${size}bb.jpg`;

export const releases: Release[] = [
  {
    slug: "pick-2",
    title: "Pick 2",
    type: "Single",
    year: 2026,
    month: "May",
    trackCount: 2,
    artwork: art("Music211/v4/87/33/51/87335186-570c-e450-e1c2-d54c0cbfe5bb/0.jpg"),
    description:
      "A two-track project documenting the duality of success (the celebration and the cost), featuring Erigga and Dremo.",
    tracks: ["Orishirishi", "Find Me"],
    notes: "Released via ONErpm.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB" },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/ng/album/1768606659",
      },
      { platform: "Audiomack", url: "https://audiomack.com/reeplay-007" },
      { platform: "Deezer", url: "https://www.deezer.com/artist/300549" },
    ],
    latest: true,
  },
  {
    slug: "country-dey-hot",
    title: "Country Dey Hot",
    type: "Single",
    year: 2026,
    month: "July",
    trackCount: 1,
    artwork: art("Music211/v4/6b/e1/84/6be184c7-2d35-473d-2ce4-60dcff02b4db/0.jpg"),
    description:
      "A single reflecting on ambition, survival and the realities of everyday life in Nigeria, grounded in street experience.",
    notes: "Thematically follows Reeplay's signature storytelling.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB" },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/ng/album/1771023456",
      },
      { platform: "Audiomack", url: "https://audiomack.com/reeplay-007" },
      { platform: "Deezer", url: "https://www.deezer.com/artist/300549" },
    ],
  },
  {
    slug: "pompous",
    title: "Pompous",
    type: "Single",
    year: 2026,
    month: "Feb",
    trackCount: 1,
    artwork: art("Music221/v4/14/94/ff/1494ff4d-9245-16d1-0220-176c5bb80735/0.jpg"),
    description:
      "Reeplay's first single of 2026 featuring his crew AntiWorld Gangstars. A cocky record speaking on current events, love and envy.",
    tracks: ["Pompous"],
    notes: "Produced by Cross. Features AntiWorld Gangstars.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB" },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/ng/album/1790784375",
      },
      { platform: "Audiomack", url: "https://audiomack.com/reeplay-007" },
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=gQKlqEWGGTk" },
      { platform: "Deezer", url: "https://www.deezer.com/artist/300549" },
    ],
  },
  {
    slug: "charge-it-to-the-game",
    title: "Charge It to the Game",
    type: "Album",
    year: 2024,
    month: "July",
    trackCount: 7,
    artwork: art("Music221/v4/94/61/72/94617256-e949-be85-6171-31fd98592a7a/0.jpg"),
    description:
      "Reeplay's fifth solo project and a follow-up to The Jig Is Up, records reflecting his raw energy, confidence and musicality.",
    tracks: [
      "Something Ain't Right",
      "Like a Glove",
      "Boomerang",
      "All I See is Blood",
      "Charge It to the Game",
      "Catching Up",
      "My One Mistake",
    ],
    notes: "Features collaborations with Fatboy E, SGAWD and SMADA.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB" },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/ng/album/charge-it-to-the-game/1758897803",
      },
      { platform: "Audiomack", url: "https://audiomack.com/reeplay-007/album/charge-it-to-the-game" },
      { platform: "Deezer", url: "https://www.deezer.com/artist/300549" },
    ],
  },
  {
    slug: "the-jig-is-up",
    title: "The Jig Is Up",
    type: "Album",
    year: 2023,
    month: "Feb",
    trackCount: 12,
    artwork: art("Music116/v4/77/d2/9f/77d29f4c-1e2c-d7e9-7f72-f1015943db72/0.jpg"),
    description:
      "A 2023 album showcasing Reeplay's lyrical storytelling, wordplay and energetic delivery across twelve tracks.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB" },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/ng/album/the-jig-is-up/1668819019",
      },
      { platform: "Audiomack", url: "https://audiomack.com/reeplay-007/album/the-jig-is-up" },
      { platform: "Deezer", url: "https://www.deezer.com/artist/300549" },
    ],
  },
  {
    slug: "r18",
    title: "R18",
    type: "EP",
    year: 2022,
    month: "Feb",
    trackCount: 4,
    artwork: art("Music116/v4/cb/a9/8b/cba98b35-f98c-a002-12c0-dda64cf9e531/0.jpg"),
    description: "A four-track EP from Reeplay's catalogue.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB" },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/ng/album/1696760056",
      },
      { platform: "Audiomack", url: "https://audiomack.com/reeplay-007" },
      { platform: "Deezer", url: "https://www.deezer.com/artist/300549" },
    ],
  },
  {
    slug: "out-on-bail",
    title: "Out On Bail",
    artist: "ODUMODUBLVCK & REEPLAY",
    type: "Joint EP",
    year: 2022,
    month: "Apr",
    trackCount: 2,
    artwork: art("Music126/v4/23/77/51/2377513d-c2e8-803b-2e34-64eae478147c/0.jpg"),
    description:
      "A two-track EP released after the exoneration of the Anti World Gangstars, throwing light on the experience and the aftermath. Featuring the track 'Na Now'.",
    tracks: ["Na Now", "…"],
    notes: "Produced by Cross.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB" },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/ng/album/1659088206",
      },
      { platform: "Audiomack", url: "https://audiomack.com/anti-world-gangstars/album/out-on-bail" },
      { platform: "Deezer", url: "https://www.deezer.com/artist/300549" },
    ],
  },
  {
    slug: "who-is-reeplay",
    title: "Who Is Reeplay",
    type: "Single",
    year: 2023,
    month: "Jul",
    trackCount: 3,
    artwork: art("Music116/v4/6b/6b/2e/6b6b2e86-62d8-ecc8-e3c5-28b41e14d78b/0.jpg"),
    description: "A three-track single answering the question on everyone's mind.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB" },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/ng/album/1696760056",
      },
      { platform: "Audiomack", url: "https://audiomack.com/reeplay-007" },
      { platform: "Deezer", url: "https://www.deezer.com/artist/300549" },
    ],
  },
  {
    slug: "abnormal-normality",
    title: "Abnormal Normality",
    type: "Album",
    year: 2021,
    month: "Aug",
    trackCount: 15,
    artwork: art("Music125/v4/d4/c2/8c/d4c28c34-5ba2-8512-f153-f9e98a2becf4/0.jpg"),
    description:
      "Reeplay's fifteen-track debut album, the 2021 project that announced him. Featuring ODUMODUBLVCK and XL Spiff.",
    tracks: [
      "Dreams of an Underdog",
      "Hard to Copy",
      "Mr Talk and Do",
      "Mind Your Business",
      "…",
    ],
    notes: "© 2021 ANTIWORLD GANGSTARS.",
    links: [
      { platform: "Spotify", url: "https://open.spotify.com/album/2ujsdQE6ySNhn5vbYuFoEB" },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/ng/album/abnormal-normality/1577084989",
      },
      { platform: "Audiomack", url: "https://audiomack.com/reeplay-007" },
      { platform: "Deezer", url: "https://www.deezer.com/album/245364482" },
    ],
    featured: true,
  },
];

export const getReleaseBySlug = (slug: string): Release | undefined =>
  releases.find((r) => r.slug === slug);

export const latestRelease = releases.find((r) => r.latest);
export const featuredReleases = releases.filter((r) => r.featured || r.latest);
export const albumsOnly = releases.filter((r) => r.type === "Album");
