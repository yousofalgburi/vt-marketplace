import { useEffect, useState } from 'react';
import itemImage from '../assets/placeholderImage.png'; // Replace with the actual image from the itemDetails
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/BuyItemPage.css';
import { Link } from 'react-router-dom';



const BuyItemPage = ({user}) => {
  // let { itemId } = useParams();
  const navigate = useNavigate();
  const [itemId, setItemId] = useState('');
  const [emailVisible, setEmailVisible] = useState(false);
  const [bid, setBid] = useState('');
  const [itemDetails, setItemDetails] = useState({});
  const [sellerEmail, setSellerEmail] = useState('');

  useEffect(() => {
    if(!user){
      navigate("/")
    }
    // Get the item id from the url
    const itemId = window.location.pathname.split('/').pop();
    setItemId(itemId);
    getItemDetails(itemId);
  }, []); 

  async function getItemDetails(itemId) {
    try {
      const response = await axios.get(
        `/home/${itemId}`
      );
      const data = response.data;
      console.log('DATA: ', data);
      setItemDetails(data);

      const sellerEmail = (await axios.get(`/user/${data.creator}`)).data.email;
      setSellerEmail(sellerEmail);
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


  async function submitBid() {
    console.log('Bid submitted:', bid);
    try{
      console.log('itemId:', itemId);
      console.log('bid:', bid);
      await axios.patch(`/posts/${itemId}/bid`, {bid: bid})
      getItemDetails(itemId);
      alert('Bid submitted successfully!');
    }
    catch(error){
      console.log('Error submitting bid:', error);
      alert(`Error submitting bid: ${error.response.data.message}`);
    }
  }

  return (
    <div>
      <div className="item-container">
        <img className='item-page-image'
          src={itemDetails.image || itemImage} // First try to load the item image
          alt={itemDetails.title}
          onError={(e) => { 
            e.target.onerror = null; // Prevents future triggers of the onError handler
            e.target.src = itemImage; // Fallback to the placeholder image if there's an error
          }}
        />
        <h1>{itemDetails.title}</h1>
        {itemDetails.type === 'Price' ? (
          <p>Price: ${itemDetails.price}</p>
        ) : (
          <>
            <p>Current bid: ${itemDetails.bid}</p>
            <p>Bid count: {itemDetails.bidCount}</p>
            <p>Latest Bidder: {itemDetails.bidderID}</p>
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
        <p>Category: {itemDetails.tag}</p>
        <p>Seller: <Link to={`/profile/${itemDetails.creator}`}>{itemDetails.creator}</Link></p>
        <button onClick={toggleEmailVisibility}>
          {emailVisible ? `${sellerEmail}` : "Show Seller's Email"}
        </button>
      </div>
    </div>
  );
};

export default BuyItemPage;