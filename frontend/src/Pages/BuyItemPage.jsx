import { useEffect, useState } from 'react';
import itemImage from '../assets/placeholderImage.png'; // Replace with the actual image from the itemDetails
import vtLogo from '../assets/vtNew.png';
import '../App.css';
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BuyItemPage = () => {
  const navigate = useNavigate();
  const [emailVisible, setEmailVisible] = useState(false);
  const [bid, setBid] = useState('');
  const [itemDetails, setItemDetails] = useState({
    // Replace values from database
    _id: '6573d8cdd0145cdac6c63d660',
    title: 'TV',
    description: 'A high-quality television perfect for any living room.',
    creator: '6565ca0d918f3af6c643fe86',
    image: 'imagetext2345',
    type: 'Price',
    tag: 'TV',
    price: 8000,
    createdAt: new Date('2023-12-09T09:03:02.892+00:00'),
    bidCount: 0,
  });

  useEffect(() => {
    //Get the item id from the url
    const itemId = window.location.pathname.split('/').pop();
    getItemDetails(itemId);
  });

  async function getItemDetails(itemId) {
    try {
      const response = await axios.get(
        `/home/${itemId}`
      );
      const data = response.data;
      console.log('DATA: ', data);
      setItemDetails(data);
    } catch (error) {
      console.log('Error getting item details:', error);
    }
  }

  const toggleEmailVisibility = () => {
    setEmailVisible(!emailVisible);
  };

  const handleBidChange = (e) => {
    setBid(e.target.value);
  };

  const submitBid = () => {
    console.log('Bid submitted:', bid);
  };

  const goToItemsPage = () => {
    navigate('/items');
  };

  return (
    <div>
      <TopNav vtLogo={vtLogo} goToItemsPage={goToItemsPage} />
      <div className="item-container">
        <img src={itemImage} alt={itemDetails.title} />
        <h1>{itemDetails.title}</h1>
        {itemDetails.type === 'Price' ? (
          <p>Price: ${itemDetails.price}</p>
        ) : (
          <>
            <p>Current bid: ${itemDetails.price}</p>
            <p>Bid count: {itemDetails.bidCount}</p>
            <input
              type="number"
              value={bid}
              onChange={handleBidChange}
              placeholder="Enter your bid"
            />
            <button onClick={submitBid}>Place Bid</button>
          </>
        )}
        <p>Description: {itemDetails.description}</p>
        <p>Seller: {itemDetails.creator}</p>
        <button onClick={toggleEmailVisibility}>
          {emailVisible ? 'seller@example.com' : "Show Seller's Email"} {/* Replace with actual email logic */}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BuyItemPage;
