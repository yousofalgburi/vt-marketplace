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
            <p>When you sell something on VT Marketplace, you create a public listing that can be viewed
                 by anyone who has access on Marketplace. Any listed items on 
                 VT Marketplace must follow our <a href='/Commerce'>Commerce Policies</a>.</p>
            <h3>Here are the steps:</h3>
            <ol>
                <li>Make sure you are logged into your account. This functionality won't work unless you have created an account.</li>
                <li>Click on the <b>Selling"</b> button to redirect you to the marketplace.</li>
                <li>Fill out the following entries. Make it as descriptive as you can.</li>
                <li>Then, you will click submit and <b>List Item</b>. </li>
                <li>Now you can view your product in the <b>GO TO MARKETPLACE</b></li>
            </ol>
        </div>
    )
}

export default SellingLocal;