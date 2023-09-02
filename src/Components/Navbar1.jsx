import React from 'react'
import { Navbar } from 'react-bootstrap'
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Logo from "../assets/logo.png";
import "../styles/navbar1.css";

const Navbar1 = () => {
  return (
   <div>
   <Navbar expand="lg" className="bg-white border-bottom border-2 head">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto my-2 my-lg-0 bar" navbarScroll>
              <Link
                to="/allstories"
                className="text-decoration-none text-dark fw-bold tag"
              >
              <h4>Stories</h4>
              </Link>

              <Link
                to=""
                className="text-decoration-none text-dark fw-bold tag"
              >
               <h4>Contact</h4>
              </Link>
              <Link
                to="/login"
                className="text-decoration-none text-dark fw-bold tag"
              >
              <h4>Sign In</h4>
              </Link>
              <Link to="/register">
              <button className='btni'>Get Started</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
   </div>
  )
}

export default Navbar1




