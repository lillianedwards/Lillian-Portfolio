import React from 'react';

import resume from '../assets/resume.png';
import {motion} from 'framer-motion';
import pdf  from '../assets/Lillian_Edwards_-_UX_Designer.pdf'


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
  ><img src={resume} alt="Lillian Edwards Resume" /></a>
</motion.div>
  </div>

    )
  }
  
  export default Resume






