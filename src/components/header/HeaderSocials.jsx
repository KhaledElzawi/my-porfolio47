import React from 'react'
import {FaGithubAlt} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        
        <a href="https://github.com" target="_blank"><FaGithubAlt/></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials