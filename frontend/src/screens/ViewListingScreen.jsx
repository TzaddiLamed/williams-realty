import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import listings from '../data/listings.json';
import { useParams } from 'react-router-dom';

const ViewListingScreen = () => {
  const { id } = useParams();

  return (
    <div className='wrapper'>
        <div className='content'>
            <Header />
                <div className='listing-content'>
                    <img src={listings[id].images[0]} alt={listings[id].address} />
                    <h1>{listings[id].address}</h1>
                    <h3>Bedrooms: {listings[id].numBed}</h3>
                    <h3>Bathrooms: {listings[id].numBath}</h3>
                    <h3>{listings[id].propertyCategory}</h3>
                    <h4>${listings[id].price}</h4>
                </div>
        </div>
      <Footer />
    </div>
  )
}

export default ViewListingScreen
