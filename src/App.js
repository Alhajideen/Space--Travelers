import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Space Travelers Rockets</h1>} />
        <Route path="/missions" element={<h1>Space Travelers Missions</h1>} />
        <Route path="/profile" element={<h1>Space Travelers Profile</h1>} />
      </Routes>
    </div>
  );
}

export default App;
