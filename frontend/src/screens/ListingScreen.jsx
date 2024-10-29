import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListingCard from '../components/ListingCard';
import '../styles/HomeScreen.css';
import listings from '../data/listings.json';

const ListingScreen = () => {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />
            <h1>Browse Popular Listings</h1>
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

export default ListingScreen
