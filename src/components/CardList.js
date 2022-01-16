import React from "react";
import Card from "./Card";
import "./card.css";
const CardList = ({ robots }) => {
  const cardcomp = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return <div className="NinjaContain">{cardcomp}</div>;
};
export default CardList;
