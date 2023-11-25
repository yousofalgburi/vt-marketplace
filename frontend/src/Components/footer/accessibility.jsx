import React, { useState } from 'react';

function Accessibility() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="accessibility-page">
            <h1>Having trouble accessing VT Marketplace?</h1>
            <div className="accessibility-section">
                <h2 onClick={() => toggleSection('marketplaceLink')}>Check that this Marketplace link works</h2>
                {openSections.marketplaceLink && (
                    <p>If you’re not able to access that link, you can try visiting Marketplace from the menu app.</p>
                )}
            </div>
            <div className="accessibility-section">
                <h2 onClick={() => toggleSection('listingPolicies')}>Make sure your listing follows our policies</h2>
                {openSections.listingPolicies && (
                    <p>All items for sale on Hokie Marketplace need to follow our Commerce Policies and Community Standards. If your listing goes against these policies, your access to Marketplace will be removed.</p>
                )}
            </div>
            {/* Repeat the structure for each section you want to include */}
            {/* ... other sections */}
        </div>
    );
}

export default Accessibility;