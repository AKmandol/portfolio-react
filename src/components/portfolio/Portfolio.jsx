import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/p-1.png'
import IMG2 from '../../assets/p-2.png'
import IMG3 from '../../assets/p-3.png'
import IMG4 from '../../assets/p-4.png'
import IMG5 from '../../assets/p-5.png'
import IMG6 from '../../assets/p-6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Laravel & Vue Admin Panel',
    github: 'https://github.com/AKmandol',
    demo: 'https://www.youtube.com/playlist?list=PLlILGKf_T08InTY0-Ou12F4q6TbHOYwTn'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Stylish E-commerce Website',
    github: 'https://github.com/AKmandol',
    demo: 'https://www.youtube.com/playlist?list=PLlILGKf_T08InTY0-Ou12F4q6TbHOYwTn'
  },
  {
    id: 3,
    image: IMG3,
    title: 'A HTML CSS Light Design Page',
    github: 'https://github.com/AKmandol',
    demo: 'https://www.youtube.com/playlist?list=PLlILGKf_T08InTY0-Ou12F4q6TbHOYwTn'
  },
  {
    id: 4,
    image: IMG4,
    title: 'WordPress Travel Agency Website',
    github: 'https://github.com/AKmandol',
    demo: 'https://www.youtube.com/playlist?list=PLlILGKf_T08InTY0-Ou12F4q6TbHOYwTn'
  },
  {
    id: 5,
    image: IMG5,
    title: 'A Basic Bootstarp Design',
    github: 'https://github.com/AKmandol',
    demo: 'https://www.youtube.com/playlist?list=PLlILGKf_T08InTY0-Ou12F4q6TbHOYwTn'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Transparent HTML CSS Template',
    github: 'https://github.com/AKmandol',
    demo: 'https://www.youtube.com/playlist?list=PLlILGKf_T08InTY0-Ou12F4q6TbHOYwTn'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(

        <article key={id} className='portfolio-item'> 
          <div className="portfolio-item-img">
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary'> Youtube</a>
            </div>
          </div>
        </article>

            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio