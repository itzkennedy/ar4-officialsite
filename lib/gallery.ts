export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  type: "portrait" | "artwork" | "studio" | "archive";
  span?: "tall" | "wide" | "standard";
}

const art = (path: string, size = 1000) =>
  `https://is1-ssl.mzstatic.com/image/thumb/${path}/${size}x${size}bb.jpg`;

export const galleryImages: GalleryImage[] = [
  {
    id: "artist-01",
    src: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages211/v4/31/ab/02/31ab0292-7d02-f62f-1ace-d2a85f1c0373/file_cropped.png/1400x1400bb.png",
    alt: "Reeplay portrait",
    caption: "Reeplay, official artist portrait",
    type: "portrait",
    span: "tall",
  },
  {
    id: "art-charge",
    src: art("Music221/v4/94/61/72/94617256-e949-be85-6171-31fd98592a7a/0.jpg"),
    alt: "Charge It to the Game cover artwork",
    caption: "Charge It to the Game, album cover",
    type: "artwork",
  },
  {
    id: "art-jig",
    src: art("Music116/v4/77/d2/9f/77d29f4c-1e2c-d7e9-7f72-f1015943db72/0.jpg"),
    alt: "The Jig Is Up cover artwork",
    caption: "The Jig Is Up, album cover",
    type: "artwork",
  },
  {
    id: "art-normal",
    src: art("Music125/v4/d4/c2/8c/d4c28c34-5ba2-8512-f153-f9e98a2becf4/0.jpg"),
    alt: "Abnormal Normality cover artwork",
    caption: "Abnormal Normality, album cover",
    type: "artwork",
    span: "tall",
  },
  {
    id: "art-bail",
    src: art("Music126/v4/23/77/51/2377513d-c2e8-803b-2e34-64eae478147c/0.jpg"),
    alt: "Out On Bail cover artwork",
    caption: "Out On Bail, with ODUMODUBLVCK",
    type: "artwork",
  },
  {
    id: "art-pick2",
    src: art("Music211/v4/87/33/51/87335186-570c-e450-e1c2-d54c0cbfe5bb/0.jpg"),
    alt: "Pick 2 cover artwork",
    caption: "Pick 2, album cover",
    type: "artwork",
  },
  {
    id: "art-r18",
    src: art("Music116/v4/cb/a9/8b/cba98b35-f98c-a002-12c0-dda64cf9e531/0.jpg"),
    alt: "R18 EP cover artwork",
    caption: "R18, EP",
    type: "artwork",
  },
  {
    id: "art-country",
    src: art("Music211/v4/6b/e1/84/6be184c7-2d35-473d-2ce4-60dcff02b4db/0.jpg"),
    alt: "Country Dey Hot cover artwork",
    caption: "Country Dey Hot, single",
    type: "artwork",
  },
  {
    id: "art-pompous",
    src: art("Music221/v4/14/94/ff/1494ff4d-9245-16d1-0220-176c5bb80735/0.jpg"),
    alt: "Pompous cover artwork",
    caption: "Pompous, with AntiWorld Gangstars",
    type: "artwork",
  },
  {
    id: "art-who",
    src: art("Music116/v4/6b/6b/2e/6b6b2e86-62d8-ecc8-e3c5-28b41e14d78b/0.jpg"),
    alt: "Who Is Reeplay cover artwork",
    caption: "Who Is Reeplay",
    type: "archive",
  },
];