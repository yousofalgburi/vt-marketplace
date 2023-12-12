import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vtLogo from '../../assets/vt.png';

function Report() {
    const navigate = useNavigate();

    const goToItemsPage = () => {
        navigate('/items');
    };

    return (
        <div className="report-container">            
            <div className="header-container">
                <h1>Report a VT Marketplace Scam</h1>
            </div> <hr></hr>
            <div className="report-content">
                <p>If you see something you think is a scam, you should stop communicating with the buyer or seller and report the suspected scam to VT Marketplace. <a href="/scams">Learn how to recognize scams on VT Marketplace</a>.</p> <br></br>
                <h2>Report A Seller Scam</h2>
                <ol>
                    <li>From your Feed, in the left menu, click <b>Marketplace</b>.</li>
                    <li>In the left menu, click <b>Buying</b>.</li>
                    <li>Click the listing of the seller you want to report as a scam.</li>
                    <li>Click the name of the seller.</li>
                    <li>Click ..., then click <b>Report Seller</b>.</li>
                    <li>Click <b>Scam</b>, then follow the on-screen instructions to submit your report.</li>
                </ol> <br></br>
                <h2>Report A Buyer Scam</h2>
                <ol>
                    <li>From your Feed, in the left menu, click <b>Marketplace</b>.</li>
                    <li>Click <b>Your Account</b>.</li>
                    <li>Click <b>Your listings</b>.</li>
                    <li>Click a listing the buyer purchased.</li>
                    <li>Click the message between you and the buyer. If you can't find the message, click <b>See More</b>.</li>
                    <li>Click ..., then click <b>Report Buyer</b>.</li>
                    <li>Click <b>Scam</b>, then follow the on-screen instructions to submit your report.</li>
                </ol> <br></br>
                <h2>Report A Marketplace Listing Scam</h2>
                <ol>
                    <li>From your Feed, in the left menu, click <b>Marketplace</b>.</li>
                    <li>Click the listing that you want to report as a scam.</li>
                    <li>Below the listing title, click <b>...</b></li>
                    <li>Click <b>Report Listing</b>, then click <b>Scam</b>.</li>
                    <li>Follow the on-screen instructions to submit your report.</li>
                </ol>
            </div>
        </div>
    );
}

export default Report;