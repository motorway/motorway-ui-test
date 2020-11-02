import React from "react";
import Images from "./components/molecules/Images";
import useImages from "./hooks/use-images";
import "./App.css";

const App = () => {
  const { images } = useImages();
  return <div className="app">{images && <Images images={images} />}</div>;
};

export default App;
