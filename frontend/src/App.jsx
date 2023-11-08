// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage'; // import the Homepage component
import Items from './Items'; // assuming you have an Items component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="items" element={<Items />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
