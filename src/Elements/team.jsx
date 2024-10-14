import React, { useEffect } from 'react'
import "./team.css"
// import Teamcard from './teamCard'
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from "aos";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft  } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';


function Team() {
  useEffect(()=>{
    AOS.init();
  },[ ])

  return (
    <>

      
      <div className="container" data-aos="fade" data-aos-duration="2000">
        <h1 className='heading'>Heads</h1>
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} slidesPerView={'auto'} coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5,
         }}
         pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
          
          <SwiperSlide> 
            <div className="head1">Executive Head</div>
            <img src="https://raw.githubusercontent.com/kodeinkgp/Photos/refs/heads/main/aadish.jpg" alt="" />
            <div className="name">Aadish Jain</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>
            
          <SwiperSlide> 
            <div className="head1">Executive Head</div>
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQEWCH76MQmrZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1672861985385?e=1729123200&v=beta&t=3HvWxf1h0-NPeCh3qePjJ7gQbkuBPh74QYXiOhLQ4j8" alt="" />
            <div className="name">Akash Manna</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>

          <SwiperSlide> 
            <div className="head1">Tech Head</div>
            <img src="https://github.com/kodeinkgp/Photos/blob/main/prabhash.jpg?raw=true" alt="https://github.com/kodeinkgp/Photos/blob/main/prabhash.jpg?raw=true" />
            <div className="name">G.M.M. Prabhash</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>

          <SwiperSlide> 
            <div className="head1">Tech Head</div>
            <img src="" alt="" />
            <div className="name">Adarsh Tadiparthi</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>

          <SwiperSlide> 
            <div className="head1">AI and Metaverse Head</div>
            <img src="https://github.com/kodeinkgp/Photos/blob/main/bhavesh.jpg?raw=true" alt="" />
            <div className="name">Bhavesh Pabnani</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="head1">AI and Metaverse Head</div>
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQHJQVHJDMwquw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698948413842?e=1729123200&v=beta&t=RhOH4RhmRoa4OhsNlyC0QPmekghZvhWdX8liZ3tRIpc" alt="" />
            <div className="name">Parijat Sutradhar</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="head1">Blockchain Head</div>
            <img src="https://github.com/kodeinkgp/Photos/blob/main/swadin.jpg?raw=true" alt="" />
            <div className="name">Swadhin Kumar biswal</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="head1">Blockchain Head</div>
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQE5pGwQOvewqw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719025867324?e=1729123200&v=beta&t=XtEPX_JO5NHgd8KnG100VnGoIcbPDi9wauUqthlqJFI" alt="" />
            <div className="name">Ujjawal Agrawal</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="head1">Design Head</div>
            <img src="https://github.com/kodeinkgp/Photos/blob/main/shashi%20bhushan.jpg?raw=true" alt="" />
            <div className="name">Shashi Bhushan</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="head1">Events Head</div>
            <img src="https://github.com/kodeinkgp/Photos/blob/main/ayushi.jpg?raw=true" alt="" />
            <div className="name">Ayushi Pradhan</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="head1">Finance Head</div>
            <img src="https://media.licdn.com/dms/image/v2/D5603AQFvun_Ii2KqLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1679645394465?e=1729123200&v=beta&t=jSfUivYaakUicPZ1GV0SpM3kRhN0JU_IMUbSD0DtjNM" alt="" />
            <div className="name">Makrawat Singh</div>
            <div className="handles">
              <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25}/></a>
              <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
          </SwiperSlide>
          
          <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaArrowAltCircleLeft/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowAltCircleRight/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        </Swiper>
      </div>


    </>
  )
}

export default Team
