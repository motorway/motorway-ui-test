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
            className="gallery__image__wrapper"
            key={image.id}
            onClick={() => openModal(image)}
          >
            <ImageComponent
              className="gallery__image"
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
