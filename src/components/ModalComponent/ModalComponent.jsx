import React from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import "./ModalComponent.css";

const ModalComponent = ({ closeModal, selectedImage }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <ImageComponent
        imagePath={selectedImage.url}
        altText={selectedImage.alt_description}
        className="full-size"
      />
      <div className="modal-details">
        <p>Likes: {selectedImage.likes}</p>
        <p>Username: {selectedImage.user.username}</p>
        <ImageComponent
          imagePath={selectedImage.user.profile_image}
          className="profile-image"
        />
        <p>
          {selectedImage.user.location
            ? `Location: ${selectedImage.user.location}`
            : ``}
        </p>
      </div>
    </div>
  );
};

export default ModalComponent;
