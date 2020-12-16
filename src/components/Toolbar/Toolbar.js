import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">Robert Selkirk Knox</a>
      </div>
      <div className="spacer" />

      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink activeClassName="is-active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/Books">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/ferns">
              A Taste ...
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
