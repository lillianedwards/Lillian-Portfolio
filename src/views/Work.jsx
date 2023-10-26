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
      <img src={menuMatch} alt="Menu Match Desktop" className='img-fluid' />
      <Carousel.Caption>
        <h3 className='workH3'>Menu Match</h3>
        <p className='workP'>A front-end application that uses two-third party API's to supply users with food and cocktail recipes. Users can save recipes and save individual ingredients to an in-app sortable shopping list.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={littleSite} alt="Little Site Of Horrors Desktop" className='img-fluid' />
      <Carousel.Caption>
        <h3 className='workH3'>Little Site of Horrors</h3>
        <p className='workP'>A full-stack application that houses a scary movie database and customizable user profile to share favorite scary movies with fellow users.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={weather} alt="Weather Dashboard UI" className='img-fluid' />
      <Carousel.Caption>
        <h3 className='workH3'>Weather Dashboard</h3>
        <p className='workP'>
        The weather dashboard allows users to search by city to see the current weather and 5-day forecast, as well as access and manage previous cities they've searched.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={password} alt="Password Generator UI" className='img-fluid' />
      <Carousel.Caption>
        <h3 className='workH3'>Password Generator</h3>
        <p className='workP'>
        A front-end tool that uses a variety of JavaScript functions to check an inputted password.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={employee} alt="CLI Employee Tracker" className='img-fluid' />
      <Carousel.Caption>
        <h3 className='workH3'>Command Line Employee Tracker</h3>
        <p className='workP'>
        A command-line tool for business owners to quickly track and update employees, departments, salaries, and managers.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={note} alt="Note-Take Application UI" className='img-fluid' />
      <Carousel.Caption>
        <h3 className="workH3">Note-Taker Application</h3>
        <p className='workP'>
        A front-end tool that allows users to schedule out their 9-5 workday, and adjusts styling to the time of day to increase efficiency.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </Container>
    
  )
  
}

export default ControlledCarousel;
