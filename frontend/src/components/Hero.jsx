import React from 'react'
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <img src="images/hero.jpg" alt="Hero" className="hero-image" />
      </div>
      <div className="hero-content">
        <h1 className="hero-txt">Welcome to Williams Realty</h1>
        <p className="hero-txt">Let us help you find your dream home.</p>
        <Button variant="primary" className="hero-btn">View Properties</Button>
      </div>
    </div>
  )
}

export default Hero
