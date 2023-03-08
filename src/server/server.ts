import express, { json, Request } from "express";
import cors from "cors";

import images from './data/images.json' assert { type: 'json' };
import { getFilteredTags, getAllTags } from "./server.helpers";

interface Tags {
  tag: string;
}

const port = 8000;
const feApp = 'http://127.0.0.1:5173';

const allTags = getAllTags(images);

const corsOptions = {
  origin: feApp,
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));

app.get('/api/images', ({ query }, res) => {
  console.log('query images', query?.input)
  res.json(images);
});

app.get('/api/tags', ({ query }:  Request<{}, {}, {}, Tags>, res): string[] => {
  const { tag: queryTag } = query;
  const tags = getFilteredTags(allTags, queryTag);

  if (tags.length === 0) {
    res.json(["No Results"]);
    return;
  }

  res.json(tags);
});

app.listen(port, () => {
  console.log(`App server listening on port ${port}`);
});