import { CarDTO, Tags } from "../types";

const getAllTagsByCars = (cars: CarDTO[]) => cars.map(car => car.tags).flat();

const getUniqueTags = (tagsByCar: Tags) => Array.from(new Set(tagsByCar));

export const getAllTags = (cars: CarDTO[]) => {
  const tagsByCar = getAllTagsByCars(cars);
  return getUniqueTags(tagsByCar);
} 

export const getFilteredTags = (tags: Tags, tagFromQuery: string) => {
  if (!tagFromQuery) {
    return tags;
  }
  return tags.filter((tag) => tag.startsWith(tagFromQuery));
}

export const getCarsByTag = (tag: string, cars: CarDTO[]) => cars.filter((car) => car.tags.includes(tag));