// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="Home">Home</Link>
      <Link to="/TravelPackages" style={{ marginLeft: '10px' }}>Travel Packages</Link>
      <Link to="/Booking" style={{ marginLeft: '10px' }}>Booking</Link>
      <Link to="/About" style={{ marginLeft: '10px' }}>About Us</Link>
      <Link to="/Contact" style={{ marginLeft: '10px' }}>Contact Us</Link>
      <Link to="/Payments" style={{ marginLeft: '10px' }}>Payments</Link>
      <Link to="/Notifications" style={{ marginLeft: '10px' }}>Notifications</Link>
    </nav>
  );
};

export default Navbar;
