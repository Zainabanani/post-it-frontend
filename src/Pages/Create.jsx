import React from 'react'
import "../styles/create.css"
import { useState } from 'react';
import Navbar1 from "../Components/Navbar1";
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const Create = () => {
  const [title, setTitle] = useState ("")
  const [tag, setTag] = useState ("")
  const [description, setDescription] = useState ("")
  const [image, setImage] = useState (null)
  const [loading, setLoading] = useState (false)
const token = localStorage.getItem("token")

const handleChange = async (e)=>{
  e.preventDefault();
  setLoading (true)
  const formdata = new FormData ();
  formdata.append("title", title)
  formdata.append("tag", tag)
  formdata.append("description", description)
  formdata.append("image", image)
  const res = await axios.post("http://localhost:3000/api/v1/story", formdata, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  setTitle ("")
  setDescription ("")
  setImage ("null")
  setTag ("")
};


  return (
    <div>
      <div>
        <Navbar1 />
        </div>
      <div className='container mt-5 mb-3 sto'> 
        <h2>Create Story</h2>
        </div>
      <div>
      <Form className='container cika' onSubmit={handleChange}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
        type="text" 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle (e.target.value)}/>
      </Form.Group>
      <Form.Select
      value={tag} 
      onChange={(e) =>setTag (e.target.value)} >
        <option value="">Tags</option>
        <option value="nature">Nature</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="sport">Sport</option>
        <option value="technology">Technology</option>
        <option value="others">Others</option>
      </Form.Select> <br />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control 
        as="textarea" rows={10} 
        placeholder='Write your story.......'
        value={description}
        onChange={(e) =>setDescription (e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control 
        type="file" 
        placeholder="Upload Image"
        accept='image'
        onChange={(e) =>setImage (e.target.files[0])} />
      </Form.Group>
      <button>Publish Story</button>
      
    </Form>
      </div>
      
    </div>
  )
}

export default Create