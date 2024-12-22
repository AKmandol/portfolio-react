import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer-logo">
        <a href="#header">AKM.DEV</a>
      </div>

      <ul className='links'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exprience">Exprience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimoinal">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-social">
        <a target="_blank" href="fb.com"><FaFacebookF/></a>
        <a target="_blank" href="fb.com"><FiInstagram/></a>
        <a target="_blank" href="fb.com"><FiTwitter/></a>
      </div>

      <div className="copyright">
        <small>&copy; Amlan Kumar Mandol <b>.</b> All rights Resverved.</small>
      </div>
    </footer>
  )
}

export default Footer