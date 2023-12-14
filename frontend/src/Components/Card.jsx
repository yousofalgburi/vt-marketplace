import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import editIcon from '../assets/edit.png';
import deleteIcon from '../assets/delete.png';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function Card({ title, price, location, imageUrl, type, onClick, user, item }) {
  const [priceType, setType] = useState('Price');
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'Auction') {
      setType('Bid');
    }
  }, []);
  
  const isCreator = user ? user._id === item.creator : false;
  const handleDelete = () => {
    event.stopPropagation();
    // Confirm with the user
    if (window.confirm('Are you sure you want to delete this item?')) {
      axios.delete(`/posts/${item._id}`)
        .then(response => {
          console.log('Item deleted:', response.data);
          alert('Item deleted succesfully!');
          // Refresh the page
          window.location.reload();
        })
        .catch(error => {
          console.error('There was an error deleting the item:', error);
        });
    }
  };
  const handleEdit = () => {
    event.stopPropagation();
    // Confirm with the user
    if (window.confirm('Are you sure you want to edit this item?')) {
      navigate(`/update_item/${item._id}` );
  }};

  return (
    <div className="card custom-card" style={{ width: '18rem', position: 'relative' }} onClick={onClick}>
      {isCreator && (
        <div className="card-icon-container" onClick={e => e.stopPropagation()}>
          <img src={editIcon} alt="Edit" className="card-edit-icon" onClick={handleEdit}/>
          <img src={deleteIcon} alt="Delete" className="card-delete-icon" onClick={handleDelete} />
        </div>
      )}
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

export default Card;
