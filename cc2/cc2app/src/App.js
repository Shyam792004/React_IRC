import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Foods from "./Components/Foods";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Register from "./Components/Register";
import Rooms from "./Components/Rooms";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/foods"
          element={
            <>
              <Navbar />
              <Foods />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/offers"
          element={
            <>
              <Navbar />
              <Offers />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/rooms"
          element={
            <>
              <Navbar />
              <Rooms />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
