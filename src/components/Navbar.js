import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li><button><Link to="/">Home</Link></button></li>
        <li><button><Link to="/about">About us</Link></button></li>
        <li><button><Link to="/contact">Contact</Link></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;