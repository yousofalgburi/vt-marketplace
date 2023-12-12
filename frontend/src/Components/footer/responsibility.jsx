import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vtLogo from '../../assets/vt.png';

function Responsibility() {
    const navigate = useNavigate();

    const goToItemsPage = () => {
        navigate('/items');
    };
    
    // State to manage dropdown visibility
    const [showSection, setShowSection] = useState({
        meetingInPerson: false,
        cleanItems: false,
        notAllowed: false,
        reviewProfile: false,
        onlinePayment: false,
        communication: false,
        privacy: false,
        fairPricing: false,
        giftCardScams: false,
        verifyItem: false,
        recalledItems: false,
        counterfeitItems: false,
        largeItems: false
    });

    // Function to toggle visibility
    const toggleSection = (section) => {
        setShowSection(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className="responsibility-page">
            <h1>Buy and sell responsibly on VT Marketplace</h1>

            {/* Section 1 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('meetingInPerson')} className={showSection.meetingInPerson ? 'open' : ''}>Meeting in-person</h2>
                {showSection.meetingInPerson && (
                    <div>
                        <ul>
                            <li>If you're meeting someone in person, we recommend arranging your meeting in a public, well-lit area, either on-campus or somewhere nearby.</li>
                            <li>Create and share your meeting plan with a trusted friend or family member through chat.</li>
                            <li>Don't share personal information like your home address online with others.</li>
                        </ul>
                    </div>
                )}
            </div> <br></br>

            {/* Section 2 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('cleanItems')} className={showSection.cleanItems ? 'open' : ''}>Clean and disinfect items</h2>
                {showSection.cleanItems && (
                    <div>
                        <ul>
                            <li>Clean and disinfect any item you intend to sell.</li>
                            <li>If you buy an item, make sure to clean it before bringing it into your home.</li>
                            <li>Learn about the <a href="https://www.cdc.gov/hygiene/cleaning/cleaning-your-home.html" target='_blank'>guidelines from the CDC</a> on cleaning and disinfecting products.</li>
                        </ul>
                    </div>
                )}
            </div> <br></br>

            {/* Section 3 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('notAllowed')} className={showSection.notAllowed ? 'open' : ''}>Learn which items are not allowed on Hokie Marketplace</h2>
                {showSection.notAllowed && (
                    <p>All listings on Hokie Marketplace need to follow our <NavLink to="/commerce">Commerce Policies.</NavLink></p>
                )}
            </div> <br></br>

            {/* Section 4 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('reviewProfile')} className={showSection.reviewProfile ? 'open' : ''}>Review the seller's profile</h2>
                {showSection.reviewProfile && (
                    <div>
                        <ul>
                            <li>Look at the seller’s Marketplace profile to learn more about the seller. You view their other listings and see any ratings they may have received.</li>
                            <li>Positive ratings are considered 4-5 stars.</li>
                            <li>Negative ratings are considered 3 stars or below.</li>
                        </ul>
                    </div>
                )}
            </div> <br></br>

            {/* Section 5 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('onlinePayment')} className={showSection.onlinePayment ? 'open' : ''}>Use online payment methods</h2>
                {showSection.onlinePayment && (
                    <div>
                        <ul>
                            <li>Don't transfer money directly into a seller's bank account. Instead, offer to use a secure person-to-person payment site, such as Zelle or PayPal.</li>
                            <li>If you choose to pay electronically using wire transfer or money order solutions, avoid payment links and log in directly through the payment method's website.</li>
                            <li>Keep in mind that cashier and certified checks can be counterfeit. Transactions are between the buyer and seller only, and no third-party guarantee should be involved.</li>
                            <li>Alternatively, both the buyer and seller can choose to meet in-person for person-to-person payments.</li>
                        </ul>
                    </div>
                )}
            </div> <br></br>

            {/* Section 6 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('communication')} className={showSection.communication ? 'open' : ''}>Communicate on Marketplace</h2>
                {showSection.communication && (
                    <p>Avoid communicating with buyers or sellers privately outside of the Hokie Marketplace unless you trust the person. Note that Hokie Marketplace is not responsible for any external communications/transactions.</p>
                )}
            </div> <br></br>

            {/* Section 7 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('privacy')} className={showSection.privacy ? 'open' : ''}>Protect your privacy</h2>
                {showSection.privacy && (
                    <div>
                        <ul>
                            <li>Don't share your financial information (example: PayPal login and password, bank account info) or unnecessary personal information with buyers or sellers.</li>
                            <li>Don't respond to messages or emails that ask you to provide verification codes or account information, such as your email address and password. Marketplace will never ask you for your password.</li>
                            <li>If you're selling electronics, make sure you've cleared any personal information from the device.</li>
                        </ul>
                    </div>
                )}
            </div> <br></br>

            {/* Section 8 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('fairPricing')} className={showSection.fairPricing ? 'open' : ''}>Confirm fair pricing</h2>
                {showSection.fairPricing && (
                    <div>
                        <ul>
                            <li>We encourage buyers to compare prices before buying an item.</li>
                            <li>Don’t agree to requests to make additional payments for shipping or other previously unlisted charges from the seller after the transaction is complete.</li>
                            <li>Reject overpayments from buyers for items, especially if the buyer asks to be reimbursed for overpayment. Requests like this are often part of a counterfeit cashier's check scheme.</li>
                        </ul>
                    </div>
                )}
            </div> <br></br>

            {/* Section 9 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('giftCardScams')} className={showSection.giftCardScams ? 'open' : ''}>Be vary of gift card scams</h2>
                {showSection.giftCardScams && (
                    <div>
                        <ul>
                            <li>Don’t provide gift card details (such as the claim code) for payment to someone you don’t know, and avoid sales or transactions requiring you to pay specifically with gift cards.</li>
                            <li>Don't buy gift cards on Marketplace.</li>
                        </ul>
                    </div>
                )}
            </div> <br></br>

            {/* Section 10 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('verifyItem')} className={showSection.verifyItem ? 'open' : ''}>Verify Items</h2>
                {showSection.verifyItem && (
                    <div>
                        <ul>
                            <li>If you're buying an item, we recommend that you inspect any items you buy to make sure that they're genuine. For high-value items (example: watches, luxury bags), you can request a certificate of authenticity or proof of purchase.</li>
                            <li>Do not send deposits for apartment rentals without having seen the apartment in person first.</li>
                        </ul>
                    </div>
                )}
            </div> <br></br>

            {/* Section 11 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('recalledItems')} className={showSection.recalledItems ? 'open' : ''}>Don't buy or sell recalled items</h2>
                {showSection.recalledItems && (
                    <p>In many places, it's illegal to sell recalled items. If you're unsure whether the item you're buying or selling has been recalled, look on the website of the item's manufacturer for this information. </p>
                )}
            </div> <br></br>

            {/* Section 12 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('counterfeitItems')} className={showSection.counterfeitItems ? 'open' : ''}>Watch for counterfeit items</h2>
                {showSection.counterfeitItems && (
                    <p>It's illegal to sell counterfeit items in most places, and counterfeits aren't allowed on Hokie Marketplace. We recommend that you review any items you buy to make sure that they're genuine.</p>
                )}
            </div> <br></br>

            {/* Section 13 */}
            <div className="responsibility-section">
                <h2 onClick={() => toggleSection('largeItems')} className={showSection.largeItems ? 'open' : ''}>Be cautious and avoid selling large items</h2>
                {showSection.largeItems && (
                    <div>
                        <ul>
                            <li>Double-check deals that seem too good to be true. Scammers may try to use underpriced items to lure buyers into a scam.</li>
                            <li>We recommend against buying/selling very large items/products such as cars as Hokie Marketplace is not the right place for such large items.</li>
                            <li>If you're a seller, be careful about bouncing checks from buyers.</li>
                        </ul>    Learn more from the Federal Trade Commission (in the U.S.) or your local government agency about getting the vehicle’s history and steps for used car shopping.
                    </div>
                )}
            </div> <br></br>

            <div className="responsibility-footer">
                <p>When shopping on VT Marketplace, please make sure you are signed into the Marketplace website.</p>
                <p>If you see any signs of suspicious activity, immediately cancel the transaction, report the listing or person and call the local authorities if necessary.</p>
                <p>To help promote your safety, we encourage you to review the following tips for buying and selling responsibly, in addition to using your best judgment.</p>
            </div>
        </div>
    );
}

export default Responsibility;