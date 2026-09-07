export const artistImages = {
  hero: {
    src: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages211/v4/31/ab/02/31ab0292-7d02-f62f-1ace-d2a85f1c0373/file_cropped.png",
    square: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages211/v4/31/ab/02/31ab0292-7d02-f62f-1ace-d2a85f1c0373/file_cropped.png/1200x1200bb.png",
    alt: "Reeplay",
  },
};

export const imageSizes = {
  thumb: 300,
  md: 600,
  lg: 1000,
  xl: 1400,
  xxl: 2000,
};

export const appleArt = (
  path: string,
  size = 1200
) => `https://is1-ssl.mzstatic.com/image/thumb/${path}/${size}x${size}bb.jpg`;
