'use strict';

const app = require('express')();
const { performance } = require('perf_hooks');
const images = require('./src/images.json');

// Cache the images to avoid reading from file on every request
let cachedImages = images;

app.get('/images', async ({ query }, res) => {
  try {
    const startTime = performance.now(); // Record the start time

    const limit = parseInt(query.limit);
    const start = parseInt(query.start || 0);
    const i = (Number.isInteger(limit)) ? cachedImages.slice(start, limit + start) : cachedImages;

    const end = performance.now(); // Record the end time
    const duration = end - startTime; // Calculate the duration in milliseconds

    // TODO: record request data in storage db/file
    
    return res.status(200).json({
      images: i,
      responseTime: duration.toFixed(2) + 'ms' // Return the response time in the response
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(5000, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n');
});
