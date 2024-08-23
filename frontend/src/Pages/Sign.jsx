import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
function Sign() {
  return (
    <section>
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
          <p className="switch">
            Already have an account? <span className="link"> <Link to='/login'>Login</Link> </span>
          </p>
        </form>
      </div>
    </div>
    </section>
  );
}

export default Sign;
