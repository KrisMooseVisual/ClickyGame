
import React from "react";
import "./style.css";


const FighterCards = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
        <span onClick={() => props.removeFighter(props.id)} className="card">
        <button>Choose</button>
      </span>
      </div>
      {/* <span onClick={() => Math.floor(Math.random(13), className="card"> 
      </span> */}
    </div>
  );
}

export default FighterCards;
