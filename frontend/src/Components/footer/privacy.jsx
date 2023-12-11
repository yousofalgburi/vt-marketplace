import React, {useState} from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import vtLogo from '../../assets/vt.png'


function Privacy(){
    const navigate = useNavigate();

    // naviagting through the pages
    const goToItemsPage = () => {
        navigate('/items');
    };

    const goToScamsPage = () => {
        navigate('/scams');
    };

    const goToCookiesPage = () => {
        navigate('/cookies');
    };

    const goToTermsOfService = () => {
        navigate('/terms');
    };

    const goToPurchacePolicies = () => {
        navigate('/purchase_policies');
    };

    return(
        <div className="privacy-container">
            <nav className="topnav">
                <div className="nav-content">
                    <img src={vtLogo} alt="VT Logo" className="vt-logo" />
                    <NavLink to="/home" activeClassName="active">Home</NavLink>
                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                    <NavLink to="/buying" activeClassName="active">Buying</NavLink>
                    <NavLink to="/selling" activeClassName="active">Selling</NavLink>
                    <NavLink to="/trust-and-safety" activeClassName="active">Trust & Safety</NavLink>
                </div>
                <button className="marketplace-button" onClick={goToItemsPage}>GO TO MARKETPLACE</button>
            </nav>
        <h1>Privacy Section</h1>
        
        <div className="privacy-info">
        <h3>Here at VT Marketplace privacy is important</h3>
        <p>Whenever shopping through VT Marketplace, please make sure you are logged into your account</p>
        <p>Here, we explain how your information is being processed. We will inform you of your rights. If you see any signs of suspicious activity or your buyer isn't being professional with you, 
            immediately cancel the transaction, cut all ties with the buyer and  <a href="/report">please fill out this form to report them.</a> 
        </p>
        <p>To advocate for your safety, we encourage you to review some links for when you purchase or sell items.</p>

        <h3>Virginia Consumer Data Protection Act</h3>
        <p>The VCDPA provides consumers with certain rights related to their personal data. Below are the rights you are protected:</p>
        <ul>
            <li>The right to know, access and confirm personal data.</li>
            <li>The right to delete personal data.</li>
            <li>The right to correct inaccuracies in personal data.</li>
            <li>The right to data portability.</li>
            <li>The right to opt out of the processing of personal data for targeted advertising purposes.</li>
            <li>The right to opt out of the sale of personal data</li>
            <li>The right to opt out of profiling based upon personal data.</li>
            <li>The right to not be discriminated against for exercising any of the foregoing rights.</li>
        </ul><br></br>
        
        
        <a href="https://law.lis.virginia.gov/vacode/title59.1/chapter53/section59.1-577/">To go more in-depth about your rights, check out the link here</a><br></br> 
        <br></br>
        <button onClick={goToScamsPage} className="scams-button">Scams</button>
        <button onClick={goToCookiesPage} className="cookies-button">Cookies</button>
        <button onClick={goToTermsOfService} className="terms-button">Terms</button>
        <button onClick={goToPurchacePolicies} className="policy-button">Policies</button>
        
        </div>   
        </div>
    );

}


export default Privacy;