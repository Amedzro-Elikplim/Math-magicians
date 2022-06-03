import '../../styles/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav d-flex">
      <h3>Math Magician</h3>
      <ul className="nav-links d-flex">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/calculate">
          Calculator
        </Link>
        <Link className="link" to="/about">
          Quote
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
