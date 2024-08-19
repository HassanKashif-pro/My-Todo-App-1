import React from "react";
import "../style/App.css";

function SignIn() {
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h1>Sign In</h1>
        <form>
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
