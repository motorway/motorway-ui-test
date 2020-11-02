import React from "react";

const useImages = () => {
  const [images, setImages] = React.useState();
  React.useEffect(() => {
    fetch("http://localhost:3000/images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return { images };
};

export default useImages;
