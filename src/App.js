import React, { useEffect, useState } from 'react';
import Image from './components/Image/image';
import Form from './components/Form/form';
import './App.scss';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const openModal = (id) => {
    const img = images.find((item) => item.id === id);

    if (img) {
      setSelectedImage(img);
    }
  };

  const closeModal = () => {
    setSelectedImage(undefined);
  };

  return (
    <>
      <div className="container">
        {images?.map((img, index) => (
          <Image
            {...img}
            index={index + 1}
            key={img.id + index}
            onClick={openModal}
          />
        ))}
      </div>

      <Form />

      {selectedImage ? (
        <div className="modal">
          <button className="modal-close" type="button" onClick={closeModal}>✖</button>
          <img className="modal-img" src={selectedImage.url} alt={selectedImage.alt_description} />
        </div>
      ) : null}
    </>
  );
};

export default App;
