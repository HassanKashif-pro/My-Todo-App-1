import React from "react";
import "../style/SignUp.css"; // Assuming you have separate styles for sign-up or you can reuse the same styles
import axios from "axios";

function SignUp() {
  const signUp = (e: React.FormEvent) => {
    // Handle sign-up logic here, such as sending the form data to an API
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <h1 className="h1">Sign up for Stack</h1>
        <button className="google-sign-up">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google Logo"
          />
          Sign up with Google
        </button>
        <div className="separator">
          <span>or</span>
        </div>
        <form className="sign-up-form" onSubmit={signUp}>
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
            <i className="fas fa-envelope"></i>
            <input type="email" name="email" placeholder="Email" required />
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
          <button type="submit" className="sign-up-btn">
            Sign Up
          </button>
          <div className="bottom-signin">
            Already have an account? <a href="/sign-in">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
