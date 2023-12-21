// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <div className="vertical">
        <ul>
          <li>
            <Link to="/dashboard" className="sidebar-link" onClick={onClose}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/contact" className="sidebar-link" onClick={onClose}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="sidebar-link" onClick={onClose}>
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/foods" className="sidebar-link" onClick={onClose}>
              la Cart^E
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
