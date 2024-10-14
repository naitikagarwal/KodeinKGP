import React, {useEffect, useState} from 'react'
import "./header.css";
import { Link } from 'react-router-dom';
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
              <div className='c' data-aos="slide-down" data-aos-duration="2000"><Link to="/">Home</Link><div className="bottom-bar"></div></div>
              
                <div className='c' data-aos="slide-down" data-aos-duration="2500"><Link to="/team">Team</Link><div className="bottom-bar"></div></div>
                <div className='c' data-aos="slide-down" data-aos-duration="3000"><Link to="/article">Articles</Link><div className="bottom-bar"></div></div>
                <div className='c' data-aos="slide-down" data-aos-duration="3000"><Link to="/event">Events</Link><div className="bottom-bar"></div></div>
              </div>
              <div className="hamburger" onClick={toggleMenu}>
                    ☰
              </div>
              {isOpen && (
                    <div className="fullscreen-menu" data-aos="slide-left" data-aos-duration="1000">
                        <div className="close" onClick={toggleMenu}>✖</div>
                        <div className="menu-items">
                        <div onClick={toggleMenu}><Link to="/">Home</Link></div>
                        <div onClick={toggleMenu}><Link to="/team">Team</Link></div>
                        <div onClick={toggleMenu}><Link to="/article">Articles</Link></div>
                        <div onClick={toggleMenu}><Link to="/event">Events</Link></div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    </>
  )
}

export default Header
