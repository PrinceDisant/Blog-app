import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

function Signup() {
    return (
        <div className="Signup">
        <span className="SignupTitle">Signup</span>
            <form className="SignupForm">
                <label>Username</label>
                <input type="text" className="SignupInput" placeholder="Enter your username..."/>
                <label>Email</label>
                <input type="text" className="SignupInput" placeholder="Enter your email..."/>
                <label>Password</label>
                <input type="password" className="SignupInput" placeholder="Enter your password..."/>
                <button className="SignupButton">Signup</button>
            </form>
            <button className="signupLoginButton"><Link className="link" to="/login">Login</Link></button>
        </div>
    )
}

export default Signup
