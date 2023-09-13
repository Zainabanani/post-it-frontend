import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Navbar1 from "../Components/Navbar1"
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const redirect = useNavigate ();
  const {storyId} = useParams ();
  const [title, setTitle] = useState ("");
  const [tag, setTag] = useState (" ");
  const [description, setDescription] = useState ("");
  const [loading, setLoading] = useState (true);
  const token = localStorage.getItem("token");
  const getStories = async () =>{
    const {data : {story}} = await axios(`https://zainab-postit.onrender.com/api/v1/story/${storyId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setLoading(false);
    setTag(story.tag);
    setDescription(story.description);
    setTitle(story.title);
  }
  useEffect (() =>{
    getStories ()
  }, [storyId])


  const handleChange = async (e) => {
    e.preventDefault ();
    const {data} = await axios.patch(`https://zainab-postit.onrender.com/api/v1/story/${storyId}`, {title, tag, description}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
     
    });
    if (data.success){
      redirect ("/mystories");
    } 
  }
  return (
    <div>
      <div><Navbar1 /></div>
       <Form className='container cika mb-3' onSubmit={handleChange}>
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
      <button>Publish Story</button>
    </Form>
    </div>
  )
}

export default Edit