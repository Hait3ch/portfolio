import React, { Component } from "react";
import NavigationBar from "../components/Navbar";
import Header from "../components/Header";
import AboutMain from "./AboutMain";
import AboutSecondary from "./AboutSecondary";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <NavigationBar />
          <Header />
          <AboutMain />
          <Projects />
          <AboutSecondary />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
