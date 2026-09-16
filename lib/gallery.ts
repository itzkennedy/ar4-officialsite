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
    id: "frame-03",
    src: "/images/ar4/hate-me.jpg",
    alt: "AR4",
    caption: "Hate me",
    type: "archive",
    span: "tall",
  },
  {
    id: "frame-04",
    src: "/images/ar4/its-not-dat-deep-2.jpg",
    alt: "AR4",
    caption: "From the first chapter",
    type: "portrait",
    span: "tall",
  },
  {
    id: "frame-05",
    src: "/images/ar4/press-02.jpg",
    alt: "AR4",
    caption: "Press shoot",
    type: "portrait",
    span: "tall",
  },
  {
    id: "frame-06",
    src: "/images/ar4/year-of-the-gun.jpg",
    alt: "AR4",
    caption: "Year of the gun",
    type: "portrait",
    span: "tall",
  },
  {
    id: "frame-07",
    src: "/images/ar4/nbl-editorial.jpg",
    alt: "AR4",
    caption: "NBL editorial",
    type: "studio",
    span: "tall",
  },
  {
    id: "frame-08",
    src: "/images/ar4/one-man-soldier.jpg",
    alt: "AR4",
    caption: "One man soldier",
    type: "portrait",
    span: "tall",
  },
  {
    id: "frame-09",
    src: "/images/ar4/fav-holiday.jpg",
    alt: "AR4",
    caption: "Fav holiday",
    type: "archive",
    span: "tall",
  },
  {
    id: "frame-10",
    src: "/images/ar4/leopard-editorial.jpg",
    alt: "AR4",
    caption: "Leopard editorial",
    type: "portrait",
    span: "tall",
  },
  {
    id: "frame-11",
    src: "/images/ar4/studio-teaser.jpg",
    alt: "AR4",
    caption: "Studio teaser",
    type: "studio",
    span: "tall",
  },
];
