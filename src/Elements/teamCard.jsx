import React from 'react'
import './teamCard.css'
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";


function Teamcard({Position, name, insta, fb, li}) {
  return (
    <>
       <div className="card">
            <h3 className="card-title">{Position}</h3> 
            <div className="card-image">
              <img
                src="https://raw.githubusercontent.com/kodeinkgp/Photos/refs/heads/main/aadish.jpg" 
                alt="Sample"
                className=""
            />
            </div>
            
            <div className="overlay">
                <div className="social-icons">
                    <a href={insta}target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></a>
                    <a href={fb} target="_blank" rel="noopener noreferrer"><FaFacebook size={30}/></a>
                    <a href={li} target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a>
                </div>
            </div>
            <div className="card-name">{name}</div> 
        </div>
    </>
  )
}

export default Teamcard
