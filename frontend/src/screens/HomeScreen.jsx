import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Hero />
      </div>
        <Footer />
    </div>
  )
}

export default HomeScreen
