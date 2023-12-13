// // Login.js

// import React from "react";
// import "./login.css"; // Make sure to import your CSS file

// const Login = () => {
//   return (
//     <section>
//       <form>
//         <h1>Login</h1>
//         <div className="inputbox">
//           <ion-icon name="mail-outline"></ion-icon>
//           <input type="email" required />
//           <label>Email</label>
//         </div>
//         <div className="inputbox">
//           <ion-icon name="lock-closed-outline"></ion-icon>
//           <input type="password" required />
//           <label>Password</label>
//         </div>
//         <div className="forget">
//           <label>
//             <input type="checkbox" />
//             Remember Me
//           </label>
//           <a href="#">Forget Password</a>
//         </div>
//         <button>Log in</button>
//         <div className="register">
//           <p>
//             Don't have an account <a href="register.html">Register</a>
//           </p>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Login;
import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <section>
      <form>
        <h1>Login</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" required />
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
