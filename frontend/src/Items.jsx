import React from 'react';

function Items() {
  return (
    <div>
      <header className="header">
        <div className="logo">HOKIE SERVICES</div>
        <div className="welcome-message">Welcome, Hokie Bird!</div>
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/mobiles">Mobiles</a>
        </nav>
        <button className="logout-button">Logout</button>
      </header>

      <div className="filters">
        <button className="buy-button">Buy</button>
        <button className="sell-button">Sell</button>
        <select className="category-select">
          <option>Phones</option>
        </select>
        <select className="sort-select">
          <option>Names</option>
        </select>
        <div className="price-range">
          <label>
            Lower Range: $
            <input type="number" value="250" />
          </label>
          <button>+</button>
          <label>
            Upper Range: $
            <input type="number" value="750" />
          </label>
          <button>-</button>
        </div>
      </div>

      <main className="products">
        <h1>Mobiles</h1>
        <div className="product-list">
          <div className="product">
            <div className="product-image"></div>
            <h2>iPhone 14 Pro</h2>
            <p>Price: $599</p>
            <p>University Terrace</p>
          </div>
          <div className="product">
            <div className="product-image"></div>
            <h2>Samsung S23+</h2>
            <p>Price: $549</p>
            <p>Hoge Hall</p>
          </div>
          {/* ...other products */}
        </div>
      </main>
    </div>
  );
}

export default Items;
