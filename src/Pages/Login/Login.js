import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
  };
  return (
    <div>
      <h2 className="signup-title">Sign Up Now</h2>
      <form onSubmit={handleLogIn} className="form-container">
        <div className="input-group">
          <label htmlFor="email">Your Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Your email"
            id=""
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Your Password</label>
          <input
            ref={passwordRef}
            type="password"
            name="pass"
            placeholder="Your password"
            id=""
          />
        </div>

        <button onClick={handleLogIn} className="sign-button">
          Log in
        </button>
        <p onClick={() => navigate("/signup")}>Create new account?</p>
      </form>
    </div>
  );
};

export default Login;
