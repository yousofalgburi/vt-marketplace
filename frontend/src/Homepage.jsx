// Homepage.jsx
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
// You can import NavLink if you need navigation links on your homepage.

function Homepage() {
    const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const goToItemsPage = () => {
    navigate('/items'); // This path should match the route path defined in App.jsx
  };
   

  return (
    <div className="App">
      <header className="App-header">
        <h1>VT-Marketplace</h1>
        <h2>Welcome to our Progress Presentation</h2>
        <p>We will be displaying backend today.</p>
        <button onClick={goToItemsPage}>View Items</button>
        {/* You can add your navigation links here if needed, using <NavLink> from 'react-router-dom' */}
        {/* Commented code below can be removed if it's not needed */}
        {/*
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR updates.
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        */}
      </header>
    </div>
  );
}

export default Homepage;
