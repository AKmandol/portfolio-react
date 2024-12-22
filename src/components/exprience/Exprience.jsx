import React from 'react'
import './exprience.css'
import {FaHtml5} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {FaBootstrap} from 'react-icons/fa'
import {DiJavascript} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {SiVault} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'

const Exprience = () => {
  return (
    <section id='exprience'>
      <h5>Skills I have</h5>
      <h2>My Exprinence</h2>
      <div className="container exprience-container">
        
        <div className="exprience-frontend">
          <h3>Frontend Development</h3>
            <div className="exprience-content">
              <article className='exprience-details'>
                  <FaHtml5 className='icon'/>
                  <div>
                    <h4>HTML</h4>
                  <small className='text-light'>Exprienced</small>
                  </div>
              </article>
              <article className='exprience-details'>
                  <IoLogoCss3 className='icon'/>
                  <div>
                    <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='exprience-details'>
                  <FaBootstrap className='icon'/>
                  <div>
                    <h4>Bootstarp</h4>
                  <small className='text-light'>Exprienced</small>
                  </div>
              </article>
              <article className='exprience-details'>
                  <DiJavascript className='icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='exprience-details'>
                  <FaReact className='icon'/>
                  <div>
                  <h4>React Js</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='exprience-details'>
                  <SiVault className='icon'/>
                  <div>
                  <h4>Vue Js</h4>
                  <small className='text-light'>Exprienced</small>
                  </div>
              </article>
            </div>
        </div>
        <div className="exprinence-backend">
        <h3>Backend Development</h3>
            <div className="exprience-content">
              <article className='exprience-details'>
                  <SiPhp className='icon'/>
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Exprienced</small>
                  </div>
              </article>
              <article className='exprience-details'>
                  <DiJavascript className='icon'/>
                  <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='exprience-details'>
                  <DiJavascript className='icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='exprience-details'>
                  <SiMysql className='icon'/>
                 <div>
                 <h4>MySql</h4>
                  <small className='text-light'>Basic</small>
                 </div>
              </article>
              <article className='exprience-details'>
                  <FaPython className='icon'/>
                 <div>
                 <h4>Python</h4>
                  <small className='text-light'>Bellow Basic</small>
                 </div>
              </article>
            </div>
        </div>
        
        </div>   
    </section>
  )
}

export default Exprience