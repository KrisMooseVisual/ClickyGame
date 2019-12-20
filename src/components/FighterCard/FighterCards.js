
import React from "react";
import "./style.css";
// import fighters from "./fighters.json";



const FighterCards = props => (
  <div onClick={() => props.setClicked(props.id)} className="card col-md-3">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);


export default FighterCards;
