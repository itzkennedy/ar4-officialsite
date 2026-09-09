export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  type: "portrait" | "artwork" | "studio" | "archive";
  span?: "tall" | "wide" | "standard";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "frame-01",
    src: "/images/ar4/its-not-dat-deep-3.jpg",
    alt: "AR4",
    caption: "One man soldier",
    type: "studio",
    span: "standard",
  },
  {
    id: "frame-02",
    src: "/images/ar4/its-not-dat-deep-1.jpg",
    alt: "AR4",
    caption: "IT'S NOT DAT DEEP",
    type: "portrait",
    span: "tall",
  },
  {
    id: "frame-04",
    src: "/images/ar4/its-not-dat-deep-2.jpg",
    alt: "AR4",
    caption: "From the era",
    type: "portrait",
    span: "tall",
  },
];
