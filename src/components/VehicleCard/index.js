import React from 'react';
import './style.scss';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <picture className="vehicle-image">
        <source media="(min-width: 768px)" srcSet={vehicle.media[0].url} />
        <img src={vehicle.media[1].url} alt={vehicle.id} />
      </picture>
      <div className="vehicle-details">
        <h2 className="vehicle-name">{vehicle.id}</h2>
        <p className="vehicle-price">
          From
          {' '}
          {vehicle.price}
        </p>
        <p className="vehicle-description">{vehicle.description}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
