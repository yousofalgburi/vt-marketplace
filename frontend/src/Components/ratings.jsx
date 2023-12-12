import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import vtLogo from '../assets/vt.png';




function Ratings() {
    // naviagting through the pages
    const goToItemsPage = () => {
        navigate('/items');
    };


    return (
        <div className="ratings-container">
            <br></br>
            <h1>Ratings</h1>
            <p>To share your feedback and help build a better enviornment here at VT Marketplace, you can rate 
                buyers and sellers you've interacted with. Buyer ratings are ratings buyers receive from sellers. Seller ratings 
                are ratings sellers receive from buyers.
            </p><br></br>
            <h3>About buyer and seller ratings</h3>
            <p>Your ratings may become public once you receive 5 or more eligible ratings. This may include 
                both the seller and buyer ratings you receive. Anyone on VT Marketplace can view your profile will be able to see your ratings.
            </p><br></br>
            <h3>More about buyer ratings</h3>
            <p>Your ratings may become public once you receive 5 or more eligible ratings. This may include 
                both the seller and buyer ratings you receive. Anyone on VT Marketplace can view your profile will be able to see your ratings.
            </p>
            <h4><b>Who can leave a rating for a seller?</b></h4>
            <p>You can rate a seller once you've bought something from them or had an interaction with them.</p>
            <p>We also allow people to rate sellers even if they don't complete a transaction because the rating may be about the person's behavior.</p>
            <br></br>
            <h3>More about seller ratings</h3>
            <h4><b>Who can leave a rating for a buyer?</b></h4>
            <p>You can rate a buyer once they've bought something from you or you've interacted with them.</p>
            <p>We also allow users to rate buyers even if they didn't complete a transaction because the rating may be about the person's behavior.</p>

        </div>
    );

}

export default Ratings;