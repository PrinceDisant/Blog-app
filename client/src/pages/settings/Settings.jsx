import React from 'react';
import './settings.css';
import Sidebar from '../../Components/Sidebar/Sidebar';

function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="updateTitle">Update your Account</span>
                    <span className="deleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                            className="" 
                            src="https://images.pexels.com/photos/5273566/pexels-photo-5273566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Disant"/>
                    <label>Email</label>
                    <input type="email" placeholder="disant@gmail.com"/>
                    <label>Password</label>
                    <input type="Password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
