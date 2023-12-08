import React, { useEffect, useRef, useState } from 'react';
import './ImageGallery.css';
import ImageComponent from './components/ImageComponent';

// const ImageGallery = ({ images }) => {

  
//   const [selectedImage, setSelectedImage] = useState(null);
//   const openModal = (image) => {
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="gallery-container">
//       {images?.map((image, index) => (
//         <div key={index} className="thumbnail-container">
//           <ImageComponent imagePath={image.url} altText={image.alt_description} />
//           <div className="overlay">
//             <div className='details'>
//               <img className='profile_img' src={`${image.user.profile_image}.jpg`} alt="Profile" />
//               <p>{image.user.name}</p>
//               <p>{image.user.location}</p>  
//             </div>
//           </div>
//         </div>
//       ))}

//       {selectedImage && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal">
//             <img src={`${selectedImage.url}.jpg`} alt="Full Size" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;

const COLUMNS = 3;
const WIDTH = 300;
const HEIGHT = 250;


const chunkArray = (myArray, chunkSize) => {
  const arrayLength = myArray.length;
  const tempArray = [];

  for (let index = 0; index < arrayLength; index += chunkSize) {
    tempArray.push(myArray.slice(index, index + chunkSize));
  }
  return tempArray;
};

const rotations = {};

const ImageGallery = ({ images }) => {
  const [isHover, setIsHover] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const rows = chunkArray(images, COLUMNS);
  const rowsCount = rows.length;

  useEffect(() => {
    setRotations();
    setIsFirstRender(false);
  }, [isHover]);

  const toggleHover = () => setIsHover(!isHover);
  

  const getCenter = (row, col) => {
    const rowOffset = rowsCount / 2 - row;
    let translateY = rowOffset * (HEIGHT + 60) + rowOffset * 50;

    if (!(rowsCount % 2)) {
      if (!translateY) {
        translateY -= 155;
      } else {
        translateY /= 2;
      }
    }

    const colOffset = Math.floor(COLUMNS / 2 - col);
    let translateX =
      colOffset * (WIDTH + 40) +
      (colOffset * (1200 - (WIDTH + 40) * COLUMNS)) / COLUMNS;
    return {
      translateY,
      translateX
    };
  };

  const setRotations = () => {
    const shuffleArray = (arr) =>
      arr
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]);

    let indices = shuffleArray(Array.from(Array(images.length).keys()));

    rows.forEach((row, i) =>
      row.forEach((col, j) => {
        const getRandom = (min, max) =>
          Math.floor(Math.random() * (max - min + 1) + min);

        const centre = getCenter(i, j);
        let translateY = centre.translateY;
        const translateYTolerance = (HEIGHT + 60) * 0.5;
        translateY += getRandom(-translateYTolerance, translateYTolerance);

        let translateX = centre.translateX;
        const translateXTolerance = (WIDTH + 40) * 0.5;
        translateX += getRandom(-translateXTolerance, translateXTolerance);

        rotations[`${i},${j}`] = {
          row: translateY,
          col: translateX,
          rot: getRandom(-60, 60),
          zIndex: indices.splice(0, 1)
        };
      })
    );
  };

  const getPostcardStyle = (row, col) => {
    if (!rotations[`${row},${col}`]) {
      return {};
    }
  
    return {
      width: `${WIDTH + 40}px`,
      height: `${HEIGHT + 60}px`,
      transform: `translateX(${
        rotations[`${row},${col}`].col
      }px) translateY(${rotations[`${row},${col}`].row}px) rotateZ(${
        rotations[`${row},${col}`].rot
      }deg)`
      //zIndex: `${rotations[`${row},${col}`].zIndex}`
    };
  };

  return (
    <div className={`gallery ${isHover ? 'gallery-display' : ''}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <div>
        {rows.map((row, rowIndex) => (
          <div className='gallery__row' key={rowIndex}>
            {row.map((image, imageIndex) => (
              <div className='gallery__row__image' style={{ width: `${100 / COLUMNS}%` }} key={imageIndex}>
                <div className='postcard' style={!isFirstRender ? getPostcardStyle(rowIndex, imageIndex) : {}}>
                  <div className='postcard__front'>
                    <div>
                      <ImageComponent imagePath={image.url} altText={image.alt_description} />
                      {/* <img style={{width: '300px', height: '300px'}} src={`${image.url}.jpg`} alt={imageIndex} /> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
};


export default ImageGallery;