import React from 'react';
import headshot from '../assets/LillianPhoto.png';
import { Container, Row, Col } from 'react-bootstrap';


function About() {
  return (
     <div>
      <h1 className='heading'>Lillian Edwards</h1>
      <h2 className='heading'>Front-End Developer</h2>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={3} className='d-flex justify-content-center'>
          <img src={headshot} alt="LillianEdwardsHeadShot" className='headshot' />
          </Col>
          <Col xs={12}  md={9} >
          <h4 className='aboutMe'>
          Greetings! I'm Lillian, a new Duluth-based front-end developer. I love React and making beautiful and user-friendly designs come to life through React. I am currently exploring Vue.js and Material UI. 
          </h4>
          <h4 className='aboutMe'>
          I bring collaboration skills, a user-centric perspective, and information architecture proficiency from my previous career as a classroom teacher. I can also make up a song about almost anything, thank you Kindergarten!
          </h4>
          <h4 className='aboutMe'>
          When I'm not coding, or on Figma, I'm in a hot yoga class, trying out a new recipe, or reading a good historical-fiction novel. Thanks for taking a peek around here, I'm happy to have you! 🦋
          </h4>
          
          </Col>
        </Row>
      </Container>
     </div>
  )
}

export default About