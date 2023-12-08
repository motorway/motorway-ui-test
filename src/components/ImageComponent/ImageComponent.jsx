import React, { useState } from "react";

const webpSupported = (() => {
  const elem = new OffscreenCanvas(1, 1);
  return elem.getContext && elem.getContext("2d").imageSmoothingEnabled;
})();

const getImageUrl = (originalUrl) => {
  return webpSupported ? `${originalUrl}.webp` : `${originalUrl}.jpg`;
};

const ImageComponent = ({ imagePath, altText, className }) => {
  const [loaded, setLoaded] = useState(false);
  const imageUrl = getImageUrl(imagePath);
  return (
    <div className={className}>
      {!loaded ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ccc",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      ) : null}
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
