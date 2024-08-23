import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      {isLogin ? (
        <div className="form-container">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p className="switch">
              Don't have an account?{' '}
              <span onClick={toggleForm} className="link">
                Sign Up
              </span>
            </p>
          </form>
        </div>
      ) : (
        <div className="form-container">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
            <p className="switch">
              Already have an account?{' '}
              <span onClick={toggleForm} className="link">
                Login
              </span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
