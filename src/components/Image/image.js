import React from 'react';
import './image.scss';

const Image = (props) => {
  const { index, id, alt_description, url, user, likes, onClick } = props;
  return (
    <div onClick={() => onClick(id)} tabIndex={index} className="picture">
      <div className="img-wrapper">
        <img className="image" src={url} alt={alt_description} />
      </div>
      <div className="info">
        <div className="user">
          <img className="avatar" src={user.profile_image} alt="" />
          <p className="username">{user.username}</p>
        </div>
        {likes ? <p>❤️ {likes}</p> : <div />}
      </div>
    </div>
  );
};

export default Image;
