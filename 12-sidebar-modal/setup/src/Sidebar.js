import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

import { AppContext } from "./context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useContext(AppContext);

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : null}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Coding Addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon} {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
