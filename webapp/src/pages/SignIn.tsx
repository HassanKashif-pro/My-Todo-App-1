import React, { useState } from "react";
import "../style/SignIn.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import axios from "axios";

interface AuthData {
  token: string;
  userId: string;
  username: string;
  roles: string[];
}

function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const data = { username, password };

    axios
      .post("http://localhost:4000/sign-in", data)
      .then((response) => {
        setAuthData(response.data);
        alert("Successfully signed in!");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        alert("Failed to sign in. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h1 className="h1">Sign in to Stack</h1>

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

        <form className="sign-in-form" onSubmit={signIn}>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a href="#" className="forgot-password">
            Don't remember your password?
          </a>

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
