import React from "react";

const BeyCard = (props) => {
  return (
    <div className="card">
      <h2>{props.beyObj.name}</h2>
      <img src={props.beyObj.img}/>
    </div>
  );
};

export default BeyCard;


