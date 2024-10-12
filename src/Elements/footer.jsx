import React from 'react'
import { FaFacebook, FaInstagram, FaMedium, FaLinkedin} from "react-icons/fa";
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="right">
            <div className="logoSec">
            <img className='logo' src="/assets/kik-logo.png" />
            <p>KodeinKGP</p>
            </div>
            <div className="contentSec">
            <p>Indian Institute of Technology Kharagpur, <br />
            West Bengal - 721302</p> 
            
            <p><a href="https://www.facebook.com/kodeinkgp"><FaFacebook size={30}/></a>
            <a href="https://www.instagram.com/kodeinkgp_iitkgp"><FaInstagram size={30}/> </a> 
            
            <a href="https://www.linkedin.com/company/kodeinkgp/"><FaLinkedin size={30}/></a><a href="https://medium.com/@kodeinkgp"><FaMedium size={30}/></a> </p>
            </div>
        </div>
        <div className="left">
            <h2>Resources</h2>
            <a href='https://www.youtube.com/watch?v=gyMwXuJrbJQ'>freeCodeCamp</a>
            <a href='https://www.youtube.com/@Deeplearningai'>DeepLearningAI</a>
            <a href='https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg'>CodeWithHarry</a>
            <a href="https://www.youtube.com/@WhiteboardCrypto">WhiteboardCrypto</a>
        </div>
    
    </div>
  )
}

export default Footer
