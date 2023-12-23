import React from 'react';
import '../pages/home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

// Home page header section
function Header() {
  return (
    
    <header className="home_header">
        <div className="home_headerLeft">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <AccountCircleSharpIcon style={{ color: 'rgb(198, 193, 193)', fontSize: 33 }} />
        </div>
    </header>

  )
};

export default Header;