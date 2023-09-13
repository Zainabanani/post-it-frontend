import React from "react";
import { useState, useEffect } from "react";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer"
import key from "../assets/key.png"
import "../styles/welcome.css"
import { Link } from "react-router-dom";
import axios from "axios";


const Welcome = () => {
  const [user, setUser] = useState ("")
  const token = localStorage.getItem ("token");
const getUser = async ()=>{const {data} = await axios('https://zainab-postit.onrender.com/api/v1/user', {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  console.log(data.username);
  setUser (data.username)
}
useEffect ( () =>{
 getUser();
}, [])

  return (
    <div>
      <div>
        <Navbar1 />
      </div>
      <div className="welcome">
        <div>
          <div>
            <h1>Welcome {user},</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />
              egestas massa  velit aliquam. Molestim bibendum <br /> hnt 
              ipsum orci, platea aliquam id ut.
            </p>
            <div> <Link to="/mystories"><button className="one">My Stories</button></Link> <Link to="/allstories"><button className="two">Go to feed</button></Link></div>
          </div>
        </div>
        <div className="key"><img src={key} alt={"keyboard image"} />
        </div>
       
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Welcome;
