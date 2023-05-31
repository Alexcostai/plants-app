const imageSrcFormatter = (src) =>
  src.includes("bs.plantnet.org")
    ? src
    : `https://res.cloudinary.com/demo/image/fetch/${src}`;

export default { imageSrcFormatter };
