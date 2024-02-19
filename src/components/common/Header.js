import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">WJ</div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/themes">Themes</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </header>
  );
};

export default Header;
