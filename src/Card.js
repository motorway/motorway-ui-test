import React from 'react'


const Card = ({img}) => {
  return (
    <div className='gallery'> 
    <div className="card-container" 
    key={img.id}>
      <div className="Card">
        <div className='hover-animation'>
        <img
          className='img-back'
          src={`${img.url}.jpg`}
          alt={img.alt_description}
        />
        <img
          className='img-front'
          src={`${img.user.profile_image}.jpg`}
          alt={img.alt_description}
        />
        </div>
      
      <div className='lower-container'>
          <div className='lower-container'>
        <h3><span className="user-name">
          {img.user.name}</span></h3>
        <h4><span className="user-location">
          {img.user.location}</span></h4>
        <p><span className="user-location">{
        img.user.bio}</span></p>
        <div>
          
        <button>
          {img.user.total_likes}❤️</button>
        <button>
          {img.user.total_photos}📸</button> 
        <br>
        </br>
        <div>
        <button>
          Hover over Profile</button> 
        </div>
          </div>
          
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Card;