import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vtLogo from '../assets/vt.png';

function Commerce() {
    const navigate = useNavigate();

    const goToItemsPage = () => {
        navigate('/items');
    };

    const [activeSection, setActiveSection] = useState('overview');

    return (
        <div className="commerce-page">
            <div className="back-to-terms">
                <NavLink to="/terms">&larr; Back to Terms and Policies</NavLink>
            </div>

            <div className="commerce-container">
                <aside className="commerce-sidebar">
                    <h1>Commerce</h1>
                    <nav>
                        <ul>
                            <li onClick={() => setActiveSection('overview')} className={activeSection === 'overview' ? 'active' : ''}>Overview</li>
                            <li onClick={() => setActiveSection('disapproved')} className={activeSection === 'disapproved' ? 'active' : ''}>Steps to Take if Disapproved</li>
                            <li onClick={() => setActiveSection('prohibited-content')} className={activeSection === 'prohibited-content' ? 'active' : ''}>Prohibited Content</li>
                            <li onClick={() => setActiveSection('restricted-content')} className={activeSection === 'restricted-content' ? 'active' : ''}>Restricted Content</li>
                        </ul>
                    </nav>
                </aside>
                
                <main className="content">
                    {/* Content will change depending on the route */}
                    {activeSection === 'overview' && (
                        <div>
                            <h2>Overview</h2> <hr></hr>
                            <p>Products sold on VT Marketplace must comply with our Commerce Policies and Community Standards. Buyers and sellers are also responsible for complying
                                with all applicable laws and regulations. Failure to comply with our policies may result in a variety of consequences, including, but not limited to,
                                removal of listings and other content, rejection of product tags, or suspension or termination of access to the Marketplace app. If you repeatedly
                                post content that violates our policies, we may take additional action on your account. We reserve the right to reject, approve, or remove any
                                listing for any reason at any time, in our sole discretion.</p>
                        </div>
                    )}

                    {activeSection === 'disapproved' && (
                        <div>
                            <h2>Steps to Take if Disapproved</h2> <hr></hr>
                            <p>If your listing has been rejected for violating our Commerce Policies and you feel it was a mistake, you can request a review by following these steps for Marketplace, and we'll take another look.</p>
                        </div>
                    )}
                    
                    {activeSection === 'prohibited-content' && (
                        <div>
                            <h2>Prohibited Content</h2> <hr></hr>
                            <p>Buying or selling of the following is prohibited on VT Marketplace:</p> <br></br>
                            <ol>
                                <a style={{ color: 'red' }}><b><li>Community Standards</li></b></a>
                                <p>Commerce listings must not violate Marketplace community standards.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Adult Products</li></b></a>
                                <p>Listings may not promote the buying, selling, or use of adult products.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Alcohol</li></b></a>
                                <p>Listings may not promote the buying or selling of alcohol.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Body Parts and Fluids</li></b></a>
                                <p>Listings may not promote the buying or selling of human body parts or fluids.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Digital Media and Electronic Devices</li></b></a>
                                <p>Listings may not promote the buying or selling of devices that facilitate or encourage streaming digital content in an unauthorized manner or interfering with the functionality of electronic devices.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Discrimination</li></b></a>
                                <p>Listings, and commerce Messenger threads, must not wrongfully discriminate or suggest a preference for or against people because of a personal characteristic, included but not limited to, race, ethnicity,
                                    color, national origin, citizenship, religion, age, sex, sexual orientation, gender identity, family status, marital status, disability, or medical or genetic condition. Listings must comply with all
                                    applicable laws prohibiting discrimination. This includes but is not limited to discrimination for housing listings.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Documents, Currency, and Financial Instruments</li></b></a>
                                <p>Listings may not promote the buying or selling of real or fake documents, currency, financial instruments and virtual currency.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Gambling</li></b></a>
                                <p>Listings may not promote the buying, selling or facilitation of online gambling for money or money's worth, including digital currencies.
                                    Online gambling includes gaming, betting, lotteries, raffles, casino, fantasy sports, bingo, poker and sweepstakes in an online environment.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Hazardous Goods and Materials</li></b></a>
                                <p>Listings may not promote the buying or selling of hazardous materials and substances.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Human Exploitation and Sexual Services</li></b></a>
                                <p>Listings may not promote any form of human trafficking, prostitution, escort, or sexual services.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Ingestible Supplements</li></b></a>
                                <p>Listings may not promote the buying or selling of ingestible supplements.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Jobs</li></b></a>
                                <p>Listings on commerce products may not promote job opportunities. This prohibition includes job opportunities that fully describe the associated product or business model,
                                    as well as job opportunities that are misleading, deceptive, fraudulent or have an unclear business model.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Land, Animals, and Animal Products</li></b></a>
                                <p>Listings may not promote the buying or selling of animals or animal parts, or land in ecological conservation areas.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Medical and Healthcare Products</li></b></a>
                                <p>Listings may not promote medical and healthcare products and services, including medical devices, or smoking cessation products containing nicotine.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Misleading, Violent, or Hateful</li></b></a>
                                <p>Listings may not contain misleading, violent, or hateful products and offers.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>No Item for Sale</li></b></a>
                                <p>Listings may not promote news, humor, or other content that does not offer any product for sale.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Prescription Products, Drugs, and Drug Paraphernalia</li></b></a>
                                <p>Listings may not promote the buying or selling of drugs, drug paraphernalia, or prescription products.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Recalled Products</li></b></a>
                                <p>Listings may not promote the buying or selling of recalled products.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Services</li></b></a>
                                <p>Services may not be listed.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Sexually Positioned Products</li></b></a>
                                <p>Listings may not position products or services in a sexually suggestive manner.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Stolen Goods</li></b></a>
                                <p>Listings may not promote the buying or selling of items that have been stolen.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Subscriptions and Digital Products</li></b></a>
                                <p>Listings may not promote the buying or selling of downloadable digital content, digital subscriptions, and digital accounts.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Third-Party Infringement</li></b></a>
                                <p>Listings may not contain content that infringes upon or violates the intellectual property rights of any third party, including copyright or trademark. This includes, but is not limited to,
                                    the promotion or sale of counterfeits, such as goods that copy the trademark (name or logo) and/or distinctive features of another company’s products to imitate a genuine product.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Tobacco Products and Related Paraphernalia</li></b></a>
                                <p>Listings may not promote the buying or selling of tobacco products or tobacco paraphernalia.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Used Cosmetics</li></b></a>
                                <p>Listings may not promote the buying or selling of cosmetics that have been used, or that are not sold in their original packaging.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Vehicle Parts and Accessories</li></b></a>
                                <p>Listings may not promote the buying, selling, or trading of certain vehicle parts and accessories.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Weapons, Ammunition, and Explosives</li></b></a>
                                <p>Listings may not promote the buying or selling of weapons, ammunition, and explosives.</p>
                            </ol>
                        </div>
                    )}

                    {activeSection === 'restricted-content' && (
                        <div>
                            <h2>Restricted Content</h2> <hr></hr>
                            <p>The sale of the following is restricted on Hokie Marketplace:</p>
                            <ol>
                                <a style={{ color: 'red' }}><b><li>Events or Admission Tickets</li></b></a>
                                <p>The buying and selling of tickets is restricted.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Gift Cards and Vouchers</li></b></a>
                                <p>The buying and selling of gift cards or vouchers is restricted.</p> <br></br>

                                <a style={{ color: 'red' }}><b><li>Pet Adoption Matching Services</li></b></a>
                                <p>Pet adoption matching services are restricted to vetted partners.</p> <br></br>
                            </ol>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Commerce;