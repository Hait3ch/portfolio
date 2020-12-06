import React, { Component } from "react";
import amfi from "../assets/images/amfi.png";
class AboutSecondary extends Component {
  render() {
    return (
      <section id="about">
        <div className="about">
          <div className="grid-container">
            <div className="grid-50-text show-on-scroll">
              <div className="about-text">
                <h2>More about me</h2>
                <p>
                  I have lived in Finland for more than 25 years, and I am
                  fluent in Finnish. Computer science has given me many
                  challenges during my studies and work. I enjoy resolving
                  problems and finding the best way to deliver the best quality
                  of work. Seeing my work in use gives me one of the greatest
                  feelings.
                </p>

                <p>
                  I am an open person who enjoys working in teams and
                  interacting with customers. I have experience in working as a
                  team since I have been in many Hackathons where teams have to
                  come up with an idea to resolve the given challenge. I have
                  also worked on projects during my studies and work with
                  different people.
                </p>
                <p>
                  Sports are the way for me to get my thoughts and stress away
                  from work. My main sports are breakdance, ultimate frisbee,
                  and running. Unfortunately, breakdance and ultimate frisbee
                  practices are canceled because of COVID-19 but at least I can
                  still run outside.
                </p>
              </div>
            </div>
            <div className="grid-50-img">
              <img
                src={amfi}
                alt="profile"
                className="grid-img show-on-scroll"
              ></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSecondary;
