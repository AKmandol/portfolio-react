import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/akm.jpg'
import BESTFAV from '../../assets/FAV.jpg'
import BestFont from '../../assets/BESTFONT.jpg'
import BESTBACK from '../../assets/BESTBACK.jpg'
import SEA from '../../assets/sea.png'
import BOOSUPBIZFAV from '../../assets/FAVBOOST.jpg'
import BOOSUPBIZ from '../../assets/BOOSUPBIZ.png'
import ECOM from '../../assets/ECOM.png'
import ECOMBACK from '../../assets/ECOM_BACK.png'
import SHIMUL from '../../assets/SHIMULBALA.png'
import SHIMULFAV from '../../assets/SHIMULFAV.jpg'
import DYNAMIC from '../../assets/DYNAMIC.png'
import HeaderSocial from './HeaderSocial'
import { CiTimer } from "react-icons/ci";

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Amlan Kumar Mandol</h1>
        <h5 className='text-light'>Web App Developer</h5>
        <CTA/>
        <HeaderSocial/>
        
        <h2 className="live">Live Project</h2>
        <h5>Laravel and Vue Js</h5>
        

        <ul className="cards">

          <li>
            <a href="https://mydemov1.com" target="_blank" className="card">
              <img src={ECOM} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={ME} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Front-End<br/> <span className="tcolor">E-COMMERCE</span></h3>
                    <div className="date">
                      <CiTimer  className='service-list-icon'/>
                      <small>05.10.2024</small>
                    </div>
                  </div>
                </div>
                <p className='btnn'>Live Demo</p>
              </div>
            </a>
          </li>

          <li>
            <a href="https://mydemov1.com/admin-login" target="_blank" className="card">
              <img src={ECOMBACK} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={ME} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Back-End <br/> <span className="tcolor">E-COMMERCE</span></h3>
                    <div className="date">
                      <CiTimer  className='service-list-icon'/>
                      <small>05.10.2024</small>
                    </div>
                  </div>
                </div>
                <p className='btnn'>Live Demo</p>
              </div>
            </a>
          </li>

          <li>
            <a href="http://vblog.besttourinfo.com" target="_blank" className="card">
              <img src={BestFont} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={BESTFAV} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Front-End<br/> <span className="tcolor">Travel Agency</span></h3>
                    <div className="date">
                      <CiTimer  className='service-list-icon'/>
                      <small>03.02.2022</small>
                    </div>
                  </div>
                </div>
                <p className='btnn'>Live Demo</p>
              </div>
            </a>
          </li>

          <li>
            <a href="https://vblog.besttourinfo.com/admin-login" target="_blank" className="card">
              <img src={BESTBACK} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={BESTFAV} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Back-End <br/> <span className="tcolor">Travel Agency</span></h3>
                    <div className="date">
                      <CiTimer  className='service-list-icon'/>
                      <small>03.02.2022</small>
                    </div>
                  </div>
                </div>
                <p className='btnn'>Live Demo</p>
              </div>
            </a>
          </li>

          <li>
            <div className="card2">
              <div className="login2">
                <p><b>Link :</b></p>
                <p><a target="_blank" href="https://mydemov1.com/admin-login"> mydemov1.com/admin-login</a></p>
              </div>
              <div className="login">
                <p><b>Login :</b></p>
                <p>admin@gmail.com</p>
              </div>
              <div className="login">
                <p><b>Password :</b></p>
                <p>password</p>
              </div>

              <div className="login2 mt-3">
                <p><b>Link :</b></p>
                <p><a target="_blank" href="https://vblog.besttourinfo.com/admin-login">https://vblog.besttourinfo.com/admin-login</a></p>
              </div>
              <div className="login">
                <p><b>Login :</b></p>
                <p>admin@gmail.com</p>
              </div>
              <div className="login">
                <p><b>Password :</b></p>
                <p>password</p>
              </div>
            </div>
          </li>
           
        </ul>


        <h2 className="live">Other Live Project</h2>
        <h5>WP and HTML CSS JS</h5>


        <ul className="cards">

          <li>
            <a href="https://akmandol.github.io/SeaTravel/" className="card">
              <img src={SEA} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={ME} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">HTML CSS JS <br/> <span className="tcolor">Sea View Design</span></h3>
                  </div>
                </div>
                <p className='btnn'>Live Demo</p>
              </div>
            </a>
          </li>
          
          <li>
            <a href="https://boostupbiz.com/" className="card">
              <img src={BOOSUPBIZ} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={BOOSUPBIZFAV} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">WP It Company <br/> <span className="tcolor">BoostUpBiz</span></h3>
                  </div>
                </div>
                <p className='btnn'>Live Demo</p>
              </div>
            </a>
          </li>
          
          <li>
            <a href="https://shimulbala.com/" className="card">
              <img src={SHIMUL} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={SHIMULFAV} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">WP Portfolio <br/> <span className="tcolor">Shimul Bala</span></h3>
                  </div>
                </div>
                <p className='btnn'>Live Demo</p>
              </div>
            </a>
          </li>

          <li>
            <a href="https://dynamictechit.com/" className="card">
              <img src={DYNAMIC} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={ME} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Laravel Vue JS <br/> <span className="tcolor">DynamicTechIt</span></h3>
                  </div>
                </div>
                <p className='btnn'>Live Demo</p>
              </div>
            </a>
          </li>
                
        </ul>

      </div>
    </header>
  )
}

export default Header