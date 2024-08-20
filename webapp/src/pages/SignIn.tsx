import React from "react";
import "../style/SignIn.css";

function SignIn() {
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h1 className="h1">Sign In To Stack</h1>
        <button className="google-sign-in">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google Logo"
          />
          Sign in with Google
        </button>
        <div className="separator">
          <span>or</span>
        </div>
        <form className="sign-in-form">
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <a href="#" className="forgot-password">
            Don't remember your password?
          </a>
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
