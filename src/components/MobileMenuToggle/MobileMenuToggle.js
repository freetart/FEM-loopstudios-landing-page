import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './MobileMenuToggle.scss';

const MobileMenuToggle = ({ isActive, setIsActive }) => {
  return (
    <button
      className='mobile-menu-toggle'
      onClick={() => setIsActive(!isActive)}
    >
      {!isActive ? (
        <FaBars className='mobile-menu-icon' />
      ) : (
        <FaTimes className='mobile-menu-icon' />
      )}
    </button>
  );
};

export default MobileMenuToggle;
