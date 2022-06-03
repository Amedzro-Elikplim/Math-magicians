import '../../styles/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="d-flex">
      <h3>Math Magician</h3>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/calculate">Calculator</Link>
          <Link to="/about">Quote</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
