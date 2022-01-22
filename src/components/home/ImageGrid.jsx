import React from "react";
import "./index.css";

/**
 * @prop index: number
 * @prop imageUrl: string
 * @prop onClick: Function
 */

const ImageGrid = ({ index, imageUrl, onClick }) => {
  return (
    <div
      className={`gallery__item gallery__item--${index + 1}`}
      onClick={onClick}
    >
      <img
        src={`${imageUrl}.webp`}
        alt=""
        className="gallery__img"
        loading="lazy"
      />
    </div>
  );
};

export default ImageGrid;
