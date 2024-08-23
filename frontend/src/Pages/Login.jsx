import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="container">
        <div className="form-container">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p className="switch">
              Don't have an account?{" "}
              <span className="link">
                <Link to='/sign'>Sign Up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
