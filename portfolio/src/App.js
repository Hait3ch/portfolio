import React from "react";
import "./App.scss";
import { Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TeamBuilder from "./pages/TeamBuilder";
import Root from "./pages/Root";
function App() {
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", App);
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */

    if (scrollY > 50) {
      document.querySelector(".navbar").classList.add("active");
    } else {
      document.querySelector(".navbar").classList.remove("active");
    }

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Root} />
        <Route exact path="/teambuilder" component={TeamBuilder} />
        {/* <Route
        render={() => {
          return <p> Sivua ei löydy</p>;
        }}
      /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
