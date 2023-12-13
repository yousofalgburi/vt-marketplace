import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProfileCard from '../Components/profileCard';
import '../css/SellerPage.css'

const UserPage = () => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    //get userID from url
    const userId = window.location.pathname.split('/').pop();
    if (!userId) {
      navigate('/');
    }
    getUserDetails(userId);
    getItems(userId);
  }, []);

  const getUserDetails = async (userId) => {
    try {
      const response = await axios.get(`/user/${userId}`);
      console.log(response.data);
      setUser(response.data); // Update user state
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  const getItems = async (userId) => {
    try {
      const response = await axios.get(`/user/posts/${userId}`);
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
    <div className="profile-container">
      <h1>{user.fname} {user.lname}</h1>
      <h2>Seller email: {user.email}</h2>
      <br />

      <h3 className="items-for-sale">Items for Sale</h3>
      <div className="container my-4">
        <div className="row g-4"> {/* 'g-4' adds a gap between cards */}
          {items.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <ProfileCard 
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
