import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import vtLogo from '../assets/vt.png';
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';

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
  const [items, setItems] = useState([
    { name: 'iPhone 14 Pro', price: 599, location: 'University Terrace' },
    { name: 'Samsung S23+', price: 549, location: 'Hoge Hall' },
    // Add more items here
  ]);

  // New states for filtering and sorting
  const [filter, setFilter] = useState({ minPrice: 250, maxPrice: 750 });
  const [sortBy, setSortBy] = useState('name');

  // Function to render each item
  const renderItem = (item) => (
    <div className="item" key={item.name}>
      <div className="item-image" />
      <div className="item-info">
        <h5>{item.name}</h5>
        <p>Price: ${item.price}</p>
        <p>{item.location}</p>
      </div>
    </div>
  );

  // Filter and sort items based on current state
  const filteredSortedItems = items
    .filter(item => item.price >= filter.minPrice && item.price <= filter.maxPrice)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.price - b.price;
    });


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

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rangeModal">
  Launch dialog
</button>

<div class="modal fade" id="rangeModal" tabindex="-1" aria-labelledby="rangeModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="rangeModalLabel">Set Range</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group mb-3">
          <button class="btn btn-outline-secondary" type="button" id="button-addon1">+</button>
          <input type="text" class="form-control" placeholder="Lower Range" aria-label="Example text with button addon" aria-describedby="button-addon1" value="$ 250"/>
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">-</button>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div className="items-container">
        {filteredSortedItems.map(renderItem)}
      </div>


      <Footer />
    </div>
  );
}

export default Items;
