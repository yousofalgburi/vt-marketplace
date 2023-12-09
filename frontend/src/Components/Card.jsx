import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ title, price, location, imageUrl }) {
    return (
      <div className="card custom-card" style={{ width: '18rem' }}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Price: {price}</h6>
          <p className="card-text">{location}</p>
        </div>
      </div>
    );
  }
  

export default Card;
