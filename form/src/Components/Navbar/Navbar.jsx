import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="" alt="Logo" />
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="navbar-icons">
          <div className="navbar-icon">
            <i className="fas fa-home"></i> 
            <span>Home</span>
          </div>
          <div className="navbar-icon">
            <i className="fas fa-comment"></i>
            <span>Message</span>
          </div>
          <div className="navbar-icon">
            <i className="fas fa-bell"></i>
            <span>Notification</span>
          </div>
          <div className="navbar-profile">
            <img src="profile.jpg" alt="Profile" />
            <span>Me ▼</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
