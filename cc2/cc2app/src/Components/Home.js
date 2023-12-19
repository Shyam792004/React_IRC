// Home.js

import React from "react";
import Navbar from "./Navbar";
import "./Home.css"; // Your existing styles

const Home = () => {
  return (
    <div className="home-container">
      {/* Add background style to the entire page */}
      <div className="background-image">
        {/* Include the Sidebar component */}

        <Navbar />
        <div className="center1">
          <h1>Welcome to LeMeridean</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
