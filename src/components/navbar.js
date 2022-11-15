import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="flex justify-between w-full h-[20%] px-4 py-6">
    <div className="flex justify-start align-center gap-2">
      logo
      <h2>Space Travelers&apos; Hub</h2>
    </div>
    <div className="flex justify-center align-center gap-4">
      <NavLink className="link" to="/" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Rockets</NavLink>
      <NavLink className="link" to="/missions" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Missions</NavLink>
      <div className="line" />
      <NavLink className="link" to="/myprofile" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>My Profile</NavLink>
    </div>
  </nav>
);

export default NavBar;
