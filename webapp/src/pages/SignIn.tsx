import React from "react";
import "../style/App.css";

function SignIn() {
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="sign-in-box">
          <h1 className="h1">Sign In To Stack</h1>
          <form className="input-group">
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <br />
            <button type="submit" className="button">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
