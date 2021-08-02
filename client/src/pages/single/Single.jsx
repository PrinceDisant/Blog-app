import React from 'react';
import './single.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import SinglePost from '../../Components/SinglePost/SinglePost';

function Single() {
    return (
        <div className="single">
            {/* Post */}
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single
