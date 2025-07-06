
import "./Card.css";
import {Link} from 'react-router-dom';
import React, { useState , useEffect } from 'react';
const Card = ({heading, description, photo, link}) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(max-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);
  return (
    <a className="navCard" href={link}>
    <div className="card-container">
    <img src={photo} alt="" />
    <h2>{heading}</h2>
    <p>{description}</p>
   
  </div>
  </a>
    
    
  );
};

export default Card;
