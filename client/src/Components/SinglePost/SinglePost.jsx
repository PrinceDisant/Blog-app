import React from "react";
import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Disant</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          mollis arcu. In hac habitasse platea dictumst. Vestibulum magna massa,
          ornare et porta quis, iaculis eget augue. Duis sed feugiat risus.
          Fusce quis massa ipsum. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          ornare, nulla et dapibus cursus, quam ex porta erat, non varius eros
          est pretium eros.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          mollis arcu. In hac habitasse platea dictumst. Vestibulum magna massa,
          ornare et porta quis, iaculis eget augue. Duis sed feugiat risus.
          Fusce quis massa ipsum. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          ornare, nulla et dapibus cursus, quam ex porta erat, non varius eros
          est pretium eros.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          mollis arcu. In hac habitasse platea dictumst. Vestibulum magna massa,
          ornare et porta quis, iaculis eget augue. Duis sed feugiat risus.
          Fusce quis massa ipsum. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          ornare, nulla et dapibus cursus, quam ex porta erat, non varius eros
          est pretium eros.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          mollis arcu. In hac habitasse platea dictumst. Vestibulum magna massa,
          ornare et porta quis, iaculis eget augue. Duis sed feugiat risus.
          Fusce quis massa ipsum. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          ornare, nulla et dapibus cursus, quam ex porta erat, non varius eros
          est pretium eros.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
