import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import vtLogo from '../assets/vt.png';
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import PriceModal from '../Components/PriceModal';


function Items() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const goToItemsPage = () => {
    navigate('/items');
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
      setLowerPrice(prevPrice => prevPrice + 10);
    } else if (priceType === 'higher') {
      setHigherPrice(prevPrice => prevPrice + 10);
    }
  };
  
  const decreasePrice = (priceType) => {
    if (priceType === 'lower') {
      setLowerPrice(prevPrice => (prevPrice - 10 > 0 ? prevPrice - 10 : 0));
    } else if (priceType === 'higher') {
      setHigherPrice(prevPrice => (prevPrice - 10 > 0 ? prevPrice - 10 : 0));
    }
  };
  

  

  return (
    <div>
      <TopNav vtLogo={vtLogo} goToItemsPage={goToItemsPage} />
      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" 
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}>
          {selectedItem || "Select an option"}
        </button>
        <ul className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`}>
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


      <Footer />
    </div>
  );
}

export default Items;
