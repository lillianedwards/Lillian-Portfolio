import React from 'react';

import resume from '../assets/LillianEdwardsFrontEndImg.png';
import {motion} from 'framer-motion';
import pdf  from '/LillianEdwardsFrontEnd.pdf'


function Resume() {
 

  return (


<div className='d-flex justify-content-center resume'>
  <motion.div
  className="box"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
  <a 
  href={pdf} 
  target='_blank' 
  // download={pdf}
  ><img id='resume' src={resume} alt="Lillian Edwards Resume" /></a>
</motion.div>
  </div>

    )
  }
  
  export default Resume






