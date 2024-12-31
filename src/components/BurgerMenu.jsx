import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo-45.png';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='burger-container'>
        <div>
          <Link to='/' onClick={closeMenu}>
            <img src={logo} alt='Neurogeometrica Logo' className='logo-image' />
          </Link>
        </div>

        <ul className={`burger-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to='/about' onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/jobs' onClick={closeMenu}>
              Jobs
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        <button
          type='button'
          className='burger-button'
          onClick={toggleMenu}
          aria-label='Toggle menu'
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
    </nav>
  );
};

export default BurgerMenu;
