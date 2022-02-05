import "./gallery-preview.css";

import { useEffect, useState } from "react";

const GalleryPreview = ({ images, onClick }) => {
  const [index, setIndex] = useState(1);
  const currentImage = images[index % images.length];

  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 1500);

    return () => clearInterval(timerId);
  }, []);

  const onPreviewClick = () => {
    onClick(index % images.length);
  };

  return (
    <div className="gallery-preview__wrapper" onClick={onPreviewClick}>
      <img
        className="gallery-preview__image"
        src={`${currentImage.url}.jpg`}
        alt={currentImage.alt_description}
      />
    </div>
  );
};

export default GalleryPreview;
