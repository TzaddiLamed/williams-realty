 import React from 'react';
 import './componentStyles.css';
 import { Button } from 'react-bootstrap';
 import { LinkContainer } from 'react-router-bootstrap';

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <div className="listing-container">
        <div className='image-container'>
          <img src={listing.images[0]} alt={listing.address} />
        </div>
        <h3>{listing.address}</h3>
        <p>Bedrooms: {listing.numBed}</p>
        <p>Bathrooms: {listing.numBath}</p>
        <b>{listing.propertyCategory}</b>
        <h4>${listing.price}</h4>
      </div>
      <LinkContainer to={`/listing/${listing.id}`}>
        <Button variant="primary" className="button">View Listing</Button>
      </LinkContainer>
    </div>
  )
}

export default ListingCard
