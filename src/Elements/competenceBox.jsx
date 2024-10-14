import React, { useEffect } from 'react';
import './competenceBox.css'

import AOS from "aos";
import 'aos/dist/aos.css'
const CompetenceBox = () => {
  useEffect(()=>{
    AOS.init({duration:800});
  },[ ])
  return (
    
    <div className="card-container">
      <div className="card"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-offset="150">
        <img src="/assets/web.png"  className="card-image" />
        <h2 className="card-title">Web</h2>
        <p className="card-description">Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.</p>
      </div>


      <div className="card" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-offset="150">
        <img src="/assets/AI.png"  className="card-image" />
        <h2 className="card-title">AI & Metaverse</h2>
        <p className="card-description">Enter a realm where AI drives immersive Metaverse encounters, pushing boundaries of what's possible.</p>
      </div>

      <div className="card" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-offset="150">
        <img src="/assets/blockchain.png"  className="card-image" />
        <h2 className="card-title">Blockchain</h2>
        <p className="card-description">Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.</p>
      </div>

    </div>
    
    );
};

export default CompetenceBox;


// Import Swiper styles


// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
