import React from 'react'
import './competenceBox.css'
const CompetenceBox = ({animat, heading, info }) => {
    return (
      <div className="c-container">
        <div className="leftBox">
          {animat}
        </div>
        <div className="rightContent">
          <p className="rightHead">{heading}</p>
          <p className="rightInfo">{info}</p>
        </div>
      </div>
    );
  };

export default CompetenceBox
