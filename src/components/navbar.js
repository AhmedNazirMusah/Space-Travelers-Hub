import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../images/planet.png';

const NavBar = () => (
  <nav className="flex justify-between w-screen h-[20%] px-8 py-4 border-zinc-600 mx-4 border-b-2">
    <div className="flex justify-start align-center gap-2">
      <img className="w-auto h-[3rem]" src={image} alt="site-logo" />
      <h2 className="text-[2rem]">Space Travelers&apos; Hub</h2>
    </div>
    <div className="flex justify-center items-center gap-4 text-blue-600 text-[1.05rem]">
      <NavLink className="link" to="/" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Rockets</NavLink>
      <NavLink className="link" to="/missions" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Missions</NavLink>
      <div className="h-4 border-zinc-600 border-l-2" />
      <NavLink className="link" to="/myprofile" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>My Profile</NavLink>
    </div>
  </nav>
);

export default NavBar;
