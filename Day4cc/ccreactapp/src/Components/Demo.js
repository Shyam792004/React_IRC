import React from "react";
import { Link } from "react-router-dom";
import "../Assets/css/style.css";
import "../Assets/css/style1.css";

import mountainImage from "../Assets/css/img1.jpg";
import beachImage from "../Assets/css/img2.jpg";
import desertImage from "../Assets/css/img3.jpg";
import galaxyImage from "../Assets/css/img4.jpg";

const Demo = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navdiv">
          <Link to="/">
            <div className="logo">
              Le-Meri<span>dean.</span>
            </div>
          </Link>
          <ul>
            <Link to="/" className="active">
              <li>
                <i className="fas fa-home"></i>
              </li>
            </Link>
            <Link to="/rooms">
              <li>Rooms</li>
            </Link>
            <Link to="/reservations">
              <li>Reservations</li>
            </Link>
            <Link to="/about">
              <li>AboutUs</li>
            </Link>
            <Link to="/contactUs">
              <li>ContactUs</li>
            </Link>
          </ul>
          <Link to="/">
            <button>
              Login <i className="fas fa-user"></i>
            </button>
          </Link>
          <Link to="/register">
            <button>
              <i className="fas fa-angle-double-right"></i> SignUp
            </button>
          </Link>
        </div>
      </nav>
      <div>
        <main className="page-content">
          <div className="card">
            <div className="content1">
              <img src={mountainImage} alt="Mountain View" />
              <h2 className="title">Mountain View</h2>
              <p className="copy">
                Check out all of these gorgeous mountain trips with beautiful
                views of, you guessed it, the mountains
              </p>
              <button className="btn">View Trips</button>
            </div>
          </div>
          <div className="card">
            <div className="content1">
              <img src={beachImage} alt="To The Beach" />
              <h2 className="title">To The Beach</h2>
              <p className="copy">
                Plan your next beach trip with these fabulous destinations
              </p>
              <button className="btn">View Trips</button>
            </div>
          </div>
          <div className="card">
            <div className="content1">
              <img src={desertImage} alt="Desert Destinations" />
              <h2 className="title">Desert Destinations</h2>
              <p className="copy">It's the desert you've always dreamed of</p>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="card">
            <div className="content1">
              <img src={galaxyImage} alt="Explore The Galaxy" />
              <h2 className="title">Explore The Galaxy</h2>
              <p className="copy">
                Seriously, straight up, just blast off into outer space today
              </p>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Demo;
