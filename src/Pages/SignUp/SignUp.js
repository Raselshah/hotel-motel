import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import useFirebaseHook from "../../hooks/useFirebaseHook/useFirebaseHook";
const SignUp = () => {
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  const { signInEmail } = useFirebaseHook();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const signUpButton = (event) => {
    event.preventDefault();
    signInEmail(email, password);
  };

  return (
    <div>
      <h2 className="signup-title">Sign Up Now</h2>
      <form className="form-container" onSubmit={signUpButton}>
        <div className="input-group">
          <label htmlFor="name">Your Name</label>
          <input
            onBlur={handleName}
            type="name"
            name="name"
            placeholder="Your Name"
            id=""
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Your Email</label>
          <input
            onBlur={handleEmail}
            type="email"
            name="email"
            placeholder="Your email"
            id=""
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Your Password</label>
          <input
            onBlur={handlePassword}
            type="password"
            name="pass"
            placeholder="Your password"
            id=""
          />
        </div>

        <button onClick={signUpButton} className="sign-button">
          Sign Up
        </button>

        <p onClick={() => navigate("/login")}>Already have an account?</p>
      </form>
    </div>
  );
};

export default SignUp;
