import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Card from "../Card/Card";
import BBB_image from "../../images/BBB_image.jpg";
import SF_image from "../../images/SF_image.jpg";
import "./Books.css";

const Books = (props) => {
  return (
    /* <div className="container-fluid d-flex justify-content-center "> */
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-6">
          <Card image={BBB_image} title="Barcelona, The Beautiful Bones" />
        </div>

        <div className="col-md-6">
          <Card image={SF_image} title="Sirens In The Ferns" />
        </div>
      </div>
    </div>
  );
};

export default Books;
