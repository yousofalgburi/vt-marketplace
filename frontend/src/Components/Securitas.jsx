import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import person from '../assets/person.png';
import physicalSafety from '../assets/physical_safety.png';
import trust from '../assets/establishing_trust.png';
import vetSeller from '../assets/vet_seller.png';
import ideadBulb from '../assets/idea_bulb.png';
import peopleIcon from '../assets/people_icon.png';
import todo from '../assets/todo.png';
import location from '../assets/location.png';
import warning from '../assets/warning.png';
import transactions from '../assets/transactions.png';
import inspect from '../assets/inspect.png';
import communication from '../assets/communication.png';

function Securitas() {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();

    const goToMarketplace = () => {
        navigate('/items');
    }

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="securitas-container">
            <div className="trust-safety">
                <div className="trust-safety-text">
                    <h1>TRUST & SAFETY ON HOKIE MARKETPLACE</h1>
                    <p>We're dedicated to delivering trustworthy shopping experiences for people through our policies, safety measures and technology.</p>
                    <button onClick={goToMarketplace}>Browse Marketplace</button>
                </div>
                <img src={person} alt="Person" className="person-image" />
            </div> <br></br> <br></br> <br></br>

            <div className="info-section">
                <div className="info-block">
                    <div className="info-text">
                        <h2>Physical Safety</h2>
                        <p>We continue to make progress on making Marketplace a safer and more responsible place to transact. Key features we have launched include:
                            create & share a meetup plan, add a trusted contact in a Messenger conversation, and share your live location with a family member or friend.</p>
                    </div>
                    <img src={physicalSafety} alt="Physical Safety" className="info-image" />
                </div>
                
                <div className="info-block">
                    <img src={trust} alt="Establishing Trust" className="info-image" />
                    <div className="info-text">
                        <h2>Establishing Trust</h2>
                        <p>Creating trust between buyers and sellers is particularly important when considering an in-person transaction. In Marketplace, you can read ratings
                            and reviews for sellers and review their badges. These existing & new features are designed to make it easier for buyers to evaluate sellers.</p>
                    </div>
                </div>
            </div> <br></br> <br></br> <br></br>
            
            <h2 className="safe-shopping-header">Ways you can shop safely in-person</h2>
            <div className="shop-safely">
                <div className="safety-tips">
                    <img src={vetSeller} alt="vet the seller" className='vet_seller' />
                    <h5>Vet the seller</h5>
                    <p>From a seller profile, you can see ratings and reviews from other buyers and friends you may have in common,
                        view their other listings, and review their Marketplace activity.</p>
                </div>

                <div className="safety-tips">
                    <img src={ideadBulb} alt="meetup preferences" className='meetup' />
                    <h5>Evaluate meetup plan preferences</h5>
                    <p>Buyers and sellers can arrange a transaction by meeting in a public location, dropping off items at the buyer’s door, or picking up items from the seller’s door.</p>
                </div>

                <div className="safety-tips">
                    <img src={peopleIcon} alt="people logo" className='meetup plan' />
                    <h5>Create & share a meetup plan</h5>
                    <p>If you’re meeting someone in person, we recommend arranging your meeting in a public, well-lit area. You can also create a meeting plan
                        and share it with a trusted friend or family member so they know the meeting location and time.</p>
                </div>

                <div className="safety-tips">
                    <img src={todo} alt="prep for meetup" className='todo' />
                    <h5>Prep for your meetup</h5>
                    <p>Message the other person to tell them when you're on your way, or if you're going to be late. Don’t carry a lot of cash, and be sure to bring your mobile phone with the battery charged.</p>
                </div>

                <div className="safety-tips">
                    <img src={location} alt="share location" className='location' />
                    <h5>Share your live location</h5>
                    <p>Use a live location sharing app or function on your mobile phone to share your location with a family member or friend during your scheduled meetup.</p>
                </div>

                <div className="safety-tips">
                    <img src={warning} alt="report activity" className='warning' />
                    <h5>Report suspicious activity</h5>
                    <p>If you see any signs of suspicious activity, stop communicating with the buyer or seller, report the listing or person and call the local authorities if necessary.</p>
                </div>
            </div> <br></br> <br></br> <br></br>

            <h2 className="avoid-scams-header">Helping you avoid scams</h2>
            <div className="avoid-scams">
                <div className="scams-content">
                    <p>If you think something is a scam, stop communicating with the buyer or seller and <a href="/report">report the suspected scam to Hokie Services</a>. You can find more information about <a href="/avoiding-scams">avoiding scams</a>.</p>
                    <button><a href="/avoiding-scams" target='_blank' className="learn-more-button" style={{color: 'white'}}>Learn more</a></button> <br></br> <br></br> <br></br>
                </div>

                <div className="scams-info-row">
                    <div className="scam-info-block">
                        <img src={transactions} alt="check bank transactions" className='scams-icon' />
                        <h5>Check your bank account to verify transactions</h5>
                        <p>Be careful of buyers claiming they’ve accidentally overpaid you. They may ask you to refund them the overpayment. They may offer to pay more than the asking
                            price, pretend to overpay for the item(s), or claim that the overpayment is for third-party movers to deliver the item(s).</p>
                    </div>
                    
                    <div className="scam-info-block">
                        <img src={inspect} alt="inspect items" className='scams-icon' />
                        <h5>Inspect the items closely</h5>
                        <p>When buying in person, make sure that the items are, if applicable, real (example: verifying authenticity), in acceptable condition, and work as expected.</p>
                    </div>

                    <div className="scam-info-block">
                        <img src={communication} alt="keep communication within Hokie Services" className='scams-icon' />
                        <h5>Keep communication with buyers or sellers on VT Marketplace.</h5>
                        <p>You may get requests to contact other individuals, or get users contacting you about a listing outside of Marketplace.</p>
                    </div>
                </div>
            </div> <br></br> <br></br> <br></br>

            <div className="securitas-faqs">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <button className="faq-question" onClick={() => toggleFAQ(0)}>
                    Where can I find more information about Marketplace?
                    <span className="faq-toggle">{activeIndex === 0 ? '−' : '+'}</span>
                    </button>
                    <div className={`faq-answer ${activeIndex === 0 ? 'show' : ''}`}>
                    <p>You can find common questions and step-by-step tutorials about how to use Marketplace in our <a href="/help">Help Center</a>.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <button className="faq-question" onClick={() => toggleFAQ(1)}>
                    I'm having an issue with something I purchased on VT Marketplace:
                    <span className="faq-toggle">{activeIndex === 1 ? '−' : '+'}</span>
                    </button>
                    <div className={`faq-answer ${activeIndex === 1 ? 'show' : ''}`}>
                    <p>If you have an issue with an order on VT Marketplace, please contact the seller for help. If the seller doesn't reply or resolve your issue within 2 business days, you can contact Hokie Services support.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <button className="faq-question" onClick={() => toggleFAQ(2)}>
                    How does Purchase Protection work on VT Marketplace?
                    <span className="faq-toggle">{activeIndex === 2 ? '−' : '+'}</span>
                    </button>
                    <div className={`faq-answer ${activeIndex === 2 ? 'show' : ''}`}>
                    <p>Many purchases made with checkout on VT Marketplace are covered by our Purchase Protection policies. Note that purchases made through third-party sites, local pickups, Hokie Messenger transactions, or through other messaging services don't qualify for Purchase Protection. Learn more in our <a href="/help">Help Center</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Securitas;