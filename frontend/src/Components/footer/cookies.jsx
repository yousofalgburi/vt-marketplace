import React from 'react';
import { NavLink } from 'react-router-dom';

function Cookies() {
    return (
        <div className='cookies-container'>
            <div>
                <h1>Cookies Policy</h1>
                <em>The policy below goes into effect on January 1, 2025.</em>

                <h2>What are cookies, and what does this policy cover?</h2>
                <h5>Effective January 1, 2025</h5>
                <p>Cookies are small pieces of text used to store information on web browsers. Cookies are used to store and receive
                    identifiers and other information on computers, phones and other devices. Other technologies, including data that we
                    store on your web browser or device, identifiers associated with your device and other software, are used for similar
                    purposes. In this policy, we refer to all of these technologies as “cookies”.</p>
                    
                <p>We use cookies if you have a VT Marketplace account. Cookies enable Hokie Services to offer the marketplace products to
                    you and to understand the information that we receive about you, including information about your use of other websites
                    and apps, whether or not you are registered or logged in. This policy explains how we use cookies and the choices you have.
                    Except as otherwise stated in this policy, the  will apply to our processing of the data that we collect via cookies.</p>

                <h2>Why do we use cookies?</h2>
                <p>Cookies help us provide, protect and improve the Hokie Services, such as by personalising content, tailoring and measuring ads,
                    and providing a safer experience. The cookies that we use include session cookies, which are deleted when you close your browser,
                    and persistent cookies, which stay in your browser until they expire or you delete them. The cookies we use and how we use them
                    may change over time as we improve and update VT Marketplace, we typically use them for the following purposes:</p>
                <ol>
                    <li><b>Authentication:</b></li>
                    We use cookies to verify your account and determine when you’re logged in so that we can make it easier
                    for you to access Hokie Services and show you the appropriate experience and features. <br></br> <br></br>

                    <li><b>Security, site and product integrity</b></li>
                    <p>We use cookies to help us keep your account, data and the products safe and secure. For example: Cookies can help us identify and impose
                        additional security measures when someone may be attempting to access a Marketplace account without authorisation, for instance, by
                        rapidly guessing different passwords. We also use cookies to store information that allows us to recover your account in the event that you
                        forget your password or to require additional authentication if you tell us that your account has been hacked. This includes, for example,
                        our "sb" and "dbln" cookies, which enable us to identify your browser securely, as well as “datr." "Datr" is a unique identifier for your
                        browser that, amongst other things, helps us protect you from fraud. For example, it helps us identify trusted browsers where you have
                        logged in before.</p>

                    <p>We also use cookies to combat activity that violates our policies or otherwise degrades our ability to provide the VT Marketplace Products. For example:
                        Cookies help us fight spam and phishing attacks by enabling us to identify computers that are used to create large numbers of fake Marketplace
                        accounts. We also use cookies to detect computers infected with malware and to take steps to prevent them from causing further harm. Our "csrf"
                        cookie, for example, helps us prevent cross-site request forgery attacks. The “datr” cookie also helps us to identify the browsers used by
                        malicious actors and to prevent cyber-security attacks, such as a denial of service attack that could prevent you from accessing the Marketplace
                        Products. Cookies also help us prevent underage people from registering for Marketplace accounts.</p>

                    <li><b>Advertising, recommendations, insights and measurement</b></li>
                    <p>We use cookies to help us show ads and to make recommendations for businesses and other organisations to people who may be interested in the
                        products, services or causes they promote. For example: Cookies allow us to help deliver ads to people who have previously visited a business’s
                        website, purchased its products or used its apps and to recommend products and services based on that activity. Cookies also allow us to limit
                        the number of times that you see an ad so you don’t see the same ad over and over again. For example, the "fr" cookie is used to deliver,
                        measure and improve the relevancy of ads, with a lifespan of 90 days.</p>
                        
                    <p>We use cookies to measure how often people do things, such as make a purchase following an ad impression. For example, the "_fbp" cookie identifies
                        browsers for the purposes of providing advertising and site analytics services and has a lifespan of 90 days. Cookies help us serve and measure ads
                        across different browsers and devices used by the same person. For example: We can use cookies to prevent you from seeing the same ad over and over
                        again across the different devices that you use. Cookies also allow us to provide insights about the people who use Marketplace Products, as well as
                        the people who interact with the ads, websites and apps of our advertisers and the businesses that use Marketplace Products. We also use cookies,
                        such as our "oo" cookie, which has a lifespan of 400 days, to help you opt out of seeing ads from VT Marketplace based on your activity on third-party websites
                        about the information we receive, how we decide which ads to show you on and off the VT Marketplace Products and the controls that are available to you.</p>

                    <li><b>Site features and services</b></li>
                        <p>We use cookies to enable the functionality that helps us provide the VT Marketplace Products. For example: Cookies help us store preferences, know when you’ve
                            seen or interacted with VT Marketplace Products’ content and provide you with customised content and experiences. For instance, cookies allow us to make
                            suggestions to you and others, and to customise content on third-party sites that integrate our social plugins. We use cookies such as the
                            session-based "presence" cookie to support your use of messaging chat windows. We also use cookies to help provide you with content relevant to your
                            locale. For example: We store information in a cookie that is placed on your browser or device so that you will see the site in your preferred language.</p>

                    <li>
                        <b>Performance</b>
                        <p>We use cookies to provide you with the best experience possible. For example: Cookies help us route traffic between servers and understand how quickly
                            Marketplace Products load for different people. Cookies also help us record the ratio and dimensions of your screen and windows and know whether
                            you’ve enabled high-contrast mode, so that we can render our sites and apps correctly. For example, we set the "dpr" and "wd" cookies, each with a
                            lifespan of 7 days, for purposes including to deliver an optimal experience for your device’s screen.</p>
                    </li>

                    <li>
                        <b>Analytics and Research</b>
                        <p>We use cookies to better understand how people use the VT Marketplace Products so that we can improve them. For example: Cookies can help us understand how people
                            use the Marketplace service, analyse which parts of our Products people find most useful and engaging, and identify features that could be improved.</p>
                    </li>
                </ol>
                
                <h2>Where do we use cookies?</h2>
                <p>We may place cookies on your computer or device and receive information stored in cookies when you use or visit Hokie Services and Marketplace app.</p>
            </div>
        </div>
    );
}

export default Cookies;