import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import "./register.css";

const Register = () => {
  return (
    <div className="shyam">
      <form>
        <h1>Register</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" id="text" required autoComplete="off" />
          <label>Username</label>
        </div>
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
        </div>

        <button>Register</button>
        <div className="loginlink">
          <p>
            Don't have an account <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
