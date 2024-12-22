import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {IoIosArrowRoundForward} from 'react-icons/io'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
             <div className="about-me-img">
               <img src={ME} alt="about-me" /></div>    
        </div>
        <div className="about-content">
              <div className="about-cards">
                <article className='about-card'>
                  <FaAward className='about-icon'/>
                  <h5>Exprience</h5>
                  <small>3+ Years Working Exprience</small>   
                </article>
                <article className='about-card'>
                  <FiUsers className='about-icon'/>
                  <h5>Clients</h5>
                  <small>20+ Happy Clients</small>   
                </article>
                <article className='about-card'>
                  <VscFolderLibrary className='about-icon'/>
                  <h5>Projects</h5>
                  <small>30+ Completed Projects</small>   
                </article>
              </div>
              <p>
              Hello there, I have completed my undergraduation program
              B.Sc in CSE on State University of Bangladesh.
              During this time I have learned many and more 
              about web Technology, also life. Actually my
              interest of Web Development came from one of my
              University project.
              <br/>
              <br/>
              <small> <IoIosArrowRoundForward/> Web Development on laravel framwork on Latentsoft</small> <br/>
              <small> <IoIosArrowRoundForward/> Graphics Design and Web Design on PerpitualIt</small>
              </p>
              <a href="#contact" className='btn btn-primary about-btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About