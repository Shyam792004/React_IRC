import React from "react";
import "./login.css";

const Register = () => {
  return (
    <section>
      <form>
        <h1>Register</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" required />
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
            Already have an account <a href="Login.html">Login</a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
