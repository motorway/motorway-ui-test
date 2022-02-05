import "./gallery.css";
import { ReactComponent as BracketIcon } from "../../icons/bracket.svg";
import { useEffect, useRef, useState } from "react";

const Gallery = ({ images, startIndex }) => {
  const [index, setIndex] = useState(startIndex);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  const onLeftArrowClick = () => {
    setIndex((index) => (index > 0 ? index - 1 : images.length - 1));
  };

  const onRightArrowClick = () => {
    setIndex((index) => (index < images.length - 1 ? index + 1 : 0));
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      onLeftArrowClick();
    }
    if (e.key === "ArrowRight") {
      onRightArrowClick();
    }
  };

  return (
    <div
      className="gallery__wrapper"
      onKeyDown={onKeyDown}
      tabIndex={-1}
      ref={ref}
    >
      <div className="gallery__image-container">
        <div className="gallery__image-container-inner">
          <img
            className="gallery__image"
            src={`${images[index].url}.jpg`}
            alt={images[index].alt_description}
          />
          <img
            className="gallery__avatar"
            src={`${images[index].user.profile_image}.webp`}
            alt={images[index].user.username}
          />
        </div>
      </div>
      <div
        className="gallery__arrow gallery__arrow-left"
        onClick={onLeftArrowClick}
      >
        <BracketIcon />
      </div>
      <div
        className="gallery__arrow gallery__arrow-right"
        onClick={onRightArrowClick}
      >
        <BracketIcon />
      </div>
    </div>
  );
};

export default Gallery;
