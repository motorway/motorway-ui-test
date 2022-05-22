import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/CardList/CardList";
import CardList from "./components/CardList/CardList";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";

const App = () => {
  const [images, setImages] = useState();
  const [view, setView] = useState("Grid");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleStyleChange = () => {
    if (view === "Grid") {
      return setView("Gallery");
    }
    return setView("Grid");
  };

  const getNextView = () => {
    if (view === "Grid") {
      return "Gallery";
    }
    return "Grid";
  };

  const closeAllModals = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const handleCardClick = (description, alt_description, url, user) => {
    setSelectedCard({ description, alt_description, url, user });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (form) => {
    console.log("Submitted form:", form);
  };

  return (
    <div className='page'>
      <div className='app'>
        <button
          className='style'
          onClick={handleStyleChange}
        >{`Style: ${view}. Change style to ${getNextView()}.`}</button>
        {images && (
          <CardList images={images} view={view} onCardClick={handleCardClick} />
        )}
        {isModalOpen && (
          <Modal
            card={selectedCard}
            onClose={closeAllModals}
            onOverlayClick={closeAllModals}
            cardId={selectedCard}
          />
        )}
        <section className='form__section'>
          <Form onSubmit={handleFormSubmit} />
        </section>
      </div>
    </div>
  );
};

export default App;
