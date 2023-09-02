import React from 'react'
import Footer from '../Components/Footer'
import Navbar1 from '../Components/Navbar1'
import "../styles/home.css";
import daya from "../assets/daya.png"
import biyu from "../assets/biyu.png"
import uku from "../assets/uku.png"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
   
    <div>
     <Navbar1 />
     <div className='sec1'>
      <div className='curious'>
      <h1>Stay Curious.</h1>
     <p>
     Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />
egestas massa velit aliquam. Molestim bibendum  <br />
hnt ipsum orci, platea aliquam id ut. 
     </p>
     <Link to="/register"><button>Get Started</button></Link>
      </div>
     
     </div >
     <div className=' border d-flex flex-column flex-lg-row justfy-content-center sec2'> 
     <div className='d-flex wahid farko'>
     <div><img src={daya} alt={""} /></div>
      <div>
        <button className='life mb-4'>Lifestyle</button>
        <p>The 20 Biggest Fashion <br /> Companies In Nigeria 2022</p>
      </div>
     </div>
  <div className='d-flex wahid'>
  <div ><img src={biyu} alt={""} /></div>
      <div>
        <button className='nature mb-4'>Nature</button>
        <p>The 20 Biggest Agro <br /> Companies In Nigeria 2022</p>
      </div>
  </div>
  <div className='d-flex wahid'>
  <div><img src={uku} alt={""} /></div>
      <div>
        <button className='tech mb-4'>Technology</button>
        <p>The 20 Biggest Technology <br /> Companies In Nigeria 2022</p>
      </div>
  </div>
     </div>
     <div className='rec'>
     <div className='try pt-5'>
     <h5 className=''>Try Post<span>it</span></h5>
     <p>Do you want to write or discover stories from writers on any topic?</p>
     </div>
     <div>
      <input type="email" placeholder='Email address' /> <Link to="/register"><button>Get Started</button></Link>
     </div>
     </div>
    <Footer />
      </div>
  )
}

export default Home