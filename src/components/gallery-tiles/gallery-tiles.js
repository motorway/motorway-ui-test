import "./gallery-tiles.css";

import Masonry from "react-masonry-css";

const breakpointCols = {
  default: 3,
  1200: 2,
};

const GalleryTiles = ({ images, onClick }) => {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="gallery-tiles"
      columnClassName="gallery-tiles__column"
    >
      {images &&
        images.map((img, index) => (
          <div
            className="gallery-tiles__image-wrapper"
            key={img.id}
            onClick={() => onClick(index)}
          >
            <img
              className="gallery-tiles__image"
              src={`${img.url}.jpg`}
              alt=""
            />
          </div>
        ))}
    </Masonry>
  );
};

export default GalleryTiles;
