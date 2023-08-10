import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowDownCircle} from "react-icons/bs";
const About = () => {
  return (
    <div>
      <br></br>
      <h2>To crete and View awesome Post...!</h2>
      
      <p><h3><BsArrowDownCircle /></h3></p>
      <br></br>
      <br></br>
      <Link to ='/' className='custom-link'>
        <h4>Visit Home Page </h4>
      </Link>
    </div>
  )
}

export default About
