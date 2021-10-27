import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-center">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-header">
          <li>Products</li>
          <li>Developers</li>
          <li>Company</li>
        </ul>
        <button className="btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
