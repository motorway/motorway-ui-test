import { CarDTO, Tags } from "../types";

const getAllTagsByCars = (cars: CarDTO[]) => cars.map(car => car.tags).flat();

const getUniqueTags = (tagsByCar: Tags) => Array.from(new Set(tagsByCar));

export const getAllTags = (cars: CarDTO[]) => {
  const tagsByCar = getAllTagsByCars(cars);
  return getUniqueTags(tagsByCar);
} 

export const getFilteredTags = (tags: Tags, queryTag: string) => {
  if (!queryTag) {
    return tags;
  }
  return tags.filter((tag) => tag.includes(queryTag.toString()))
}

export const getCarsByTag = (tag: string, cars: CarDTO[]) => cars.filter((car) => car.tags.includes(tag));