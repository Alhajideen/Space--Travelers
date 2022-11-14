import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Hello from rockets!</p>} />
        <Route path="/missions" element={<p>Hello from missions!</p>} />
        <Route path="/profile" element={<p>Hello from profile!</p>} />
      </Routes>
    </div>
  );
}

export default App;
