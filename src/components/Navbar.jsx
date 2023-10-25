import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import brand from "../assets/EdwardsBrand2.svg";
import { motion } from "framer-motion";
const MLink = motion(Link);

function Header() {
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
              className="nav-link"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
            >
              About
            </MLink>

            <MLink
            to="/work" 
            className="nav-link"
            variants={fadeInVariants}
            initial='hidden'
            animate='visible'
            >
              Work
            </MLink>

            <MLink 
            to="/contact" 
            className="nav-link"
            variants={fadeInVariants}
            initial='hidden'
            animate='visible'
            >
              Contact
            </MLink>

            <MLink 
            to="/resume" 
            className="nav-link"
            variants={fadeInVariants}
            initial='hidden'
            animate='visible'
            >
              Resume
            </MLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
