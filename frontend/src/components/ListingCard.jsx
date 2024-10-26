 import React from 'react';

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <img src={listing.images[0]} alt={listing.address} />
      <h2>{listing.address}</h2>
      <p>Bedrooms: {listing.numBed}</p>
      <p>Bathrooms: {listing.numBath}</p>
      <b>{listing.propertyCategory}</b>
      <h3>${listing.price}</h3>
    </div>
  )
}

export default ListingCard
