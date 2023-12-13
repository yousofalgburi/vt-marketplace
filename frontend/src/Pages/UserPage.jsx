import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../Components/Card';

const UserPage = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
        getItems()
    }
  }, [user, navigate]);

  const goToSettings = () => {
    navigate('/user_settings');
  };
  const [items, setItems] = useState([]);
  const getItems = async () => {
    try {
      const response = await axios.get(`/user/posts/${user._id}`);
      console.log(response.data);
      setItems(response.data); // Update items state
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  const handleCardClick = (item) => {
    console.log('Item clicked:', item);
    navigate(`/item_page/${item}`);
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
          user = {user}
          item = {item}
        />
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default UserPage;
