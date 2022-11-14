import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => (
  <header>
    <div>
      <Link to="/">
        <img src={logo} alt="logo" />
        <h1>Space Traverlers&apos; Hub</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'activelink' : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className={({ isActive }) => (isActive ? 'activelink' : undefined)}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'activelink' : undefined)}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
