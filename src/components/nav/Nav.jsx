import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiCodeAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage3Line} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#0" onClick={() => setActiveNav('#0')} className={activeNav === '#0' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#exprience" onClick={() => setActiveNav('#exprience')} className={activeNav === '#exprience' ? 'active' : ''}><BiCodeAlt/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage3Line/></a>
    </nav>
  )
}

export default Nav