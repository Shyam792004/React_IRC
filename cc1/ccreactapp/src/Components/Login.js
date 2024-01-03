import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { Navigate } from "react-router-dom";
const Login = () => {
  const Navigate = useNavigate();
  const Signin = () => {
    let a = document.getElementById("email").value;
    let b = document.getElementById("password").value;
    if (a !== "shyam@gmail.com" && b !== "shyam")
      alert("Wrong Mail ID and Password");
    else if (a != "shyam@gmail.com") alert("Wrong Mail ID");
    else if (b != "shyam") alert("wrong Password");
    else if (a == "shyam@gmail.com" && b == "shyam") {
      Navigate("/Demo");
    }
  };
  return (
    <section>
      <form onSubmit={Signin}>
        <h1>Login</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" id="email" required autoComplete="off" />
          <label>Email</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" id="password" required />
          <label>Password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <Link to="#">Forget Password</Link>
        </div>
        <button>Log in</button>
        <div className="register">
          <p>
            Don't have an account <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
