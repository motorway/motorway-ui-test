import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/CardList/CardList";
import CardList from "./components/CardList/CardList";

const App = () => {
  const [images, setImages] = useState();
  const [view, setView] = useState("Grid");

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

  const handleStyleChange = () => {
    if (view === "Grid") {
      return setView("Gallery");
    }
    return setView("Grid");
  };

  const getNextView = () => {
    if (view === "Grid") {
      return "Gallery";
    }
    return "Grid";
  };

  return (
    <div className='page'>
      <div className='app'>
        <button
          className='style'
          onClick={handleStyleChange}
        >{`Style: ${view}. Change style to ${getNextView()}.`}</button>
        {images && <CardList images={images} view={view} />}
      </div>
    </div>
  );
};

export default App;
