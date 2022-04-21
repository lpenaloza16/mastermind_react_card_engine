import React from "react";
import "./Navbar.css";
//allows to import images
import logo from "./icon-logo.png";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <img className="site-logo" src={logo} alt="site-logo" />
      <div>
        <ul>
          <li>{/* <a href="#" alt="title"></a> */}</li>
          <li>{/*  <a class="link_dec" href="http://">Your Home</a> */}</li>
          <li>{/*  <a class="link_dec" href="http://">Your Library</a> */}</li>
          <li>
            {/*  <li class="nav-child">
            <a class="link_dec" onclick="openCreate()" href="http://">Create</a>
          </li> */}
          </li>
          {/* <li>{ <a class="link_dec settings_gear" href="http://">Settings</a>
        </ul>} </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
