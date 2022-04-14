import React from "react";
import { Link } from "react-router-dom";
import useFirebaseHook from "../../hooks/useFirebaseHook/useFirebaseHook";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebaseHook();

  return (
    <div className="header-container">
      <div className="logo">
        <h2>Hotel-Motel.Int</h2>
      </div>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Sign Up</Link>

        <span>{user?.email && user.email}</span>
        {user?.uid ? (
          <button onClick={logOut}>Log Out</button>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
