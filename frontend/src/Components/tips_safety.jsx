import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import vtLogo from '../assets/vt.png';




function Tips() {
    const navigate = useNavigate();
    
    const goToScamsPage = () => {
        navigate('/avoiding-scams');
    };

    const goToHelp = () => {
        navigate('/marketplace_help')
    };

    const goToResponsibilities = () => {
        navigate('/responsibility')
    }

    const goToFindScammers = () => {
        navigate('/scams');
    }

    return(
        <div className='tips-container'>
            <h1>Tips and Safety</h1>
            <h3>Protect yourself and your purchases while shopping.</h3>
            <ul>
                <li><a href='/responsibility'>Buy and selling responsibility</a></li>
                <li><a href='/scams'>Identifying Scams</a></li>
                <li><a href='/avoiding-scams'>Avoid any scams</a></li>
                <li><a href='/ratings'>Rating functionality on VT Marketplace</a></li>
            </ul>
            <p>Please keep in mind that every product beign sold here must hold up to our <a href="/Commerce">Commerce Policies</a></p>
            <br></br>
            <p>Here are some additional information in which are helpful to your safety which shopping with VT Marketplace</p>
            <button className="avoid-scams-button" onClick={goToScamsPage}>Avoiding Scams</button>
            <button onClick={goToResponsibilities}>Buying at VT Marketplace</button>
            <button className="help-section-button" onClick={goToHelp}>Help Section</button>
            <button className="identify-scams-button" onClick={goToFindScammers}>Identify Scammers</button>


        </div>
    );
}

export default Tips;