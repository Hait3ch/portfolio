import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import iq1 from "../assets/images/inttiquiz_1.png";
import iq2 from "../assets/images/inttiquiz_2.png";
import iq3 from "../assets/images/inttiquiz_3.png";
import iq4 from "../assets/images/inttiquiz_4.png";
import mac from "../assets/images/mac.png";
import iphone from "../assets/images/iphone.png";

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div className="project">
          <div className="grid-container">
            <div className="grid-50-text show-on-scroll">
              <div className="about-text">
                <h2>Projects: Portfolio</h2>
                <p>
                  The Portfolio is the site that you are looking at right now.
                  My portfolio contains the projects that I have completed and
                  am proud of.
                </p>
                <p>
                  Portfolio is created with <b>React js</b>. I have used{" "}
                  <b>Bootstrap</b> and <b>SCSS</b> for styling. I am storing the
                  received email data in <b>Firestore</b> and the tool for
                  receiving mails is
                  <b> nodemailer</b>.
                </p>
                <a
                  className="btn btn-outline-secondary"
                  href="https://github.com/Hait3ch"
                  role="button"
                >
                  <b>To Github</b>
                </a>
              </div>
            </div>
            <div className="grid-50-text show-on-scroll">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={mac} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={iphone}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            {/* Project Nro 2 */}
            <div className="reverse">
              <div className="grid-50-text show-on-scroll">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={iq1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={iq2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={iq3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="carousel-intti-stats">
                      <img
                        className="d-block w-100"
                        src={iq4}
                        alt="Fourth slide"
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>

              <div className="grid-50-text show-on-scroll">
                <div className="about-text">
                  <h2>Projects: Intti Quiz</h2>
                  <p>
                    Intti Quiz is a quiz application for everyone interested in
                    Finnish military ranks. The app includes both navy and
                    ground force insignia.
                  </p>

                  <p>
                    Intti Quiz was originally created with <b>Android Studio</b>{" "}
                    in 2015 and recreated the app with <b>Dart</b> in 2017.
                    Without any marketing, the total download of the app is over
                    1000, and have received overall positive feedback.
                  </p>
                  <a
                    className="btn btn-outline-secondary"
                    href="https://play.google.com/store/apps/details?id=haitech.sotilasmerkit"
                    role="button"
                  >
                    <b>To Play Store</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
