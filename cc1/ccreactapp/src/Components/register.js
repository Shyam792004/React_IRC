import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

const Register = () => {
  const SignUp = () => {
    let a = document.getElementById("name").value;
    alert(a + " Successfully Registered");
  };

  return (
    <section>
      <form onSubmit={SignUp}>
        <h1>Register</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" id="name" required />
          <label htmlFor="">Username</label>
        </div>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" required />
          <label htmlFor="">Email</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" required />
          <label htmlFor="">Password</label>
        </div>

        <button>Register</button>
        <div className="register">
          <p>
            Already have an account <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
