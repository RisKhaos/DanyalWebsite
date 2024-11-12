import React from 'react';
import './Topbar.css'; // Import your CSS file
import '../App.css'; // Import your main CSS


const Topbar = () => {
  return (
    <header className="topbar">
      <nav className="nav-bar">
      <a class="logo" href="/#/HomePage">Danyal Freitas</a>
        <ul className='main-menu-a'>
          <li><a href="#/AboutPage">About</a></li>
          <li><a href="#/ProjectPage">Projects</a></li>
          <li><a href="#/ContactsPage">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
