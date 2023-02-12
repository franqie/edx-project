import React from 'react';
// import img from '../src/graphics.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="hero">
          <img src="https://edx-cdn.org/v3/prod/logo-white.svg" alt="" className="logo" />
          <div className="banner">
            <div className="stroke__container">
              <div className="stroke"></div>
            </div>
            <div className="banner__text">
              <h1>
                <span>Start learning </span>
                <span className="info__text">with edX</span>
              </h1>
            </div>
          </div>
      </div>
      <div className="graphics">
      </div>
    </div>
  )
}

export default Header;