import React from "react";
import { Container, Row, Col } from "reactstrap";

import me_pic from "../../images/me.jpg";
import "./About.css";
import Card from "../Card/Card";

const about = () => {
  console.log("Here in about");
  return (
    <div className="About">
      <div className="aboutContainer">
        <Container className="align-items-center">
          <h2>Robert Selkirk Knox</h2>
          <Row>
            <Col className="col-md-5">
              <img
                src={me_pic}
                alt="me"
                style={{ height: "350px", width: "250px" }}
              ></img>
            </Col>
            <Col className="col-md-5">
              <p style={{ width: "100%", margin: "auto", paddingTop: "1em" }}>
                Robert Selkirk Knox is a programmer that has written two crime novels. After
                finishing school at UCSC, he has lived in Barcelona, Rio de janeiro,
                Tours, France, Montreal and San Francisco. He has a
                vague idea of traveling the world playing music and setting a crime novel in each
                place he visits.
              </p>
	      <hr/>
              <p> He can be reached at robertselkirkknox@yahoo.com </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default about;
