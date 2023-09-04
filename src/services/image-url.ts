const getCroppedImgUrl = (
  url: string,
  width: number = 600,
  height: number = 400
) => {
  const target = "media/";
  let splitIdx = url.indexOf(target) + target.length;
  return (
    url.slice(0, splitIdx) + `crop/${width}/${height}/` + url.slice(splitIdx)
  );
};

export default getCroppedImgUrl;
