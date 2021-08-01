import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <img 
                className="postImg"
                src=""
                alt=""
            />
            <div className="postInfo">
                <div className="postCatagories">
                    <span className="postCatagory">Front end</span>
                </div>
                <span className="postTitle">Using Flex Box</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                lorem ipsum dolor sit amet aaaaaaaaakirhgrhtghjrighrighirhgerg
                jkrgbjerbgerbgoebrognerigbdfjbgudf g,dfngndghergkegjerbugberg
                lorem ipsum dolor sit amet aaaaaaaaakirhgrhtghjrighrighirhgerg
                jkrgbjerbgerbgoebrognerigbdfjbgudf g,dfngndghergkegjerbugberglorem ipsum dolor sit amet aaaaaaaaakirhgrhtghjrighrighirhgerg
                jkrgbjerbgerbgoebrognerigbdfjbgudf g,dfngndghergkegjerbugberg
                lorem ipsum dolor sit amet aaaaaaaaakirhgrhtghjrighrighirhgerg
                jkrgbjerbgerbgoebrognerigbdfjbgudf g,dfngndghergkegjerbugberg
            </p>
        </div>
    )
}

export default Post
