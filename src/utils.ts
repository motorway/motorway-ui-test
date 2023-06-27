import { Image } from "./types";

export const getChunks = <T>(array: T[], chunkSize: number): T[][] =>
  Array.from(new Array(Math.ceil(array.length / chunkSize)), (_, i) =>
    array.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

export const generateEmptyImageObjects = (numObjects: number): Image[] => [
  ...Array(numObjects).fill(0).map((_, index) => ({
    id: index.toString(),
    alt_description: "loading",
    url: "https://via.placeholder.com/150",
    index: index,
  })),
];