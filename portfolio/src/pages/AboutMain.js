import React, { Component } from "react";
import hai from "../assets/images/hai.jpg";
class AboutMain extends Component {
  render() {
    return (
      <section id="about">
        <div className="about">
          <div className="grid-container">
            <div className="grid-50-img">
              <img
                src={hai}
                alt="profile"
                className="grid-img show-on-scroll"
              ></img>
            </div>
            <div className="grid-50-text show-on-scroll">
              <div className="about-text ">
                <h2>About</h2>
                <p>
                  I graduated from <b>Aalto University</b> in the field of
                  Computer Science. My Major is{" "}
                  <b>Web Technologies, Science and Applications</b>. I have been
                  working as an IT consultant at Lempinen & Partners since 2015.
                  The main tasks are maintaining client's ServiceNow platform
                  and developer in the telecom industry and public sector.
                </p>

                <p>
                  I have implementation experiences in the following solutions
                  areas in <b>ITSM</b> (Request fulfillment, Incident, Problem,
                  Change, CMDB, and Service level management). In <b>ITBM</b>, I
                  have experience in Agile projects (~100 scrum users). Also,
                  implementing Performance Analytics to keep client's platforms
                  running healthy.
                </p>
                <p>
                  I am seeking for challenge outside of ServiceNow environment
                  and am looking for a job in a full-stack or front-end
                  developer position. I am specialised in{" "}
                  <b>JavaScript, React js, Dart </b>
                  languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      /*   <div className="App" id="about">
          <header className="App-header">
            <h1>About</h1>

            <p>
              Edit <code>src/App.js</code> and save to reload.
             </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
             </a>
          </header>
        </div> */
    );
  }
}

export default AboutMain;
