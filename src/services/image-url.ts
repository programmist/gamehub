import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImgUrl = (
  url: string,
  width: number = 600,
  height: number = 400
) => {
  if (!url) return noImage;
  const target = "media/";
  let splitIdx = url.indexOf(target) + target.length;
  return (
    url.slice(0, splitIdx) + `crop/${width}/${height}/` + url.slice(splitIdx)
  );
};

export default getCroppedImgUrl;
