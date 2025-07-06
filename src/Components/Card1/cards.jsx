import React from "react";
import "./Card.css";

const Card = ({ text, bgImage }) => {
  return (
    <div className="card">
      <img src={bgImage} />
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;