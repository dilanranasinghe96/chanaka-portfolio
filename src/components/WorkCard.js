import "./WorkCardStyles.css";

import React from 'react';
import { NavLink } from 'react-router-dom';


const WorkCard = (props) => {
  return (
    
            <div className="project-card"> 
                <img src={props.imgsrc} alt="image not found"/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        
                        <NavLink to="url.com" className="btn">view</NavLink>
                        <NavLink to={props.view} className="btn" >source</NavLink>
                    
                
                </div>
            </div>
        </div>
  )
}

export default WorkCard
