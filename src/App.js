import React, { useEffect, useState } from "react";
import "./App.css";

import FormComponent from "./components/FormComponent/FormComponent";

import GalleryComponent from "./components/GalleryComponent/GalleryComponent";

const App = () => {
  const [images, setImages] = useState([]);

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
      <GalleryComponent images={images} />
      <FormComponent />
    </div>
  );
};

export default App;
