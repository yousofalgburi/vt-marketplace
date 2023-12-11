import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vtLogo from '../../assets/vt.png';

function Usability() {
    const navigate = useNavigate();

    const goToItemsPage = () => {
        navigate('/items');
    };

    const [isListVisible, setListVisible] = useState(false);

    const toggleListVisibility = () => {
        setListVisible(!isListVisible);
    };

    return (
        <div className="usability-container">
            <nav className="topnav">
                <div className="nav-content">
                    <img src={vtLogo} alt="VT Logo" className="vt-logo" />
                    <NavLink to="/home" activeClassName="active">Home</NavLink>
                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                    <NavLink to="/buying" activeClassName="active">Buying</NavLink>
                    <NavLink to="/selling" activeClassName="active">Selling</NavLink>
                    <NavLink to="/securitas" activeClassName="active">Trust & Safety</NavLink>
                </div>
                <button className="marketplace-button" onClick={goToItemsPage}>GO TO MARKETPLACE</button>
            </nav>
            
            <h1>Who can use VT Marketplace</h1> <hr></hr>
            <div className="usability-section">
                <div className="info-container">
                    <h3>The Hokie Marketplace is only available and accessible to Virginia Tech students, faculty, associates, and other Blacksburg residents.</h3>
                    <h3>It is a Marketplace app for serving the Hokie community.</h3>
                </div> <br></br>
                <h2>To access Facebook Marketplace, you must:</h2>
                <ul>
                    <li>Be at least 18 years old.</li>
                    <li>Reside in Blacksburg and/or be associated with Virgina Tech.</li>
                </ul> <br></br> <br></br> <br></br>
                <p>We may restrict which accounts can access Marketplace. If you can't access or no longer have access to Marketplace, it may be because you:</p>
                <ul>
                    <li>Aren't 18 or older.</li>
                    <li>Have a new or inactive account.</li>
                    <li>Went against our Terms of Service, Commerce Policies or other policies.</li>
                </ul> <br></br> <br></br> <br></br>
                <a href="/responsibility">Learn how to buy and sell responsibly on Marketplace.</a>
            </div>
        </div>
    );
}

export default Usability;