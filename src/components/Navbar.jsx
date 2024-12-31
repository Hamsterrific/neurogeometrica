import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-100.png';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div>
        <Link to='/'>
          <img src={logo} alt='Neurogeometrica Logo' className='logo-image' />
        </Link>
      </div>
      <ul className='navbar-links'>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/jobs'>Jobs</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
