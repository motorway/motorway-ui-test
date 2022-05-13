"use strict";

const app = require("express")();
const images = require("./src/images.json");

// The API was being delayed by the setTimeout, so it was always taking
// between 500ms and 1500ms to return the response
// Removing the setTimeout fixes this issue
// I have added a console.log inside App.js to see how many ms the API
// takes to give the response
// If we load the page with and without the setTimeout, we can see the difference
// in ms between the get requests
// const randomInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

app.get("/images", ({ query }, res) => {
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images;

  // setTimeout(() => {
  return res.status(200).json(i);
  // }, randomInterval(500, 1500));
});

app.listen(5000, () => {
  process.stdout.write("Server is available on http://localhost:5000/\n");
});
