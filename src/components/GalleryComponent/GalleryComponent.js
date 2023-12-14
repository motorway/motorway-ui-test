import React, { useState } from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import ModalComponent from "../ModalComponent/ModalComponent";
import "./GalleryComponent.css";

const GalleryComponent = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="gallery">
        {images.map((image) => (
          <div
            className="gallery-image-wrapper"
            key={image.id}
            onClick={() => openModal(image)}
          >
            <ImageComponent
              className="gallery-image"
              imagePath={image.url}
              altText={image.alt_description}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ModalComponent selectedImage={selectedImage} closeModal={closeModal} />
      )}
    </>
  );
};

export default GalleryComponent;
