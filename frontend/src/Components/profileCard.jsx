import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileCard({ title, price, location, imageUrl, type, onClick }) {
  const [priceType, setType] = useState('Price');

  useEffect(() => {
    if (type === 'Auction') {
      setType('Bid');
    }
  }, []);

  return (
    <div className="card custom-card" style={{ width: '18rem', position: 'relative' }} onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <br /> 
        <br />
        <h6 className="card-subtitle mb-2 text-muted">{priceType}: {price}</h6>
        <p className="card-text">{location}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
