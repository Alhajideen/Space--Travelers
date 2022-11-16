import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MissionContainer from './components/Missions/MissionContainer';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Hello from rockets!</p>} />
        <Route path="/missions" element={<MissionContainer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
