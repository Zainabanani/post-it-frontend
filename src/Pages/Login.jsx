import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/login.css";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const redirect = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState ('')
  const [loading, setLoading] = useState (true)
  const handleSubmit = async (e)=>{
    e.preventDefault ();
    setLoading (false)
    const {data} = await axios.post('http://localhost:3000/api/v1/login', {email, password});
    if (data.success){
localStorage.setItem("token", data.token)
redirect ("/welcome")
    } else {
      toast.error("Error Login in")
    }
  }
  return (
    <div className='register' >
    <div className='formss wilkom'>
    <div>
        <h2>Welcome Back</h2>
      </div>
      <div>
        <h6>Your Email Address</h6>
        <input type="email" value={email}  onChange={(e) =>setEmail(e.target.value)}/>
      </div>
      <div>
        <h6>Password</h6>
        <input type="password" value={password} onChange={(e) =>setPassword (e.target.value)}  />
      </div>
      <div>
        <button type='submit' onClick={handleSubmit}>{loading ? `Continue` : "Logging in..."}</button>
      </div>
      <div className='have'>
        <p>No account? <Link to="/register"><span>Sign Up</span></Link></p>
      </div>
    </div>
    </div>
  )
}

export default Login