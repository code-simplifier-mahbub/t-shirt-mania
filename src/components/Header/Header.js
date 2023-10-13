import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Order</Link>
            <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;