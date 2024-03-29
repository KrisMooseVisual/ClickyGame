/* eslint-disable react/jsx-no-duplicate-props */

import React from "react";
import "./style.css";



const FighterCards = props => (
  <div 
  id={props.name}
  onClick={() => props.fighters(props.id)} className="card col-md-3">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);


export default FighterCards;
