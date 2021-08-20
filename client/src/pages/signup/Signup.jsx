import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

function Signup() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register",{
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (error) {
            setError(true);
        }
    };
    return (
        <div className="Signup">
        <span className="SignupTitle">Signup</span>
            <form className="SignupForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="SignupInput" placeholder="Enter your username..." onChange={e=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="text" className="SignupInput" placeholder="Enter your email..." onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" className="SignupInput" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)}/>
                <button className="SignupButton" type="submit">Signup</button>
            </form>
            <button className="signupLoginButton"><Link className="link" to="/login">Login</Link></button>
            {error && <span style={{color: "red", marginTop: "10px"}}>SOMETHING WENT WRONG!</span>}
        </div>
    )
}

export default Signup
