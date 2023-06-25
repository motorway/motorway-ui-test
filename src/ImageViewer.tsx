import { useEffect, useState } from "react";
import "./App.css";
import { Image as ImageType } from "./types";
import { Image } from "@chakra-ui/react";

export const ImageViewer = () => {
  const [images, setImages] = useState<ImageType[]>([]);

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
            <Image
              src={`${img.url}.jpg`}
              alt={img.alt_description}
              boxSize="500px"
              objectFit="contain"
            />
            <Image
              src={`${img.user.profile_image}.webp`}
              alt=""
              boxSize="500px"
              objectFit="contain"
            />
          </div>
        ))}
    </div>
  );
};
