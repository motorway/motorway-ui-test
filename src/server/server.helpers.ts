import { Car, Tags } from '../types';

const getAllTagsByCars = (cars: Car[]): Tags => cars.map((car) => car.tags).flat();

const getUniqueTags = (tagsByCar: Tags): Tags => Array.from(new Set(tagsByCar));

export const getAllTags = (cars: Car[]) => {
  const tagsByCar = getAllTagsByCars(cars);
  return getUniqueTags(tagsByCar);
};

export const getFilteredTags = (tags: Tags, queryTag: string): Tags => {
  if (queryTag === '') {
    return [];
  }
  if (!queryTag) {
    return tags;
  }
  return tags.filter((tag) => tag.startsWith(queryTag));
};

export const getCarsByTag = (tag: string, cars: Car[]): Car[] => {
  if (tag === '') {
    return [];
  }
  if (!tag) {
    return cars;
  }

  return cars.filter((car) => car.tags.includes(tag));
};
