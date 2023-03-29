import express, { json, Request } from "express";
import cors from "cors";

import cars from './data/cars.json' assert { type: 'json' };
import { getFilteredTags, getAllTags, getCarsByTag } from "./server.helpers";

interface Query {
  tag: string;
}

const port = 8000;

const allTags = getAllTags(cars);

const app = express();

app.use(cors());

app.get('/api/cars', ({ query }: Request<{}, {}, {}, Query>, res) => {
  const { tag } = query;
  const carsByTag = getCarsByTag(tag, cars);

  if (carsByTag.length === 0) {
    res.json(["No Results"]);
    return;
  }

  res.json(carsByTag);
});

app.get('/api/tags', ({ query }:  Request<{}, {}, {}, Query>, res): string[] => {
  const { tag } = query;
  const tags = getFilteredTags(allTags, tag);

  if (tags.length === 0) {
    res.json(["No Results"]);
    return;
  }

  res.json(tags);
});

app.listen(port, () => {
  console.log(`App server listening on port ${port}`);
});