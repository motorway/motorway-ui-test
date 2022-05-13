import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Form from "./Form";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    let initialTime = new Date();
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        // This console.log shows how many ms the API takes to give the response
        console.log(
          "Response time for the API: " + (new Date() - initialTime) + "ms"
        );
        //console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      <div className="cards-container">
        {images &&
          images.map((img, index) => (
            <Card img={img} index={index} key={img.id} />
          ))}
      </div>
      <Form />
    </div>
  );
};

export default App;
