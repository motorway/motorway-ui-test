import React from "react";

import "./car-card.css";

type Props = {
  imageUrl: string;
  imageColor: string;
  userFullName: string;
  profileImage: string;
  altDescription: string;
  userTotalLikes: number;
  userTotalPhotos: number;
  openInGalleryView: () => void;
};

const CarCard = ({
  imageUrl,
  imageColor,
  userFullName,
  profileImage,
  altDescription,
  userTotalLikes,
  userTotalPhotos,
  openInGalleryView,
}: Props) => {
  return (
    <section
      className="car-card"
      role="card"
      style={{ borderTopColor: imageColor, borderBottomColor: imageColor }}
    >
      <img className="image" src={`${imageUrl}.jpg`} alt={altDescription} />
      <section className="user-section">
        <img
          className="profile-image"
          src={`${profileImage}.webp`}
          alt={userFullName}
        />
        <section className="user-info">
          <span className="user-fullname">{userFullName}</span>
          <span>Total number of likes: {userTotalLikes}</span>
          <span>Total number of photos: {userTotalPhotos}</span>
        </section>
      </section>
      <button onClick={openInGalleryView}>Open in Gallery View</button>
    </section>
  );
};

export default CarCard;
