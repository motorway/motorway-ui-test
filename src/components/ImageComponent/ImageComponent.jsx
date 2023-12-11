import React, { useState } from "react";
import { getImageUrl } from "./utils/getImageUrl";

const ImageComponent = ({ imagePath, altText, className }) => {
  const [loaded, setLoaded] = useState(false);
  const imageUrl = getImageUrl(imagePath);
  return (
    <div className={className}>
      {!loaded ? <div className="placeholder-image" /> : null}
      <img
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          console.log(e);
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: loaded ? "block" : "none",
        }}
        src={imageUrl}
        alt={altText}
      />
    </div>
  );
};

export default ImageComponent;
