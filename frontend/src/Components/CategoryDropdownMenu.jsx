import React from 'react';

const CategoryDropdownMenu = ({ isDropdownOpen, handleItemClick }) => {
  const menuItems = [
    'Please Select a Category',
    'Textbooks and Study Materials',
    'Electronics and Tech Gadgets',
    'Furniture and Home Decor',
    'Clothing and Accessories',
    'School Supplies',
    'Dorm Essentials',
    'Sports and Fitness Gear',
    'Entertainment and Leisure',
    'Kitchen and Cooking Supplies',
    'Transportation',
    'Health and Beauty Products',
    'Miscellaneous'
  ];

  return (
    <ul className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`}>
      {menuItems.map((item, index) => (
        <li key={index}>
          {index !== 0 && <hr className="dropdown-divider" />}
          <a className="dropdown-item" href="#" onClick={() => handleItemClick(item)}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryDropdownMenu;
