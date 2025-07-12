import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Logging in..." : "Signing up...");
    // You can later connect to Firebase or your backend here
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          placeholder={isLogin ? "Password" : "Create Password"}
          required
        />

        <button type="submit">{isLogin ? "Sign In" : "Sign Up"}</button>

        <div className="auth-footer">
          <p>
            {isLogin ? "New to MyFlix?" : "Already have an account?"}{" "}
            <span onClick={toggleForm}>
              {isLogin ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Auth;
