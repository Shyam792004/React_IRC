// Login.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    toast.success("Google login successful!");
    // You can add additional logic for Google login if needed
    // For example, you might want to authenticate the user with a server
  };

  const handleRegularLogin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Handle regular login logic here
    if (email === "shyam@gmail.com" && password === "shyam79") {
      // Navigate to the home page after successful login
      navigate("/landing");
    } else {
      // Display appropriate error messages
      if (email !== "shyam@gmail.com" && password !== "shyam79") {
        toast.error("Wrong Mail ID and Password");
      } else if (email !== "shyam@gmail.com") {
        toast.error("Wrong Mail ID");
      } else if (password !== "shyam79") {
        toast.error("Wrong Password");
      }
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;

    // Check if the login attempt is through Google
    if (email === "google@example.com") {
      // Handle Google login
      handleGoogleLogin();
    } else {
      // Handle regular login
      handleRegularLogin();
    }
  };

  return (
    <div className="shyam">
      <form onSubmit={handleSignIn}>
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
          <Link to="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop">
            #Forget Password
          </Link>
        </div>
        <button type="submit">Log in</button>
        <div className="register">
          Don't have an account <Link to="/register">Register</Link>
        </div>
      </form>
      <Toaster position="top-center" />
    </div>
  );
};

export default Login;
