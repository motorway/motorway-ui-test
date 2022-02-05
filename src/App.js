import "./App.css";

import React, { useEffect, useState } from "react";
import Banner from "./components/banner/banner";
import GalleryPreview from "./components/gallery-preview/gallery-preview";
import GalleryTiles from "./components/gallery-tiles/gallery-tiles";
import Modal from "./components/modal/modal";
import Gallery from "./components/gallery/gallery";
import SampleForm from "./components/sample-form/sample-form";

const App = () => {
  const [images, setImages] = useState();
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const toggleModal = () => {
    setIsModalOpen((value) => !value);
  };

  const onTileClick = (index) => {
    setCurrentPreviewIndex(index);
    toggleModal();
  };

  return (
    <>
      <div className="app">
        {!images ? (
          <div className="loading-state">loading...</div>
        ) : (
          <>
            <div className="banner">
              {images ? (
                <Banner
                  image={images[0]}
                  title="Car Images"
                  subtitle="By Aleksei Iurchak"
                />
              ) : null}
            </div>

            <div className="main">
              <div className="form">
                <SampleForm />
              </div>

              <div className="gallery-preview" onClick={toggleModal}>
                {images ? (
                  <GalleryPreview
                    images={images}
                    onClick={setCurrentPreviewIndex}
                  />
                ) : null}
              </div>
            </div>

            <div className="masonry">
              {images ? (
                <GalleryTiles images={images} onClick={onTileClick} />
              ) : null}
            </div>

            <Modal isOpen={isModalOpen} onClose={toggleModal}>
              <Gallery images={images} startIndex={currentPreviewIndex} />
            </Modal>
          </>
        )}
      </div>
      <div className="modal-container" />
    </>
  );
};

export default App;
