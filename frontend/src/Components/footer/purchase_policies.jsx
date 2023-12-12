import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vtLogo from '../../assets/vt.png';

function PurchasePolicies() {
    const navigate = useNavigate();

    const goToItemsPage = () => {
        navigate('/items');
    };

    const [activeSection, setActiveSection] = useState('overview');

    return (
        <div className="policy-container">
            <div className="policies-sidebar">
                <ul>
                    <li onClick={() => setActiveSection('overview')} className={activeSection === 'overview' ? 'active' : ''}>Overview</li>
                    <li onClick={() => setActiveSection('protected-purchases')} className={activeSection === 'protected-purchases' ? 'active' : ''}>Protected Purchases</li>
                    <li onClick={() => setActiveSection('disputes-refunds')} className={activeSection === 'disputes-refunds' ? 'active' : ''}>Disputes & Refunds</li>
                </ul>
            </div>

            <div className="content">
                {activeSection === 'overview' && (
                    <div>
                        <h1>1. Overview</h1> <hr></hr>
                        <h2>Understanding Our Policies</h2>
                        <p>Our Purchase Protection Policies are here to provide you with peace of mind whenever you make a purchase through onsite checkout on Hokie Marketplace. We want you to have a great experience every time, but if you have an issue with your purchase, our Policies are in place to help make things right.
                            For the purposes of this policy, where specified, an individual seller refers to someone selling through a personal profile.</p>
                        <p>To qualify for Purchase Protection:</p>
                        <ul>
                            <li>Make sure that your purchase is eligible as a Protected Purchase as defined in this policy.</li>
                            <li>Use onsite checkout on VT Marketplace to complete your payment for the purchase. Purchases made through third-party sites or through third-party messaging services do not qualify.</li>
                            <li>Contact the seller first to let them know there's a problem with the purchase. For eligible purchases, if you can't resolve the issue directly with the seller, you may submit a claim through the VT Marketplace app.</li>
                            <li>We will review your claim to determine whether it qualifies for Purchase Protection, and issue a refund for the full purchase price of the item and tax if your claim is approved. Decisions are made in our sole discretion.</li>
                        </ul>
                    </div>
                )}

                {activeSection === 'protected-purchases' && (
                    <div>
                        <h1>2. Protected Purchases</h1> <hr></hr>
                        <h2>When Are Your Purchases Protected</h2>
                        <p>Many purchases that you make using onsite checkout on VT Marketplace are covered by our Purchase Protection policies. Your purchases are protected in the following situations:</p>
                        <ol>
                            <li><b>Item not received:</b> for individual sellers using onsite checkout, an item is considered “not received” if an item is not received by the buyer within 16 days after the individual seller confirms the order.</li>
                            <li>Item damaged or significantly different than described. For example:</li>
                            <ul>
                                <li>Item is missing major parts, and this wasn't disclosed</li>
                                <li>Item condition was different than described</li>
                                <li>Item is a different version or edition than what was displayed for purchase</li>
                                <li>Item is completely different from what was ordered</li>
                            </ul>
                            <li>Seller not following their stated refund policy.</li>
                            <li>Unauthorized purchases.</li>
                        </ol> 
                        <p>Note, discounts do not impact whether a purchase is eligible for Purchase Protection.</p> <br></br>

                        <h2>Which Purchases Are Not Protected</h2>
                        <p>The following items and situations are not covered by our Purchase Protection Policies:</p>
                        <ol>
                            <li>Any products or services that are prohibited by our <a href="/commerce">Commerce Policies</a></li>
                            <li>Products marked as received</li>
                            <li>Vehicles</li>
                            <li>Precious metals and gemstones</li>
                            <li>Industrial machinery</li>
                            <li>Perishable items</li>
                            <li>Buyer's remorse</li>
                            <li>Items shipped using an intermediary or freight forwarding service</li>
                            <li>Orders that have already been refunded or charged back by the buyer's bank</li>
                            <li>Damage that occurs to items after they are delivered</li>
                            <li>Items bought through onsite checkout with a purchase price over $2,000</li>
                            <li>Tickets</li>
                            <li>Antiques and collectibles</li>
                        </ol>
                    </div>
                )}

                {activeSection === 'disputes-refunds' && (
                    <div>
                        <h1>3. Disputes & Refunds</h1> <hr></hr>
                        <h2>Reaching Out To The Seller</h2>
                        <p>When using onsite checkout, you should first contact the seller to resolve your issue with a purchase. The seller has 2 business days to respond to you and attempt to resolve your issue.</p> <br></br>

                        <h2>Filing a Claim through Marketplace</h2>
                        <p>When using onsite checkout, if a seller has not responded or resolved your issue after 2 business days, you can submit a claim for our review on the third business day.</p>
                        <p>When you file a claim, answer the questions presented, and include details regarding your issue within the form. We'll review your claim, including any messages that you and the seller sent to each other along with supporting documentation from the buyer and the seller. We'll typically respond within 48 hours.</p> <br></br>

                        <h2>Refunds and Returns</h2>
                        <p>If you are requesting a refund, remember to contact the seller within the return period specified in the product listing and follow the seller's instructions for returning the delivered item.</p>
                        <p>If the seller is unresponsive or is not following their stated return policy, you may still be required to provide a valid tracking number of the returned item or other proof of return to us in order to receive a Purchase Protection refund.</p> <br></br>

                        <h2>Limitations</h2>
                        <p>When using onsite checkout, you can file a claim for the full price of an item with a purchase price up to $2,000 including tax and shipping.</p>
                        <p>You must file a claim within 45 days from the date of delivery of your purchased product, or within 60 days for unauthorized claims. If you never received your item, you must wait 2 days after the last date of estimated delivery before filing a claim.
                            When reporting unauthorized purchases, you should notify us immediately so that we can try to protect you from financial loss. You must submit a claim within 60 days after the charge.
                            You must be in compliance with our terms and policies, including the Community Payments Terms, to be eligible for Purchase Protection.</p>
                        <p>You must file a claim within 3 days (72 hours) from the date of delivery of your purchased product, or within 7 days of payment if no delivery date is given. If you never received your item, you must wait 2 days after the last date of estimated delivery before filing a claim.</p>
                        <p>You must be in compliance with our terms and policies, to be eligible for Purchase Protection.</p> <br></br>

                        <h2>Resolving and Closing Cases</h2>
                        <p>If we approve a buyer's claim, in some situations, VT Marketplace may offer a partial refund, otherwise the refunded amount will include the full purchase price of the item and tax. Decisions on claims are made in our sole discretion.</p>
                        <p>In some instances, we may offer a Goodwill Refund in our sole discretion. Offering a Goodwill Refund may depend on the purchase history of a buyer, including previously requested refunds and total amount of purchases made.</p> <br></br>

                        <h2>Denied Claims</h2>
                        <p>Reasons your claim could be denied under this policy include:</p>
                        <ul>
                            <li>The item received was the same as described by the seller in your purchase.</li>
                            <li>The claim was filed due to buyer's remorse.</li>
                            <li>The item was received and the seller verified the delivery of the product.</li>
                            <li>You disputed the transaction with the bank that issued your credit or debit card.</li>
                            <li>You didn't submit sufficient evidence requested by Marketplace to support your claim.</li>
                        </ul> <br></br>

                        <h2>Policy Abuse</h2>
                        <p>If you file fraudulent claims for purchases made on VT Marketplace, we may disable your ability to make payments or take additional action on your account.</p> <br></br>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PurchasePolicies;