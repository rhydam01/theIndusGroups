import React from 'react';
import "./Aboutus.css";

const Aboutus = ({ heading, descript, photo }) => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={photo} alt="About Us"/>
      </div>
      <div className="text-container">
        <h1>{heading}</h1>
        <p>{descript}</p>
      </div>
    </div>
  );
};

export default Aboutus;