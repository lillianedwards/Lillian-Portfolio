import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import menuMatch from '../assets/workImages/MenuMatchDesktop1.png';
import littleSite from "../assets/workImages/LittleSiteOfHorrors.png";
import weather from "../assets/workImages/WeatherDashboard.png";
import password from "../assets/workImages/PasswordGenerator.png";
import employee from "../assets/workImages/cliEmployeeTracker2.png";
import note from "../assets/workImages/NoteTakerAppScreenshot.png"




function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);



  };
  return ( 
   <Container className='d-flex justify-content-center'>
    <Carousel className='carouselSize' activeIndex={index} onSelect={handleSelect} touch={true} indicators={false}>
    <Carousel.Item>
      <a href="https://jkellogg01.github.io/menu-match/index.html#">
      <img src={menuMatch} alt="Menu Match Desktop" className='img-fluid' /></a>
      <Carousel.Caption>
        <h3 className='workH3'>Menu Match</h3>
        <p className='workP'>A front-end application that uses two-third party API's to supply users with food and cocktail recipes. Users can save recipes and save individual ingredients to an in-app sortable shopping list.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <a href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/">
      <img src={littleSite} alt="Little Site Of Horrors Desktop" className='img-fluid' /></a>
      <Carousel.Caption>
        <h3 className='workH3'>Little Site of Horrors</h3>
        <p className='workP'>A full-stack application that houses a scary movie database and customizable user profile to share favorite scary movies with fellow users.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
   
   
    
  </Carousel>
  </Container>
    
  )
  
}

export default ControlledCarousel;
