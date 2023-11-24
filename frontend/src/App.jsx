// App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage.jsx'; // import the Homepage component
import Login from './Components/Login.jsx';
//import Topbar from './Components/Topbar.jsx';
import Items from './Components/Items.jsx';

function App() {
  const [openLogin, setOpenLogin] = useState(false)
  const [signedIn, signIn] = useState(false)

  return (
    <div>
      <BrowserRouter>
        { /* <Topbar signedIn={signedIn} openLoginPage={setOpenLogin} signIn={signIn} />   */ }
        <Routes>
          <Route path="/" element={<Homepage signedIn={signedIn} />} />
          <Route path="/home" element={<Homepage signedIn={signedIn} />} />
          <Route path="items" element={<Items signedIn={signedIn} />} />
          {/* ... other routes */}
        </Routes>
      </BrowserRouter>
      {openLogin && <Login signIn={signIn} closeLogin={setOpenLogin} />}
    </div>
  );
};

export default App;
