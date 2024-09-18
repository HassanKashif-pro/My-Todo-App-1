import React, { useState } from "react";
import "../style/SignIn.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function SignIn() {
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const signIn = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    setIsLoading(true); // Start loading spinner

    // Simulate a loading time (e.g., 2 seconds)
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h1 className="h1">Sign in to Stack</h1>

        {/* Google Sign-In Button */}
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

        {/* Sign-In Form */}
        <form className="sign-in-form" onSubmit={signIn}>
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

          {/* Sign-In Button */}
          <button type="submit" className="sign-in-btn">
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
              "Sign In"
            )}
          </button>

          <div className="bottom-signup">
            Don't have an account? <a href="/sign-up">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
