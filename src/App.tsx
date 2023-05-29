import React, { useEffect, useState } from "react";
import CarPage from "./car-page/car-page";
import Form from "./form";
import type { CarImage } from "./types/image";

import "./App.css";

const App = () => {
  const [images, setImages] = useState<CarImage[]>();
  const [requestDuration, setRequestDuration] = useState<number>();

  useEffect(() => {
    console.log("useEffect");
    const requestStartTime = performance.now();

    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
        setRequestDuration(Math.trunc(performance.now() - requestStartTime));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      {images && <CarPage images={images} />}
      {requestDuration && (
        <section className="request-duration">
          Images loaded in {requestDuration} milliseconds
        </section>
      )}
      <Form />
    </div>
  );
};

export default App;
