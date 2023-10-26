import React from 'react';

import resume from '../assets/resume.png';
import {motion} from 'framer-motion';


function Resume() {
 

  return (


<div className='d-flex justify-content-center resume'>
  <motion.div
  className="box"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
  <a href={resume} target='_blank' download={resume}><img src={resume} alt="Lillian Edwards Resume" /></a>
</motion.div>
  </div>

    )
  }
  
  export default Resume






