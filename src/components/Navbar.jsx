import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Navbar.css';

const Navbar = () => (
  <header className="header-container">
    <NavLink to="/" className="home-page">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title">Space Traverlers&apos; Hub</h1>
    </NavLink>

    <nav>
      <ul className="navlinks">
        <li className="navItem">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Rockets
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            to="/missions"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Missions
          </NavLink>
        </li>
        <li className="divider" />
        <li className="navItem">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
