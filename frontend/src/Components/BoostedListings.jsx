import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import freeToUseIcon from '../assets/free-to-use.png';
import hokiesIcon from '../assets/hokie-bird.png';
import connectWithOthersIcon from '../assets/connect-with-others.png';

function BoostedListings() {
    const [activeIndex, setActiveIndex] = useState(null); // To keep track of the active accordion item
    const navigate = useNavigate();

    const getStarted = () => {
        navigate('/items');
    }

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="boosted-listings-container">
            <div className="boosted-header">
                <h1>Boosted Listings</h1> <br></br>
                <p>Reach more potential buyers across VT Marketplace and make your Marketplace items stand out by converting listings to VT Marketplace ads.</p> <br></br>
                <button onClick={getStarted}>Get started</button>
            </div> <br></br> <br></br> <br></br>

            <div className="benefits-of-boosting">
                <h2>Benefits of Boosting</h2>
                <div className="benefits-section">
                    <div className="benefit">
                        <img src={hokiesIcon} alt="Reach People" className="icon" />
                        <h4>Reach more people</h4>
                        <p>Boosted Listings reach potential buyers on online News Feed and Search in addition to VT Marketplace. Sellers who boost get 2.5x more listing views on average than those who don't.</p>
                    </div>

                    <div className="benefit">
                        <img src={freeToUseIcon} alt="Connect" className="icon" />
                        <h4>Connect with more potential buyers</h4>
                        <p>Boosted Listings leverage Marketplace's powerful personalized ads system to reach high intent buyers. Sellers who boost connect with 50% more potential buyers on average than those who don't.</p>
                    </div>

                    <div className="benefit">
                        <img src={connectWithOthersIcon} alt="Uniqueness" className="icon" />
                        <h4>Make your listings stand out</h4>
                        <p>Boosted Listings are shown in dedicated spots on Marketplace feed, category and product detail pages. Sellers who boost receive messages from interested buyers 1.5x faster than those who don't.</p>
                    </div>
                </div>
            </div>

            <div className='how-boosting-works'>
                <h2>How Boosing Works</h2>
                <ol>
                    <li><b>Choose the listing you want to boost:</b> Go to Your Listings in Marketplace, select Boost Listing for the item you wish to boost.</li>
                    <li><b>Set your budget, duration and audience:</b> Select your total budget with the recommended campaign duration or choose a custom option.</li>
                    <li><b>Create your ad and analyze insights:</b> Set up your payment method and click Promote Now to convert your Marketplace listing to a Boosted Listing ad. You can then see detailed insights for each Boosted Listing.</li>
                </ol>
            </div> <br></br> <br></br> <br></br>

            <div className='boost'>
                <h2>Ready? Set. Boost!</h2> <br></br>
                <button onClick={getStarted}>Get started</button>
            </div> <br></br> <br></br> <br></br>

            <div className='boosting-faqs'>
                <h2>Frequently asked questions</h2>
                <div className="faq-item">
                    <button className="faq-question" onClick={() => handleToggle(0)}>
                        What happens to a listing when I boost it?
                        <span className={activeIndex === 0 ? "icon minus" : "icon plus"}></span>
                    </button>
                    <div className={`faq-answer ${activeIndex === 0 ? "show" : ""}`}>
                        Boosting converts a Marketplace listing into online ads. This means your listing now proactively gets surfaced to thousands of potential buyers on on Marketplace beyond Blacksburg.
                    </div>
                </div>

                <div className="faq-item">
                    <button className="faq-question" onClick={() => handleToggle(0)}>
                        What does a boosted listing look like?
                        <span className={activeIndex === 0 ? "icon minus" : "icon plus"}></span>
                    </button>
                    <div className={`faq-answer ${activeIndex === 0 ? "show" : ""}`}>
                        Boosted listings uses details from your Marketplace listing to create an ad with a headline, price, and location.
                    </div>
                </div>

                <div className="faq-item">
                    <button className="faq-question" onClick={() => handleToggle(0)}>
                        Where do Boosted Listings appear?
                        <span className={activeIndex === 0 ? "icon minus" : "icon plus"}></span>
                    </button>
                    <div className={`faq-answer ${activeIndex === 0 ? "show" : ""}`}>
                        They appear in online News Feed like VT Marketplace and Instagram, Marketplace Search, Marketplace Product Detail Pages, Marketplace Browse and Marketplace Category pages.
                    </div>
                </div>

                <div className="faq-item">
                    <button className="faq-question" onClick={() => handleToggle(0)}>
                        How will I get charged for a Boosted Listing?
                        <span className={activeIndex === 0 ? "icon minus" : "icon plus"}></span>
                    </button>
                    <div className={`faq-answer ${activeIndex === 0 ? "show" : ""}`}>
                        Sellers choose their budget and duration during setup but are actually charged on a per impression basis. This means you will only be billed if we find a relevant user
                        who is interested in your product and we show them your listing. The maximum we will charge you for the duration of the campaign is the budget you've chosen.
                    </div>
                </div>

                <div className="faq-item">
                    <button className="faq-question" onClick={() => handleToggle(0)}>
                        Where are Boosted Listings available?
                        <span className={activeIndex === 0 ? "icon minus" : "icon plus"}></span>
                    </button>
                    <div className={`faq-answer ${activeIndex === 0 ? "show" : ""}`}>
                        Boosted Listings are available in all markets where sellers can list items on Marketplace.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoostedListings;