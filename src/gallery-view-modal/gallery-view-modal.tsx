import React, { useRef, useEffect } from "react";

import "./gallery-view-modal.css";

type Props = {
  imageUrl: string;
  altDescription: string;
  description: string | null;
  numberOfLikes: number;
  closeGalleryView: () => void;
  onNextImage?: () => void;
  onPreviousImage?: () => void;
};

const GalleryViewModal = ({
  imageUrl,
  altDescription,
  description,
  numberOfLikes,
  closeGalleryView,
  onNextImage,
  onPreviousImage,
}: Props) => {
  const dialogModalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const { current } = dialogModalRef;
    if (current && !current.open) {
      current.showModal();
    }
  }, [dialogModalRef]);

  return (
    <dialog
      role="dialog"
      className="gallery-view-modal"
      ref={dialogModalRef}
      onCancel={closeGalleryView}
    >
      <section className="gallery-view-image-section">
        <img
          className="gallery-view-image"
          src={`${imageUrl}.jpg`}
          alt={altDescription}
        />
      </section>
      <span>❤️ {numberOfLikes}</span>
      <span>{description}</span>
      <section className="gallery-view-nav-buttons">
        {onPreviousImage && (
          <button onClick={onPreviousImage}>Previous image</button>
        )}
        {onNextImage && <button onClick={onNextImage}>Next image</button>}
      </section>
      <section className="gallery-view-close-button">
        <button onClick={closeGalleryView}>Close Gallery View</button>
      </section>
    </dialog>
  );
};

export default GalleryViewModal;
