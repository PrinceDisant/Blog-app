import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Posts from '../../Components/Posts/Posts'
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.css";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts")
      console.log(res)
    }
  },[])
  return (
    <>
      <Header />
      <div className="home">
          <Posts />
          <Sidebar />
      </div>
    </>
  );
}

export default Home;
