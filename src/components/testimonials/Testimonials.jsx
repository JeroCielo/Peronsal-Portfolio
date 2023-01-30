import React from 'react';
import './testimonials.css';
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import avatar5 from '../../assets/avatar5.jpg'
import avatar6 from '../../assets/avatar6.jpg'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const data = [
  {
    id: 1,
    image: avatar3,
    name: 'ACSL Intermediate',
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt in, sequi maxime numquam assumenda incidunt voluptatibus dolores corrupti voluptate.'
  },
  {
    id: 2,
    image: avatar4,
    name: 'Something',
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt in, sequi maxime numquam assumenda incidunt voluptatibus dolores corrupti voluptate.'
  },
  {
    id: 3,
    image: avatar5,
    name: 'Something',
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt in, sequi maxime numquam assumenda incidunt voluptatibus dolores corrupti voluptate.'
  },
  {
    id: 4,
    image: avatar6,
    name: 'Something',
    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt in, sequi maxime numquam assumenda incidunt voluptatibus dolores corrupti voluptate.'
  }
]


const Testimonials = () => {

  return (
    <section id="testimonials">
      <h5>What I Have</h5>
      <h2>Achieved</h2>

      <Swiper 
        spaceBetween={20}
        navigation={true}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="container testimonials__contianer"
      >
        {
          data.map(({id, image, name, details}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="avatar">
                  <img src={image} alt="avatar"/>
                </div>
                <h5 className="award__name">{name}</h5>
                <small className='discription'>{details}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials