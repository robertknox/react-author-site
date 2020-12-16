import React from "react";

import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => (
  <button className="ToggleButton" onClick={props.click}>
    <div className="ToggleButton_Line" />
    <div className="ToggleButton_Line" />
    <div className="ToggleButton_Line" />
  </button>
);

export default DrawerToggleButton;
