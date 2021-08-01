import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <p>Self-taught Full Stack Developer</p>
        <p>
          At the Beginning of 2020, I found myself in a situation where I had to
          learn web development very fast, but I did not have the know-how of
          finding the right resources or navigating through them. This is
          precisely why I will structure this website to help YOU in your
          journey of becoming a coder.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Front-End</li>
          <li className="sidebarListItem">Back-End</li>
          <li className="sidebarListItem">Health</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-f"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;