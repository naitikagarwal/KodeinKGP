import React, {useEffect, useState} from 'react'
import "./header.css";
import { Link, NavLink } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css'
function Header() {
  useEffect(()=>{
    AOS.init();
  },[ ])

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };


  return (
    <>
        <div className={` head-box `} data-aos="slide-down" data-aos-duration="500"
     >
            <div className="logo-section">
                <img src="/assets/kik-logo.png"/>
                <p>KodeinKGP</p>
            </div>
            <div className="button-section">
              <div className="b-screen">
              <div className='c' data-aos="slide-down" data-aos-duration="2000"><NavLink to="/">Home</NavLink><div className="bottom-bar"></div></div>
              
                <div className='c' data-aos="slide-down" data-aos-duration="2500"><NavLink to="/team">Team</NavLink><div className="bottom-bar"></div></div>
                <div className='c' data-aos="slide-down" data-aos-duration="3000"><NavLink to="/article">Articles</NavLink><div className="bottom-bar"></div></div>
                <div className='c' data-aos="slide-down" data-aos-duration="3000"><NavLink to="/event">Events</NavLink><div className="bottom-bar"></div></div>
              </div>
              <div className="hamburger" onClick={toggleMenu}>
                    ☰
              </div>
              {isOpen && (
                    <div className="fullscreen-menu" data-aos="slide-left" data-aos-duration="1000">
                        <div className="close" onClick={toggleMenu}>✖</div>
                        <div className="menu-items">
                        <div onClick={toggleMenu}><NavLink to="/">Home</NavLink></div>
                        <div onClick={toggleMenu}><NavLink to="/team">Team</NavLink></div>
                        <div onClick={toggleMenu}><NavLink to="/article">Articles</NavLink></div>
                        <div onClick={toggleMenu}><NavLink to="/event">Events</NavLink></div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    </>
  )
}

export default Header
