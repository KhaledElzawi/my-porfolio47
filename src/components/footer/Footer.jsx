import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Khaled</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF className='icon'/></a>
        <a href="https://instgram.com"><FiInstagram/></a>
        
      </div>

      <div className="footer_copyright">
        <small>&copy; Khaled Elzawi. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer