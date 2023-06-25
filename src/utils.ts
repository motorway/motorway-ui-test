export const getChunks = <T,>(array: T[], chunkSize: number): T[][] =>
  Array.from(
    new Array(Math.ceil(array.length / chunkSize)),
    (_, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
