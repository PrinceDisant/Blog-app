import React, { useContext, useRef } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { context } from '../../context/Context';
import axios from 'axios';

function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching } = useContext(context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS", payload: res.data});
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"});
        }
    };
    return (
        <div className="login">
        <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit} >
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your username..." ref={userRef}/>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..." ref={passwordRef}/>
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginSignupButton"><Link className="link" to="/signup">Sign Up</Link></button>
        </div>
    )
}

export default Login
