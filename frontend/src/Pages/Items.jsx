import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import vtLogo from '../assets/vtNew.png';
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import PriceModal from '../Components/PriceModal';
import placeholderImage from '../assets/placeholderImage.png';
import Card from '../Components/Card';
import DropdownMenu from '../Components/CategoryDropdownMenu';
import axios from 'axios';

function Items() {
    useEffect(() => {
    getItems();
  }, []);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [items, setItems] = useState([]);


  const goToItemsPage = () => {
    navigate('/items');
  };

  const handleCardClick = (item) => {
    navigate('/item_page', { state: { item } });
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDialog(true); // Show dialog when item is clicked
    setIsDropdownOpen(false); // Close dropdown
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isDropdownOpen && !selectedItem) {
      setShowDialog(false); // Close dialog if no item is selected and dropdown is closing
    }
  };
  const [lowerPrice, setLowerPrice] = useState(10);
  const [higherPrice, setHigherPrice] = useState(250);

  const increasePrice = (priceType) => {
    if (priceType === 'lower') {
      setLowerPrice(prevPrice => {
        const newPrice = prevPrice + 10;
        return newPrice <= higherPrice ? newPrice : prevPrice; // Prevent lower price from exceeding or equaling higher price
      });
    } else if (priceType === 'higher') {
      setHigherPrice(prevPrice => prevPrice + 10);
    }
  };

  const decreasePrice = (priceType) => {
    if (priceType === 'lower') {
      setLowerPrice(prevPrice => {
        const newPrice = prevPrice - 10;
        return newPrice >= 0 && newPrice < higherPrice ? newPrice : prevPrice; // Prevent lower price from dropping below 0 or higher price
      });
    } else if (priceType === 'higher') {
      setHigherPrice(prevPrice => {
        const newPrice = prevPrice - 10;
        return newPrice > lowerPrice ? newPrice : prevPrice; // Prevent higher price from dropping below or equaling lower price
      });
    }
  };
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [selectedSortItem, setSelectedSortItem] = useState('');
  const [showSortDialog, setShowSortDialog] = useState(false);

  const toggleSortDropdown = () => {
    setSortDropdownOpen(!sortDropdownOpen);
    if (sortDropdownOpen && !selectedSortItem) {
      setShowSortDialog(false); // Close dialog if no item is selected and dropdown is closing
    }
  };

  // Example function to fetch data and update image
// const fetchItemData = async () => {
//   // Fetch data from database
//   // ...

//   const imageUrlFromDatabase = 'path_to_actual_image.jpg'; // Replace with actual path
//   setItemImage(imageUrlFromDatabase);

//   useEffect(() => {
//     fetchItemData();
//   }, []);
  
// };
// THE BELOW WORKS
// async function getItems() {
//   await axios.get('/home')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
async function getItems() {
  try {
    const response = await axios.get('/home');
    const itemsFromResponse = response.data.data.map(item => ({
      title: item.title,
      price: item.price,
      location: 'Location',
      imageUrl: item.image || placeholderImage,
    }));
    setItems(itemsFromResponse);
  } catch (error) {
    console.error('Error fetching items:', error);
    // Handle error appropriately
  }
}



const handleSortChange = (sortType) => {
  // making API calls, etc.
  setSelectedSortItem(sortType);
  setShowSortDialog(true); // Show dialog when item is clicked
  setSortDropdownOpen(false); // Close dropdown
};
  
  const [itemImage, setItemImage] = useState(placeholderImage);
  // const items = [
  //   { title: "iPhone 14 Pro", price: "$599", location: "University Terrace", imageUrl: itemImage },
  //   { title: "MacBook Air", price: "$999", location: "Campus Store", imageUrl: itemImage },
  //   { title: "Samsung Galaxy S22", price: "$799", location: "Tech Center", imageUrl: itemImage },
  //   { title: "Dell XPS 13", price: "$1199", location: "Electronics Store", imageUrl: itemImage },
  //   { title: "Sony WH-1000XM4", price: "$349", location: "Audio Shop", imageUrl: itemImage },
  //   { title: "iPad Pro", price: "$799", location: "Gadget Store", imageUrl: itemImage },
  //   { title: "Google Pixel 6", price: "$599", location: "Mobile Outlet", imageUrl: itemImage },
  //   { title: "AirPods Pro", price: "$249", location: "Apple Store", imageUrl: itemImage },
  //   { title: "Canon EOS R5", price: "$3899", location: "Camera Shop", imageUrl: itemImage },
  //   { title: "GoPro HERO10", price: "$499", location: "Outdoor Store", imageUrl: itemImage },
  //   { title: "Nintendo Switch", price: "$299", location: "Gaming Hub", imageUrl: itemImage },
  //   { title: "Xbox Series X", price: "$499", location: "Entertainment Outlet", imageUrl: itemImage },
  //   { title: "PlayStation 5", price: "$499", location: "Video Game Store", imageUrl: itemImage },
  //   { title: "Alienware m15", price: "$1599", location: "Computer Mart", imageUrl: itemImage },
  //   { title: "Bose QuietComfort 45", price: "$329", location: "Electronics Market", imageUrl: itemImage },
  //   { title: "Fitbit Charge 5", price: "$179", location: "Fitness Store", imageUrl: itemImage },
  //   { title: "Kindle Paperwhite", price: "$139", location: "Bookstore", imageUrl: itemImage },
  //   { title: "Nest Thermostat", price: "$249", location: "Home Improvement Center", imageUrl: itemImage },
  //   { title: "Ring Video Doorbell", price: "$199", location: "Electronics Depot", imageUrl: itemImage },
  //   { title: "Dyson V11 Vacuum", price: "$599", location: "Home Store", imageUrl: itemImage },
  //   { title: "Logitech MX Master 3", price: "$99", location: "Tech Warehouse", imageUrl: itemImage },
  //   { title: "Bose SoundLink Revolve", price: "$199", location: "Audio Center", imageUrl: itemImage },
  //   { title: "Asus ROG Phone 5", price: "$699", location: "Gaming Emporium", imageUrl: itemImage },
  //   { title: "JBL Flip 5", price: "$119", location: "Electronics Plaza", imageUrl: itemImage },
  //   { title: "Oculus Quest 2", price: "$299", location: "VR Store", imageUrl: itemImage },
  //   { title: "Garmin Forerunner 945", price: "$599", location: "Sports Outlet", imageUrl: itemImage },
  //   { title: "Leica Q2", price: "$4999", location: "Camera Corner", imageUrl: itemImage },
  //   { title: "Microsoft Surface Pro 7", price: "$899", location: "Computer Space", imageUrl: itemImage },
  //   { title: "OnePlus 9", price: "$729", location: "Mobile Mart", imageUrl: itemImage },
  //   { title: "Trek Marlin 5", price: "$539", location: "Bike Shop", imageUrl: itemImage },
  //   { title: "KitchenAid Mixer", price: "$379", location: "Appliance Store", imageUrl: itemImage },
  //   { title: "Sony A7 III", price: "$1999", location: "Photography Studio", imageUrl: itemImage },
  //   { title: "Lululemon Yoga Mat", price: "$78", location: "Fitness World", imageUrl: itemImage },
  //   { title: "Breville Espresso Machine", price: "$699", location: "Home Goods", imageUrl: itemImage },
  //   { title: "Samsung QLED TV", price: "$1299", location: "Electronics Superstore", imageUrl: itemImage }
  // ]; 

  return (
    <div>
      <TopNav vtLogo={vtLogo} goToItemsPage={goToItemsPage} />
      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" 
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}>
          {selectedItem || "Select an option"}
        </button>
        {/* <ul className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`}>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Select Category')}>Select Category</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Textbooks and Study Materials')}>Textbooks and Study Materials</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Electronics and Tech Gadgets')}>Electronics and Tech Gadgets</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Furniture and Home Decor')}>Furniture and Home Decor</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Clothing and Accessories')}>Clothing and Accessories</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('School Supplies')}>School Supplies</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Dorm Essentials')}>Dorm Essentials</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Sports and Fitness Gear')}>Sports and Fitness Gear</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Entertainment and Leisure')}>Entertainment and Leisure</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Kitchen and Cooking Supplies')}>Kitchen and Cooking Supplies</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Transportation')}>Transportation</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Health and Beauty Products')}>Health and Beauty Products</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleItemClick('Miscellaneous')}>Miscellaneous</a></li>

        </ul> */}
        <DropdownMenu isDropdownOpen={isDropdownOpen} handleItemClick={handleItemClick} />
      </div>

      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle"
                aria-expanded={sortDropdownOpen}
                onClick={toggleSortDropdown}>
          {selectedSortItem || "Sort options"}
        </button>
        <ul className={`dropdown-menu${sortDropdownOpen ? ' show' : ''}`}>
        <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Select Sorting')}>Select Sorting</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Price: Low to High')}>Price: Low to High</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Price: High to Low')}>Price: High to Low</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Alphabetical: A to Z')}>Alphabetical: A to Z</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Alphabetical: Z to A')}>Alphabetical: Z to A</a></li>
        </ul>
      </div>

      {/* Update button text to show the current lower price */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rangeModalLowerPrice">
        Lower Price: ${lowerPrice}
      </button>

      <PriceModal
        price={lowerPrice}
        setPrice={setLowerPrice}
        increasePrice={() => increasePrice('lower')}
        decreasePrice={() => decreasePrice('lower')}
        modalId="rangeModalLowerPrice"
        title="Set Lower Price"
      />

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rangeModalHigherPrice">
        Higher Price: ${higherPrice}
      </button>

      <PriceModal
        price={higherPrice}
        setPrice={setHigherPrice}
        increasePrice={() => increasePrice('higher')}
        decreasePrice={() => decreasePrice('higher')}
        modalId="rangeModalHigherPrice"
        title="Set Higher Price"
      />

    <h1 className="header-selected-item">{selectedItem}</h1>

      <br></br>
      
      {/* <div className="item-image-container">
        <img src={itemImage} alt="Item" className="item-image" />
      </div> */}
<div className="container my-4">
  <div className="row g-4"> {/* 'g-4' adds a gap between cards */}
    {items.map((item, index) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
        <Card 
          title={item.title} 
          price={`$${item.price}`} 
          location={item.location}
          imageUrl={item.imageUrl}
          onClick={() => handleCardClick(item)}
        />
      </div>
    ))}
  </div>
</div>

      <Footer />
    </div>
  );
}

export default Items;