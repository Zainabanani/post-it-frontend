import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/mystories.css"
import Nostory from "./Nostory";


const Mystories = () => {
  const token = localStorage.getItem("token");
  const [readMore, setReadMore] = useState(true);
  const [stories, setStories] = useState("");
  const [loading, setLoading] = useState(true);
  const getStories = async () => {
    const {
      data: { stories },
    } = await axios("http://localhost:3000/api/v1/story", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setStories(stories);
    
  };
  useEffect(() => {
    getStories ();
  }, [stories]);
  const toggleRead = () => {
    setReadMore(!readMore)
  }
const handleDelete = async (id) => {
  const {data} = await axios.delete(`http://localhost:3000/api/v1/story/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (data.success) {
    window.location.reload();
  }
}

if (stories.length === 0){
  return <Nostory/>
}

  return (
    <div className="whole container">
       <div className="stories container mb-3">
                    <div>
                      <h1>My Stories</h1>
                    </div>
                    <div>
                     <Link to="/create"> <button>Write Story</button></Link>
                    </div>
                  </div>
                  <div className="draft container">
                    <div>
                     <Link to="/allstories"><h5>All</h5></Link>
                    </div>
                    <div>
                      <h5 className="dr">Draft</h5>
                    </div>
                    <div>
                      <h5 className="dr">Published</h5>
                    </div>
                  </div>
                  <div><hr /></div>
      <div>
{
  loading ? "Loading..." : stories.map((s)=>{
const {
_id,
title, 
description} = s
return (
  <div key={_id} className="lass" >
   <div>
   <h1 className="ttl">{title}</h1>
    <p className="desc">{ readMore ? `${description.substring(0, 300)}...` : description}</p>
   </div>
   <div className="mabal">
   <Link to={`/edit/${_id}`}>
                    <button>Edit Story</button>
                  </Link>
                  <button className="del" onClick={() => handleDelete(_id)}>Delete</button>
   </div>
  </div>
)
  })
}
      </div>
    </div>
  );
};

export default Mystories;
