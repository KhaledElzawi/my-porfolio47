import React from 'react'
import './header.css'
import CTA from './CTA'
//import ME from '../../assets/me2.png'
import Me from '../../assets/me3.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Khaled Elzawi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>


      </div>
    </header>

    )
}

export default header