import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import style from './App.module.css';
import Form from "./components/Form/Form";
import { Gallery } from "./components/Grid/Gallery";


const App = () => {
  const [images, setImages] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

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
    <React.Fragment>
      <button className={style['modalButton']} onClick={setModalIsOpenToTrue}>View Form</button>
      <Modal isOpen={modalIsOpen}>
        <button className={style['modalButton']} onClick={setModalIsOpenToFalse}>x</button>
        <Form />
      </Modal>

      <div>
      <Gallery images={images} />     
      </div>

          </React.Fragment>
  );
};

export default App;
