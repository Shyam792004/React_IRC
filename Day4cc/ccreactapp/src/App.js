import React from "react";

import Demo from "./Components/Demo";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/register";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
