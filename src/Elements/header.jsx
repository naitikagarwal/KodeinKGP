import React, {useState} from 'react'
import "./header.css";
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };


  return (
    <>
        <div className={` head-box `}>
            <div className="logo-section">
                <img src="/assets/kik-logo.png"/>
                <p>KodeinKGP</p>
            </div>
            <div className="button-section">
              <div className="b-screen">
              <div><Link to="/">Home</Link></div>
                <div><Link to="/team">Team</Link></div>
                <div><Link to="/article">Articles</Link></div>
                <div><Link to="/event">Events</Link></div>
              </div>
              <div className="hamburger" onClick={toggleMenu}>
                    ☰
              </div>
              {isOpen && (
                    <div className="fullscreen-menu">
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
