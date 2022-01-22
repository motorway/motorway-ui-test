import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Modal from "../modal/Modal";
import ImageGrid from "./ImageGrid";
import { ReactComponent as AddIcon } from "../../ic-plus.svg";
import Form from "../form/Form";

const Home = () => {
  const [images, setImages] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [selectCarModalStatus, setSelectCarModalStatus] = useState(false);
  const [formModalStatus, setFormModalStatus] = useState(false);

  const selectedCarModalClose = () => {
    setSelectedImage({});
    setSelectCarModalStatus(false);
  };

  const formModalClose = () => {
    setFormModalStatus(false);
  };

  useEffect(() => {
    fetch("images?limit=14")
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
    <>
      <div className="header">
        <div className="title">
          <span className="motorway">Motorway </span>
          <span className="photo__gallery">Gallery</span>
        </div>
        <button className="add-button" onClick={() => setFormModalStatus(true)}>
          <AddIcon />
        </button>
      </div>
      <div className="gallery">
        {images?.map((image, index) => (
          <Fragment key={image.id}>
            <ImageGrid
              index={index}
              imageUrl={image.url}
              onClick={() => {
                setSelectedImage(image);
                setSelectCarModalStatus(true);
              }}
            />
          </Fragment>
        ))}
      </div>
      {selectCarModalStatus && (
        <Modal isOpen={selectCarModalStatus} onClose={selectedCarModalClose}>
          <div className="modal__body">
            <img
              src={`${selectedImage?.url}.webp`}
              alt=""
              className="gallery__img"
            />
          </div>
        </Modal>
      )}

      {formModalStatus && (
        <Modal isOpen={formModalStatus} onClose={formModalClose}>
          <div className="form_modal__body">
            <Form />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Home;
