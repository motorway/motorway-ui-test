export const webpSupported = (() => {
  const elem = new OffscreenCanvas(1, 1);
  return elem.getContext && elem.getContext("2d").imageSmoothingEnabled;
})();
