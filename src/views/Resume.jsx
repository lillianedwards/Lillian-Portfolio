import React from 'react';
import resume from '../assets/resume.png';
import pdf from '../assets/Lillian_Edwards_-_UX_Designer.pdf';

function Resume() {
  return (
    <div className='container d-flex'>
      <h1>Add Download Animation</h1>
      <a href={pdf} target='_blank' download={pdf}>
      <img src={resume} alt="Lillian Edwards Resume" className='' /></a>

    </div>
  )
}

export default Resume