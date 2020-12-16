import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.image} className="card-img-top" alt="me" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Card Body awsdfas asdfas asdf asdf asd fasd faa
        </p>
        <a href="#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
  );
};

export default Card;
