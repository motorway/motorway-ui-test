import React from "react";
import useImages from "./hooks/use-images";
import "./App.css";

const App = () => {
  const { images } = useImages();
  return (
    <div className="app">
      {images &&
        images.map(({ id, url, user: { profile_image: image } }) => (
          <Image key={id} url={url} iamage={image} />
        ))}
    </div>
  );
};

export default App;
