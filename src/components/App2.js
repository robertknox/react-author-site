import React, { Component } from "react";
import Backdrop from "./components/Backdrop/Backdrop";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";

class App extends Component {
  state = {
    sideDrawerStateOpen: false,
  };

  handleBackdropClick = () => {
    this.setState((prevState) => {
      return { sideDrawerStateOpen: false };
    });
  };

  handleDrawerToggleButtonClick = () => {
    this.setState((prevState) => {
      return { sideDrawerStateOpen: !prevState.sideDrawerStateOpen };
    });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerStateOpen) {
      backdrop = <Backdrop click={this.handleBackdropnClick} />;
    }

    return (
      <div ClassName="App"   style={{ height 100%}}>
        <Toolbar click={this.handleDrawerToggleButtonClick} />
        <SideDrawer show={this.state.sideDrawerStateOpen} />
        {backdrop};<main>Text</main>
      </div>
    );
  }
}
