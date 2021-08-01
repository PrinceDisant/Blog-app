import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="nav">
            <div className="left">
                <i className="navIcon facebook-icon fab fa-facebook-f"></i>
                <i className="navIcon twitter-icon fab fa-twitter"></i>
                <i className="navIcon instagram-icon fab fa-instagram"></i>
            </div>
            <div className="center">
                <ul className="navList">
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="right">
                <img 
                    className="displayPicture"
                    src="https://images.pexels.com/photos/6437888/pexels-photo-6437888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="profile pic"
                />
                <i className="navSearchIcon fas fa-search"></i>    
            </div>
        </div>
    )
}

export default Navbar
