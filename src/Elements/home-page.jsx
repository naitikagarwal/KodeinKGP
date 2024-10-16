import React, { useState, useEffect } from 'react'
import './home-page.css'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion';
import animationData from './First.json'

import AOS from "aos";
import 'aos/dist/aos.css'

import StaggerText from "react-stagger-text";

import CounterCard from './counterCards';
import CompetenceBox from './competenceBox';
import PdsStuck from './pdsStuck';
import Footer from './footer';
function HomePage() {
  const [showText, setShowText] = useState(false);
    const [isMoving, setIsMoving] = useState(true);

    useEffect(()=>{
      AOS.init({duration:800});
    },[ ])

    useEffect(() => {
        const interval = setInterval(() => {
            setIsMoving(prev => !prev); // Toggle movement
        }, 1000); // Change direction every second

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

  const handleClick = () => {
    setShowText(true);
  };
  return (
    <>
        <div className="first-home" data-aos="fade" data-aos-duration="2000">
            <div className="left-container">
                <p className='unlock'>Unlock the Potential of Web 3.0's with <br /> 
                <p className='headText'  data-aos="slide-right" data-aos-duration="1000">KodeinKGP</p>
                </p>
                <p className='mainSecond'>A student-run society exploring Web 3.0, Blockchain, and AI through workshops, hackathons, and real-world projects. Join us to gain cutting-edge skills, drive social impact, and shape the future of technology. <br /> 
                {!showText && (
                <button className={`arrow moving-button ${isMoving ? 'up' : 'down'}`} onClick={handleClick}>
                    <img src="/assets/arrow.png" alt="" srcset="" />
                </button>
            )}
            <div className={`text-containr  ${showText ? 'fade-in' : 'fade-out'}`}>
                {showText && <p>
                  We leverage our expertise in web development and blockchain to tackle real-world challenges faced by the IIT Kharagpur community and beyond. By joining KodeinKGP, students can: <br /><p className='points'>
                - Develop valuable technical expertise <br />
                - Contribute to meaningful projects addressing pressing issues <br />
                - Stay ahead of the curve in the rapidly evolving tech landscape</p>
                <button className={`button-24`} role="button">Explore our Events</button>
                  </p>
                  }
            </div> </p>
                                
            </div>
            <div className="rightContainer" data-aos="slide-left" data-aos-duration="2000">
              <Lottie animationData={animationData}/>
            </div>
        </div>
        <div className="cardSection" >
          <CounterCard title={"PDS Problems"} digit={260}/>
          <CounterCard title={"Articles "} digit={17}/>
          <CounterCard title={"Events"} digit={15}/>
          <CounterCard title={"Community Members"} digit={700} xtra={'0'}/>
        </div>
        <div className="competence-section">
            <div className="competence-header">
              <div className="moving-underline-text">
                <p className='competence-section'>Our Competence</p>
                <motion.div
                  className="underline"
                  initial={{ width: '50%', x: 0 }}
                  animate={{ 
                    x: ['-20%', '20%', '-20%'], // Move left and right
                    width: ['30%', '70%', '30%'], // Vary length
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: 'easeInOut', 
                    repeat: Infinity 
                  }}
                />
              </div>
            </div>
            <CompetenceBox/>
            
        </div>
        <a href="https://kodeinkgp.in/pds"><PdsStuck/></a>
        
        <Footer/>
     

    </>
  )
}

export default HomePage
