import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import vtLogo from '../assets/vt.png';


function Finding() {
    // naviagting through the pages
    const goToItemsPage = () => {
        navigate('/items');
    };



    return (
        <div className="privacy-container">
            <h1>Finding Items to buy through VT Marketplace</h1>

            <h3>To find items on VT Marketplace, you can:</h3>
            <ul>
                <li>Search for something specific.</li>
                <li>Browse by category.</li>
                <li>Filter your results.</li>
            </ul>

            <h3>Searching based on Category</h3>
            <p>If you aren't sure what you're exactly looking for, you can categorize to look through different groups of items from our list.</p>
            <ol>
                <li>Select the "Marketplace" button at the top right of the webiste.</li>
                <li>There will be a button that says "Please Select a Category". It will show a list of categories to begin your search.</li>
            </ol>

            <h3>Search for for something specific</h3>
            <p>If you know exactly what you're looking for, you can just </p>

            <h3>Searching By Sorting</h3>
            <p>By Sorting your search, it will make your search for that particular item easier than it has to be.</p>
            <ol>
                <li>Select the "Marketplace" button at the top right of the webiste</li>
                <li>Select the category you are looking for.</li>
                <li>Select the "Select Sorting" dropdown to see how you want to sort the item of your search.</li>
                <li>You can also use the "Lower Price" and "Higher Price" buttons if you have a budget.</li>
            </ol>

        </div>
    );

}

export default Finding;