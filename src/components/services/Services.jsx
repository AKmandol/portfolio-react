import React from 'react'
import './services.css'
import {FcCheckmark} from 'react-icons/fc'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article>
          <div className="service">
            <div className="service-head">
              <h3>Graphics Design</h3>
            </div>
            <ul className="service-list">
              <li><FcCheckmark className='service-list-icon'/>
              <p>Logo Design</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Banner Design</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Custom icons</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Flyer Design</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Brochure Design</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Poster Design</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Business Card</p>
              </li>
            </ul>
          </div>
        </article>
        <article>
          <div className="service">
            <div className="service-head">
              <h3>Web Development</h3>
            </div>
            <ul className="service-list">
              <li><FcCheckmark className='service-list-icon'/>
              <p>Convert PSD</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Landing Page</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Custom Wesite Development</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Web Application</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Laravel Secure Website</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Responsive Website</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Custom Admin Panel</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Cross Browser Compatibility</p>
              </li>
            </ul>
          </div>
        </article>
        <article>
          <div className="service">
            <div className="service-head">
              <h3>WordPress Website</h3>
            </div>
            <ul className="service-list">
              <li><FcCheckmark className='service-list-icon'/>
              <p>Premium Theme</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>WP Customization</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>WP Bugs Fix</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Content Update</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Redesign WP</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>WP Update</p>
              </li>
              <li><FcCheckmark className='service-list-icon'/>
              <p>Fast and Robust</p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services