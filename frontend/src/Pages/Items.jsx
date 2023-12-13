import { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import PriceModal from '../Components/PriceModal';
import Card from '../Components/Card';
import DropdownMenu from '../Components/CategoryDropdownMenu';
import axios from 'axios';
import '../css/Items.css';

function Items({user}) {

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [selectedItem, setSelectedItem] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [showDialog, setShowDialog] = useState(false);
  const [items, setItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [priceRange, setPriceRange] = useState(null);

  useEffect(() => {
    if (currentCategory) {
      getItemsByFilter(currentCategory, currentPage);
    } else {
      getItems(currentPage);
    }
  }, [currentPage, currentCategory]);

  useEffect(() => {
    getItems(1);
    setCurrentPage(1);
  }, [sortBy, filterBy, priceRange]);


  const handleCardClick = (item) => {
    console.log('Item clicked:', item);
    navigate(`/item_page/${item}`);
  };

  const handleItemClick = (category) => {
    setSelectedItem(category);
    // setShowDialog(true);
    setIsDropdownOpen(false);
    setCurrentPage(1); // Reset to page 1 when a category is selected
    setCurrentCategory(category); // Set the current category
    getItemsByFilter(category, 1); // Fetch items from the first page of this category
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isDropdownOpen && !selectedItem) {
      // setShowDialog(false); // Close dialog if no item is selected and dropdown is closing
    }
  };
  const [lowerPrice, setLowerPrice] = useState(0);
  const [higherPrice, setHigherPrice] = useState(2500);

  useEffect(() => {
    getItemsByPriceRange(lowerPrice, higherPrice);
  }, [lowerPrice, higherPrice]);

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

  const toggleSortDropdown = () => {
    setSortDropdownOpen(!sortDropdownOpen);

  };


  const getItems = async (page) => {
    try {
      //Change this to accomodate for a query such as:/home?sortBy=price:desc&filterBy=type:Price,tag:TV&priceRange=10-800000
      const params = { page, sortBy, filterBy, priceRange };

      const queryString = Object.entries(params)
        .filter(([key, value]) => value != null) // Remove any null or undefined values
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

      console.log('Query string:', queryString);
      const response = await axios.get(`/home?${queryString}`);

      console.log(response.data);
      setItems(response.data.data); // Update items state
      setCurrentPage(response.data.currentPage); // Update current page state
      setNumberOfPages(response.data.numberOfPages); // Update total pages state
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const getItemsByPriceRange = async (lowerPrice, higherPrice) => {
    setPriceRange(`${lowerPrice}-${higherPrice}`);
    setCurrentPage(1);
  };


  const getItemsByFilter = async (category) => {
    if(category === 'Please Select a Category'){
      setFilterBy(null);
      setCurrentPage(1);
      return;
    }
    setFilterBy(`tag:${category}`);
    setCurrentPage(1);
  };


 // Function to go to the next page
 const goToPage = (page) => {
  setCurrentPage(page);
  if (currentCategory) {
    getItemsByFilter(currentCategory);
  } else {
    getItems(page);
  }
  };

  const goToNextPage = () => {
    setCurrentPage((prevCurrentPage) => {
      const nextPage = prevCurrentPage < numberOfPages ? prevCurrentPage + 1 : prevCurrentPage;
      if (currentCategory) {
        getItemsByFilter(currentCategory, nextPage);
      } else {
        getItems(nextPage);
      }
      return nextPage;
    });
  };

  const goToPrevPage = () => {
    setCurrentPage((prevCurrentPage) => {
      const prevPage = prevCurrentPage > 1 ? prevCurrentPage - 1 : prevCurrentPage;
      if (currentCategory) {
        getItemsByFilter(currentCategory, prevPage);
      } else {
        getItems(prevPage);
      }
      return prevPage;
    });
  };

  const handleSortChange = (sortType) => {
    // making API calls, etc.
    console.log(sortType);
    if(sortType === 'Price: Low to High'){
      setSortBy('price:asc')
      //Add filter by type:Price to end of already existing filterBy string)
      if(filterBy){
        setFilterBy(filterBy + ',type:Price');
      }
      else{
        setFilterBy('type:Price');
      }
    }
    else if(sortType === 'Price: High to Low'){
      setSortBy('price:desc');
      if(filterBy){
        setFilterBy(filterBy + ',type:Price');
      }
      else{
        setFilterBy('type:Price');
      }
    }
    else if(sortType === 'Alphabetical: A to Z'){
      setSortBy('title:asc');
    }
    else if(sortType === 'Alphabetical: Z to A'){
      setSortBy('title:desc');
    }
    else if(sortType === 'Bid: Low to High'){
      setSortBy('bid:asc');
      if(filterBy){
        setFilterBy(filterBy + ',type:Auction');
      }
      else{
        setFilterBy('type:Auction');
      }
    }
    else if(sortType === 'Bid: High to Low'){
      setSortBy('bid:desc');
      if(filterBy){
        setFilterBy(filterBy + ',type:Auction');
      }
      else{
        setFilterBy('type:Auction');
      }
    }
    else{
      setSortBy(null);
    }
    setSelectedSortItem(sortType);
    setSortDropdownOpen(false); // Close dropdown
    
    
  };

  return (
    <div>
      {/* <TopNav vtLogo={vtLogo} goToItemsPage={goToItemsPage} /> */}
      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" 
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}>
          {selectedItem || "Please Select a Category"}
        </button>
        <DropdownMenu isDropdownOpen={isDropdownOpen} handleItemClick={handleItemClick} />
      </div>

      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle"
                aria-expanded={sortDropdownOpen}
                onClick={toggleSortDropdown}>
          {selectedSortItem || "Select a Sorting Method"}
        </button>
        <ul className={`dropdown-menu${sortDropdownOpen ? ' show' : ''}`}>
        <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Select Sorting')}>Select Sorting</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Price: Low to High')}>Price: Low to High</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Price: High to Low')}>Price: High to Low</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Bid: Low to High')}>Bid: Low to High</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleSortChange('Bid: High to Low')}>Bid: High to Low</a></li>
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
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Previous</button>
        {/* Render page numbers */}
        {[...Array(numberOfPages).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => goToPage(number + 1)}
            disabled={currentPage === number + 1}
          >
            {number + 1}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === numberOfPages}>Next</button>
      </div>
  </div>

  );
}

export default Items;