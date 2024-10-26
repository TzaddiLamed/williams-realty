import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';
import listings from '../data/listings.json';

const HomeScreen = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Hero />
        <h2>Browse Popular Listings</h2>
        <div className='listings-container'>
          {listings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default HomeScreen
