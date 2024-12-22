import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.facebook.com/amlan.mandol/"><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/amlan-kumar-mandol-644b061b8/"><BsLinkedin/></a>
        <a href="https://github.com/AKmandol"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial