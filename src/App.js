import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchRocketsData } from './redux/Rockets/rocketSlice';
import MissionContainer from './components/Missions/MissionContainer';
import Rockets from './components/Rockets/Rockets';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRocketsData());

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<MissionContainer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
