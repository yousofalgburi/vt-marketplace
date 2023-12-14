import React from 'react';

function AvoidingScams() {
    return (
        <div className="avoid-scams-container">
            <h1>Avoiding Scams</h1>
            <div className="warning-box">
                <p>If you see something you think is a scam, you should stop communicating with the buyer or seller and <a href="/report">report the suspected scam</a> to VT Marketplace.</p>
            </div> <br></br>

            <h2>When talking to buyers and sellers, you should avoid</h2>
            <ul>
                <li>Communicating with buyers or sellers privately outside of VT Marketplace and Messenger. This may look like:
                    <ul>
                        <li>Requests to contact other individuals (example: relatives of the seller) that are not the true owner of the Marketplace account.</li>
                        <li>Users contacting you about a Marketplace listing outside of Marketplace.</li>
                    </ul>
                </li>
                <li>Messages or emails directly from the seller telling you that there was something wrong with your payment.</li>
                <li>People that push you to move quickly to complete a sale, or pressure you to complete the sale immediately. This can be an attempt to get around any normal safe practices.</li>
            </ul> <br></br>

            <h2>When dealing with payments, you should</h2>
            <ul>
                <li>Be careful with fake emails that appear to be from payments apps like Zelle or Venmo asking you to take some type of action before you can accept payment.
                    <ul>
                        <li>This may look like emails telling you to:
                            <ul>
                                <li>Upgrade your account.</li>
                                <li>Pay a fee.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>If you’re unsure, you should contact the payment app’s support team for help.</p>
            <ul>
                <li>Always check your account to confirm payments.
                    <ul>
                        <li>You should also look out for:
                            <ul>
                                <li>Buyers sending you screenshots of payments—suggesting that you send them the item(s) because they’ve already paid. You should never trust screenshots of payments as confirmation.</li>
                                <li>Buyers claiming they’ve accidentally overpaid you and requests that you refund them the overpayment.</li>
                                <li>Buyers offering to pay more than the asking price, and pretending to overpay for the item(s). Scammers may say the overpayment is for third party movers to deliver the item(s), which can be a sign of a scam.</li>
                                <li>Buyers requesting refunds without actually paying. Avoid giving refunds before checking your account to confirm payment.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>Unless the item you’re selling is rare or in high demand, requests to pay more than the asking price may be a reason for suspicion.</p>
            <ul>
                <li>Avoid sales or transactions requiring you to pay with gift cards.</li>
                <li>Avoid providing gift card details (example: the claim code) for payment to someone you don’t know.</li>
            </ul> <br></br>

            <h2>Phishing Attempts</h2>
            <p>This may look like:</p>
            <ul>
                <li>Someone messaging you and asking you to send them a code that was sent to you to verify that you are who you say you are. Do not give anyone
                    the codes that you receive, as this can be a sign that someone else is trying to log in to one of your accounts. If you send these codes to
                    someone else, one or more of your accounts will be at risk of getting hacked.</li>
            </ul>
            <p>You should never respond to these types of messages or emails. Never give unauthorized people access to your accounts, such as your Marketplace, email and bank account.</p>
        </div>
    );
}

export default AvoidingScams;