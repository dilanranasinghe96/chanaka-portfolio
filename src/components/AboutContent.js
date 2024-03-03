import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/profile.jpg";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a front-end developer. I create responsive secure websites and mobile applications for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>

                
            
        </div>
      
    </div>
  )
}

export default AboutContent

