import React from 'react'
import "./header.css";
function Header() {
  return (
    <>
        <div className="head-box">
            <div className="logo-section">
                <img src="/assets/kik-logo.png"/>
                <p>KodeinKGP</p>
            </div>
            <div className="button-section">
                <div>Home</div>
                <div>Team</div>
                <div>Articles</div>
                <div>Events</div>
            </div>
        </div>
    </>
  )
}

export default Header
