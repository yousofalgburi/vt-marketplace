import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vtLogo from '../../assets/vt.png';

function Scams() {
    const navigate = useNavigate();

    const goToItemsPage = () => {
        navigate('/items');
    };

    return (
        <div className="scam-info-container">            
            <div className="scam-info-header">
                <h1>Recognizing Scams</h1>
            </div> <hr></hr>
            <div className="scam-info-content">
                <p class="report-scam">If you see something you think is a scam, you should stop communicating with the buyer or seller and <a href="/report">report the suspected scam</a> to Hokie Marketplace.</p>
                <h2>What is a scam on VT Marketplace?</h2>
                <p>Scams can happen to both buyers and sellers. Some listings may also be scams. Scams come in different forms, so it’s important to know what scams are, and how to recognize them when buying and selling on Marketplace.</p> <br></br>
                <h2>A phishing scam is</h2>
                <p>A form of identity theft that gets you to volunteer personal information without you realizing what’s happening. These attacks come from people who want to use your information for their own dishonest benefit (example: hack your Marketplace account, email or bank account).</p>
                <p>This may look like messages or emails that ask you to provide:</p>
                <ul>
                    <li>Verification codes sent to your phone or email (example: 2factor authentication code, such as Google Voice Code).</li>
                    <li>Account information (example: email address and password).</li>
                </ul>
                <p>Some other types of phishing include:</p>
                <ul>
                    <li>Link manipulation: These messages contain a link to a phony site that looks like the official business.</li>
                    <li>CEO fraud: These messages are sent to trick you into believing that the CEO or other executive is asking you to transfer money.</li>
                    <li>Smishing: Using SMS messages, attackers try to trick you into going to phony sites from your smartphones.</li>
                </ul> <br></br>
                <h2>A buyer scam is</h2>
                <p>When someone tries to buy or trade items from someone else without paying, resulting in a loss of money for the seller and a gain for the buyer.</p>
                <p>This may look like a buyer:</p>
                <ul>
                    <li>Reporting their transaction as fraud after they receive the item(s) from you.</li>
                    <li>Claiming they never received the item(s) from you when they did.</li>
                    <li>Not paying for an item that they received.</li>
                </ul> <br></br>
                <h2>A seller scam is</h2>
                <p>When someone tries to sell or trade items to someone else without delivering the items as promised, resulting in a gain of money for the seller and a loss for the buyer.</p>
                <p>This may look like a seller:</p>
                <ul>
                    <li>Purposely sending you something significantly different than what you paid for (example: someone sells you a used item that they listed as New on Marketplace).</li>
                    <li>Asking you to send them money as a deposit for a high value item without letting you confirm it’s real first.</li>
                </ul> <br></br>
                <h2>A listing scam is</h2>
                <p>When a listing appears to be dishonest, fake or lures buyers to complete transactions outside of Marketplace.</p>
                <p>This may look like a listing:</p>
                <ul>
                    <li>Of a product with a suspiciously low price on Marketplace. This can be a sign that it’s a fake good or listing.</li>
                    <li>Description encouraging buyers to reach out to the seller outside of Marketplace.</li>
                </ul>
            </div>
        </div>
    );
}

export default Scams;