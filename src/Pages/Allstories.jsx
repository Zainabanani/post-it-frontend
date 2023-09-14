import React from "react"
import axios from 'axios'
import { useState, useEffect } from "react";
import key from "../assets/key.png"
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png"
import Navbar1 from "../Components/Navbar1"
import Footer from "../Components/Footer"
import { Container } from "react-bootstrap";
import "../styles/allstories.css"
import {AiOutlineArrowRight} from 'react-icons/ai'


const Allstories = () =>  {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState (true);
  const [stories, setStories] = useState ([]);
  const [readmore, setReadmore] = useState (true)
  const getStories = async () =>{
    const {data: {stories}} = await axios ("https://zainab-postit.onrender.com/api/v1/story/", {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    setLoading (false)
    setStories(stories)
  }

  useEffect (()=>{
    getStories ();
  }, [])

  const toggleRead = () =>{
    setReadmore (!readmore)
  }
  
  return (
    <div>
      <div><Navbar1 /></div>
        <div className="welcome">
        <div>
          <div>
            <h1>You’ve got a story, <br /> Post<span>it</span>.</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />
              egestas massa  velit aliquam. Molestim bibendum <br /> hnt 
              ipsum orci, platea aliquam id ut.
            </p>
          </div>
        </div>
        <div className="key"><img src={key} alt={"keyboard image"} />
        </div>
       
      </div>
      <div className="tory d-flex  flex-wrap justify-content-between align-content-center container">
        {loading ? <h1>Loading...</h1> : stories.map((s) => {
         const {
          _id,
          image,
          description,
          title,
          createdAt,
          tag,
          createdBy: { username },
        } = s;
          return (
            <div key={_id} className="abcs ">
              <img src={image} alt="" />
              <h1 className="w-75">{title}</h1>
             <div className="d-flex created">
             <p>By { username}</p>
              <p><span>{new Date(createdAt).toDateString()}</span></p>
             </div>
              <p className="des ">{readmore ? `${description.substring (0, 100)}...`  : description}</p>
               <Link to={`/single/${_id}`}> <p> <AiOutlineArrowRight/>Readmore....</p></Link>
            </div>
          );
        })}
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default Allstories;
