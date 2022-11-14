import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MissionContainer from './components/Missions/MissionContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Hello from rockets!</p>} />
        <Route path="/missions" element={<MissionContainer />} />
        <Route path="/profile" element={<p>Hello from profile!</p>} />
      </Routes>
    </div>
  );
}

export default App;
