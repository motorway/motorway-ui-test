import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./Gallery.css";

export const Gallery = ({ images }) => {
  return (
    <React.Fragment>
      <div className="grid">
        {images &&
          images.map((img) => (
            <div>
              <figure className="effect-gallery" key={img.id}>
                <img src={`${img.url}.jpg`} alt={img.alt_description} />
                <figcaption>
                  <h2>
                    {img.user.first_name}
                    <span>{img.user.last_name}</span>
                  </h2>
                  <p className="icon-links">
                    <a href="#">
                      <span>
                        <FaThumbsUp />
                        {img.likes}
                      </span>
                    </a>
                  </p>
                  <p className="description">{img.description}</p>
                </figcaption>
              </figure>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};
