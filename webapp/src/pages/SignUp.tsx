import React, { useState } from "react";
import "../style/SignIn.css"; // Consider renaming this to something like "Auth.css" for better clarity
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import axios from "axios";

interface AuthData {
  token: string;
  userId: string;
  username: string;
  roles: string[];
}

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const data = { username, password, email };

    axios
      .post("http://localhost:4000/sign-up", data, {
        headers: {
          "Content-Type": "application/json", // Ensure you send JSON data
        },
      })
      .then((response) => {
        setAuthData(response.data);
        alert("Successfully signed up!");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        alert("Failed to sign up. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <h1 className="h1">Sign up for Stack</h1>
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

        <form className="sign-in-form" onSubmit={signUp}>
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
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              "Sign Up"
            )}
          </button>

          <div className="bottom-signup">
            Already have an account? <a href="/sign-in">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
