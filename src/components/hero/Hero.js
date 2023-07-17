
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import enquireImage from '../../images/enquire.png';
import offerImage from '../../images/offer.png';

const Hero = () => {
  const [images, setImages] = useState([]);
  
  // Fetch images data from api
  // and update the component state
  // to render the images dynamically.

  useEffect(() => {
    fetch('images?limit=1')
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="hero-container">
      <Container>
        <Row>
          {images.map((img, index) => (
            <Col md={6} key={img.id} className="grid-item">
              <div className="image-container">
                <img src={`${img.user.profile_image}.webp`} alt="" className="profile-image" />
                <img src={`${img.url}.jpg`} alt="" className="img-fluid small-image" />
                <img src={enquireImage} alt="Enquire" className="enquire-image" />
                <img src={offerImage} alt="Offer" className="offer-image" />
              </div>
              <div className="info-container">
                <div className="text-right">
                  <div className="username">{img.user.username}</div>
                  <div className="name">{img.user.name}</div>
                  <div className="description">{img.description}</div>
                  <div className="likes">Likes: {img.likes}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
