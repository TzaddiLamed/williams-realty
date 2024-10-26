import React from 'react'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <img src="images/hero.jpg" alt="Hero" className="hero-image" />
      </div>
      <div className="hero-content">
        <h1 className="hero-txt">Welcome to Williams Realty</h1>
        <p className="hero-txt">Let us help you find your dream home.</p>
      </div>
    </div>
  )
}

export default Hero
