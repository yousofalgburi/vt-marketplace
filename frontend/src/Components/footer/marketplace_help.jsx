import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vtLogo from '../../assets/vt.png';

function MarketplaceHelp() {
    const navigate = useNavigate();

    const goToItemsPage = () => {
        navigate('/items');
    };

    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="marketplace-help">
            <h1>Get Help with Hokie Marketplace</h1>
            <hr></hr>
            
            <div className="help-section">
                <h2 onClick={() => toggleSection('access')}>I can't access Hokie Marketplace</h2>
                {openSections.access && <p>Details about accessing VT Marketplace can be found <a href="/accessibility">here</a>.</p>}
            </div> <br></br>

            <div className="help-section">
                <h2 onClick={() => toggleSection('listingApproval')}>Why Marketplace listings might not be approved</h2>
                {openSections.listingApproval && <p>Details about listing approvals can be found on the <a href="/accessibility">accessibility page</a> and on the <a href="/commerce">commerce page</a>.</p>}
            </div> <br></br>

            <div className="help-section">
                <h2 onClick={() => toggleSection('report')}>Report a Marketplace buyer/seller</h2>
                {openSections.report && (
                    <div>
                        <p>You can report a seller on VT Marketplace that doesn’t follow our <a href="/commerce">Commerce Policies or Community Standards</a>.</p>
                        <ol>
                            <li>Log into Hokie Marketplace.</li>
                            <li>In the left menu on your News Feed, click Marketplace.</li>
                            <li>Click a listing from the seller that you want to report, then click the seller’s name below “Seller information”.</li>
                            <li>Click ..., then click Report.</li>
                            <li>Follow the on-screen instructions.</li>
                        </ol>
                        <p>Note: We may suspend or ban sellers if they go against our Commerce Policies. Buyers who file fraudulent claims are also subject to consequences outlined in our <a href="/purchase_policies">purchase policies</a>.</p>
                        <h3>Helpful Resources:</h3>
                        <ul>
                            <li><a href="/report">How to report a Hokie Marketplace scam</a></li>
                            <li><a href="/report">How to report a Hokie Marketplace buyer/seller</a></li>
                        </ul>
                    </div>
                )}
            </div> <br></br>

            <div className="help-section">
                <h2 onClick={() => toggleSection('blockAndUnblock')}>Blocking and Unblocking</h2>
                {openSections.blockAndUnblock && (
                    <div>
                        <h3>Before you block a profile</h3>
                        <p>Keep in mind that when you block a profile that's messaging you on Marketplace, you will no longer be able to chat with them or see their Marketplace posts. When you block a profile on Marketplace:</p>
                        <ul>
                            <li>You can't see each other's listings on Marketplace.</li>
                            <li>You can't send each other any new messages.</li>
                            <li>You and the profile you block can still see any messages sent before you blocked them.</li>
                            <li>Buyers and sellers will still be able to see ratings and reviews, even from profiles that they've blocked.</li>
                        </ul>

                        <h3>Block a profile</h3>
                        <p>When you block someone's profile on Hokie Marketplace, that person will no longer be able to chat with you through the Hokie Messaging service. Profiles also won't be notified when you block them.</p>
                        <ol>
                            <li>Switch to the profile that you want to use.</li>
                            <li>Click your profile picture in the top right of VT Marketplace.</li>
                            <li>Select <b>Settings & privacy</b>, then click <b>Settings</b>.</li>
                            <li>Click <b>Blocking</b> in the left menu.</li>
                            <li>In the <b>Block users</b> section, enter the name of the profile you want to block, then click <b>Block</b>.</li>
                            <li>Select the specific profile you want to block from the list that appears and click <b>Block</b>, then <b>Block [profile name]</b>.</li>
                        </ol>

                        <h3>Unblock a profile</h3>
                        <ol>
                            <li>Click your profile picture in the top right of VT Marketplace.</li>
                            <li>Select <b>Settings & privacy</b>, then click <b>Settings</b>.</li>
                            <li>In the right column, click <b>Privacy</b>.</li>
                            <li>Click <b>Blocking</b>.</li>
                            <li>In the <b>Block Users</b> section, click <b>Edit</b>.</li>
                            <li>Click <b>See your blocked list</b>.</li>
                            <li>Click <b>Unblock</b> next to the profile you want to unblock.</li>
                            <li>Click <b>Confirm</b> to finish unblocking the profile.</li>
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MarketplaceHelp;