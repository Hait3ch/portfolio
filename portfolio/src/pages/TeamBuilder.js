import React, { Component } from "react";
import NavigationBar from "../components/Navbar";

class TeamBuilder extends Component {
  render() {
    return (
      <div id="teambuilder">
        <NavigationBar></NavigationBar>
        <div style={{ backgroundColor: "blueviolet", height: 200 }}></div>
        <p>Testing</p>
      </div>
    );
  }
}

export default TeamBuilder;
