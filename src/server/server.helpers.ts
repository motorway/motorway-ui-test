import { ImageDTO, Tags } from "../types";

const getImagesTags = (images: ImageDTO[]) => images.map(image => image.tags).flat();

const getUniqueTags = (tagsByImage: Tags) => Array.from(new Set(tagsByImage));

export const getAllTags = (images: ImageDTO[]) => {
  const tagsByImage = getImagesTags(images);
  return getUniqueTags(tagsByImage);
} 

export const getFilteredTags = (tags: Tags, queryTag: string) => {
  if (!queryTag) {
    return tags;
  }
  return tags.filter((tag) => tag.includes(queryTag.toString()))
}