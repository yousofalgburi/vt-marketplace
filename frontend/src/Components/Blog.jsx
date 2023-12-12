import React from 'react';
import { useNavigate } from 'react-router-dom';
import cartoon from '../assets/cartoon.png';
import shop_sustainably from '../assets/shop_sustainably.png';
import gift_ideas from '../assets/gift_ideas.png';
import happy_person from '../assets/happy_person.png';
import person2 from '../assets/person2.png';
import happy_person2 from '../assets/happy_person2.png';
import random from '../assets/random2.png';

function Blog() {
    const navigate = useNavigate();
    
    const goToItemsPage = () => {
        navigate('/items');
    };
    
    return (
        <div className="blog-container">
\            <div className="blog-header">
                <h1>Welcome to the Hokie Marketplace Blog!</h1>
            </div> <br></br> <br></br> <br></br>

            <div className="blog-section">
                <div className="blog-article">
                    <img src={cartoon} alt="shop confidently on marketplace" className="confident-shopping" />
                    <div className="article-content">
                        <h2>Looking to feel more confident when shopping on Marketplace?</h2>
                        <p>Learn more about how requesting a video can help you feel more secure in your Marketplace purchases.</p>
                        <span className="article-date">December 11, 2023</span>
                    </div>
                </div>

                <div className="blog-article">
                    <img src={shop_sustainably} alt="shop sustainably on marketplace" className="sustainable-shopping" />
                    <div className="article-content">
                        <h2>How to shop sustainably on Marketplace</h2>
                        <p>Here are some tips on how to use Marketplace to live a more sustainable lifestyle.</p>
                        <span className="article-date">December 11, 2023</span>
                    </div>
                </div>

                <div className="blog-article">
                    <img src={gift_ideas} alt="secret santa gift exchange ideas" className="gift-exchanges" />
                    <div className="article-content">
                        <h2>Secret Santa Gift Exchange Ideas</h2>
                        <p>Gift ideas for 5 common office personalities you know and love.</p>
                        <span className="article-date">December 11, 2023</span>
                    </div>
                </div>

                <div className="blog-article">
                    <img src={happy_person} alt="fall 2023 style" className="f2023-style" />
                    <div className="article-content">
                        <h2>This New Trend for Fall 2023 is a Natural Fit for Any Style</h2>
                        <p>Organic forms can be across categories on VT Marketplace, get the low down here.</p>
                        <span className="article-date">December 11, 2023</span>
                    </div>
                </div>

                <div className="blog-article">
                    <img src={person2} alt="vt marketplace fall ideas" className="fall-trends" />
                    <div className="article-content">
                        <h2>Show Your Individuality with VT Marketplace’s Fall Trends</h2>
                        <p>All you need to know what is trending in Fall 2023.</p>
                        <span className="article-date">December 11, 2023</span>
                    </div>
                </div>

                <div className="blog-article">
                    <img src={happy_person2} alt="shops on marketplace faqs" className="shop-faqs" />
                    <div className="article-content">
                        <h2>Shops on Marketplace FAQs</h2>
                        <p>Most common questions for selling on Marketplace as a shop.</p>
                        <span className="article-date">December 11, 2023</span>
                    </div>
                </div>
            </div> <br></br> <br></br> <br></br>

            <div className="blog-footer">
                <h2>Discover, Buy & Sell Goods on VT Marketplace.</h2>
                <p>Marketplace is an e-commerce platform that connects sellers and buyers through meaningful interactions and unique goods.</p>
                <button onClick={goToItemsPage}>Explore VT Marketplace</button>
                <img src={random} alt="happy people" className="happy-people" />
            </div>
        </div>
    );
}

export default Blog;