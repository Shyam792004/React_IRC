import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <input type="checkbox" id="checkbox" />
      <header className="header">
        <h2 className="u-name">
          SIDE <b>BAR</b>
          <label htmlFor="checkbox">
            <i id="navbtn" className="fa fa-bars" aria-hidden="true"></i>
          </label>
        </h2>
        <i className="fa fa-user" aria-hidden="true">
          User
        </i>
      </header>
      <div className="body">
        <nav className="side-bar">
          <div className="user-p">
            <img src="img/user.jpg" alt="User" />
            <h4>Elias</h4>
          </div>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-desktop" aria-hidden="true">
                  desktop
                </i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope-o" aria-hidden="true">
                  messages
                </i>
                <span>Message</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-comment-o" aria-hidden="true">
                  comment
                </i>
                <span>Comment</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-info-circle" aria-hidden="true">
                  about
                </i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-cog" aria-hidden="true">
                  setting
                </i>
                <span>Setting</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-power-off" aria-hidden="true">
                  logout
                </i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
        <section className="section-1">
          <h1>WELCOME</h1>
          <p>#CodingWithElias</p>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
