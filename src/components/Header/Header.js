import React from "react";
import "./header.css";

const Header = () => (
  <header className="header">
    <div className="header-wrap container">
      <div className="logo">LOGO</div>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">My Recipes</li>
          <li className="nav-item">Favourites</li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
