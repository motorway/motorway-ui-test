import React from "react";
import Image from "../../atoms/Image";
import "./style.css";

const Images = ({ images }) => (
  <div className="images_container">
    {images.map(({ id, url, user: { profile_image: image } }) => (
      <Image key={id} url={url} image={image} />
    ))}
  </div>
);

export default Images;
