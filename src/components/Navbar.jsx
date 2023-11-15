import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import brand from "../assets/EdwardsBrand2.svg";
import { motion } from "framer-motion";
// import Underline from './Underline';
const MLink = motion(Link);

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Extract the path from the URL
    const path = location.pathname;

    // Map the path to the link name
    const linkMapping = {
      "/about": "about",
      "/work": "work",
      "/contact": "contact",
      "/resume": "resume",
    };

    // Set the active link based on the path
    setActiveLink(linkMapping[path] || "");
  }, [location]);
  
  const fadeInVariants = {
    hidden: { opacity: 5, y: -50 },
    visible: {
      opacity: 50,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  return (
    <Navbar expand="lg" className="bg-body-transparent">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>
          <img
            alt="Portfolio Signature Logo"
            src={brand}
            className="nav-brand"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fs-1">
            <MLink
              to="/about"
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
             
            >
              About
            
             
            </MLink>

            <MLink
              to="/work"
              className={`nav-link ${activeLink === "work" ? "active" : ""}`}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              
            >
              Work
             
              
            </MLink>

            <MLink
              to="/contact"
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            
            >
              Contact
              
            </MLink>

            <MLink
              to="/resume"
              className={`nav-link ${activeLink === "resume" ? "active" : ""}`}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
             
            >
              Resume
             
            </MLink>
            {activeLink && (
                <motion.div
                initial={{ width: "0%" }}
                animate={{ width: '100%'}}
                transition={{ duration: 0.3 }}
                className="underline"
              />
              
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
