import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../Components/Card';

const WelcomePage = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("LogIn/SignUp First");
      navigate("/");
    } else {
        getItems()
    }
  }, [user, navigate]);

  const goToSettings = () => {
    navigate('/user_settings');
  };
  const [items, setItems] = useState([]);
  const getItems = async (page) => {
    try {
      const response = await axios.get(`/user/posts/${user._id}`);
      console.log(response.data);
      setItems(response.data); // Update items state
      setCurrentPage(response.data.currentPage); // Update current page state
      setNumberOfPages(response.data.numberOfPages); // Update total pages state
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div className="welcome-page-container">
      <h1>Welcome, {user.fname} {user.lname}!</h1>
      <button onClick={goToSettings} className="settings-button">
        Go to User Settings
      </button>
      <div className="container my-4">
  <div className="row g-4"> {/* 'g-4' adds a gap between cards */}
    {items.map((item, index) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
        <Card 
          type={item.type}
          title={item.title} 
          price={`$${item.price || item.bid}`} 
          location={item.location}
          imageUrl={item.image}
          onClick={() => handleCardClick(item._id)}
        />
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default WelcomePage;
