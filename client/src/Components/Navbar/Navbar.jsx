import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from 'react';
import { context } from "../../context/Context";

function Navbar() {
  const { user, dispatch } = useContext(context);
  const PF = "http://localhost:5000/images/"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <div className="left">
        <i className="navIcon facebook-icon fab fa-facebook-f"></i>
        <i className="navIcon twitter-icon fab fa-twitter"></i>
        <i className="navIcon instagram-icon fab fa-instagram"></i>
      </div>
      <div className="center">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="right">
        {user ? (
          <Link to="/settings">
            <img
              className="displayPicture"
              src={PF+user.profilePic}
              alt="profile pic"
            />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/signup">
                SIGNUP
              </Link>
            </li>
          </ul>
        )}

        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Navbar;
