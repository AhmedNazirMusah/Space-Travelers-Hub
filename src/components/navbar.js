import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="flex justify-between w-full h-[20%] px-4 py-6">
    <div className="flex justify-start align-center gap-2">
      logo
      <h2>Space Travelers&apos; Hub</h2>
    </div>
    <div className="flex justify-center align-center gap-4">
      <Link className="link" to="/">Rockets</Link>
      <Link className="link" to="/missions">Missions</Link>
      <div className="line" />
      <Link className="link" to="/myprofile">My Profile</Link>
    </div>
  </nav>
);

export default NavBar;
