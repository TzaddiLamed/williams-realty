 import React from 'react';

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <div className='image-container'>
        <img src={listing.images[0]} alt={listing.address} />
      </div>
      <h3>{listing.address}</h3>
      <p>Bedrooms: {listing.numBed}</p>
      <p>Bathrooms: {listing.numBath}</p>
      <b>{listing.propertyCategory}</b>
      <h4>${listing.price}</h4>
    </div>
  )
}

export default ListingCard
