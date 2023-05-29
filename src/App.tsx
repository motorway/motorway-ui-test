import React, { useEffect, useState } from "react";
import CarPage from "./car-page";
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

  return <div className="app">{images && <CarPage images={images} />}</div>;
};

export default App;
