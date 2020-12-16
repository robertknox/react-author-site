import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Home from "./components/Home/Home.js";
import Fiction from "./components/Fiction/Fiction.js";
import About from "./components/About/About.js";
import Books from "./components/Books/Books.js";
import Contact from "./components/Contact/Contact.js";
import Ferns from "./components/Ferns/Ferns.js";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  handleDrawerToggleClick = () => {
    console.log("handleDrawerToggleClick");
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDraweropen };
    });
  };

  handleBackDropClick = () => {
    console.log("handleBackDropClick");
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.handleBackDropClick} />;
    }

    return (
      <BrowserRouter>
        <div>
          <div className="App" style={{ height: "100%" }}>
            console.log("here in App")
            <Toolbar drawerClickHandler={this.handleDrawerToggleClick} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          </div>
          <main style={{ marginTop: "56px" }}>
            <Switch>
              <Route component={Books} exact path="/" />
              <Route component={Books} path="/home" />
              <Route component={Fiction} path="/fiction" />
              <Route component={About} path="/about" />
              <Route component={Books} path="/books" />
              <Route component={Contact} path="/contact" />
              <Route component={Ferns} path="/ferns" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
  /*sideDrawer = <SideDrawer />;
  
  <BrowserRouter style={{ height: "100%" }}>
          console.log("here in BR")
          <Route component={Home} path="/" />
          <Route component={Home} path="/home" />
          <Route component={Fiction} path="/fiction" />
        </BrowserRouter>*/
}

export default App;
