export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  featured?: boolean;
}

export const youtubeChannel = {
  name: "Reeplay",
  handle: "@reeplaysumtin",
  url: "https://www.youtube.com/channel/UCp7Ibj9RmtEn-mk0kVrUOvw",
};

export const watchOnYouTube = (youtubeId: string) =>
  `https://www.youtube.com/watch?v=${youtubeId}`;

const thumbnail = (youtubeId: string, quality: "mqdefault" | "hqdefault" | "sddefault" | "maxresdefault" = "maxresdefault") =>
  `https://i.ytimg.com/vi/${youtubeId}/${quality}.jpg`;

export const videos: Video[] = [
  {
    id: "pompous",
    youtubeId: "gQKlqEWGGTk",
    title: "REEPLAY & ANTIWORLD GANGSTARS - POMPOUS (OFFICIAL VIDEO)",
    subtitle: "Reeplay & AntiWorld Gangstars",
    tag: "Official Video",
    date: "2026-02-19",
    featured: true,
  },
  {
    id: "akpor-akpor",
    youtubeId: "T68zdaSvaAI",
    title: "AKPOR AKPOR",
    subtitle: "Reeplay, Official Video",
    tag: "Official Video",
    date: "2025-07-16",
  },
  {
    id: "find-me",
    youtubeId: "pTg4s2TbtDs",
    title: "REEPLAY FT ERIGGA - FIND ME (OUT NOW)",
    subtitle: "Reeplay feat. Erigga",
    tag: "Collab",
    date: "2026-05-02",
  },
  {
    id: "orishirishi",
    youtubeId: "MHoLxGjT8BM",
    title: "REEPLAY FT DREMO - ORISHIRISHI",
    subtitle: "Reeplay feat. Dremo",
    tag: "Collab",
    date: "2026-05-01",
  },
  {
    id: "real-matters",
    youtubeId: "ssWvJvPefjw",
    title: "REAL MATTERS. | 10 MINUTES @6UFF @ODUMODUBLVCK",
    subtitle: "With @6uff & ODUMODUBLVCK, Anti World Gangstars",
    tag: "Session",
    date: "2026-04-12",
  },
  {
    id: "holy-anthem",
    youtubeId: "EKcYh9coNdI",
    title: "REEPLAY'S VERSE ON HOLY ANTHEM BY JERRY TAPA",
    subtitle: "Reeplay's verse, Holy Anthem by Jerry Tapa",
    tag: "Clip",
    date: "2026-04-02",
  },
  {
    id: "agenda-freestyle",
    youtubeId: "3VNNpR3tyRk",
    title: "AGENDA FREESTYLE",
    subtitle: "Reeplay, freestyle",
    tag: "Freestyle",
    date: "2025-11-03",
  },
  {
    id: "brains-of-akpor",
    youtubeId: "0iAczmdAOW0",
    title: "THE BRAINS BEHIND THE PRODUCTION OF AKPOR",
    subtitle: "Behind the scenes",
    tag: "Behind the Scenes",
    date: "2026-04-02",
  },
  {
    id: "country-dey-hot",
    youtubeId: "XJvqlB5lRKg",
    title: "COUNTRY DEY HOT",
    subtitle: "Reeplay, Official Clip",
    tag: "Official Clip",
    date: "2026-08-12",
  },
];

export const getVideoThumbnail = (youtubeId: string, quality?: "mqdefault" | "hqdefault" | "sddefault" | "maxresdefault") =>
  thumbnail(youtubeId, quality);

export const getFeaturedVideo = () => videos.find((v) => v.featured) ?? videos[0];