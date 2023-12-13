import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import location from '../assets/location.png';
import deals from '../assets/deals.png';
import inspect from '../assets/inspect.png';
import peopleIcon from '../assets/people_icon.png';
import communication from '../assets/communication.png';
import check from '../assets/vet_seller.png';

function Buying() {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();

    const goToMarketplace = () => {
        navigate('/items');
    }

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="buying-container">
            <div className="buying-hero">
                <h2>Buying on Marketplace</h2>
                <p>Learn more about buying things on Hokie Marketplace, where you can find thousands of items for sale by people near you.</p>
                <button onClick={goToMarketplace}>Marketplace</button>
            </div> <br></br> <br></br> <br></br>

            <div className="about-marketplace">
                <h2>About Marketplace</h2>
                <p>Marketplace makes it easy to find new and used items like clothes, furniture, electronics and even your next home to rent.
                    Here's more information about Marketplace and how to buy things on Hokie Services.</p>
            </div> <br></br> <br></br> <br></br>

            <h2>Benefits of Buying on Marketplace</h2>
            <div className="benefits-of-marketplace">
                <div className="marketplace-tips">
                    <img src={location} alt="share location" className='location' />
                    <h5>See things for sale from people near you</h5>
                    <p>Marketplace lets you see what real people in your community are selling. You can see their public Marketplace profile and seller ratings so you can feel confident in your purchase.</p>
                </div>

                <div className="marketplace-tips">
                    <img src={deals} alt="view local deals" className='deals' />
                    <h5>Find deals on top brands</h5>
                    <p>You can also find deals on new and used items from top brands on Marketplace.</p>
                </div>

                <div className="marketplace-tips">
                    <img src={inspect} alt="inspect items" className='inspect' />
                    <h5>Easily find what you're looking for</h5>
                    <p>You can search for specific items or browse by category. You can also use filters to adjust the seller's location, price and
                        more when buying on Marketplace. If you're not ready to buy, you can save your favorite listings for later.</p>
                </div>

                <div className="marketplace-tips">
                    <img src={peopleIcon} alt="join buy & sell groups" className='peopleIcon' />
                    <h5>Join Buy and Sell Groups</h5>
                    <p>You can shop among people who have things in common with you through buy and sell groups. You can find buy and sell groups around
                        specific neighborhoods, interests, items and more by searching the Marketplace.</p>
                </div>

                <div className="marketplace-tips">
                    <img src={communication} alt="message through Hokie Services" className='chatIcon' />
                    <h5>Message online and pay through Hokie Services</h5>
                    <p>You don't need to leave Marketplace when shopping on online or give your phone number and email to strangers. Instead, you can use
                        Hokie Messenger on most listings to ask the seller questions, arrange pickup and pay.</p>
                </div>

                <div className="marketplace-tips">
                    <img src={check} alt="checkout on marketplace" className='check' />
                    <h5>Checkout on VT Marketplace</h5>
                    <p>You can checkout directly on Hokie Marketplace and eligible items are covered by Purchase Protection.</p>
                </div>
            </div>

            <div className="buying-faqs">
                <h2>Frequently Asked Questions</h2>
                
                <div className="buying-faq-item">
                    <button className="buying-faq-question" onClick={() => toggleFAQ(0)}>
                        How can I buy things on Marketplace?
                        <span className="buying-faq-toggle">{activeIndex === 0 ? '−' : '+'}</span>
                    </button>
                    <div className={`buying-faq-answer ${activeIndex === 0 ? 'show' : ''}`}>
                        <p>Buying things on Marketplace is simple. To get there, visit <b>hokie-marketplace.com</b>. From there you'll be able to browse listings
                        that interest you. You can adjust the listings that appear by sorting by distance, date listed or category. You can also use the search box
                        to find exactly what you’re looking for. You'll find more information about each listing when you click on it. You can also save the listing
                        for later or message the seller directly through Hokie Messenger on most listings so you don't have to give out your phone number or personal
                        email address. You can also click through the sellers profile to learn more about them and see their seller ratings. You can learn more about
                        buying on Marketplace in our <a href="/help">help center</a>.</p>
                    </div>
                </div>

                <div className="buying-faq-item">
                    <button className="buying-faq-question" onClick={() => toggleFAQ(1)}>
                        Can I find free items on Marketplace?
                        <span className="buying-faq-toggle">{activeIndex === 1 ? '−' : '+'}</span>
                    </button>
                    <div className={`buying-faq-answer ${activeIndex === 1 ? 'show' : ''}`}>
                        <p>Yes, Marketplace is a great place to find items that other people in your local community are giving away for free. To find free stuff available
                            on Marketplace, simply select the “Only show free listings” filter. Many neighborhoods also have “Buy Nothing” groups where people give away
                            things to other people in their community. You can search for these on Marketplace to find if there are any near you.</p>
                    </div>
                </div>

                <div className="buying-faq-item">
                    <button className="buying-faq-question" onClick={() => toggleFAQ(2)}>
                        Do you have safety tips for buying on Marketplace?
                        <span className="buying-faq-toggle">{activeIndex === 2 ? '−' : '+'}</span>
                    </button>
                    <div className={`buying-faq-answer ${activeIndex === 2 ? 'show' : ''}`}>
                        <p>Keeping your information protected and yourself safe should be your top priority when using Marketplace or any other online shopping platform. People can
                            only see the information that you publicly share on Marketplace, so you get to decide how much information people can see. Keep the following safety tips
                            in mind when buying things on Marketplace and for additional information:</p>
                        <ol>
                            <li>
                                <b style={{color: 'gold'}}>Know what is allowed to be sold on Marketplace. </b>
                                You can read what items can be sold on Marketplace in our <a href="/help">help center</a> and <a href="/commerce">Commerce Policies</a>. Don't attempt to
                                buy anything illegal. If you’re unsure about an item, familiarize yourself with what is allowed to be sold on Marketplace.
                            </li> <br></br>

                            <li>
                                <b style={{color: 'gold'}}>Learn more about the item you want to buy. </b>
                                Ask a lot of questions before buying an item you’re interested in. Make sure you are able to see pictures that show all angles of the item, and get information
                                from the seller about an item’s history, authenticity and current condition. Thoroughly inspect the item before buying and test it if possible.
                            </li> <br></br>

                            <li>
                                <b style={{color: 'gold'}}>Learn more about the seller. </b>
                                Spend a few minutes learning more about a seller by looking at their profile to see the friends you may have in common, reviewing their Marketplace activity
                                and reviewing any ratings they may have received.
                            </li> <br></br>

                            <li>
                                <b style={{color: 'gold'}}>Keep your personal information protected. </b>
                                Never share personal or banking information that could put your identity or money at risk. Use Hokie Messenger when possible to communicate so
                                you don't have to give your personal phone number or email address.
                            </li> <br></br>

                            <li>
                                <b style={{color: 'gold'}}>Know More About Meeting In-person. </b>
                                If you're meeting, we recommend arranging your meeting in a public, well-lit area or a police station. Let others know where you're headed.
                                Find a local law enforcement agency <a href="https://www.usacops.com/" target='_blank'>near you</a> in the United States from the USACOPS directory.
                            </li> <br></br>

                            <li>
                                <b style={{color: 'gold'}}>Report a listing or a seller if you have any problems. </b>
                                If you have an issue with a person or an item that's listed, such as violating community standards, harassing behavior or scams, it's easy to
                                <a href="/report">report to Marketplace</a>. Just look for a Report link on the listing or on the seller's Marketplace profile.
                            </li> <br></br>
                        </ol>
                    </div>
                </div>

                <div className="buying-faq-item">
                    <button className="buying-faq-question" onClick={() => toggleFAQ(3)}>
                        Can I buy expensive items like cars? Are there are any restricted/prohibited items not for sale on Hokie Marketplace?
                        <span className="buying-faq-toggle">{activeIndex === 3 ? '−' : '+'}</span>
                    </button>
                    <div className={`buying-faq-answer ${activeIndex === 3 ? 'show' : ''}`}>
                        <p>Expensive items like cars are not allowed for sale on Marketplace. Please refer to the <a href="/commerce">Commerce page</a> for a list of prohibited
                        and restricted items that cannot be sold on VT Marketplace.</p>
                    </div>
                </div>

                <div className="buying-faq-item">
                    <button className="buying-faq-question" onClick={() => toggleFAQ(4)}>
                        Where can I find more information about how to use Marketplace?
                        <span className="buying-faq-toggle">{activeIndex === 4 ? '−' : '+'}</span>
                    </button>
                    <div className={`buying-faq-answer ${activeIndex === 4 ? 'show' : ''}`}>
                        <p>You can find common questions and step-by-step tutorials about how to use Marketplace on our <a href="/help">help center</a>.</p>
                    </div>
                </div>
            </div> <br></br> <br></br> <br></br>

            <div className="buying-footer">
                <h2>Buy or Sell on Marketplace</h2>
                <button onClick={goToMarketplace}>Marketplace</button>
            </div>
        </div>
    );
}

export default Buying;