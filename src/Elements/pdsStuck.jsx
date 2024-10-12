import React from 'react';
import './pdsStuck.css';
import Lottie from 'lottie-react'

import doubt from './doubt.json'

function PdsStuck() {
  return (
    <>
      <div className="p-container">
        <div className="leftContent">
            <div className="lHead">Facing Problems in PDS ?</div>
            <div className="lMain">Our PDS Question Bank will help you!!!</div>
        </div>
        <div className="rightBox"><Lottie animationData={doubt}/></div>
      </div>
    </>
  )
}

export default PdsStuck
