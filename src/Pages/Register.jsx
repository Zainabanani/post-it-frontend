import React from 'react'
import "../styles/register.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  const redirect = useNavigate();
  const [username, setUsername] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [loading, setLoading] = useState (true)
 const handleSubmit = async (e)=>{
e.preventDefault();
setLoading (false)
const {data} = await axios.post('http://localhost:3000/api/v1/register', {email, username, password,});
if (data.success){
  // console.log(data);
  redirect ("/login")
} else{
  toast.error("Error signing in")
}
 }
  return (
    <div className='register' >
    <div className='formss'>
    <div>
    <ToastContainer />
        <h2>Join Post<span>it</span>.</h2>
      </div>
      <div>
        <p>Enter your email address to create an account on Post<span>it</span>.</p>
      </div>
      <div>
        <h6>Username</h6>
        <input type="text" value={username} onChange={(e) =>setUsername (e.target.value)} />
      </div>
      <div>
        <h6>Your Email Address</h6>
        <input type="email" value={email} onChange={(e) =>setEmail (e.target.value)}/>
      </div>
      <div>
        <h6>Password</h6>
        <input type="password" value={password} onChange={(e) =>setPassword (e.target.value)}/>
      </div>
      <div>
        <button type='submit' onClick={handleSubmit}>{loading ? 'Continue' : 'Signing in....'}</button>
      </div>
      <div className='have'>
        <p>Already have an account? <Link to="/login"> <span>Sign In</span></Link></p>
      </div>
    </div>
    </div>
  )
}

export default Register