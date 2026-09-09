export interface Video {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  youtubeId: string;
  url: string;
  featured?: boolean;
}

export const channel = { name: "AR4", url: "https://www.youtube.com/@ar4oluwa" };

const thumbnailUrl = (youtubeId: string) =>
  `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

export const videos: Video[] = [
  {
    id: "pay-no-mind",
    title: "AR4 & denzl – PAY NO MIND (featuring SGaWD & Zamir)",
    subtitle: "Visualiser",
    date: "2026",
    youtubeId: "9kLn3abe_w0",
    url: "https://www.youtube.com/watch?v=9kLn3abe_w0",
    featured: true,
  },
  {
    id: "dedicated",
    title: "Dedicated",
    subtitle: "Music video",
    date: "2024",
    youtubeId: "Ul5vxnVbKlE",
    url: "https://www.youtube.com/watch?v=Ul5vxnVbKlE",
  },
  {
    id: "10-toes",
    title: "10 TOES",
    subtitle: "Official lyric video",
    date: "2026",
    youtubeId: "JzD8lpsyFnA",
    url: "https://www.youtube.com/watch?v=JzD8lpsyFnA",
  },
  {
    id: "shine-forever-refix",
    title: "Shine Forever Refix",
    subtitle: "Audio",
    date: "2024",
    youtubeId: "l6H8NMAMtIE",
    url: "https://www.youtube.com/watch?v=l6H8NMAMtIE",
  },
];

export const getThumbnailUrl = (youtubeId: string) => thumbnailUrl(youtubeId);

export const getFeaturedVideo = () => videos.find((v) => v.featured) ?? videos[0];
