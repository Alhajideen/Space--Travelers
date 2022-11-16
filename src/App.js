import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MissionContainer from './components/Missions/MissionContainer';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
=======
import { fetchRocketsData } from './redux/Rockets/rocketSlice';
import Navbar from './components/Navbar';
import Rockets from './components/rockets/Rockets';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRocketsData());

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Hello from rockets!</p>} />
        <Route path="/missions" element={<MissionContainer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<p>Hello from missions!</p>} />
        <Route path="/profile" element={<p>Hello from profile!</p>} />
      </Routes>
    </div>
  );
}

export default App;
