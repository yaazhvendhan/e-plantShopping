import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import AboutUs from './AboutUs';
import './App.css';

function App() {
    const [showCart, setShowCart] = useState(false);
    const [showProductList, setShowProductList] = useState(false);

    const handleGetStartedClick = () => {
        setShowProductList(true); // Show the product list on "Get Started" click
    };

    const handleContinueShopping = () => {
        setShowCart(false); // Navigate back to the product listing
    };

    const handleViewCart = () => {
        setShowCart(true); // Navigate to the cart view
    };

    return (
        <div className="app-container">
            {/* Landing Page */}
            <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
                <div className="background-image"></div>
                <div className="content">
                    <div className="landing_content">
                        <h1>Welcome To Paradise Nursery</h1>
                        <div className="divider"></div>
                        <p>Where Green Meets Serenity</p>

                        <button className="get-started-button" onClick={handleGetStartedClick}>
                            Get Started
                        </button>
                    </div>
                    <div className="aboutus_container">
                        <AboutUs />
                    </div>
                </div>
            </div>

            {/* Product List and Cart */}
            <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
                {showCart ? (
                    <Cart onContinueShopping={handleContinueShopping} />
                ) : (
                    <ProductList onViewCart={handleViewCart} />
                )}
            </div>
        </div>
    );
}

export default App;
