import React, { useState } from "react";
import ModalWindow from "./ModalWindow";

const Card = ({ img, index }) => {
  //const Card = ({ img, handle, index }) => {
  const [modalWindowActive, setModalWindowActive] = useState(false);

  const handleCloseModalWindow = () => {
    setModalWindowActive(false);
  };

  const handleOnClick = () => {
    setModalWindowActive(true);
  };

  return (
    <div className="card-container" key={img.id}>
      <div className="card-photo-container">
        <img
          className="card-photo"
          src={`${img.url}.jpg`}
          alt={img.alt_description}
          //onClick={() => handle(index)}
          onClick={handleOnClick}
        />
      </div>

      <div className="card-info">
        <div className="user-info">
          <div>
            <img
              className="user-photo"
              src={`${img.user.profile_image}.webp`}
              alt={`${img.user.name} avatar`}
            />
          </div>
          <div className="user-name-location">
            <span className="user-name">{img.user.name}</span>
            <span className="user-location">{img.user.location}</span>
          </div>
        </div>
        <div className="user-likes">
          <span className="heart-icon">&#9829;</span>
          <span>{`${img.user.total_likes} likes`}</span>
        </div>
      </div>
      {modalWindowActive ? (
        <ModalWindow
          index={index}
          img={img}
          handleCloseModalWindow={handleCloseModalWindow}
        />
      ) : null}
    </div>
  );
};

export default Card;
