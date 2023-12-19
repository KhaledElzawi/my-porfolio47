import React from 'react'
import './about.css'
import ME from '../../assets/about_me2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="don't look at me <>____" />
              

            </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
               <h5>Experience</h5>
               <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
               <h5>Clients</h5>
               <small>5+ Clients</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
               <h5>Projects</h5>
               <small>4+ Completed</small>
            </article>
          </div>
          <p>
            Hello welcome to my portfolio ,
            This section content information about me ,
            I hope you will enjoy with my site . 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about