import React from "react";
import { Container } from "react-bootstrap";
import "../styles/footer.css";

const Footer = () => {
  return (
     <div className="futa">
      <div>
        <h4>About Post<span>it</span></h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Tincidunt id
          sem vel quis in turpis sit eget pellentesque. <br /> Nunc etiicies in
          rhoncus, rhoncus in arcu. Tincidunt <br /> neque fusce vitaenisi aliquet. que
          maeae tortoere <br /> necsem commodo ac.
        </p>
      </div>

      <div>
        <h4>Quick Menu</h4>
        <p>Home <br />Stories <br /> Trending Stories <br />Popular Stories </p>
      </div>
      <div className="sig">
        <p>Signup <br />Login <br /> Contact Us</p>
      </div>
      <div >
        <h4>
            Subscribe to our newsletter
        </h4>
       <input type="email" placeholder="Email address" /> <button>Get Started</button>
      
      </div>
   
    </div>
  
  );
};

export default Footer;
