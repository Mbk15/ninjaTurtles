import React from "react";
import "./card.css";
import "../index.css";
const Card = ({ name, email, id }) => {
  return (
    <div className="NinjaContainer">
      <img alt="Ninja Turtles" src="https://robohash.org/op?set=set2" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
