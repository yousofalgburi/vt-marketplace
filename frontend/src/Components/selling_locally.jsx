import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import vtLogo from '../assets/vt.png';


function SellingLocal() {
     // naviagting through the pages
     const goToItemsPage = () => {
        navigate('/items');
    };


    return(
        <div className="privacy-container">
            <h1>Selling Locally</h1>
            <h3>Selling an item in VT Marketplace</h3>
            <p>When you sell something on VT Marketplace, you create a public listing that can be viewed by anyone who has access on Marketplace.</p>
        </div>
    )
}

export default SellingLocal;