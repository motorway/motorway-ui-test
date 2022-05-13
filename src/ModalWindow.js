import React from "react";

const ModalWindow = ({ img, handleCloseModalWindow }) => {
  return (
    <div className="modalWindowContainer">
      <div
        className="modalWindowBackground"
        onClick={handleCloseModalWindow}
      ></div>
      <div className="modalImgContainer">
        <img
          className="modalImg"
          src={`${img.url}.jpg`}
          alt={img.alt_description}
        />
        <span className="closeIcon" onClick={handleCloseModalWindow}>
          &#128473;
        </span>
      </div>
    </div>
  );
};

export default ModalWindow;
