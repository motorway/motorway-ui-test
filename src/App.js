import React from "react";
import useImages from "./hooks/use-images";
import "./App.css";

const App = () => {
  const { images } = useImages();
  return (
    <div className="app">
      {images &&
        images.map((img) => (
          <div key={img.id}>
            <img src={img.url} alt="" />
            <img src={img.user.profile_image} alt="" />
          </div>
        ))}
    </div>
  );
};

export default App;
