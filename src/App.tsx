import React, { useEffect, useState } from "react";
import type { CarImage } from "./types/image";

import "./App.css";

const App = () => {
  const [images, setImages] = useState<CarImage[]>();

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      {images &&
        images.map((img) => (
          <div key={img.id}>
            <img src={`${img.url}.jpg`} alt="" />
            <img src={`${img.user.profile_image}.webp`} alt="" />
          </div>
        ))}
    </div>
  );
};

export default App;
