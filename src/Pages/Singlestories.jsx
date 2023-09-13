import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer"
import "../styles/singlestories.css"

const Singlestories = () => {
  const { storyId } = useParams();
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");
  const getStory = async () => {
    const {
      data: { story },
    } = await axios(`https://zainab-postit.onrender.com/api/v1/story/${storyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    console.log(story);
    setTag(story.tag);
    setDescription(story.description);
    setImage(story.image);
    setTitle(story.title);
  };
  useEffect(() => {
    getStory();
  }, [storyId]);
  return (

    <div>
      <div>
        <Navbar1 />
      </div>
      <div className="container sstory">
      <button>{tag}</button>
     <h1>{title} </h1> <hr />
       <img src={image} alt="" />
       <p>{description} </p>
      </div>
     
     
     <div>
      <Footer />
     </div>
    </div>
  );
};

export default Singlestories;
