import { webpSupported } from "./webpSupported";

export function getImageUrl(originalUrl) {
  return webpSupported ? `${originalUrl}.webp` : `${originalUrl}.jpg`;
}
