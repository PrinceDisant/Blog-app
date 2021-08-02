import React from 'react';
import './write.css';

function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="One, Two... Write!" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write
