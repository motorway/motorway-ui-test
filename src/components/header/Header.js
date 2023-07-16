
import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';



const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" className="title-logo" style={{width: '950px', marginLeft: '100px'}}/>
      </div>
      <div className="login-button">
        Login
      </div>
    </div>
  );
};

export default Header;
