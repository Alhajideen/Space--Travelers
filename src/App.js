import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MissionContainer from './components/Missions/MissionContainer';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import { fetchRocketsData } from './redux/Rockets/rocketSlice';
import Rockets from './components/rockets/Rockets';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRocketsData());

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/missions" element={<MissionContainer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
