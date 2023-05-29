import React, { useState } from "react";
import CarCard from "../car-card";
import GalleryViewModal from "../gallery-view-modal";
import type { CarImage } from "../types/image";

import "./car-page.css";

type Props = {
  images: CarImage[];
};

const CarPage = ({ images }: Props) => {
  const [galleryViewImageIndex, setGalleryViewImageIndex] = useState<
    number | null
  >(null);

  const galleryViewImage =
    galleryViewImageIndex !== null && images[galleryViewImageIndex];

  return (
    <section className="car-cards">
      {images.map((img, index) => (
        <CarCard
          key={img.id}
          imageUrl={img.url}
          imageColor={img.color}
          userFullName={img.user.name}
          userTotalLikes={img.user.total_likes}
          userTotalPhotos={img.user.total_photos}
          profileImage={img.user.profile_image}
          altDescription={img.alt_description}
          openInGalleryView={() => setGalleryViewImageIndex(index)}
        />
      ))}
      {galleryViewImage && (
        <GalleryViewModal
          imageUrl={galleryViewImage.url}
          altDescription={galleryViewImage.alt_description}
          description={galleryViewImage.description}
          numberOfLikes={galleryViewImage.likes}
          onNextImage={
            galleryViewImageIndex !== images.length - 1
              ? () => setGalleryViewImageIndex(galleryViewImageIndex + 1)
              : undefined
          }
          onPreviousImage={
            galleryViewImageIndex !== 0
              ? () => setGalleryViewImageIndex(galleryViewImageIndex - 1)
              : undefined
          }
          closeGalleryView={() => setGalleryViewImageIndex(null)}
        />
      )}
    </section>
  );
};

export default CarPage;
