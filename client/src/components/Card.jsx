import React from "react";

const Card = (props) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-header text-center">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
};
export default Card;
