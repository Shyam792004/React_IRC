// // Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">le-meridean</div>
//       <ul>
//         <li className="other-link">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="other-link">
//           <Link to="/foods">Food</Link>
//         </li>
//         <li className="other-link">
//           <Link to="/offers">Offers</Link>
//         </li>
//         <li className="other-link">
//           <Link to="/rooms">Rooms</Link>
//         </li>
//         <li className="other-link">
//           <Link to="/about">About</Link>
//         </li>
//         <li className="other-link">
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li>
//           <Link to="/login" className="login-register-link">
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link to="/register" className="login-register-link">
//             Register
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
// // Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="menu-icon" onClick={toggleSidebar}>
        &#9776;
      </div>

      <div className="logo">LeMeridean</div>
      <div className="navhor">
        <ul>
          <li className="other-link">
            <Link to="/">Home</Link>
          </li>
          <li className="other-link">
            <Link to="/foods">Food</Link>
          </li>
          <li className="other-link">
            <Link to="/rooms">Rooms</Link>
          </li>
          <li className="other-link">
            <Link to="/about">About</Link>
          </li>
          <li className="other-link">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="login-register-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="login-register-link">
              Register
            </Link>
          </li>
        </ul>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default Navbar;
