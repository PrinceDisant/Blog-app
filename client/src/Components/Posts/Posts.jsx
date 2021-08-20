import React from 'react';
import './posts.css';
import Post from '../Post/Post'

function Posts({posts}) {
    return (
        <div className="posts">
            {posts.map(p=>(
                <Post post={p} />
            ))}
        </div>
    )
}

export default Posts
