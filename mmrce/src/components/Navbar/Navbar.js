import React from "react";
import "./Navbar.css";
//allows to import images
import logo from "./icon-logo.png";
import menu from "./hamburger_menu.png";
import MenuEvent from "./Mob-nav/MobNav";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <ul className="ul-test">
        <img className="site-logo" src={logo} alt="site-logo" />
        <li>Home</li>
        <li>Your Library</li>
        <li>Create</li>
        <li>Settings</li>
        <img
          onClick={() => MenuEvent()}
          className="menu-icon"
          src={menu}
          alt="menu-icon"
        />
      </ul>
    </div>
  );
};

export default Navbar;
