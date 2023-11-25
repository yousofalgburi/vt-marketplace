import React from 'react';
import marketplaceGraphic from '../../assets/marketplace.svg';
import { NavLink, useNavigate } from 'react-router-dom';

function About() {
    return (
        <div className="about-page">
            <div className="about-header">
                <img src={marketplaceGraphic} alt="Marketplace" className="about-image" />
                <h1>VT Marketplace</h1>
            </div>
            <div className="about-content">
                <h3>You can use Marketplace to buy and sell items with fellow Hokies online.</h3> <br></br>
                <h2>Learn more about:</h2>
                <ul>
                    <li><NavLink to="/responsibility">Buying and selling responsibly on VT Marketplace.</NavLink></li>
                    <li><NavLink to="/accessibility">Accessing VT Marketplace.</NavLink></li>
                    <li><NavLink to="/about_content">Finding things to buy on VT Marketplace by searching for a specific item or browsing categories.</NavLink></li>
                    <li><NavLink to="/selling_info">Selling locally on VT Marketplace.</NavLink></li>
                    <li><NavLink to="/ratings_info">How ratings work on VT Marketplace.</NavLink></li>
                    <li><NavLink to="/tips">Tips for shopping safely and avoiding scams on VT Marketplace.</NavLink></li>
                </ul> <br></br>
                <p><b>Keep in mind that items on Marketplace must follow our <a href="/commerce-policies">Commerce Policies</a>.</b></p> <br></br>
            </div>
            <div className="about-footer">
                <h2>Popular Articles</h2>
                <a href="/accessibility">I can't access VT Marketplace</a>
                <a href="/who-can-use-marketplace">Who can use VT Marketplace</a>
                <a href="/selling_info">Selling on VT Marketplace</a>
                <a href="/marketplace-help">Get Help with Marketplace</a>
            </div>
        </div>
    )
}

export default About;