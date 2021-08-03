import React from 'react';
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
            <button className="signupLoginButton">Login</button>
        </div>
    )
}

export default Signup
