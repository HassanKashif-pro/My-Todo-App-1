import React, { useState } from "react";
import "../style/SignUp.css"; // Assuming the styles are separate or reused
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const signUp = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    setIsLoading(true); // Start loading animation

    // Simulate a loading time (e.g., 2 seconds)
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <h1 className="h1">Sign up for Stack</h1>

        {/* Google Sign-Up Button */}
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

        {/* Sign-Up Form */}
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

          {/* Sign-Up Button */}
          <button type="submit" className="sign-up-btn">
            {isLoading ? (
              <>
                <Spin
                  indicator={<LoadingOutlined spin />}
                  size="small"
                  className="animate-spin"
                />
                &nbsp; Loading...
              </>
            ) : (
              "Sign Up"
            )}
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
