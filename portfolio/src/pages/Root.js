import React, { Component } from "react";
import NavigationBar from "../components/Navbar";
import Header from "../components/Header";
import Projects from "./Projects";
import AboutMain from "./AboutMain";
import Contact from "./Contact";
import Footer from "../components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <NavigationBar></NavigationBar>
          <section id="home">
            <Header></Header>
          </section>

          <AboutMain></AboutMain>

          <Projects></Projects>

          <Contact></Contact>
          <Footer></Footer>
        </div>
        {/* <Header data={this.state.data.main} />
        <HowToUse data={this.state.data.resume} />
        <Footer data={this.state.data.main} /> */}
      </div>
    );
  }
}

export default App;
