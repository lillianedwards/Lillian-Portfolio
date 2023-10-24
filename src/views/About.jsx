import React from 'react';
import headshot from '../assets/headshotNoBg.png';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
     <div>
      <h1 className='heading'>About</h1>
      <hr className='line' />
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} s={1} md={1} className='d-flex justify-content-center'>
          <img src={headshot} alt="LillianEdwardsHeadShot" className='headshot' />
          </Col>
          <Col xs={12}  s={11} md={11} >
          <h4 className='aboutMe'>
          Greetings! I'm Lillian, a new Duluth-based front-end developer. I love the UI/UX side of things, but I have a knack for making things work. I can't give up JavaScript, there's still so much to learn!
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