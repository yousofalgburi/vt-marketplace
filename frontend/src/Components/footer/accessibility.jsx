import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vtLogo from '../../assets/vt.png';

function Accessibility() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="accessibility-page">
            <h1>Having trouble accessing VT Marketplace?</h1>
            <div className="accessibility-section">
                <h2 onClick={() => toggleSection('listingPolicies')}>Make sure your listing follows our policies</h2>
                {openSections.listingPolicies && (
                    <p>All items for sale on Hokie Marketplace need to follow our <a href='/commerce'>Commerce Policies and Community Standards</a>. If your listing goes against these policies, your access to Marketplace will be removed.</p>
                )}
            </div> <br></br><br></br><br></br>

            <div className="accessibility-section">
                <h2 onClick={() => toggleSection('approvedItems')}>Make sure you only list approved items</h2>
                {openSections.approvedItems && (
                    <div>
                        <p>Only approved items can be sold on Hokie Marketplace. Listing unapproved items will cause your access to be removed. Learn what can’t be sold on the <a href='/commerce'>Commerce page.</a></p>
                        <p><b>Examples include:</b></p>
                        <ul>
                            <li><b>No item for sale:</b> Anything that isn't a physical product for sale shouldn’t be listed on Marketplace. For example, "in search of" posts, lost and found posts, jokes and news aren't allowed.</li>
                            <li><b>Services:</b> Selling services (example: house cleaning) on Marketplace isn't allowed.</li>
                            <li><b>Animals:</b> Selling animals or animal products isn't allowed on Marketplace. This includes posting about animals for adoption, except by vetted pet adoption matching services.</li>
                            <li><b>Healthcare products:</b> Medical and healthcare-related products aren't allowed on Marketplace (example: thermometers, first-aid kits).</li>
                            <li><b>Recalled products:</b> If you're unsure whether the item you're buying or selling has been recalled, look on the website of the item's manufacturer or relevant government entity. For example, the US Consumer Product Safety Commission for Dangerous Non-food Products.</li>
                        </ul>
                    </div>
                )}
            </div> <br></br><br></br><br></br>

            <div className="accessibility-section">
                <h2 onClick={() => toggleSection('checkApproval')}>Check that your listing was approved</h2>
                {openSections.checkApproval && (
                    <div>
                        <p>If you see “There are issues with your product” next to your listing, it wasn’t approved because it goes against our policies.</p>
                        <p><a href="/commerce">Learn why your Marketplace listing wasn’t approved.</a></p>
                    </div>
                )}
            </div> <br></br><br></br><br></br>

            <div className="accessibility-section">
                <h2 onClick={() => toggleSection('appeal')}>Request a review by filing an appeal</h2>
                {openSections.appeal && (
                    <p>If you’ve read our policies and think your item should be approved, please fill out our Marketplace item appeal form. Note: If your Marketplace access has been restored, you may need to refresh hokiemarketplace.com or download the latest version of the app.</p>
                )}
            </div>
        </div>
    );
}

export default Accessibility;