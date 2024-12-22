import React from 'react'
import './testimonial.css'
import CLT1 from '../../assets/av1.jpg'
import CLT2 from '../../assets/av2.jpg'
import CLT3 from '../../assets/av3.jpg'
import CLT4 from '../../assets/av4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css';




// import required modules
import { Pagination, Navigation } from "swiper";


const data = [
  {
    avatar: CLT1,
    name: 'Penny',
    review: 'Nice and smooth process. Professional and very good communication skill. seller was patient and understand the requirements, plus, he brought his own input that was more than welcome...Definitely working with him again...'
  },
  {
    avatar: CLT2,
    name: 'Sheldon Cooper',
    review: 'What a fantastic programmer. Will stay up all hours making sure his work is perfect! and his deliveries always are! He has truly become a friend.'
  },
  {
    avatar: CLT3,
    name: 'Leonard Hofstadter',
    review: 'Great comunication and work. He can do any project. 100% recommended for any kind of web page project. Great quality, he makes sure to solve all the questions. is very good.'
  },
  {
    avatar: CLT4,
    name: ' Bernadette Rostenkowski',
    review: 'He helped me with my issues and was always friendly and had a quick reply. would recommend him for next time.'
  }  
]

const Testimonial = () => {
  return (
    <section id='testimoinal'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="mySwiper container testimonials-container"
      slidesPerView={1}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {
          data.map(({avatar,name,review}, index) => {
            return(
        <SwiperSlide key={index} className='testimonial'>
          <div className="client">
          <img src={avatar} alt="aVATER" />
          </div>
          <h5 className='client-name'>{name}</h5>
          <small className='client-review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial