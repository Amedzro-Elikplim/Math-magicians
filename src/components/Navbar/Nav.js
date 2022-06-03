import '../../styles/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav d-flex">
      <h3>Math Magician</h3>
      <ul className="nav-links d-flex">
        <Link to="/">Home</Link>
        <Link to="/calculate">Calculator</Link>
        <Link to="/about">Quote</Link>
      </ul>
    </nav>
  );
}

export default Nav;
